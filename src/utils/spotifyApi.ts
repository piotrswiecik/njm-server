import fs from "node:fs";
import dotenv from "dotenv";
import axios from "axios";

// load api key
dotenv.config();

type SpotifyToken = {
	access_token: string;
	token_type: string;
	expires_in: number;
	scope?: string;
};

type ClientCredentials = {
	client: string;
	secret: string;
};

type AlbumImageResponseDto = {
	url: string;
	height: number;
	width: number;
};

type ArtistResponseDto = {
	name: string;
	id: string;
};

// we are only interested in album part of the response
type RecommendedTrackResponseDto = {
	album: AlbumResponseDto;
};

type AlbumResponseDto = {
	album_type: string;
	total_tracks: number;
	id: string;
	href: string;
	images: AlbumImageResponseDto[];
	name: string;
	release_date: string;
	release_date_precision: string;
	artists: ArtistResponseDto[];
};

type RecommendationResponseDto = {
	tracks: RecommendedTrackResponseDto[];
};

// processed output type
type AlbumDto = {
	name: string;
	artists: string[];
	images: {
		url: string;
		height: number;
		width: number;
	}[];
	release_date: string;
	total_tracks: number;
	genre: string;
};

const getClientCredentials = async (): Promise<ClientCredentials> => {
	const client = process.env.SPOTIFY_CLIENT_ID;
	const secret = process.env.SPOTIFY_CLIENT_SECRET;
	if (!client || !secret) {
		return Promise.reject("No client or secret");
	}
	return { client, secret };
};

const getSpotifyToken = async ({
	client,
	secret,
}: ClientCredentials): Promise<SpotifyToken> => {
	try {
		const url = "https://accounts.spotify.com/api/token";
		const params = new URLSearchParams("grant_type=client_credentials");
		const tokenResponse = await axios.post<SpotifyToken>(url, params, {
			headers: {
				Authorization:
					"Basic " + Buffer.from(`${client}:${secret}`).toString("base64"),
			},
		});
		return tokenResponse.data;
	} catch (err) {
		console.error(err);
		return Promise.reject(err);
	}
};

// return up to "limit" recommended tracks to be converted into album DTOs
const getRecommendationsForGenre = async (
	genre: string,
	limit: number,
): Promise<RecommendedTrackResponseDto[]> => {
	const url = "https://api.spotify.com/v1/recommendations";
	try {
		const tokenResponse = await getSpotifyToken(await getClientCredentials());
		const recommendationResponse = await axios.get<RecommendationResponseDto>(
			url,
			{
				headers: {
					Authorization: `Bearer ${tokenResponse.access_token}`,
				},
				params: {
					seed_genres: genre + ",",
					limit,
				},
			},
		);
		return recommendationResponse.data.tracks;
	} catch (err) {
		console.error(err);
		return Promise.reject(err);
	}
};

const mapRecommendationToAlbum = async (
	trackRecommendation: RecommendedTrackResponseDto,
	genre: string,
): Promise<AlbumDto> => {
	const album = trackRecommendation.album;
	return {
		name: album.name,
		artists: album.artists.map((artist) => artist.name),
		images: album.images,
		release_date: album.release_date,
		total_tracks: album.total_tracks,
		genre,
	};
};

// run data seed
const data: AlbumDto[] = [];

getRecommendationsForGenre("electronica,idm", 2)
	.then((recommendations) => {
		recommendations.forEach(async (recommendation) => {
			const album = await mapRecommendationToAlbum(
				recommendation,
				"electronic",
			);
			data.push(album);
		});
	})
	.then(() => {
		console.log(data);
		fs.writeFileSync("data.json", JSON.stringify(data));
	})
	.catch((err) => {
		console.error(err);
	});


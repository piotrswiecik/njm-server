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

type SimplifiedTrackObjectDto = {
	uri: string;
	name: string;
	track_number: number;
};

type AlbumHrefResponseDto = {
	total_tracks: number;
	tracks: {
		items: SimplifiedTrackObjectDto[];
	};
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
	album: AlbumRecommendationResponseDto;
};

type AlbumRecommendationResponseDto = {
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
export type TrackDto = {
	name: string;
	trackNumber: number;
	url: string;
};

// processed output type
export type AlbumDto = {
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
	tracks: TrackDto[];
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
	token: SpotifyToken,
): Promise<RecommendedTrackResponseDto[]> => {
	const url = "https://api.spotify.com/v1/recommendations";
	try {
		const recommendationResponse = await axios.get<RecommendationResponseDto>(
			url,
			{
				headers: {
					Authorization: `Bearer ${token.access_token}`,
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
		process.exit(1);
	}
};

const getTracksForAlbum = async (
	albumId: string,
	token: SpotifyToken,
): Promise<TrackDto[]> => {
	try {
		const url = `https://api.spotify.com/v1/albums/${albumId}`;
		const albumResponse = await axios.get<AlbumHrefResponseDto>(url, {
			headers: {
				Authorization: `Bearer ${token.access_token}`,
			},
		});
		const albumData = albumResponse.data;
		const tracks = albumData.tracks.items.map((track) => {
			return {
				name: track.name,
				trackNumber: track.track_number,
				url: track.uri,
			};
		});
		return tracks;
	} catch (err) {
		console.error(err);
		process.exit(1);
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
		total_tracks: album.total_tracks, // redundant
		genre,
		tracks: [],
	};
};

const generateSeedData = async (genres: string[], itemsPerGenre: number): Promise<AlbumDto[]> => {
	const remapGenre = (genre: string): string => {
		switch (genre) {
			case "electronica,idm":
				return "electronic";
			case "classical,":
				return "classical";
			case "jazz,":
				return "jazz";
			case "metal,heavy-metal":
				return "metal";
			case "rock,hard-rock":
				return "rock";
			case "hip-hop,":
				return "rap";
			default:
				return "Various";
		}
	};

	try {
		const credentials = await getClientCredentials();
		const token = await getSpotifyToken(credentials);
		const data: AlbumDto[] = [];
		await Promise.all(genres.map(async (genre) => {
			const responseItems = await getRecommendationsForGenre(
				genre,
				itemsPerGenre,
				token,
			);
			await Promise.all(responseItems.map(async (item) => {
				let album = await mapRecommendationToAlbum(item, remapGenre(genre));
				const tracks = await getTracksForAlbum(item.album.id, token);
				album = { ...album, tracks };
				data.push(album);
			}));
		}));
		return data;
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

generateSeedData(["jazz,", "classical,", "electronica,idm", "metal,heavy-metal", "rock,hard-rock", "hip-hop,"], 2)
.then((albums) => {
	console.log(albums);
	fs.writeFileSync("data.json", JSON.stringify(albums));
})
.catch((err) => {
	console.error(err);
	process.exit(1);
});


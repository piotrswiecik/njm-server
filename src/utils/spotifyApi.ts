import dotenv from "dotenv";
import axios from "axios";

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

type AlbumImage = {
	url: string;
	height: number;
	width: number;
};

type Artist = {
	name: string;
	id: string;
};

type Track = {
	album: {
		album_type: string;
		total_tracks: number;
		id: string;
		images: AlbumImage[];
		name: string;
		release_date: string;
		release_date_precision: string;
		artists: Artist[];
	};
};

type Recommendation = {
	tracks: Track[];
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

const getRecommendationsForGenre = async (
	genres: string[],
	limit: number,
): Promise<Recommendation> => {
	const url = "https://api.spotify.com/v1/recommendations";
	try {
		const tokenResponse = await getSpotifyToken(await getClientCredentials());
		const recommendationResponse = await axios.get<Recommendation>(url, {
			headers: {
				Authorization: `Bearer ${tokenResponse.access_token}`,
			},
			params: {
				seed_genres: genres.slice(0, 5).join(","),
				limit,
			},
		});
		return recommendationResponse.data;
	} catch (err) {
		console.error(err);
		return Promise.reject(err);
	}
};

getRecommendationsForGenre(["electronica", "intelligent dance music", "ambient techno", "classical", "jazz"], 3)
.then((recommendations) => {
  recommendations.tracks.forEach((track) => {
    console.log(track.album.name);
    track.album.images.forEach((image) => {
      console.log(image.url);
    });
  });
})
.catch((err) => {
  console.error(err);
});

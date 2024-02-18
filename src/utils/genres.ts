// helper script to get all available genre seeds from spotify api

import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";

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

const getGenres = async () => {
	const credentials = await getClientCredentials();
	const token = await getSpotifyToken(credentials);
	const url = `https://api.spotify.com/v1/recommendations/available-genre-seeds`;
	const genresResponse: { data: { genres: string[] } } = await axios.get(url, {
		headers: {
			Authorization: `Bearer ${token.access_token}`,
		},
	});
	const genres = genresResponse.data?.genres;
	console.log(genres);
	fs.writeFileSync("genres.json", JSON.stringify(genres));
};

getGenres().catch((err) => {
	console.error(err);
	process.exit(1);
});

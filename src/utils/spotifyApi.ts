import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const client = process.env.SPOTIFY_CLIENT_ID;
const secret = process.env.SPOTIFY_CLIENT_SECRET;
const url = "https://accounts.spotify.com/api/token";
const params = new URLSearchParams("grant_type=client_credentials");

const req = axios.post(url, params, {
	headers: {
		Authorization:
			"Basic " + Buffer.from(`${client}:${secret}`).toString("base64"),
	},
});

req
	.then((res) => {
		console.log(res.status);
		console.log(res.data);
	})
	.catch((err) => {
		console.error(err);
	});


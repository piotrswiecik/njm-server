import recombee from "recombee-api-client";
import { configDotenv } from "dotenv";

configDotenv();

const db = process.env.RECOMBEE_DB_NAME;
const key = process.env.RECOMBEE_API_KEY;
const region = process.env.RECOMBEE_DEFAULT_REGION;

if (!db) {
	throw new Error("RECOMBEE_DB is not set");
}

if (!key) {
	throw new Error("RECOMBEE_API_KEY is not set");
}

if (!region) {
	throw new Error("RECOMBEE_DEFAULT_REGION is not set");
}

export const client = new recombee.ApiClient(db, key, { region });

export const reqs = recombee.requests;

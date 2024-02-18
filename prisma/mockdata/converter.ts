import fs from "node:fs/promises";

import { PrismaClient } from "@prisma/client";
import { type AlbumDto } from "./spotifyApi";

const prisma = new PrismaClient();

// flatten data from all files into single array
export const mockDataFromJson= async () => {
	try {
		const dirContents = await fs.readdir(__dirname);
		const jsonFiles = dirContents.filter((file) => file.endsWith(".json"));
		const mockData: AlbumDto[] = [];
		await Promise.all(
			jsonFiles.map(async (file) => {
				const data = await fs.readFile(`${__dirname}/${file}`, "utf-8");
				const parsedData: AlbumDto[] = (await JSON.parse(data)) as AlbumDto[];
				await Promise.all(
					parsedData.map(async (product) => {
						mockData.push(product);
					}),
				);
			}),
		);
		return mockData;
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

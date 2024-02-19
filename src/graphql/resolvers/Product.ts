import { PrismaClient } from "@prisma/client";
import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	/* Implement Product resolver logic here */
	tracks: async (parent, _args, _) => {
		const prisma = new PrismaClient();
		const tracks = await prisma.track.findMany({
			where: { productId: parent.id },
		});
		return tracks.map((track) => {
			return { ...track, url: track.url ?? "" };
		});
	},
};

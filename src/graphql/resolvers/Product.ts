import { logger } from "../../utils/logger";
import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	/* Implement Product resolver logic here */
	artist: async (parent, _args, _ctx) => {
		try {
			const artist = await _ctx.db.artist.findFirst({
				where: { id: parent.artistId },
			});
			if (!artist) {
				throw new Error("not found");
			}
			return artist;
		} catch (err) {
			logger.error(err);
			throw new Error(
				`Error fetching artist with id=${parent.artistId}: ${
					err instanceof Error ? err.message : "unknown error"
				}`,
			);
		}
	},
	category: async (parent, _args, _ctx) => {
		try {
			const category = await _ctx.db.category.findFirst({
				where: { id: parent.categoryId },
			});
			if (!category) {
				throw new Error("not found");
			}
			return category;
		} catch (err) {
			logger.error(err);
			throw new Error(
				`Error fetching category with id=${parent.categoryId}: ${
					err instanceof Error ? err.message : "unknown error"
				}`,
			);
		}
	}

	// tracks: async (parent, _args, _ctx) => {
	// 	const tracks = await _ctx.db.track.findMany({
	// 		where: { productId: parent.id },
	// 	});
	// 	return tracks.map((track) => {
	// 		return { ...track, url: track.url ?? "" };
	// 	});
	// },
	// category: async (parent, _args, _ctx) => {
	// 	const result = await _ctx.db.category.findFirstOrThrow({
	// 		where: { id: parent.category.id },
	// 	});
	// 	return result;
	// },
};

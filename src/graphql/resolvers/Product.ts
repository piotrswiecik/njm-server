import { logger } from "../../utils/logger";
import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	/* Implement Product resolver logic here */
	artist: async (parent, _args, _ctx) => {
		try {
			const dbArtist = await _ctx.db.product
				.findUnique({
					where: { id: parent.id },
				})
				.artist();
			if (!dbArtist) {
				throw new Error("not found");
			}
			return dbArtist;
		} catch (err) {
			logger.error(err);
			throw new Error(
				`Error fetching artist with id=${parent.id}: ${
					err instanceof Error ? err.message : "unknown error"
				}`,
			);
		}
	},
	category: async (parent, _args, _ctx) => {
		try {
			const dbCategory = await _ctx.db.product
				.findUnique({
					where: { id: parent.id },
				})
				.category();
			if (!dbCategory) {
				throw new Error("not found");
			}
			return dbCategory;
		} catch (err) {
			logger.error(err);
			throw new Error(
				`Error fetching category with id=${parent.id}: ${
					err instanceof Error ? err.message : "unknown error"
				}`,
			);
		}
	},
	tracks: async (parent, _args, _ctx) => {
		try {
			const dbTracks = await _ctx.db.product
				.findUnique({
					where: { id: parent.id },
				})
				.tracks();
			if (!dbTracks) {
				throw new Error("not found");
			}
			return dbTracks;
		} catch (err) {
			logger.error(err);
			throw new Error(
				`Error fetching tracks with id=${parent.id}: ${
					err instanceof Error ? err.message : "unknown error"
				}`,
			);
		}
	},
	variants: async (parent, _args, _ctx) => {
		try {
			const dbVariants = await _ctx.db.product
				.findUnique({
					where: { id: parent.id },
				})
				.variants();
			if (!dbVariants) {
				throw new Error("not found");
			}
			return dbVariants;
		} catch (err) {
			logger.error(err);
			throw new Error(
				`Error fetching variants with id=${parent.id}: ${
					err instanceof Error ? err.message : "unknown error"
				}`,
			);
		}
	},
	numRatings: async (parent, _args, _ctx) => {
		return _ctx.db.review.count({
			where: { productId: parent.id },
		});
	},
	rating: async (parent, _args, _ctx) => {
		const aggregate = await _ctx.db.review.aggregate({
			where: { productId: parent.id },
			_avg: { rating: true },
		});
		return aggregate._avg?.rating || null;
	},
};

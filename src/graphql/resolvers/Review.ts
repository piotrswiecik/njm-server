import { GraphQLError } from "graphql";
import { logger } from "../../utils/logger";
import type { ReviewResolvers } from "./../../types.generated";
export const Review: ReviewResolvers = {
	/* Implement Review resolver logic here */
	user: async (_parent, _arg, _ctx) => {
		try {
			const user = await _ctx.db.review
				.findUnique({
					where: {
						id: _parent.id,
					},
				})
				.user();
			if (!user) {
				throw new GraphQLError(
					`resolver failed - user for review ${_parent.id} not found`,
				);
			}
			return user;
		} catch (err) {
			if (err instanceof GraphQLError) {
				throw err;
			}
			logger.error(err);
			throw new GraphQLError(
				`resolver failed - internal error, see logs for details.`,
			);
		}
	},
	product: async (_parent, _arg, _ctx) => {
		try {
			const product = await _ctx.db.review
				.findUnique({
					where: {
						id: _parent.id,
					},
				})
				.product();
			if (!product) {
				throw new GraphQLError(
					`resolver failed - product for review ${_parent.id} not found`,
				);
			}
			return { ...product, releaseDate: product.releaseDate.toISOString() };
		} catch (err) {
			if (err instanceof GraphQLError) {
				throw err;
			}
			logger.error(err);
			throw new GraphQLError(
				`resolver failed - internal error, see logs for details.`,
			);
		}
	},
};

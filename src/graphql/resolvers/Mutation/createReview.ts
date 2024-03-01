import { GraphQLError } from "graphql";
import { logger } from "../../../utils/logger";
import type { MutationResolvers } from "./../../../types.generated";
export const createReview: NonNullable<
	MutationResolvers["createReview"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Mutation.createReview resolver logic here */
	// guard - case where user provided in mutation request does not exist or is not active
	try {
		const user = await _ctx.db.user.findUnique({
			where: {
				id: _arg.userId,
			},
		});
		if (!user) {
			logger.error(
				`createReview mutation, user not found with id=${_arg.userId}`,
			);
			throw new GraphQLError(`User ${_arg.userId} not found`);
		} else {
			if (!user.isActive) {
				logger.error(
					`createReview mutation, user not active with id=${_arg.userId}`,
				);
				throw new GraphQLError(`User ${_arg.userId} not active`);
			}
		}

		// guard - case where product does not exist
		const product = await _ctx.db.product.findUnique({
			where: {
				id: _arg.productId,
			},
		});
		if (!product) {
			logger.error(
				`createReview mutation, product not found with id=${_arg.productId}`,
			);
			throw new GraphQLError(
				`createReview mutation failed - product ${_arg.productId} not found`,
			);
		}

		// guard - user can add only one review per product
		const review = await _ctx.db.review.findFirst({
			where: {
				productId: _arg.productId,
				userId: _arg.userId,
			},
		});
		if (review) {
			logger.error(
				`createReview mutation, user already reviewed product with id=${_arg.productId}`,
			);
			throw new GraphQLError(
				`createReview mutation failed - user already reviewed product ${_arg.productId}`,
			);
		}

		const newReview = await _ctx.db.review.create({
			data: {
				userId: _arg.userId,
				productId: _arg.productId,
				rating: _arg.rating,
				headline: _arg.headline,
				content: _arg.content,
			},
		});
		logger.info(
			`createReview mutation, created review with id=${newReview.id} for product=${newReview.productId} by user=${newReview.userId}`,
		);
		return newReview;
	} catch (err) {
		if (err instanceof GraphQLError) {
			throw err;
		}
		logger.error(err);
		throw new GraphQLError(
			`createReview mutation failed - internal error, see logs for details.`,
		);
	}
};

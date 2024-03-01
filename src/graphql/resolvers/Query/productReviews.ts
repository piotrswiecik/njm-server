import { GraphQLError } from "graphql";
import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const productReviews: NonNullable<
	QueryResolvers["productReviews"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Query.productReviews resolver logic here */
	try {
		const reviews = await _ctx.db.review.findMany({
			where: {
				productId: _arg.productId,
			},
		});
		return reviews;
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

import { GraphQLError } from "graphql";
import { logger } from "../../../utils/logger";
import type { MutationResolvers } from "./../../../types.generated";
export const createOrder: NonNullable<
	MutationResolvers["createOrder"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Mutation.createOrder resolver logic here */

	// guard - case where user provided in mutation request does not exist or is not active
	try {
		const user = await _ctx.db.user.findUnique({
			where: {
				id: _arg.userId,
			},
		});
		if (!user) {
			logger.error(
				`createOrder mutation, user not found with id=${_arg.userId}`,
			);
			throw new GraphQLError(`User ${_arg.userId} not found`);
		} else {
			if (!user.isActive) {
				logger.error(
					`createOrder mutation, user not active with id=${_arg.userId}`,
				);
				throw new GraphQLError(`User ${_arg.userId} not active`);
			}
		}

		// create empty initialized order
		// TODO: currently user can create infinite number of carts, limit this to 1
		const order = await _ctx.db.order.create({
			data: {
				userId: _arg.userId,
				status: "CART",
			},
		});
		logger.info(
			`createOrder mutation, created order with id=${order.id} for user=${_arg.userId}`,
		);
		return { id: order.id };
	} catch (err) {
		logger.error(err);
		throw new GraphQLError(
			`createOrder mutation failed - internal error, see logs for details.`,
		);
	}
};

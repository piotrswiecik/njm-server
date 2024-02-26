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
		const order = await _ctx.db.order.create({
			data: {
				userId: _arg.userId,
				status: "CART",
			},
		});
		logger.info(`createOrder mutation, order created=${JSON.stringify(order)}`);
		return {
			id: order.id,
			user,
			orderItems: [],
			status: order.status,
		};
	} catch (err) {
		logger.error(err);
		throw new GraphQLError(
			`Error creating order for user with id=${_arg.userId}: ${
				err instanceof Error ? err.message : "unknown error"
			}`,
		);
	}
};

import { GraphQLError } from "graphql";
import { logger } from "../../../utils/logger";
import type { MutationResolvers } from "./../../../types.generated";
export const setOrderStatus: NonNullable<
	MutationResolvers["setOrderStatus"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Mutation.setOrderStatus resolver logic here */
	try {
		await _ctx.db.order.update({
			where: {
				id: _arg.where,
			},
			data: {
				status: _arg.status,
			},
		});
		logger.info(
			`setOrderStatus mutation, updated order with id=${_arg.where} to status=${_arg.status}`,
		);
		return _arg.where;
	} catch (err) {
		logger.error(err);
		throw new GraphQLError(
			"setOrderStatus mutation failed - internal error, see logs for details.",
		);
	}
};

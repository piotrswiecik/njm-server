import { logger } from "../../../utils/logger";
import type { QueryResolvers, StatusEnum } from "./../../../types.generated";
export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.order resolver logic here */

	const order = await _ctx.db.order.findUnique({
		where: {
			id: _arg.id,
			status: _arg.status as StatusEnum, //ok, graphql checks this automatically and throws as needed
		},
	});
	if (!order) {
		logger.info(`Order not found: ${_arg.id}`);
		return null;
	}
	return { ...order, datePlaced: order.datePlaced?.toISOString() };
};

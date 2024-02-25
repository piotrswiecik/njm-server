import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const cart: NonNullable<QueryResolvers["cart"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.cart resolver logic here */
	logger.info("Query.cart resolver");
	logger.info(_arg.id);
	const cart = await _ctx.db.cart.findUnique({
		where: {
			id: _arg.id,
		},
	});
	if (!cart) {
		return null;
	}
	return { ...cart, datePlaced: cart.datePlaced?.toISOString() };
};

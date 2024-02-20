import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const count: NonNullable<QueryResolvers["count"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.count resolver logic here */
	try {
		return await _ctx.db.product.count();
	} catch (err) {
		logger.error(err);
		throw new Error("Error fetching product");
	}
};

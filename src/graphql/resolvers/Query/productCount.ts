import type { QueryResolvers } from "./../../../types.generated";
export const productCount: NonNullable<QueryResolvers["productCount"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.productCount resolver logic here */
	return _ctx.db.product.count();
};

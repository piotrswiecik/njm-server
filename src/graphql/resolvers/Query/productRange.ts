import type { QueryResolvers } from "./../../../types.generated";
export const productRange: NonNullable<QueryResolvers["productRange"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.productRange resolver logic here */
	const products = await _ctx.db.product.findMany({
		where: {
			id: {
				in: _arg.in,
			},
		},
	});
	return products.map((product) => ({
		...product,
		releaseDate: product.releaseDate.toISOString(),
		numRatings: 0,
	}));
};

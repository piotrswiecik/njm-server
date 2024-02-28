import type { VariantResolvers } from "./../../types.generated";
export const Variant: VariantResolvers = {
	/* Implement Variant resolver logic here */
	product: async (_parent, _arg, _ctx) => {
		// const product = await _ctx.db.product.findUnique({
		// 	where: {
		// 		id: _parent.product?.id,
		// 	},
		// });
		const product = await _ctx.db.variant.findUnique({
			where: {
				id: _parent.id
			}
		}).Product();
		if (!product) {
			throw new Error("Product not found");
		}
		return {
			...product,
			releaseDate: product.releaseDate?.toISOString(),
		};
	},
};

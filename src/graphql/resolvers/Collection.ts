import type { CollectionResolvers } from "./../../types.generated";
export const Collection: CollectionResolvers = {
	/* Implement Collection resolver logic here */
	products: async (parent, _args, _ctx) => {
		const dbProducts = await _ctx.db.collection
			.findUnique({
				where: { id: parent.id },
			})
			.products();
		if (!dbProducts) {
			throw new Error("not found");
		}
		return dbProducts.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
			numRatings: 0,
		}));
	},
};

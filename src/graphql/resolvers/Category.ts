import type { CategoryResolvers } from "./../../types.generated";

// type QueryOptions = {
// 	skip?: number;
// 	take?: number;
// };

export const Category: CategoryResolvers = {
	/* Implement Category resolver logic here */
	products: async (parent, _args, _ctx) => {
		const dbProducts = await _ctx.db.category.findUnique({ where: { id: parent.id } }).products();
		if (!dbProducts) {
			throw new Error("not found");
		}
		return dbProducts.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
		}));
	}
};

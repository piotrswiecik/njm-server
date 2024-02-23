import type { CategoryResolvers } from "./../../types.generated";

type QueryOptions = {
	skip?: number;
	take?: number;
};

export const Category: CategoryResolvers = {
	/* Implement Category resolver logic here */
	products: async (parent, _args, _ctx) => {
		const queryOptions = {} as QueryOptions;
		if (_args.skip) {
			queryOptions.skip = _args.skip;
		}
		if (_args.take) {
			queryOptions.take = _args.take;
		}
		const dbProducts = await _ctx.db.category
			.findUnique({ where: { id: parent.id } })
			.products({ ...queryOptions });
		if (!dbProducts) {
			throw new Error("not found");
		}
		return dbProducts.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
		}));
	},
};

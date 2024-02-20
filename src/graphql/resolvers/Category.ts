import type { CategoryResolvers } from "./../../types.generated";

type QueryOptions = {
	skip?: number;
	take?: number;
};

export const Category: CategoryResolvers = {
	/* Implement Category resolver logic here */
	products: async (parent, _args, _ctx) => {
		const queryOptions: QueryOptions = {
			skip: typeof _args?.skip === "number" ? _args.skip : 0,
		};
	
		if (typeof _args.take === "number") {
			queryOptions.take = _args.take;
		}

		const productsQueryResponse = await _ctx.db.product.findMany({
			...queryOptions,
			where: { categoryId: parent.id },
			include: { artist: true, coverImage: true, stock: true, category: true },
		});
		
		return productsQueryResponse.map((product) => {
			return {
				artist: product.artist.name,
				category: product.category,
				coverImg: {
					id: product.coverImage.id,
					width: product.coverImage.width,
					height: product.coverImage.height,
					url: product.coverImage.url,
				},
				id: product.id,
				price: product.price,
				releaseDate: product.releaseDate.toISOString(),
				stock: {
					id: product.stock.id,
					qtyCd: product.stock.qtyCd,
					qtyLp: product.stock.qtyLp,
				},
				title: product.title,
				tracks: [],
			};
		});
	},
};

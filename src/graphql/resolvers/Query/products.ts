import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";

type QueryOptions = {
	skip?: number;
	take?: number;
	orderBy?: {}; // FIXME: type this properly
};

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.products resolver logic here */
	console.log(`in product resolver, sort?`);
	console.log(_arg.sort);

	const queryOptions: QueryOptions = {
		skip: typeof _arg.skip === "number" ? _arg.skip : 0,
	};

	if (typeof _arg.take === "number") {
		queryOptions.take = _arg.take;
	}

	// TODO: make this reusable in other resolvers (DRY)

	// if (_arg.sort?.rating) {
	// 	queryOptions.orderBy = [{ rating: _arg.sort.rating }];
	// }

	// sorting from many->one direction requires a workaround
	if (_arg.sort?.price) {
		const result = await _ctx.db.variant.findMany({
			distinct: ["productId"],
			orderBy: [
				{
					price: _arg.sort.price,
				},
			],
			include: {
				Product: true,
			},
		});

		return result.map((variant) => ({
			...variant.Product,
			releaseDate: variant.Product.releaseDate.toISOString(),
			numRatings: 0,
		}));
	}

	try {
		const dbProducts = await _ctx.db.product.findMany({ ...queryOptions });
		return dbProducts.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
			numRatings: 0,
		}));
	} catch (err) {
		logger.error(err);
		throw new Error(`Error fetching products`);
	}
};

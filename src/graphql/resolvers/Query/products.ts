import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";

type QueryOptions = {
	skip?: number;
	take?: number;
};

export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.products resolver logic here */
	const queryOptions: QueryOptions = {
		skip: typeof _arg.skip === "number" ? _arg.skip : 0,
	};

	if (typeof _arg.take === "number") {
		queryOptions.take = _arg.take;
	}

	try {
		const dbProducts = await _ctx.db.product.findMany({ ...queryOptions });
		return dbProducts.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
		}));
	} catch (err) {
		logger.error(err);
		throw new Error(`Error fetching products`);
	}
};

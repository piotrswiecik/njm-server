import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";

export const productSearch: NonNullable<
	QueryResolvers["productSearch"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Query.productSearch resolver logic here */

	try {
		const dbSearchResult = await _ctx.db.product.findMany({
			include: { artist: true },
			where: {
				OR: [
					{ title: { contains: _arg.query, mode: "insensitive" } },
					{ artist: { name: { contains: _arg.query, mode: "insensitive" } } },
				],
			},
		});
		return dbSearchResult.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
		}));
	} catch (err) {
		logger.error(err);
		throw new Error(`Error searching for product`);
	}
};

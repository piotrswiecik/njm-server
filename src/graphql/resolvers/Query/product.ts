import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	try {
		const dbProduct = await _ctx.db.product.findUnique({
			where: { id: _arg.id },
		});
		if (!dbProduct) {
			throw new Error();
		}
		return { ...dbProduct, releaseDate: dbProduct.releaseDate.toISOString() };
		// const product = await _ctx.db.product.findUnique({
		// 	where: { id: _arg.id },
		// 	include: {
		// 		artist: true,
		// 		category: true,
		// 		coverImage: true,
		// 		collections: true,
		// 		stock: true,
		// 	},
		// });

		// if (!product) {
		// 	throw new Error();
		// }

		// const mappedProduct = {
		// 	...product,
		// 	releaseDate: product.releaseDate.toISOString(),
		// 	coverImg: {
		// 		id: product.coverImage.id,
		// 		width: product.coverImage.width,
		// 		height: product.coverImage.height,
		// 		url: product.coverImage.url,
		// 	},
		// 	artist: product.artist.name,
		// 	stock: {
		// 		id: product.stock.id,
		// 		qtyCd: product.stock.qtyCd,
		// 		qtyLp: product.stock.qtyLp,
		// 	},
		// 	tracks: [],
		// };
		// return mappedProduct;
	} catch (err) {
		logger.error(err);
		throw new Error(`Error fetching product with id: ${_arg.id}`);
	}
};

import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const collection: NonNullable<QueryResolvers["collection"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	return null;
	/* Implement Query.collection resolver logic here */
	// const collection = await _ctx.db.collection.findFirst({
	// 	where: { name: _arg.name },
	// 	include: {
	// 		products: {
	// 			include: {
	// 				product: {
	// 					include: {
	// 						artist: true,
	// 						coverImage: true,
	// 						stock: true,
	// 						category: true,
	// 					},
	// 				},
	// 			},
	// 		},
	// 	},
	// });
	// if (!collection) {
	// 	throw new Error("Collection not found");
	// }
	// logger.info(collection);
	// return {
	// 	...collection,
	// 	products: collection.products.map((product) => {
	// 		return {
	// 			artist: product.product.artist.name,
	// 			category: product.product.category,
	// 			coverImg: {
	// 				id: product.product.coverImage.id,
	// 				width: product.product.coverImage.width,
	// 				height: product.product.coverImage.height,
	// 				url: product.product.coverImage.url,
	// 			},
	// 			id: product.product.id,
	// 			price: product.product.price,
	// 			releaseDate: product.product.releaseDate.toISOString(),
	// 			stock: {
	// 				id: product.product.stock.id,
	// 				qtyCd: product.product.stock.qtyCd,
	// 				qtyLp: product.product.stock.qtyLp,
	// 			},
	// 			title: product.product.title,
	// 			tracks: [],
	// 		};
	// 	}),
	// };
};

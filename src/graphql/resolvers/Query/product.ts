import { PrismaClient } from "@prisma/client";
import type { Product, QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.product resolver logic here */
	const p: Product = {
		artist: "artist",
		category: "category",
		coverImg: {
			id: "id",
			width: 300,
			height: 300,
			url: "url",
		},
		id: "id",
		price: 0,
		releaseDate: "releaseDate",
		stock: {
			id: "1",
			qtyCd: 0,
			qtyLp: 0,
		},
		title: "title",
		track: [],
	};
	return p;
	// if (_arg.id !== undefined) {
	// 	const prisma = new PrismaClient();
	// 	const product = await prisma.product.findUnique({
	// 		where: {
	// 			id: _arg.id,
	// 		},
	// 		include: {
	// 			artist: true,
	// 			category: true,
	// 			stock: true,
	// 			tracks: true,
	// 			coverImage: true,
	// 			collections: true,
	// 		},
	// 	});
	// 	console.log(product);
	// 	if (product === null) {
	// 		throw new Error("Product not found");
	// 	} else {
	// 		return {};
	// 	}
	// }
};

// export type Product = {
// 	__typename?: "Product";
// 	artist: Scalars["String"]["output"];
// 	category: Scalars["String"]["output"];
// 	collection?: Maybe<Array<Collection>>;
// 	coverImg: CoverImage;
// 	id: Scalars["ID"]["output"];
// 	price: Scalars["Int"]["output"];
// 	releaseDate: Scalars["String"]["output"];
// 	stock: Stock;
// 	title: Scalars["String"]["output"];
// 	track: Array<Track>;
// };

import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";
export const products: NonNullable<QueryResolvers["products"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.products resolver logic here */
	console.log(_arg);
	const prisma = new PrismaClient();
	const productQueryResponse = await prisma.product.findMany({
		include: {
			artist: true,
			category: true,
			stock: true,
			tracks: true,
			coverImage: true,
			collections: true,
		},
	});
	const productList = productQueryResponse.map((res) => {
		return {
			artist: res.artist.name,
			category: res.category.name,
			coverImg: {
				id: res.coverImage.id,
				width: res.coverImage.width,
				height: res.coverImage.height,
				url: res.coverImage.url,
			},
			id: res.id,
			price: res.price,
			releaseDate: res.releaseDate.toISOString(),
			stock: {
				id: res.stock.id,
				qtyCd: res.stock.qtyCd,
				qtyLp: res.stock.qtyLp,
			},
			title: res.title,
			tracks: [
				{
					id: "test",
					name: "test",
					url: "test",
				},
			],
		};
	});
	return productList;

};

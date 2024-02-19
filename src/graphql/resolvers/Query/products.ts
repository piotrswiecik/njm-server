import { PrismaClient } from "@prisma/client";
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
	const prisma = new PrismaClient();

	const queryOptions: QueryOptions = {
		skip: typeof _arg.skip === "number" ? _arg.skip : 0,
	};

	if (typeof _arg.take === "number") {
		queryOptions.take = _arg.take;
	}

	const productQueryResponse = await prisma.product.findMany({
		...queryOptions,
		include: { artist: true, coverImage: true, stock: true, category: true },
	});

	const productList = productQueryResponse.map((product) => {
		return {
			artist: product.artist.name,
			category: product.category.name,
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
	return productList;
};

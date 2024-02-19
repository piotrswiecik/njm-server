import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	// TODO refactor into server context later
	// TODO error handling

	const prisma = new PrismaClient();

	const product = await prisma.product.findUnique({
		where: { id: _arg.id },
		include: {
			artist: true,
			category: true,
			coverImage: true,
			collections: true,
			stock: true,
		},
	});

	if (!product) {
		throw new Error("Product not found");
	}

	const mappedProduct = {
		...product,
		releaseDate: product.releaseDate.toISOString(),
		category: product.category.name,
		coverImg: {
			id: product.coverImage.id,
			width: product.coverImage.width,
			height: product.coverImage.height,
			url: product.coverImage.url,
		},
		artist: product.artist.name,
		stock: {
			id: product.stock.id,
			qtyCd: product.stock.qtyCd,
			qtyLp: product.stock.qtyLp,
		},
		tracks: [],
	};

	return mappedProduct;
};

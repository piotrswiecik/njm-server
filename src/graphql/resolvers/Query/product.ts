import { PrismaClient } from "@prisma/client";
import { logger } from "../../../utils/logger";
import type { Product, QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	const prisma = new PrismaClient();
	return prisma.product
		.findUnique({
			where: {
				id: _arg.id,
			},
			include: {
				artist: true,
				category: true,
				stock: true,
				tracks: true,
				coverImage: true,
				collections: true,
			},
		})
		.then((res) => {
			if (res === null) {
				throw new Error("Product not found");
			}
			return res;
		})
		.then((res) => {
			const product: Product = {
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
				tracks: res.tracks.map((track) => ({
					id: track.id,
					name: track.name,
					url: track.url ?? "",
				})),
			};
			return product;
		})
		.catch((err) => {
			logger.error(err);
			throw new Error("Product lookup failed");
		});
};

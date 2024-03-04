import { logger } from "../../utils/logger";
import type { CategoryResolvers } from "./../../types.generated";

type QueryOptions = {
	skip?: number;
	take?: number;
};

export const Category: CategoryResolvers = {
	/* Implement Category resolver logic here */
	products: async (parent, _args, _ctx) => {
		logger.info(_args);
		const queryOptions = {} as QueryOptions;
		if (_args.skip) {
			queryOptions.skip = _args.skip;
		}
		if (_args.take) {
			queryOptions.take = _args.take;
		}

		// TODO: code reuse
		if (_args.sort === "price") {
			const dbProducts = await _ctx.db.category
				.findUnique({ where: { id: parent.id } })
				.products({
					include: {
						variants: {
							select: {
								price: true,
							},
						},
					},
					where: {
						category: {
							id: parent.id,
						},
					}
				});
			if (!dbProducts) {
				return [];
			}
			const withMinPrice = dbProducts.map((product) => ({
				...product,
				price: Math.min(...product.variants.map((variant) => variant.price)),
			}));

			const sorted = withMinPrice.sort(
				(x, y) => (x.price - y.price) * (_args.order === "desc" ? -1 : 1),
			);

			const offset = _args.skip || 0;
			const limit = _args.take ? offset + _args.take : sorted.length;
			const paginated = sorted.slice(offset, limit);

			return paginated.map((product) => ({
				...product,
				releaseDate: product.releaseDate.toISOString(),
				numRatings: 0,
			}));
		}

		// TODO: code reuse
		if (_args.sort === "rating") {
			const withReviews = await _ctx.db.product.findMany({
				where: {
					reviews: {
						some: {},
					},
					category: {
						id: parent.id,
					},
				},
				include: {
					reviews: true,
				},
			});
			const withoutReviews = await _ctx.db.product.findMany({
				where: {
					reviews: {
						none: {},
					},
					category: {
						id: parent.id,
					},
				},
			});
			const withAverages = withReviews.map((product) => {
				const avgRating =
					product.reviews.reduce((acc, next) => {
						return acc + next.rating ?? 0;
					}, 0) / product.reviews.length;
				return { ...product, avgRating };
			});
			const sorted = withAverages.sort((x, y) => {
				return (x.avgRating - y.avgRating) * (_args.order === "desc" ? -1 : 1);
			});

			const merged = [...sorted, ...withoutReviews];

			const offset = _args.skip || 0;
			const limit = _args.take ? offset + _args.take : sorted.length;
			const paginated = merged.slice(offset, limit);
			
			return paginated.map((product) => ({
				...product,
				releaseDate: product.releaseDate.toISOString(),
				numRatings: 0,
			}));
		}

		const dbProducts = await _ctx.db.category
			.findUnique({ where: { id: parent.id } })
			.products({ ...queryOptions });
		if (!dbProducts) {
			throw new Error("not found");
		}

		return dbProducts.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
			numRatings: 0,
		}));
	},
};

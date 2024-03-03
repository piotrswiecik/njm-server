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
		skip: _arg.skip && typeof _arg.skip === "number" ? _arg.skip : 0,
	};

	if (typeof _arg.take === "number") {
		queryOptions.take = _arg.take;
	}

	// TODO: make this reusable in other resolvers (DRY)

	// sorting with aggregation doesn't work with prisma yet
	// TODO: maybe optimize with raw query
	if (_arg.sort === "rating") {
		const withReviews = await _ctx.db.product.findMany({
			where: {
				reviews: {
					some: {},
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
			return (x.avgRating - y.avgRating) * (_arg.order === "desc" ? -1 : 1);
		});

		const merged = [...sorted, ...withoutReviews];

		const offset = _arg.skip || 0;
		const limit = _arg.take ? offset + _arg.take : sorted.length;
		const paginated = merged.slice(offset, limit);

		return paginated.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
			numRatings: 0,
		}));
	}

	// sorting with aggregation doesn't work with prisma yet
	// TODO: maybe optimize with raw query
	if (_arg.sort === "price") {
		const products = await _ctx.db.product.findMany({
			include: {
				variants: {
					select: {
						price: true,
					},
				},
			},
		});

		const withMinPrice = products.map((product) => ({
			...product,
			price: Math.min(...product.variants.map((variant) => variant.price)),
		}));

		const sorted = withMinPrice.sort(
			(x, y) => (x.price - y.price) * (_arg.order === "desc" ? -1 : 1),
		);

		const offset = _arg.skip || 0;
		const limit = _arg.take ? offset + _arg.take : sorted.length;
		const paginated = sorted.slice(offset, limit);

		return paginated.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
			numRatings: 0,
		}));
	}

	try {
		const dbProducts = await _ctx.db.product.findMany({
			skip: _arg.skip as number | undefined,
			take: _arg.take as number | undefined,
		});
		return dbProducts.map((product) => ({
			...product,
			releaseDate: product.releaseDate.toISOString(),
			numRatings: 0,
		}));
	} catch (err) {
		logger.error(err);
		throw new Error(`Error fetching products`);
	}
};

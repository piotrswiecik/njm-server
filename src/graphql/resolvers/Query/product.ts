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
			throw new Error("not found");
		}
		return {
			...dbProduct,
			releaseDate: dbProduct.releaseDate.toISOString(),
		};
	} catch (err) {
		logger.error(err);
		throw new Error(
			`Error fetching product with id=${_arg.id}: ${
				err instanceof Error ? err.message : "unknown error"
			}`,
		);
	}
};

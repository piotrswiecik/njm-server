import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const categoryCount: NonNullable<
	QueryResolvers["categoryCount"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Query.categoryCount resolver logic here */
	try {
		return await _ctx.db.product.count({
			where: {
				category: {
					name: {
						equals: _arg.name,
					},
				},
			},
		});
	} catch (err) {
		logger.error(err);
		throw new Error("Error fetching category count");
	}
};

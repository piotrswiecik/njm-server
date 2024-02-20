import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const category: NonNullable<QueryResolvers["category"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.category resolver logic here */
	try {
		const category = await _ctx.db.category.findFirst({
			where: { name: _arg.name },
		});

		if (!category) {
			throw new Error();
		} else {
			return { ...category };
		}
	} catch (err) {
		logger.error(err);
		throw new Error("Error fetching category");
	}
};

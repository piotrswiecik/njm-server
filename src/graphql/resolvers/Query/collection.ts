import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const collection: NonNullable<QueryResolvers["collection"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	try {
		const dbCollection = await _ctx.db.collection.findFirst({
			where: { name: _arg.name },
		});
		if (!dbCollection) {
			throw new Error("not found");
		}
		return { ...dbCollection };
	} catch (err) {
		logger.error(err);
		throw new Error(
			`Error fetching collection with name=${_arg.name}: ${
				err instanceof Error ? err.message : "unknown error"
			}`,
		);
	}
};

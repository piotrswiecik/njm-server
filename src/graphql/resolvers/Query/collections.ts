import type { QueryResolvers } from "./../../../types.generated";
export const collections: NonNullable<QueryResolvers["collections"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.collections resolver logic here */
	return _ctx.db.collection.findMany();
};

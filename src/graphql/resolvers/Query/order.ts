import type { QueryResolvers, Status } from "./../../../types.generated";
export const order: NonNullable<QueryResolvers["order"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.order resolver logic here */

	const order = await _ctx.db.order.findUnique({
		where: {
			id: _arg.id,
			status: _arg.status as Status, //ok, graphql checks this automatically and throws as needed
		},
	});
	if (!order) {
		return null;
	}
	return { ...order, datePlaced: order.datePlaced?.toISOString() };
};

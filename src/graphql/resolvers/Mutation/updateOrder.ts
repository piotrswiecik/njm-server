import type { MutationResolvers } from "./../../../types.generated";
export const updateOrder: NonNullable<
	MutationResolvers["updateOrder"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Mutation.updateOrder resolver logic here */
	// TODO: error guards

	// await _ctx.db.orderItem.updateMany({
	// 	data: {
	// 		..._arg.order.orderItems,
	// 	},
	// 	where: {
	// 		orderId: _arg.order.id,
	// 	},
	// });

	// const order = await _ctx.db.order.update({
	// 	data: {
	// 		status: _arg.order.status,
	// 	},
	// 	where: {
	// 		id: _arg.order.id,
	// 	},
	// });
	throw new Error("Not implemented");
	// return order;
};

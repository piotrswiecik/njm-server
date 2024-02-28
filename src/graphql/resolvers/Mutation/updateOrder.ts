import { logger } from "../../../utils/logger";
import type { MutationResolvers } from "./../../../types.generated";
export const updateOrder: NonNullable<
	MutationResolvers["updateOrder"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Mutation.updateOrder resolver logic here */
	logger.info("Mutation.updateOrder resolver called");
	logger.info(_arg);

	// input":{"orderId":"5c1b3c9b-3275-4a42-990e-935dce3f46b8","orderItems":[{"variantId":"e9e50fe9-7cc3-4f0b-a86c-0f9e13355bee","quantity":1}],"status":"CART"}}

	try {
		await _ctx.db.orderItem.deleteMany({
			where: {
				orderId: _arg.input.orderId,
			},
		});

		logger.info("Deleted order items");

		if (!_arg.input.orderItems) {
			throw new Error("Not implemented");
		}

		await _ctx.db.orderItem.createMany({
			data: _arg.input.orderItems.map((item) => ({
				orderId: _arg.input.orderId,
				variantId: item.variantId,
				quantity: item.quantity,
			})),
		});

		logger.info("Created order items");

		const dbOrder = await _ctx.db.order.findUnique({
			where: {
				id: _arg.input.orderId,
			},
			include: {
				user: true,
			},
		});

		logger.info("Order after update:");
		logger.info(dbOrder);

		if (!dbOrder) {
			// FIXME: bleh...
			throw new Error("Internal server error");
		}

		return {
			...dbOrder,
			user: dbOrder.user,
		};
	} catch (err) {
		// TODO: graceful error handling
		logger.error(err);
		throw err;
	}

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

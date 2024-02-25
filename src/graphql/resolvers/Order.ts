import type { OrderResolvers } from "./../../types.generated";
export const Order: OrderResolvers = {
	/* Implement Order resolver logic here */
	orderItems: async (_parent, _arg, _ctx) => {
		const items = await _ctx.db.orderItem.findMany({
			where: {
				orderId: _parent.id,
			},
		});
		return items;
	},
	user: async (_parent, _arg, _ctx) => {
		const dbUser = await _ctx.db.user.findUnique({
			where: {
				id: _parent.user?.id,
			},
		});
		if (!dbUser) {
			throw new Error("User not found");
		}
		return {
			...dbUser,
		};
	},
};

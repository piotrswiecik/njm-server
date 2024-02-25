import type { OrderItemResolvers } from "./../../types.generated";
export const OrderItem: OrderItemResolvers = {
	/* Implement OrderItem resolver logic here */
	variant: async (_parent, _arg, _ctx) => {
		const variant = await _ctx.db.variant.findUnique({
			where: {
				id: _parent.variant?.id,
			},
		});
		if (!variant) {
			throw new Error("Variant not found");
		}
		return variant;
	},
};

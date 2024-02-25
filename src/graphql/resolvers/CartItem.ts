import type { CartItemResolvers } from "./../../types.generated";
export const CartItem: CartItemResolvers = {
	/* Implement CartItem resolver logic here */
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

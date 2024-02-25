import { logger } from "../../utils/logger";
import type { CartResolvers } from "./../../types.generated";
export const Cart: CartResolvers = {
	/* Implement Cart resolver logic here */
	cartItems: async (_parent, _arg, _ctx) => {
		logger.info("Cart.cartItems resolver");
		const items = await _ctx.db.cartItem.findMany({
			where: {
				cartId: _parent.id,
			},
		});
		return items;
	},
	user: async (_parent, _arg, _ctx) => {
		logger.info("Cart.user resolver");
		return {
			id: "1",
			email: "",
			isActive: true,
		};
	},
};

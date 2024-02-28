import { logger } from "../../utils/logger";
import type { OrderItemResolvers } from "./../../types.generated";
export const OrderItem: OrderItemResolvers = {
	/* Implement OrderItem resolver logic here */
	variant: async (_parent, _arg, _ctx) => {
		try {
			const variant = await _ctx.db.orderItem
				.findUnique({
					where: {
						id: _parent.id,
					},
				})
				.variant();
			if (!variant) {
				throw new Error("Variant not found");
			}
			return variant;
		} catch (err) {
			logger.error(err);
			throw err;
		}
	},
};

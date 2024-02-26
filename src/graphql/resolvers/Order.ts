import { logger } from "../../utils/logger";
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
		const dbUser = await _ctx.db.order
			.findUnique({
				where: {
					id: _parent.id,
				},
			})
			.user();
		if (!dbUser) {
			logger.error(`User not found: ${_parent.user?.id}`);
			throw new Error("User not found");
		}
		logger.info(`User found: ${dbUser.id}`);
		return {
			...dbUser,
		};
	},
};

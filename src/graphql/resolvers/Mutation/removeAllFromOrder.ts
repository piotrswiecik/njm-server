import { GraphQLError } from "graphql";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { logger } from "../../../utils/logger";
import type { MutationResolvers } from "./../../../types.generated";
export const removeAllFromOrder: NonNullable<
	MutationResolvers["removeAllFromOrder"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Mutation.removeAllFromOrder resolver logic here */
	try {
		// order must exist
		const dbOrder = await _ctx.db.order.findUnique({
			where: {
				id: _arg.from,
			},
		});
		if (!dbOrder) {
			throw new GraphQLError(
				`removeFromOrder mutation failed - order with id=${_arg.from} not found.`,
			);
		}

		// check if order has this product & variant combo
		const dbOrderItem = await _ctx.db.orderItem.findFirst({
			where: {
				orderId: _arg.from,
				variant: {
					name: _arg.variant,
					productId: _arg.product,
				},
			},
		});
		if (!dbOrderItem) {
			throw new GraphQLError(
				`removeFromOrder mutation failed - product id=${_arg.product} @ variant ${_arg.variant} not found in order id=${_arg.from}.`,
			);
		}
		await _ctx.db.orderItem.delete({
			where: {
				id: dbOrderItem.id,
			},
		});
		console.log("removeAllFromOrder ok");
		const updatedOrder = await _ctx.db.order.findUnique({
			where: {
				id: _arg.from,
			},
		});
		if (!updatedOrder) {
			throw new GraphQLError(
				`removeFromOrder mutation failed - order with id=${_arg.from} does not exist.`,
			);
		}
		logger.info(
			`removeFromOrder ok, order ${_arg.from} updated with product ${_arg.product} and variant ${_arg.variant}`,
		);
		return { ...updatedOrder, total: 0 };
	} catch (err) {
		logger.error(err);
		if (err instanceof PrismaClientKnownRequestError) {
			logger.error(`prisma error code: ${err.code}`);
			throw new GraphQLError(
				`removeFromOrder mutation failed - ${err.message}`,
			);
		} else if (err instanceof GraphQLError) {
			throw err;
		}
		throw new GraphQLError(
			"removeFromOrder mutation failed - internal error, see logs for details.",
		);
	}
};

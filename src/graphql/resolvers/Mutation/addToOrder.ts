import { GraphQLError } from "graphql";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { logger } from "../../../utils/logger";
import type { MutationResolvers } from "./../../../types.generated";
export const addToOrder: NonNullable<MutationResolvers["addToOrder"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.addToOrder resolver logic here */
	try {
		// order must exist
		const dbOrder = await _ctx.db.order.findUnique({
			where: {
				id: _arg.to,
			},
		});
		if (!dbOrder) {
			throw new GraphQLError(
				`addToOrder mutation failed - order with id=${_arg.to} not found.`,
			);
		}

		// check if order has this product & variant combo already
		const dbOrderItem = await _ctx.db.orderItem.findFirst({
			where: {
				orderId: _arg.to,
				variant: {
					name: _arg.variant,
					productId: _arg.product,
				},
			},
		});

		if (!dbOrderItem) {
			const dbVariant = await _ctx.db.variant.findFirst({
				where: {
					name: _arg.variant,
					productId: _arg.product,
				},
			});
			if (!dbVariant) {
				throw new GraphQLError(
					`addToOrder mutation failed - variant ${_arg.variant} for product id=${_arg.product} not found.`,
				);
			}
			await _ctx.db.orderItem.create({
				data: {
					orderId: _arg.to,
					variantId: dbVariant.id,
					quantity: 1,
				},
			});
		} else {
			await _ctx.db.orderItem.update({
				where: {
					id: dbOrderItem.id,
				},
				data: {
					quantity: dbOrderItem.quantity + 1,
				},
			});
		}

		const updatedOrder = await _ctx.db.order.findUnique({
			where: {
				id: _arg.to,
			},
		});
		if (!updatedOrder) {
			throw new GraphQLError(
				`addToOrder mutation failed - order with id=${_arg.to} does not exist.`,
			);
		}
		logger.info(
			`addToOrder ok, order ${_arg.to} updated with product ${_arg.product} and variant ${_arg.variant}`,
		);
		return updatedOrder;
	} catch (err) {
		logger.error(err);
		if (err instanceof PrismaClientKnownRequestError) {
			logger.error(`prisma error code: ${err.code}`);
			throw new GraphQLError(`addToOrder mutation failed - ${err.message}`);
		} else if (err instanceof GraphQLError) {
			throw err;
		}
		throw new GraphQLError(
			"addToOrder mutation failed - internal error, see logs for details.",
		);
	}
};

import { GraphQLError } from "graphql";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { logger } from "../../../utils/logger";
import type { MutationResolvers } from "./../../../types.generated";
export const deleteOrder: NonNullable<
	MutationResolvers["deleteOrder"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Mutation.deleteOrder resolver logic here */
	try {
		await _ctx.db.order.delete({
			where: {
				id: _arg.id,
			},
		});
		return _arg.id;
	} catch (err) {
		logger.error(err);
		if (err instanceof PrismaClientKnownRequestError) {
			logger.error(`prisma error code: ${err.code}`);
			if (err.code === "P2025") {
				throw new GraphQLError(
					`deleteOrder mutation failed - order with id=${_arg.id} not found.`,
				);
			}
		}
		throw new GraphQLError(
			"deleteOrder mutation failed - internal error, see logs for details.",
		);
	}
};

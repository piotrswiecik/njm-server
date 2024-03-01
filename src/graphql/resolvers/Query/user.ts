import { GraphQLError } from "graphql";
import { logger } from "../../../utils/logger";
import type { QueryResolvers } from "./../../../types.generated";
export const user: NonNullable<QueryResolvers["user"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.user resolver logic here */
	try {
		const user = await _ctx.db.user.findUnique({
			where: {
				id: _arg.id,
			},
		});
		if (!user) {
			throw new GraphQLError(`User ${_arg.id} not found`);
		}
		return user;
	} catch (err) {
		if (err instanceof GraphQLError) {
			throw err;
		}
		logger.error(err);
		throw new GraphQLError(
			`user resolver failed - internal error, see logs for details.`,
		);
	}
};

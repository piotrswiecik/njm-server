import { GraphQLError } from "graphql";
import type { MutationResolvers } from "./../../../types.generated";
export const createUser: NonNullable<MutationResolvers["createUser"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Mutation.createUser resolver logic here */
	const dbUser = await _ctx.db.user.findUnique({
		where: { id: _arg.id, email: _arg.email },
	});
	if (dbUser) {
		throw new GraphQLError("User already exists");
	}
	const newUser = await _ctx.db.user.create({
		data: {
			id: _arg.id,
			email: _arg.email,
			name: _arg.name,
			isActive: true,
		},
	});
	return newUser;
};

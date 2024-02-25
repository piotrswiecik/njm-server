import type { MutationResolvers } from "./../../../types.generated";
export const createOrder: NonNullable<
	MutationResolvers["createOrder"]
> = async (_parent, _arg, _ctx) => {
	/* Implement Mutation.createOrder resolver logic here */
	return {
		id: "123",
		orderItems: [],
		user: {
			id: "123",
			email: "a@b.com",
			isActive: true
		},
			status: "CART"
	};
};

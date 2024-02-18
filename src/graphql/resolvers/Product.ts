import type { ProductResolvers } from "./../../types.generated";
export const Product: ProductResolvers = {
	/* Implement Product resolver logic here */
	title: async (parent, _args, _ctx) => {
		return parent.title;
	}
};

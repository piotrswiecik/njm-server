/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Product } from "./graphql/resolvers/Product";
import { product as Query_product } from "./graphql/resolvers/Query/product";
export const resolvers: Resolvers = {
	Query: { product: Query_product },

	Product: Product,
};

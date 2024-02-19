/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Artist } from "./graphql/resolvers/Artist";
import { Collection } from "./graphql/resolvers/Collection";
import { CoverImage } from "./graphql/resolvers/CoverImage";
import { Product } from "./graphql/resolvers/Product";
import { product as Query_product } from "./graphql/resolvers/Query/product";
import { products as Query_products } from "./graphql/resolvers/Query/products";
import { Stock } from "./graphql/resolvers/Stock";
import { Track } from "./graphql/resolvers/Track";
export const resolvers: Resolvers = {
	Query: { product: Query_product, products: Query_products },

	Artist: Artist,
	Collection: Collection,
	CoverImage: CoverImage,
	Product: Product,
	Stock: Stock,
	Track: Track,
};

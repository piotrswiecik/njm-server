/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Artist } from "./graphql/resolvers/Artist";
import { Category } from "./graphql/resolvers/Category";
import { Collection } from "./graphql/resolvers/Collection";
import { CoverImage } from "./graphql/resolvers/CoverImage";
import { Product } from "./graphql/resolvers/Product";
import { category as Query_category } from "./graphql/resolvers/Query/category";
import { categoryCount as Query_categoryCount } from "./graphql/resolvers/Query/categoryCount";
import { collection as Query_collection } from "./graphql/resolvers/Query/collection";
import { collections as Query_collections } from "./graphql/resolvers/Query/collections";
import { count as Query_count } from "./graphql/resolvers/Query/count";
import { product as Query_product } from "./graphql/resolvers/Query/product";
import { productSearch as Query_productSearch } from "./graphql/resolvers/Query/productSearch";
import { products as Query_products } from "./graphql/resolvers/Query/products";
import { Stock } from "./graphql/resolvers/Stock";
import { Track } from "./graphql/resolvers/Track";
export const resolvers: Resolvers = {
	Query: {
		category: Query_category,
		categoryCount: Query_categoryCount,
		collection: Query_collection,
		collections: Query_collections,
		count: Query_count,
		product: Query_product,
		productSearch: Query_productSearch,
		products: Query_products,
	},

	Artist: Artist,
	Category: Category,
	Collection: Collection,
	CoverImage: CoverImage,
	Product: Product,
	Stock: Stock,
	Track: Track,
};

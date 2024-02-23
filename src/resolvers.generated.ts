/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Artist } from "./graphql/resolvers/Artist";
import { Category } from "./graphql/resolvers/Category";
import { Collection } from "./graphql/resolvers/Collection";
import { Product } from "./graphql/resolvers/Product";
import { category as Query_category } from "./graphql/resolvers/Query/category";
import { categoryCount as Query_categoryCount } from "./graphql/resolvers/Query/categoryCount";
import { collection as Query_collection } from "./graphql/resolvers/Query/collection";
import { collections as Query_collections } from "./graphql/resolvers/Query/collections";
import { product as Query_product } from "./graphql/resolvers/Query/product";
import { productCount as Query_productCount } from "./graphql/resolvers/Query/productCount";
import { productSearch as Query_productSearch } from "./graphql/resolvers/Query/productSearch";
import { products as Query_products } from "./graphql/resolvers/Query/products";
import { Track } from "./graphql/resolvers/Track";
import { Variant } from "./graphql/resolvers/Variant";
export const resolvers: Resolvers = {
	Query: {
		category: Query_category,
		categoryCount: Query_categoryCount,
		collection: Query_collection,
		collections: Query_collections,
		product: Query_product,
		productCount: Query_productCount,
		productSearch: Query_productSearch,
		products: Query_products,
	},

	Artist: Artist,
	Category: Category,
	Collection: Collection,
	Product: Product,
	Track: Track,
	Variant: Variant,
};

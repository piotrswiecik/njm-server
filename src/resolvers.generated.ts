/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Artist } from "./graphql/resolvers/Artist";
import { Cart } from "./graphql/resolvers/Cart";
import { CartItem } from "./graphql/resolvers/CartItem";
import { Category } from "./graphql/resolvers/Category";
import { Collection } from "./graphql/resolvers/Collection";
import { Product } from "./graphql/resolvers/Product";
import { cart as Query_cart } from "./graphql/resolvers/Query/cart";
import { carts as Query_carts } from "./graphql/resolvers/Query/carts";
import { category as Query_category } from "./graphql/resolvers/Query/category";
import { categoryCount as Query_categoryCount } from "./graphql/resolvers/Query/categoryCount";
import { collection as Query_collection } from "./graphql/resolvers/Query/collection";
import { collections as Query_collections } from "./graphql/resolvers/Query/collections";
import { product as Query_product } from "./graphql/resolvers/Query/product";
import { productCount as Query_productCount } from "./graphql/resolvers/Query/productCount";
import { productSearch as Query_productSearch } from "./graphql/resolvers/Query/productSearch";
import { products as Query_products } from "./graphql/resolvers/Query/products";
import { user as Query_user } from "./graphql/resolvers/Query/user";
import { users as Query_users } from "./graphql/resolvers/Query/users";
import { Track } from "./graphql/resolvers/Track";
import { User } from "./graphql/resolvers/User";
import { Variant } from "./graphql/resolvers/Variant";
export const resolvers: Resolvers = {
	Query: {
		cart: Query_cart,
		carts: Query_carts,
		category: Query_category,
		categoryCount: Query_categoryCount,
		collection: Query_collection,
		collections: Query_collections,
		product: Query_product,
		productCount: Query_productCount,
		productSearch: Query_productSearch,
		products: Query_products,
		user: Query_user,
		users: Query_users,
	},

	Artist: Artist,
	Cart: Cart,
	CartItem: CartItem,
	Category: Category,
	Collection: Collection,
	Product: Product,
	Track: Track,
	User: User,
	Variant: Variant,
};

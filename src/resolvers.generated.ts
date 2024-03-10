/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { Artist } from "./graphql/resolvers/Artist";
import { Category } from "./graphql/resolvers/Category";
import { Collection } from "./graphql/resolvers/Collection";
import { DefaultIdResponse } from "./graphql/resolvers/DefaultIdResponse";
import { addToOrder as Mutation_addToOrder } from "./graphql/resolvers/Mutation/addToOrder";
import { createOrder as Mutation_createOrder } from "./graphql/resolvers/Mutation/createOrder";
import { createReview as Mutation_createReview } from "./graphql/resolvers/Mutation/createReview";
import { createUser as Mutation_createUser } from "./graphql/resolvers/Mutation/createUser";
import { deleteOrder as Mutation_deleteOrder } from "./graphql/resolvers/Mutation/deleteOrder";
import { deleteReview as Mutation_deleteReview } from "./graphql/resolvers/Mutation/deleteReview";
import { removeAllFromOrder as Mutation_removeAllFromOrder } from "./graphql/resolvers/Mutation/removeAllFromOrder";
import { removeFromOrder as Mutation_removeFromOrder } from "./graphql/resolvers/Mutation/removeFromOrder";
import { setOrderStatus as Mutation_setOrderStatus } from "./graphql/resolvers/Mutation/setOrderStatus";
import { Order } from "./graphql/resolvers/Order";
import { OrderItem } from "./graphql/resolvers/OrderItem";
import { Product } from "./graphql/resolvers/Product";
import { category as Query_category } from "./graphql/resolvers/Query/category";
import { categoryCount as Query_categoryCount } from "./graphql/resolvers/Query/categoryCount";
import { collection as Query_collection } from "./graphql/resolvers/Query/collection";
import { collections as Query_collections } from "./graphql/resolvers/Query/collections";
import { order as Query_order } from "./graphql/resolvers/Query/order";
import { orders as Query_orders } from "./graphql/resolvers/Query/orders";
import { product as Query_product } from "./graphql/resolvers/Query/product";
import { productCount as Query_productCount } from "./graphql/resolvers/Query/productCount";
import { productRange as Query_productRange } from "./graphql/resolvers/Query/productRange";
import { productReviews as Query_productReviews } from "./graphql/resolvers/Query/productReviews";
import { productSearch as Query_productSearch } from "./graphql/resolvers/Query/productSearch";
import { products as Query_products } from "./graphql/resolvers/Query/products";
import { user as Query_user } from "./graphql/resolvers/Query/user";
import { users as Query_users } from "./graphql/resolvers/Query/users";
import { Review } from "./graphql/resolvers/Review";
import { Track } from "./graphql/resolvers/Track";
import { User } from "./graphql/resolvers/User";
import { Variant } from "./graphql/resolvers/Variant";
export const resolvers: Resolvers = {
	Query: {
		category: Query_category,
		categoryCount: Query_categoryCount,
		collection: Query_collection,
		collections: Query_collections,
		order: Query_order,
		orders: Query_orders,
		product: Query_product,
		productCount: Query_productCount,
		productRange: Query_productRange,
		productReviews: Query_productReviews,
		productSearch: Query_productSearch,
		products: Query_products,
		user: Query_user,
		users: Query_users,
	},
	Mutation: {
		addToOrder: Mutation_addToOrder,
		createOrder: Mutation_createOrder,
		createReview: Mutation_createReview,
		createUser: Mutation_createUser,
		deleteOrder: Mutation_deleteOrder,
		deleteReview: Mutation_deleteReview,
		removeAllFromOrder: Mutation_removeAllFromOrder,
		removeFromOrder: Mutation_removeFromOrder,
		setOrderStatus: Mutation_setOrderStatus,
	},

	Artist: Artist,
	Category: Category,
	Collection: Collection,
	DefaultIdResponse: DefaultIdResponse,
	Order: Order,
	OrderItem: OrderItem,
	Product: Product,
	Review: Review,
	Track: Track,
	User: User,
	Variant: Variant,
};

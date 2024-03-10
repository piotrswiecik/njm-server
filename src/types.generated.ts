import { GraphQLResolveInfo } from "graphql";
import { ServerContext, Mapper } from "./types.js";
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
	  };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
	[P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string };
	String: { input: string; output: string };
	Boolean: { input: boolean; output: boolean };
	Int: { input: number; output: number };
	Float: { input: number; output: number };
};

export type Artist = {
	__typename?: "Artist";
	name: Scalars["String"]["output"];
};

export type Category = {
	__typename?: "Category";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
};

export type CategoryproductsArgs = {
	order?: InputMaybe<Scalars["String"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Collection = {
	__typename?: "Collection";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products: Array<Product>;
};

export type DefaultIdResponse = {
	__typename?: "DefaultIdResponse";
	id: Scalars["ID"]["output"];
};

export type Mutation = {
	__typename?: "Mutation";
	addToOrder: Order;
	createOrder: DefaultIdResponse;
	createReview: Review;
	createUser: User;
	deleteOrder: DefaultIdResponse;
	deleteReview: DefaultIdResponse;
	removeAllFromOrder: Order;
	removeFromOrder: Order;
	setOrderStatus: DefaultIdResponse;
};

export type MutationaddToOrderArgs = {
	product: Scalars["ID"]["input"];
	to: Scalars["ID"]["input"];
	variant: VariantEnum;
};

export type MutationcreateOrderArgs = {
	userId: Scalars["ID"]["input"];
};

export type MutationcreateReviewArgs = {
	content: Scalars["String"]["input"];
	headline: Scalars["String"]["input"];
	productId: Scalars["ID"]["input"];
	rating: Scalars["Int"]["input"];
	userId: Scalars["ID"]["input"];
};

export type MutationcreateUserArgs = {
	email: Scalars["String"]["input"];
	id: Scalars["ID"]["input"];
	name: Scalars["String"]["input"];
};

export type MutationdeleteOrderArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationdeleteReviewArgs = {
	id: Scalars["ID"]["input"];
};

export type MutationremoveAllFromOrderArgs = {
	from: Scalars["ID"]["input"];
	product: Scalars["ID"]["input"];
	variant: VariantEnum;
};

export type MutationremoveFromOrderArgs = {
	from: Scalars["ID"]["input"];
	product: Scalars["ID"]["input"];
	variant: VariantEnum;
};

export type MutationsetOrderStatusArgs = {
	status: StatusEnum;
	where: Scalars["ID"]["input"];
};

export type Order = {
	__typename?: "Order";
	id: Scalars["ID"]["output"];
	orderItems?: Maybe<Array<OrderItem>>;
	status: StatusEnum;
	total: Scalars["Int"]["output"];
	user: User;
};

export type OrderItem = {
	__typename?: "OrderItem";
	id: Scalars["ID"]["output"];
	quantity: Scalars["Int"]["output"];
	variant: Variant;
};

export type OrderItemInput = {
	quantity: Scalars["Int"]["input"];
	variantId: Scalars["ID"]["input"];
};

export type Product = {
	__typename?: "Product";
	artist: Artist;
	category: Category;
	coverImageUrl: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	numRatings: Scalars["Int"]["output"];
	rating?: Maybe<Scalars["Float"]["output"]>;
	releaseDate: Scalars["String"]["output"];
	title: Scalars["String"]["output"];
	tracks: Array<Track>;
	variants: Array<Variant>;
};

export type Query = {
	__typename?: "Query";
	category?: Maybe<Category>;
	categoryCount: Scalars["Int"]["output"];
	collection?: Maybe<Collection>;
	collections?: Maybe<Array<Collection>>;
	order?: Maybe<Order>;
	orders: Array<Order>;
	product?: Maybe<Product>;
	productCount: Scalars["Int"]["output"];
	productRange?: Maybe<Array<Product>>;
	productReviews: Array<Review>;
	productSearch?: Maybe<Array<Product>>;
	products: Array<Product>;
	user?: Maybe<User>;
	users: Array<User>;
};

export type QuerycategoryArgs = {
	name: Scalars["String"]["input"];
};

export type QuerycategoryCountArgs = {
	name: Scalars["String"]["input"];
};

export type QuerycollectionArgs = {
	name: Scalars["String"]["input"];
};

export type QueryorderArgs = {
	id: Scalars["ID"]["input"];
	status?: InputMaybe<StatusEnum>;
};

export type QueryproductArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryproductRangeArgs = {
	in: Array<Scalars["ID"]["input"]>;
};

export type QueryproductReviewsArgs = {
	productId: Scalars["ID"]["input"];
};

export type QueryproductSearchArgs = {
	query: Scalars["String"]["input"];
};

export type QueryproductsArgs = {
	order?: InputMaybe<Scalars["String"]["input"]>;
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	sort?: InputMaybe<Scalars["String"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryuserArgs = {
	id: Scalars["ID"]["input"];
};

export type Review = {
	__typename?: "Review";
	content: Scalars["String"]["output"];
	dateCreated: Scalars["String"]["output"];
	headline: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	product: Product;
	rating: Scalars["Int"]["output"];
	user: User;
};

export type SortEnum = "asc" | "desc";

export type SortInput = {
	price?: InputMaybe<SortEnum>;
	rating?: InputMaybe<SortEnum>;
};

export type StatusEnum =
	| "AWAIT_PAY"
	| "AWAIT_SHIP"
	| "CANCELLED"
	| "CART"
	| "SHIPPED";

export type Track = {
	__typename?: "Track";
	name: Scalars["String"]["output"];
	number: Scalars["Int"]["output"];
	url?: Maybe<Scalars["String"]["output"]>;
};

export type User = {
	__typename?: "User";
	email: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	isActive: Scalars["Boolean"]["output"];
	name: Scalars["String"]["output"];
};

export type Variant = {
	__typename?: "Variant";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	product: Product;
	stock: Scalars["Int"]["output"];
};

export type VariantEnum = "cd" | "lp";

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info?: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info?: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info?: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	Artist: ResolverTypeWrapper<Mapper<Artist>>;
	String: ResolverTypeWrapper<Mapper<Scalars["String"]["output"]>>;
	Category: ResolverTypeWrapper<Mapper<Category>>;
	ID: ResolverTypeWrapper<Mapper<Scalars["ID"]["output"]>>;
	Int: ResolverTypeWrapper<Mapper<Scalars["Int"]["output"]>>;
	Collection: ResolverTypeWrapper<Mapper<Collection>>;
	DefaultIdResponse: ResolverTypeWrapper<Mapper<DefaultIdResponse>>;
	Mutation: ResolverTypeWrapper<{}>;
	Order: ResolverTypeWrapper<Mapper<Order>>;
	OrderItem: ResolverTypeWrapper<Mapper<OrderItem>>;
	OrderItemInput: ResolverTypeWrapper<Mapper<OrderItemInput>>;
	Product: ResolverTypeWrapper<Mapper<Product>>;
	Float: ResolverTypeWrapper<Mapper<Scalars["Float"]["output"]>>;
	Query: ResolverTypeWrapper<{}>;
	Review: ResolverTypeWrapper<Mapper<Review>>;
	SortEnum: ResolverTypeWrapper<Mapper<SortEnum>>;
	SortInput: ResolverTypeWrapper<Mapper<SortInput>>;
	StatusEnum: ResolverTypeWrapper<Mapper<StatusEnum>>;
	Track: ResolverTypeWrapper<Mapper<Track>>;
	User: ResolverTypeWrapper<Mapper<User>>;
	Boolean: ResolverTypeWrapper<Mapper<Scalars["Boolean"]["output"]>>;
	Variant: ResolverTypeWrapper<Mapper<Variant>>;
	VariantEnum: ResolverTypeWrapper<Mapper<VariantEnum>>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Artist: Mapper<Artist>;
	String: Mapper<Scalars["String"]["output"]>;
	Category: Mapper<Category>;
	ID: Mapper<Scalars["ID"]["output"]>;
	Int: Mapper<Scalars["Int"]["output"]>;
	Collection: Mapper<Collection>;
	DefaultIdResponse: Mapper<DefaultIdResponse>;
	Mutation: {};
	Order: Mapper<Order>;
	OrderItem: Mapper<OrderItem>;
	OrderItemInput: Mapper<OrderItemInput>;
	Product: Mapper<Product>;
	Float: Mapper<Scalars["Float"]["output"]>;
	Query: {};
	Review: Mapper<Review>;
	SortInput: Mapper<SortInput>;
	Track: Mapper<Track>;
	User: Mapper<User>;
	Boolean: Mapper<Scalars["Boolean"]["output"]>;
	Variant: Mapper<Variant>;
};

export type ArtistResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Artist"] = ResolversParentTypes["Artist"],
> = {
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Category"] = ResolversParentTypes["Category"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		Partial<CategoryproductsArgs>
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DefaultIdResponseResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["DefaultIdResponse"] = ResolversParentTypes["DefaultIdResponse"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	addToOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<MutationaddToOrderArgs, "product" | "to" | "variant">
	>;
	createOrder?: Resolver<
		ResolversTypes["DefaultIdResponse"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateOrderArgs, "userId">
	>;
	createReview?: Resolver<
		ResolversTypes["Review"],
		ParentType,
		ContextType,
		RequireFields<
			MutationcreateReviewArgs,
			"content" | "headline" | "productId" | "rating" | "userId"
		>
	>;
	createUser?: Resolver<
		ResolversTypes["User"],
		ParentType,
		ContextType,
		RequireFields<MutationcreateUserArgs, "email" | "id" | "name">
	>;
	deleteOrder?: Resolver<
		ResolversTypes["DefaultIdResponse"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteOrderArgs, "id">
	>;
	deleteReview?: Resolver<
		ResolversTypes["DefaultIdResponse"],
		ParentType,
		ContextType,
		RequireFields<MutationdeleteReviewArgs, "id">
	>;
	removeAllFromOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<
			MutationremoveAllFromOrderArgs,
			"from" | "product" | "variant"
		>
	>;
	removeFromOrder?: Resolver<
		ResolversTypes["Order"],
		ParentType,
		ContextType,
		RequireFields<MutationremoveFromOrderArgs, "from" | "product" | "variant">
	>;
	setOrderStatus?: Resolver<
		ResolversTypes["DefaultIdResponse"],
		ParentType,
		ContextType,
		RequireFields<MutationsetOrderStatusArgs, "status" | "where">
	>;
};

export type OrderResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Order"] = ResolversParentTypes["Order"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	orderItems?: Resolver<
		Maybe<Array<ResolversTypes["OrderItem"]>>,
		ParentType,
		ContextType
	>;
	status?: Resolver<ResolversTypes["StatusEnum"], ParentType, ContextType>;
	total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderItemResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["OrderItem"] = ResolversParentTypes["OrderItem"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	quantity?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	variant?: Resolver<ResolversTypes["Variant"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	artist?: Resolver<ResolversTypes["Artist"], ParentType, ContextType>;
	category?: Resolver<ResolversTypes["Category"], ParentType, ContextType>;
	coverImageUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	numRatings?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	rating?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
	releaseDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	tracks?: Resolver<Array<ResolversTypes["Track"]>, ParentType, ContextType>;
	variants?: Resolver<
		Array<ResolversTypes["Variant"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycategoryArgs, "name">
	>;
	categoryCount?: Resolver<
		ResolversTypes["Int"],
		ParentType,
		ContextType,
		RequireFields<QuerycategoryCountArgs, "name">
	>;
	collection?: Resolver<
		Maybe<ResolversTypes["Collection"]>,
		ParentType,
		ContextType,
		RequireFields<QuerycollectionArgs, "name">
	>;
	collections?: Resolver<
		Maybe<Array<ResolversTypes["Collection"]>>,
		ParentType,
		ContextType
	>;
	order?: Resolver<
		Maybe<ResolversTypes["Order"]>,
		ParentType,
		ContextType,
		RequireFields<QueryorderArgs, "id">
	>;
	orders?: Resolver<Array<ResolversTypes["Order"]>, ParentType, ContextType>;
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductArgs, "id">
	>;
	productCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	productRange?: Resolver<
		Maybe<Array<ResolversTypes["Product"]>>,
		ParentType,
		ContextType,
		RequireFields<QueryproductRangeArgs, "in">
	>;
	productReviews?: Resolver<
		Array<ResolversTypes["Review"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductReviewsArgs, "productId">
	>;
	productSearch?: Resolver<
		Maybe<Array<ResolversTypes["Product"]>>,
		ParentType,
		ContextType,
		RequireFields<QueryproductSearchArgs, "query">
	>;
	products?: Resolver<
		Array<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		Partial<QueryproductsArgs>
	>;
	user?: Resolver<
		Maybe<ResolversTypes["User"]>,
		ParentType,
		ContextType,
		RequireFields<QueryuserArgs, "id">
	>;
	users?: Resolver<Array<ResolversTypes["User"]>, ParentType, ContextType>;
};

export type ReviewResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Review"] = ResolversParentTypes["Review"],
> = {
	content?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	dateCreated?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	headline?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	rating?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	user?: Resolver<ResolversTypes["User"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Track"] = ResolversParentTypes["Track"],
> = {
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	number?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
	email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	isActive?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VariantResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Variant"] = ResolversParentTypes["Variant"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	product?: Resolver<ResolversTypes["Product"], ParentType, ContextType>;
	stock?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ServerContext> = {
	Artist?: ArtistResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	DefaultIdResponse?: DefaultIdResponseResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Order?: OrderResolvers<ContextType>;
	OrderItem?: OrderItemResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Review?: ReviewResolvers<ContextType>;
	Track?: TrackResolvers<ContextType>;
	User?: UserResolvers<ContextType>;
	Variant?: VariantResolvers<ContextType>;
};

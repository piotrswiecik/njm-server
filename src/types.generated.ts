import { GraphQLResolveInfo } from "graphql";
import { ServerContext } from "./context.js";
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
	products?: Maybe<Array<Product>>;
};

export type CategoryproductsArgs = {
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Collection = {
	__typename?: "Collection";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	products?: Maybe<Array<Product>>;
};

export type Product = {
	__typename?: "Product";
	artist?: Maybe<Artist>;
	category?: Maybe<Category>;
	coverImageUrl: Scalars["String"]["output"];
	id: Scalars["ID"]["output"];
	releaseDate: Scalars["String"]["output"];
	title: Scalars["String"]["output"];
	tracks?: Maybe<Array<Maybe<Track>>>;
	variants?: Maybe<Array<Maybe<Variant>>>;
};

export type Query = {
	__typename?: "Query";
	category?: Maybe<Category>;
	categoryCount: Scalars["Int"]["output"];
	collection?: Maybe<Collection>;
	collections?: Maybe<Array<Collection>>;
	product?: Maybe<Product>;
	productCount: Scalars["Int"]["output"];
	productSearch?: Maybe<Array<Maybe<Product>>>;
	products?: Maybe<Array<Maybe<Product>>>;
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

export type QueryproductArgs = {
	id: Scalars["ID"]["input"];
};

export type QueryproductSearchArgs = {
	query: Scalars["String"]["input"];
};

export type QueryproductsArgs = {
	skip?: InputMaybe<Scalars["Int"]["input"]>;
	take?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Stock = {
	__typename?: "Stock";
	qtyCd: Scalars["Int"]["output"];
	qtyLp: Scalars["Int"]["output"];
};

export type Track = {
	__typename?: "Track";
	name: Scalars["String"]["output"];
	number: Scalars["Int"]["output"];
	url?: Maybe<Scalars["String"]["output"]>;
};

export type Variant = {
	__typename?: "Variant";
	name: Scalars["String"]["output"];
	price: Scalars["Int"]["output"];
	stock: Scalars["Int"]["output"];
};

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
	Artist: ResolverTypeWrapper<Artist>;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	Category: ResolverTypeWrapper<Category>;
	ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
	Collection: ResolverTypeWrapper<Collection>;
	Product: ResolverTypeWrapper<Product>;
	Query: ResolverTypeWrapper<{}>;
	Stock: ResolverTypeWrapper<Stock>;
	Track: ResolverTypeWrapper<Track>;
	Variant: ResolverTypeWrapper<Variant>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Artist: Artist;
	String: Scalars["String"]["output"];
	Category: Category;
	ID: Scalars["ID"]["output"];
	Int: Scalars["Int"]["output"];
	Collection: Collection;
	Product: Product;
	Query: {};
	Stock: Stock;
	Track: Track;
	Variant: Variant;
	Boolean: Scalars["Boolean"]["output"];
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
		Maybe<Array<ResolversTypes["Product"]>>,
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
		Maybe<Array<ResolversTypes["Product"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	artist?: Resolver<Maybe<ResolversTypes["Artist"]>, ParentType, ContextType>;
	category?: Resolver<
		Maybe<ResolversTypes["Category"]>,
		ParentType,
		ContextType
	>;
	coverImageUrl?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	releaseDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	tracks?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Track"]>>>,
		ParentType,
		ContextType
	>;
	variants?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Variant"]>>>,
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
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductArgs, "id">
	>;
	productCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	productSearch?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType,
		RequireFields<QueryproductSearchArgs, "query">
	>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType,
		Partial<QueryproductsArgs>
	>;
};

export type StockResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Stock"] = ResolversParentTypes["Stock"],
> = {
	qtyCd?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	qtyLp?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
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

export type VariantResolvers<
	ContextType = ServerContext,
	ParentType extends
		ResolversParentTypes["Variant"] = ResolversParentTypes["Variant"],
> = {
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	stock?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ServerContext> = {
	Artist?: ArtistResolvers<ContextType>;
	Category?: CategoryResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Stock?: StockResolvers<ContextType>;
	Track?: TrackResolvers<ContextType>;
	Variant?: VariantResolvers<ContextType>;
};

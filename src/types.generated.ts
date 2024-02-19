import { type GraphQLResolveInfo } from "graphql";
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
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	product?: Maybe<Array<Product>>;
};

export type Collection = {
	__typename?: "Collection";
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	product?: Maybe<Array<Product>>;
};

export type CoverImage = {
	__typename?: "CoverImage";
	height: Scalars["Int"]["output"];
	id: Scalars["ID"]["output"];
	product?: Maybe<Product>;
	url: Scalars["String"]["output"];
	width: Scalars["Int"]["output"];
};

export type Product = {
	__typename?: "Product";
	artist: Scalars["String"]["output"];
	category: Scalars["String"]["output"];
	collection?: Maybe<Array<Collection>>;
	coverImg: CoverImage;
	id: Scalars["ID"]["output"];
	price: Scalars["Int"]["output"];
	releaseDate: Scalars["String"]["output"];
	stock: Stock;
	title: Scalars["String"]["output"];
	tracks: Array<Track>;
};

export type Query = {
	__typename?: "Query";
	product?: Maybe<Product>;
	products?: Maybe<Array<Maybe<Product>>>;
};

export type QueryproductArgs = {
	id: Scalars["ID"]["input"];
};

export type Stock = {
	__typename?: "Stock";
	id: Scalars["ID"]["output"];
	product?: Maybe<Product>;
	qtyCd: Scalars["Int"]["output"];
	qtyLp: Scalars["Int"]["output"];
};

export type Track = {
	__typename?: "Track";
	artist?: Maybe<Artist>;
	id: Scalars["ID"]["output"];
	name: Scalars["String"]["output"];
	product?: Maybe<Product>;
	url: Scalars["String"]["output"];
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
	ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
	String: ResolverTypeWrapper<Scalars["String"]["output"]>;
	Collection: ResolverTypeWrapper<Collection>;
	CoverImage: ResolverTypeWrapper<CoverImage>;
	Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
	Product: ResolverTypeWrapper<Product>;
	Query: ResolverTypeWrapper<{}>;
	Stock: ResolverTypeWrapper<Stock>;
	Track: ResolverTypeWrapper<Track>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	Artist: Artist;
	ID: Scalars["ID"]["output"];
	String: Scalars["String"]["output"];
	Collection: Collection;
	CoverImage: CoverImage;
	Int: Scalars["Int"]["output"];
	Product: Product;
	Query: {};
	Stock: Stock;
	Track: Track;
	Boolean: Scalars["Boolean"]["output"];
};

export type ArtistResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Artist"] = ResolversParentTypes["Artist"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	product?: Resolver<
		Maybe<Array<ResolversTypes["Product"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Collection"] = ResolversParentTypes["Collection"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	product?: Resolver<
		Maybe<Array<ResolversTypes["Product"]>>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CoverImageResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["CoverImage"] = ResolversParentTypes["CoverImage"],
> = {
	height?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	width?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Product"] = ResolversParentTypes["Product"],
> = {
	artist?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	category?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	collection?: Resolver<
		Maybe<Array<ResolversTypes["Collection"]>>,
		ParentType,
		ContextType
	>;
	coverImg?: Resolver<ResolversTypes["CoverImage"], ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	price?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	releaseDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	stock?: Resolver<ResolversTypes["Stock"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	tracks?: Resolver<Array<ResolversTypes["Track"]>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	product?: Resolver<
		Maybe<ResolversTypes["Product"]>,
		ParentType,
		ContextType,
		RequireFields<QueryproductArgs, "id">
	>;
	products?: Resolver<
		Maybe<Array<Maybe<ResolversTypes["Product"]>>>,
		ParentType,
		ContextType
	>;
};

export type StockResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Stock"] = ResolversParentTypes["Stock"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
	qtyCd?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	qtyLp?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TrackResolvers<
	ContextType = any,
	ParentType extends
		ResolversParentTypes["Track"] = ResolversParentTypes["Track"],
> = {
	artist?: Resolver<Maybe<ResolversTypes["Artist"]>, ParentType, ContextType>;
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	product?: Resolver<Maybe<ResolversTypes["Product"]>, ParentType, ContextType>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
	Artist?: ArtistResolvers<ContextType>;
	Collection?: CollectionResolvers<ContextType>;
	CoverImage?: CoverImageResolvers<ContextType>;
	Product?: ProductResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Stock?: StockResolvers<ContextType>;
	Track?: TrackResolvers<ContextType>;
};
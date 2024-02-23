type OptionalKeys<T> = {
	[K in keyof T]-?: T[K] extends
		| { __typename?: string }
		| Array<{ __typename?: string }>
		? K
		: never;
}[keyof T];

type IsObject<T> = T extends object ? T : never;

type MakeNestedRelationsOptional<T> = {
	[K in keyof Pick<T, OptionalKeys<T>>]?: T[K] extends object
		? MakeNestedRelationsOptional<IsObject<T[K]>>
		: T[K];
} & {
	[K in keyof Omit<T, OptionalKeys<T>>]: T[K];
};

export type Mapper<T> = T extends object ? MakeNestedRelationsOptional<T> : T;
// export type Mapper<T> = T;

export type ServerContext = {
	db: import("@prisma/client").PrismaClient;
};

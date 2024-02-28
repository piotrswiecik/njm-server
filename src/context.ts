import { type BaseContext } from "@apollo/server";

export interface ServerContext extends BaseContext {
	db?: import("@prisma/client").PrismaClient;
};
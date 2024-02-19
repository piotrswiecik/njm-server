import { PrismaClient } from "@prisma/client";
import type { QueryResolvers } from "./../../../types.generated";
export const count: NonNullable<QueryResolvers["count"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.count resolver logic here */
	const prisma = new PrismaClient();
	return prisma.product.count();
};

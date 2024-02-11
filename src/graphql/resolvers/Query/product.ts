import { prisma } from "../../../db";
import type { QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	const product = await prisma.product.findUnique({
		where: { id: _arg.id },
	});
	// TODO will handle errors later
	// for now this will be available under errors[].message in grahpql response
	if (!product) throw new Error("Product not found");
	return product;
};

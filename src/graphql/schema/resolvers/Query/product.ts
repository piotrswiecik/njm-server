import { prisma } from "../../../../db"
import type { QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	const product = await prisma.product.findUnique({
		where: {
			id: _arg.id
		}
	});
	return product;
};

import { faker } from "@faker-js/faker";
import type { QueryResolvers } from "./../../../types.generated";
export const product: NonNullable<QueryResolvers["product"]> = async (
	_parent,
	_arg,
	_ctx,
) => {
	/* Implement Query.product resolver logic here */
	const name = faker.commerce.productName();
	return {
		id: _arg.id,
		name: name,
		slug: name.toLowerCase().replace(/ /g, "-"),
		price: Number(
			faker.commerce.price({
				min: 1,
				max: 100,
				dec: 2,
			}),
		),
		description: faker.commerce.productDescription(),
	};
};

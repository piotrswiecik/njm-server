import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItemInput",
				loc: { start: 6, end: 20 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "variantId",
						loc: { start: 25, end: 34 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 36, end: 38 } },
							loc: { start: 36, end: 38 },
						},
						loc: { start: 36, end: 39 },
					},
					directives: [],
					loc: { start: 25, end: 39 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 42, end: 50 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 52, end: 55 } },
							loc: { start: 52, end: 55 },
						},
						loc: { start: 52, end: 56 },
					},
					directives: [],
					loc: { start: 42, end: 56 },
				},
			],
			loc: { start: 0, end: 58 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 71, end: 79 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 84, end: 95 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "userId",
								loc: { start: 96, end: 102 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 104, end: 106 },
									},
									loc: { start: 104, end: 106 },
								},
								loc: { start: 104, end: 107 },
							},
							directives: [],
							loc: { start: 96, end: 107 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultIdResponse",
								loc: { start: 110, end: 127 },
							},
							loc: { start: 110, end: 127 },
						},
						loc: { start: 110, end: 128 },
					},
					directives: [],
					loc: { start: 84, end: 128 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "addToOrder",
						loc: { start: 131, end: 141 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "to",
								loc: { start: 142, end: 144 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 146, end: 148 },
									},
									loc: { start: 146, end: 148 },
								},
								loc: { start: 146, end: 149 },
							},
							directives: [],
							loc: { start: 142, end: 149 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 151, end: 158 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 160, end: 162 },
									},
									loc: { start: 160, end: 162 },
								},
								loc: { start: 160, end: 163 },
							},
							directives: [],
							loc: { start: 151, end: 163 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 165, end: 172 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 174, end: 185 },
									},
									loc: { start: 174, end: 185 },
								},
								loc: { start: 174, end: 186 },
							},
							directives: [],
							loc: { start: 165, end: 186 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 189, end: 194 },
							},
							loc: { start: 189, end: 194 },
						},
						loc: { start: 189, end: 195 },
					},
					directives: [],
					loc: { start: 131, end: 195 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeFromOrder",
						loc: { start: 198, end: 213 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "from",
								loc: { start: 214, end: 218 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 220, end: 222 },
									},
									loc: { start: 220, end: 222 },
								},
								loc: { start: 220, end: 223 },
							},
							directives: [],
							loc: { start: 214, end: 223 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 225, end: 232 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 234, end: 236 },
									},
									loc: { start: 234, end: 236 },
								},
								loc: { start: 234, end: 237 },
							},
							directives: [],
							loc: { start: 225, end: 237 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 239, end: 246 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 248, end: 259 },
									},
									loc: { start: 248, end: 259 },
								},
								loc: { start: 248, end: 260 },
							},
							directives: [],
							loc: { start: 239, end: 260 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 263, end: 268 },
							},
							loc: { start: 263, end: 268 },
						},
						loc: { start: 263, end: 269 },
					},
					directives: [],
					loc: { start: 198, end: 269 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeAllFromOrder",
						loc: { start: 272, end: 290 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "from",
								loc: { start: 291, end: 295 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 297, end: 299 },
									},
									loc: { start: 297, end: 299 },
								},
								loc: { start: 297, end: 300 },
							},
							directives: [],
							loc: { start: 291, end: 300 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 302, end: 309 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 311, end: 313 },
									},
									loc: { start: 311, end: 313 },
								},
								loc: { start: 311, end: 314 },
							},
							directives: [],
							loc: { start: 302, end: 314 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 316, end: 323 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 325, end: 336 },
									},
									loc: { start: 325, end: 336 },
								},
								loc: { start: 325, end: 337 },
							},
							directives: [],
							loc: { start: 316, end: 337 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 340, end: 345 },
							},
							loc: { start: 340, end: 345 },
						},
						loc: { start: 340, end: 346 },
					},
					directives: [],
					loc: { start: 272, end: 346 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 349, end: 360 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 361, end: 363 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 365, end: 367 },
									},
									loc: { start: 365, end: 367 },
								},
								loc: { start: 365, end: 368 },
							},
							directives: [],
							loc: { start: 361, end: 368 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultIdResponse",
								loc: { start: 371, end: 388 },
							},
							loc: { start: 371, end: 388 },
						},
						loc: { start: 371, end: 389 },
					},
					directives: [],
					loc: { start: 349, end: 389 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "setOrderStatus",
						loc: { start: 392, end: 406 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 407, end: 412 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 414, end: 416 },
									},
									loc: { start: 414, end: 416 },
								},
								loc: { start: 414, end: 417 },
							},
							directives: [],
							loc: { start: 407, end: 417 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 419, end: 425 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "StatusEnum",
										loc: { start: 427, end: 437 },
									},
									loc: { start: 427, end: 437 },
								},
								loc: { start: 427, end: 438 },
							},
							directives: [],
							loc: { start: 419, end: 438 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultIdResponse",
								loc: { start: 441, end: 458 },
							},
							loc: { start: 441, end: 458 },
						},
						loc: { start: 441, end: 459 },
					},
					directives: [],
					loc: { start: 392, end: 459 },
				},
			],
			loc: { start: 59, end: 461 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 475, end: 483 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createReview",
						loc: { start: 488, end: 500 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 501, end: 510 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 512, end: 514 },
									},
									loc: { start: 512, end: 514 },
								},
								loc: { start: 512, end: 515 },
							},
							directives: [],
							loc: { start: 501, end: 515 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "rating",
								loc: { start: 517, end: 523 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 525, end: 528 },
									},
									loc: { start: 525, end: 528 },
								},
								loc: { start: 525, end: 529 },
							},
							directives: [],
							loc: { start: 517, end: 529 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "headline",
								loc: { start: 531, end: 539 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 541, end: 547 },
									},
									loc: { start: 541, end: 547 },
								},
								loc: { start: 541, end: 548 },
							},
							directives: [],
							loc: { start: 531, end: 548 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "content",
								loc: { start: 550, end: 557 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 559, end: 565 },
									},
									loc: { start: 559, end: 565 },
								},
								loc: { start: 559, end: 566 },
							},
							directives: [],
							loc: { start: 550, end: 566 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "userId",
								loc: { start: 568, end: 574 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 576, end: 578 },
									},
									loc: { start: 576, end: 578 },
								},
								loc: { start: 576, end: 579 },
							},
							directives: [],
							loc: { start: 568, end: 579 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Review",
								loc: { start: 582, end: 588 },
							},
							loc: { start: 582, end: 588 },
						},
						loc: { start: 582, end: 589 },
					},
					directives: [],
					loc: { start: 488, end: 589 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteReview",
						loc: { start: 592, end: 604 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 605, end: 607 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 609, end: 611 },
									},
									loc: { start: 609, end: 611 },
								},
								loc: { start: 609, end: 612 },
							},
							directives: [],
							loc: { start: 605, end: 612 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultIdResponse",
								loc: { start: 615, end: 632 },
							},
							loc: { start: 615, end: 632 },
						},
						loc: { start: 615, end: 633 },
					},
					directives: [],
					loc: { start: 592, end: 633 },
				},
			],
			loc: { start: 463, end: 635 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 648, end: 653 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 658, end: 662 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 663, end: 665 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 667, end: 669 },
									},
									loc: { start: 667, end: 669 },
								},
								loc: { start: 667, end: 670 },
							},
							directives: [],
							loc: { start: 663, end: 670 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 673, end: 677 },
						},
						loc: { start: 673, end: 677 },
					},
					directives: [],
					loc: { start: 658, end: 677 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "users", loc: { start: 680, end: 685 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "User",
										loc: { start: 688, end: 692 },
									},
									loc: { start: 688, end: 692 },
								},
								loc: { start: 688, end: 693 },
							},
							loc: { start: 687, end: 694 },
						},
						loc: { start: 687, end: 695 },
					},
					directives: [],
					loc: { start: 680, end: 695 },
				},
			],
			loc: { start: 636, end: 697 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 711, end: 716 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 721, end: 731 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 732, end: 736 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 738, end: 744 },
									},
									loc: { start: 738, end: 744 },
								},
								loc: { start: 738, end: 745 },
							},
							directives: [],
							loc: { start: 732, end: 745 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 748, end: 758 },
						},
						loc: { start: 748, end: 758 },
					},
					directives: [],
					loc: { start: 721, end: 758 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 761, end: 772 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Collection",
									loc: { start: 775, end: 785 },
								},
								loc: { start: 775, end: 785 },
							},
							loc: { start: 775, end: 786 },
						},
						loc: { start: 774, end: 787 },
					},
					directives: [],
					loc: { start: 761, end: 787 },
				},
			],
			loc: { start: 699, end: 789 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 803, end: 808 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 813, end: 818 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 819, end: 821 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 823, end: 825 },
									},
									loc: { start: 823, end: 825 },
								},
								loc: { start: 823, end: 826 },
							},
							directives: [],
							loc: { start: 819, end: 826 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 828, end: 834 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "StatusEnum",
									loc: { start: 836, end: 846 },
								},
								loc: { start: 836, end: 846 },
							},
							directives: [],
							loc: { start: 828, end: 846 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 849, end: 854 },
						},
						loc: { start: 849, end: 854 },
					},
					directives: [],
					loc: { start: 813, end: 854 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 857, end: 863 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Order",
										loc: { start: 866, end: 871 },
									},
									loc: { start: 866, end: 871 },
								},
								loc: { start: 866, end: 872 },
							},
							loc: { start: 865, end: 873 },
						},
						loc: { start: 865, end: 874 },
					},
					directives: [],
					loc: { start: 857, end: 874 },
				},
			],
			loc: { start: 791, end: 876 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 890, end: 895 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 900, end: 907 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 908, end: 910 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 912, end: 914 },
									},
									loc: { start: 912, end: 914 },
								},
								loc: { start: 912, end: 915 },
							},
							directives: [],
							loc: { start: 908, end: 915 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 918, end: 925 },
						},
						loc: { start: 918, end: 925 },
					},
					directives: [],
					loc: { start: 900, end: 925 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 928, end: 936 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 937, end: 941 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 943, end: 946 },
								},
								loc: { start: 943, end: 946 },
							},
							directives: [],
							loc: { start: 937, end: 946 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 948, end: 952 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 954, end: 957 },
								},
								loc: { start: 954, end: 957 },
							},
							directives: [],
							loc: { start: 948, end: 957 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 961, end: 968 },
									},
									loc: { start: 961, end: 968 },
								},
								loc: { start: 961, end: 969 },
							},
							loc: { start: 960, end: 970 },
						},
						loc: { start: 960, end: 971 },
					},
					directives: [],
					loc: { start: 928, end: 971 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 974, end: 987 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 988, end: 993 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 995, end: 1001 },
									},
									loc: { start: 995, end: 1001 },
								},
								loc: { start: 995, end: 1002 },
							},
							directives: [],
							loc: { start: 988, end: 1002 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Product",
									loc: { start: 1006, end: 1013 },
								},
								loc: { start: 1006, end: 1013 },
							},
							loc: { start: 1006, end: 1014 },
						},
						loc: { start: 1005, end: 1015 },
					},
					directives: [],
					loc: { start: 974, end: 1015 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 1018, end: 1030 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1032, end: 1035 },
							},
							loc: { start: 1032, end: 1035 },
						},
						loc: { start: 1032, end: 1036 },
					},
					directives: [],
					loc: { start: 1018, end: 1036 },
				},
			],
			loc: { start: 878, end: 1038 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1052, end: 1057 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 1062, end: 1075 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1076, end: 1080 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1082, end: 1088 },
									},
									loc: { start: 1082, end: 1088 },
								},
								loc: { start: 1082, end: 1089 },
							},
							directives: [],
							loc: { start: 1076, end: 1089 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1092, end: 1095 },
							},
							loc: { start: 1092, end: 1095 },
						},
						loc: { start: 1092, end: 1096 },
					},
					directives: [],
					loc: { start: 1062, end: 1096 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1099, end: 1107 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1108, end: 1112 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1114, end: 1120 },
									},
									loc: { start: 1114, end: 1120 },
								},
								loc: { start: 1114, end: 1121 },
							},
							directives: [],
							loc: { start: 1108, end: 1121 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 1124, end: 1132 },
						},
						loc: { start: 1124, end: 1132 },
					},
					directives: [],
					loc: { start: 1099, end: 1132 },
				},
			],
			loc: { start: 1040, end: 1134 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1148, end: 1153 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productReviews",
						loc: { start: 1158, end: 1172 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 1173, end: 1182 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1184, end: 1186 },
									},
									loc: { start: 1184, end: 1186 },
								},
								loc: { start: 1184, end: 1187 },
							},
							directives: [],
							loc: { start: 1173, end: 1187 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Review",
									loc: { start: 1191, end: 1197 },
								},
								loc: { start: 1191, end: 1197 },
							},
							loc: { start: 1191, end: 1198 },
						},
						loc: { start: 1190, end: 1199 },
					},
					directives: [],
					loc: { start: 1158, end: 1199 },
				},
			],
			loc: { start: 1136, end: 1201 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1207, end: 1212 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1202, end: 1212 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1219, end: 1227 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1214, end: 1227 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 1233, end: 1239 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1244, end: 1248 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1250, end: 1256 },
							},
							loc: { start: 1250, end: 1256 },
						},
						loc: { start: 1250, end: 1257 },
					},
					directives: [],
					loc: { start: 1244, end: 1257 },
				},
			],
			loc: { start: 1228, end: 1259 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 1266, end: 1274 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1279, end: 1281 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1283, end: 1285 },
							},
							loc: { start: 1283, end: 1285 },
						},
						loc: { start: 1283, end: 1286 },
					},
					directives: [],
					loc: { start: 1279, end: 1286 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1289, end: 1293 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1295, end: 1301 },
							},
							loc: { start: 1295, end: 1301 },
						},
						loc: { start: 1295, end: 1302 },
					},
					directives: [],
					loc: { start: 1289, end: 1302 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1305, end: 1313 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1314, end: 1318 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1320, end: 1323 },
								},
								loc: { start: 1320, end: 1323 },
							},
							directives: [],
							loc: { start: 1314, end: 1323 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1325, end: 1329 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1331, end: 1334 },
								},
								loc: { start: 1331, end: 1334 },
							},
							directives: [],
							loc: { start: 1325, end: 1334 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 1338, end: 1345 },
									},
									loc: { start: 1338, end: 1345 },
								},
								loc: { start: 1338, end: 1346 },
							},
							loc: { start: 1337, end: 1347 },
						},
						loc: { start: 1337, end: 1348 },
					},
					directives: [],
					loc: { start: 1305, end: 1348 },
				},
			],
			loc: { start: 1261, end: 1350 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1357, end: 1362 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1367, end: 1369 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1371, end: 1373 },
							},
							loc: { start: 1371, end: 1373 },
						},
						loc: { start: 1371, end: 1374 },
					},
					directives: [],
					loc: { start: 1367, end: 1374 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1377, end: 1387 },
					},
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "OrderItem",
									loc: { start: 1390, end: 1399 },
								},
								loc: { start: 1390, end: 1399 },
							},
							loc: { start: 1390, end: 1400 },
						},
						loc: { start: 1389, end: 1401 },
					},
					directives: [],
					loc: { start: 1377, end: 1401 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1404, end: 1408 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1410, end: 1414 },
							},
							loc: { start: 1410, end: 1414 },
						},
						loc: { start: 1410, end: 1415 },
					},
					directives: [],
					loc: { start: 1404, end: 1415 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1418, end: 1424 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1426, end: 1436 },
							},
							loc: { start: 1426, end: 1436 },
						},
						loc: { start: 1426, end: 1437 },
					},
					directives: [],
					loc: { start: 1418, end: 1437 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1440, end: 1445 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1447, end: 1450 },
							},
							loc: { start: 1447, end: 1450 },
						},
						loc: { start: 1447, end: 1451 },
					},
					directives: [],
					loc: { start: 1440, end: 1451 },
				},
			],
			loc: { start: 1352, end: 1453 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1460, end: 1469 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1474, end: 1476 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1478, end: 1480 },
							},
							loc: { start: 1478, end: 1480 },
						},
						loc: { start: 1478, end: 1481 },
					},
					directives: [],
					loc: { start: 1474, end: 1481 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1484, end: 1491 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1493, end: 1500 },
							},
							loc: { start: 1493, end: 1500 },
						},
						loc: { start: 1493, end: 1501 },
					},
					directives: [],
					loc: { start: 1484, end: 1501 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1504, end: 1512 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1514, end: 1517 },
							},
							loc: { start: 1514, end: 1517 },
						},
						loc: { start: 1514, end: 1518 },
					},
					directives: [],
					loc: { start: 1504, end: 1518 },
				},
			],
			loc: { start: 1455, end: 1520 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1527, end: 1537 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1542, end: 1544 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1546, end: 1548 },
							},
							loc: { start: 1546, end: 1548 },
						},
						loc: { start: 1546, end: 1549 },
					},
					directives: [],
					loc: { start: 1542, end: 1549 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1552, end: 1556 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1558, end: 1564 },
							},
							loc: { start: 1558, end: 1564 },
						},
						loc: { start: 1558, end: 1565 },
					},
					directives: [],
					loc: { start: 1552, end: 1565 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1568, end: 1576 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Product",
										loc: { start: 1579, end: 1586 },
									},
									loc: { start: 1579, end: 1586 },
								},
								loc: { start: 1579, end: 1587 },
							},
							loc: { start: 1578, end: 1588 },
						},
						loc: { start: 1578, end: 1589 },
					},
					directives: [],
					loc: { start: 1568, end: 1589 },
				},
			],
			loc: { start: 1522, end: 1591 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "DefaultIdResponse",
				loc: { start: 1598, end: 1615 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1620, end: 1622 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1624, end: 1626 },
							},
							loc: { start: 1624, end: 1626 },
						},
						loc: { start: 1624, end: 1627 },
					},
					directives: [],
					loc: { start: 1620, end: 1627 },
				},
			],
			loc: { start: 1593, end: 1629 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1636, end: 1640 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1645, end: 1647 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1649, end: 1651 },
							},
							loc: { start: 1649, end: 1651 },
						},
						loc: { start: 1649, end: 1652 },
					},
					directives: [],
					loc: { start: 1645, end: 1652 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1655, end: 1660 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1662, end: 1668 },
							},
							loc: { start: 1662, end: 1668 },
						},
						loc: { start: 1662, end: 1669 },
					},
					directives: [],
					loc: { start: 1655, end: 1669 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1672, end: 1680 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1682, end: 1689 },
							},
							loc: { start: 1682, end: 1689 },
						},
						loc: { start: 1682, end: 1690 },
					},
					directives: [],
					loc: { start: 1672, end: 1690 },
				},
			],
			loc: { start: 1631, end: 1692 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1699, end: 1706 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1711, end: 1713 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1715, end: 1717 },
							},
							loc: { start: 1715, end: 1717 },
						},
						loc: { start: 1715, end: 1718 },
					},
					directives: [],
					loc: { start: 1711, end: 1718 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1721, end: 1725 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1727, end: 1733 },
							},
							loc: { start: 1727, end: 1733 },
						},
						loc: { start: 1727, end: 1734 },
					},
					directives: [],
					loc: { start: 1721, end: 1734 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1737, end: 1742 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1744, end: 1747 },
							},
							loc: { start: 1744, end: 1747 },
						},
						loc: { start: 1744, end: 1748 },
					},
					directives: [],
					loc: { start: 1737, end: 1748 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1751, end: 1756 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1758, end: 1761 },
							},
							loc: { start: 1758, end: 1761 },
						},
						loc: { start: 1758, end: 1762 },
					},
					directives: [],
					loc: { start: 1751, end: 1762 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1765, end: 1772 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1774, end: 1781 },
							},
							loc: { start: 1774, end: 1781 },
						},
						loc: { start: 1774, end: 1782 },
					},
					directives: [],
					loc: { start: 1765, end: 1782 },
				},
			],
			loc: { start: 1694, end: 1784 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1791, end: 1796 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1801, end: 1805 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1807, end: 1813 },
							},
							loc: { start: 1807, end: 1813 },
						},
						loc: { start: 1807, end: 1814 },
					},
					directives: [],
					loc: { start: 1801, end: 1814 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1817, end: 1820 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1822, end: 1828 },
						},
						loc: { start: 1822, end: 1828 },
					},
					directives: [],
					loc: { start: 1817, end: 1828 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1831, end: 1837 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1839, end: 1842 },
							},
							loc: { start: 1839, end: 1842 },
						},
						loc: { start: 1839, end: 1843 },
					},
					directives: [],
					loc: { start: 1831, end: 1843 },
				},
			],
			loc: { start: 1786, end: 1845 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1852, end: 1859 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1864, end: 1866 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1868, end: 1870 },
							},
							loc: { start: 1868, end: 1870 },
						},
						loc: { start: 1868, end: 1871 },
					},
					directives: [],
					loc: { start: 1864, end: 1871 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1874, end: 1879 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1881, end: 1887 },
							},
							loc: { start: 1881, end: 1887 },
						},
						loc: { start: 1881, end: 1888 },
					},
					directives: [],
					loc: { start: 1874, end: 1888 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1891, end: 1904 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1906, end: 1912 },
							},
							loc: { start: 1906, end: 1912 },
						},
						loc: { start: 1906, end: 1913 },
					},
					directives: [],
					loc: { start: 1891, end: 1913 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1916, end: 1927 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1929, end: 1935 },
							},
							loc: { start: 1929, end: 1935 },
						},
						loc: { start: 1929, end: 1936 },
					},
					directives: [],
					loc: { start: 1916, end: 1936 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1939, end: 1945 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1947, end: 1953 },
							},
							loc: { start: 1947, end: 1953 },
						},
						loc: { start: 1947, end: 1954 },
					},
					directives: [],
					loc: { start: 1939, end: 1954 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1957, end: 1965 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1967, end: 1975 },
							},
							loc: { start: 1967, end: 1975 },
						},
						loc: { start: 1967, end: 1976 },
					},
					directives: [],
					loc: { start: 1957, end: 1976 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1979, end: 1985 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Track",
										loc: { start: 1988, end: 1993 },
									},
									loc: { start: 1988, end: 1993 },
								},
								loc: { start: 1988, end: 1994 },
							},
							loc: { start: 1987, end: 1995 },
						},
						loc: { start: 1987, end: 1996 },
					},
					directives: [],
					loc: { start: 1979, end: 1996 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1999, end: 2007 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "ListType",
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Variant",
										loc: { start: 2010, end: 2017 },
									},
									loc: { start: 2010, end: 2017 },
								},
								loc: { start: 2010, end: 2018 },
							},
							loc: { start: 2009, end: 2019 },
						},
						loc: { start: 2009, end: 2020 },
					},
					directives: [],
					loc: { start: 1999, end: 2020 },
				},
			],
			loc: { start: 1847, end: 2022 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2029, end: 2035 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2040, end: 2042 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2044, end: 2046 },
							},
							loc: { start: 2044, end: 2046 },
						},
						loc: { start: 2044, end: 2047 },
					},
					directives: [],
					loc: { start: 2040, end: 2047 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2050, end: 2056 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2058, end: 2061 },
							},
							loc: { start: 2058, end: 2061 },
						},
						loc: { start: 2058, end: 2062 },
					},
					directives: [],
					loc: { start: 2050, end: 2062 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "headline",
						loc: { start: 2065, end: 2073 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2075, end: 2081 },
							},
							loc: { start: 2075, end: 2081 },
						},
						loc: { start: 2075, end: 2082 },
					},
					directives: [],
					loc: { start: 2065, end: 2082 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "content",
						loc: { start: 2085, end: 2092 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2094, end: 2100 },
							},
							loc: { start: 2094, end: 2100 },
						},
						loc: { start: 2094, end: 2101 },
					},
					directives: [],
					loc: { start: 2085, end: 2101 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 2104, end: 2108 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 2110, end: 2114 },
							},
							loc: { start: 2110, end: 2114 },
						},
						loc: { start: 2110, end: 2115 },
					},
					directives: [],
					loc: { start: 2104, end: 2115 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2118, end: 2125 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2127, end: 2134 },
							},
							loc: { start: 2127, end: 2134 },
						},
						loc: { start: 2127, end: 2135 },
					},
					directives: [],
					loc: { start: 2118, end: 2135 },
				},
			],
			loc: { start: 2024, end: 2137 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 2144, end: 2154 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 2159, end: 2163 },
					},
					directives: [],
					loc: { start: 2159, end: 2163 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 2166, end: 2175 },
					},
					directives: [],
					loc: { start: 2166, end: 2175 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 2178, end: 2188 },
					},
					directives: [],
					loc: { start: 2178, end: 2188 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 2191, end: 2198 },
					},
					directives: [],
					loc: { start: 2191, end: 2198 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 2201, end: 2210 },
					},
					directives: [],
					loc: { start: 2201, end: 2210 },
				},
			],
			loc: { start: 2139, end: 2212 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 2219, end: 2230 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 2235, end: 2237 } },
					directives: [],
					loc: { start: 2235, end: 2237 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 2240, end: 2242 } },
					directives: [],
					loc: { start: 2240, end: 2242 },
				},
			],
			loc: { start: 2214, end: 2244 },
		},
	],
	loc: { start: 0, end: 2245 },
} as unknown as DocumentNode;

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
						kind: "NonNullType",
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
						loc: { start: 1190, end: 1200 },
					},
					directives: [],
					loc: { start: 1158, end: 1200 },
				},
			],
			loc: { start: 1136, end: 1202 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1208, end: 1213 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1203, end: 1213 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1220, end: 1228 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1215, end: 1228 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 1234, end: 1240 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1245, end: 1249 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1251, end: 1257 },
							},
							loc: { start: 1251, end: 1257 },
						},
						loc: { start: 1251, end: 1258 },
					},
					directives: [],
					loc: { start: 1245, end: 1258 },
				},
			],
			loc: { start: 1229, end: 1260 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 1267, end: 1275 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1280, end: 1282 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1284, end: 1286 },
							},
							loc: { start: 1284, end: 1286 },
						},
						loc: { start: 1284, end: 1287 },
					},
					directives: [],
					loc: { start: 1280, end: 1287 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1290, end: 1294 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1296, end: 1302 },
							},
							loc: { start: 1296, end: 1302 },
						},
						loc: { start: 1296, end: 1303 },
					},
					directives: [],
					loc: { start: 1290, end: 1303 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1306, end: 1314 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1315, end: 1319 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1321, end: 1324 },
								},
								loc: { start: 1321, end: 1324 },
							},
							directives: [],
							loc: { start: 1315, end: 1324 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1326, end: 1330 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1332, end: 1335 },
								},
								loc: { start: 1332, end: 1335 },
							},
							directives: [],
							loc: { start: 1326, end: 1335 },
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
										loc: { start: 1339, end: 1346 },
									},
									loc: { start: 1339, end: 1346 },
								},
								loc: { start: 1339, end: 1347 },
							},
							loc: { start: 1338, end: 1348 },
						},
						loc: { start: 1338, end: 1349 },
					},
					directives: [],
					loc: { start: 1306, end: 1349 },
				},
			],
			loc: { start: 1262, end: 1351 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1358, end: 1363 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1368, end: 1370 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1372, end: 1374 },
							},
							loc: { start: 1372, end: 1374 },
						},
						loc: { start: 1372, end: 1375 },
					},
					directives: [],
					loc: { start: 1368, end: 1375 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1378, end: 1388 },
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
									loc: { start: 1391, end: 1400 },
								},
								loc: { start: 1391, end: 1400 },
							},
							loc: { start: 1391, end: 1401 },
						},
						loc: { start: 1390, end: 1402 },
					},
					directives: [],
					loc: { start: 1378, end: 1402 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1405, end: 1409 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1411, end: 1415 },
							},
							loc: { start: 1411, end: 1415 },
						},
						loc: { start: 1411, end: 1416 },
					},
					directives: [],
					loc: { start: 1405, end: 1416 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1419, end: 1425 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1427, end: 1437 },
							},
							loc: { start: 1427, end: 1437 },
						},
						loc: { start: 1427, end: 1438 },
					},
					directives: [],
					loc: { start: 1419, end: 1438 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1441, end: 1446 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1448, end: 1451 },
							},
							loc: { start: 1448, end: 1451 },
						},
						loc: { start: 1448, end: 1452 },
					},
					directives: [],
					loc: { start: 1441, end: 1452 },
				},
			],
			loc: { start: 1353, end: 1454 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1461, end: 1470 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1475, end: 1477 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1479, end: 1481 },
							},
							loc: { start: 1479, end: 1481 },
						},
						loc: { start: 1479, end: 1482 },
					},
					directives: [],
					loc: { start: 1475, end: 1482 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1485, end: 1492 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1494, end: 1501 },
							},
							loc: { start: 1494, end: 1501 },
						},
						loc: { start: 1494, end: 1502 },
					},
					directives: [],
					loc: { start: 1485, end: 1502 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1505, end: 1513 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1515, end: 1518 },
							},
							loc: { start: 1515, end: 1518 },
						},
						loc: { start: 1515, end: 1519 },
					},
					directives: [],
					loc: { start: 1505, end: 1519 },
				},
			],
			loc: { start: 1456, end: 1521 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1528, end: 1538 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1543, end: 1545 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1547, end: 1549 },
							},
							loc: { start: 1547, end: 1549 },
						},
						loc: { start: 1547, end: 1550 },
					},
					directives: [],
					loc: { start: 1543, end: 1550 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1553, end: 1557 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1559, end: 1565 },
							},
							loc: { start: 1559, end: 1565 },
						},
						loc: { start: 1559, end: 1566 },
					},
					directives: [],
					loc: { start: 1553, end: 1566 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1569, end: 1577 },
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
										loc: { start: 1580, end: 1587 },
									},
									loc: { start: 1580, end: 1587 },
								},
								loc: { start: 1580, end: 1588 },
							},
							loc: { start: 1579, end: 1589 },
						},
						loc: { start: 1579, end: 1590 },
					},
					directives: [],
					loc: { start: 1569, end: 1590 },
				},
			],
			loc: { start: 1523, end: 1592 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "DefaultIdResponse",
				loc: { start: 1599, end: 1616 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1621, end: 1623 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1625, end: 1627 },
							},
							loc: { start: 1625, end: 1627 },
						},
						loc: { start: 1625, end: 1628 },
					},
					directives: [],
					loc: { start: 1621, end: 1628 },
				},
			],
			loc: { start: 1594, end: 1630 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1637, end: 1641 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1646, end: 1648 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1650, end: 1652 },
							},
							loc: { start: 1650, end: 1652 },
						},
						loc: { start: 1650, end: 1653 },
					},
					directives: [],
					loc: { start: 1646, end: 1653 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1656, end: 1660 },
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
					loc: { start: 1656, end: 1669 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1672, end: 1677 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1679, end: 1685 },
							},
							loc: { start: 1679, end: 1685 },
						},
						loc: { start: 1679, end: 1686 },
					},
					directives: [],
					loc: { start: 1672, end: 1686 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1689, end: 1697 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1699, end: 1706 },
							},
							loc: { start: 1699, end: 1706 },
						},
						loc: { start: 1699, end: 1707 },
					},
					directives: [],
					loc: { start: 1689, end: 1707 },
				},
			],
			loc: { start: 1632, end: 1709 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1716, end: 1723 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1728, end: 1730 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1732, end: 1734 },
							},
							loc: { start: 1732, end: 1734 },
						},
						loc: { start: 1732, end: 1735 },
					},
					directives: [],
					loc: { start: 1728, end: 1735 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1738, end: 1742 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1744, end: 1750 },
							},
							loc: { start: 1744, end: 1750 },
						},
						loc: { start: 1744, end: 1751 },
					},
					directives: [],
					loc: { start: 1738, end: 1751 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1754, end: 1759 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1761, end: 1764 },
							},
							loc: { start: 1761, end: 1764 },
						},
						loc: { start: 1761, end: 1765 },
					},
					directives: [],
					loc: { start: 1754, end: 1765 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1768, end: 1773 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1775, end: 1778 },
							},
							loc: { start: 1775, end: 1778 },
						},
						loc: { start: 1775, end: 1779 },
					},
					directives: [],
					loc: { start: 1768, end: 1779 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1782, end: 1789 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1791, end: 1798 },
							},
							loc: { start: 1791, end: 1798 },
						},
						loc: { start: 1791, end: 1799 },
					},
					directives: [],
					loc: { start: 1782, end: 1799 },
				},
			],
			loc: { start: 1711, end: 1801 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1808, end: 1813 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1818, end: 1822 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1824, end: 1830 },
							},
							loc: { start: 1824, end: 1830 },
						},
						loc: { start: 1824, end: 1831 },
					},
					directives: [],
					loc: { start: 1818, end: 1831 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1834, end: 1837 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1839, end: 1845 },
						},
						loc: { start: 1839, end: 1845 },
					},
					directives: [],
					loc: { start: 1834, end: 1845 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1848, end: 1854 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1856, end: 1859 },
							},
							loc: { start: 1856, end: 1859 },
						},
						loc: { start: 1856, end: 1860 },
					},
					directives: [],
					loc: { start: 1848, end: 1860 },
				},
			],
			loc: { start: 1803, end: 1862 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1869, end: 1876 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1881, end: 1883 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1885, end: 1887 },
							},
							loc: { start: 1885, end: 1887 },
						},
						loc: { start: 1885, end: 1888 },
					},
					directives: [],
					loc: { start: 1881, end: 1888 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1891, end: 1896 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1898, end: 1904 },
							},
							loc: { start: 1898, end: 1904 },
						},
						loc: { start: 1898, end: 1905 },
					},
					directives: [],
					loc: { start: 1891, end: 1905 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1908, end: 1921 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1923, end: 1929 },
							},
							loc: { start: 1923, end: 1929 },
						},
						loc: { start: 1923, end: 1930 },
					},
					directives: [],
					loc: { start: 1908, end: 1930 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1933, end: 1944 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1946, end: 1952 },
							},
							loc: { start: 1946, end: 1952 },
						},
						loc: { start: 1946, end: 1953 },
					},
					directives: [],
					loc: { start: 1933, end: 1953 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1956, end: 1962 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1964, end: 1970 },
							},
							loc: { start: 1964, end: 1970 },
						},
						loc: { start: 1964, end: 1971 },
					},
					directives: [],
					loc: { start: 1956, end: 1971 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1974, end: 1982 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1984, end: 1992 },
							},
							loc: { start: 1984, end: 1992 },
						},
						loc: { start: 1984, end: 1993 },
					},
					directives: [],
					loc: { start: 1974, end: 1993 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1996, end: 2002 },
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
										loc: { start: 2005, end: 2010 },
									},
									loc: { start: 2005, end: 2010 },
								},
								loc: { start: 2005, end: 2011 },
							},
							loc: { start: 2004, end: 2012 },
						},
						loc: { start: 2004, end: 2013 },
					},
					directives: [],
					loc: { start: 1996, end: 2013 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 2016, end: 2024 },
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
										loc: { start: 2027, end: 2034 },
									},
									loc: { start: 2027, end: 2034 },
								},
								loc: { start: 2027, end: 2035 },
							},
							loc: { start: 2026, end: 2036 },
						},
						loc: { start: 2026, end: 2037 },
					},
					directives: [],
					loc: { start: 2016, end: 2037 },
				},
			],
			loc: { start: 1864, end: 2039 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2046, end: 2052 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2057, end: 2059 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2061, end: 2063 },
							},
							loc: { start: 2061, end: 2063 },
						},
						loc: { start: 2061, end: 2064 },
					},
					directives: [],
					loc: { start: 2057, end: 2064 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2067, end: 2073 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2075, end: 2078 },
							},
							loc: { start: 2075, end: 2078 },
						},
						loc: { start: 2075, end: 2079 },
					},
					directives: [],
					loc: { start: 2067, end: 2079 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "headline",
						loc: { start: 2082, end: 2090 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2092, end: 2098 },
							},
							loc: { start: 2092, end: 2098 },
						},
						loc: { start: 2092, end: 2099 },
					},
					directives: [],
					loc: { start: 2082, end: 2099 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "content",
						loc: { start: 2102, end: 2109 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2111, end: 2117 },
							},
							loc: { start: 2111, end: 2117 },
						},
						loc: { start: 2111, end: 2118 },
					},
					directives: [],
					loc: { start: 2102, end: 2118 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 2121, end: 2125 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 2127, end: 2131 },
							},
							loc: { start: 2127, end: 2131 },
						},
						loc: { start: 2127, end: 2132 },
					},
					directives: [],
					loc: { start: 2121, end: 2132 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2135, end: 2142 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2144, end: 2151 },
							},
							loc: { start: 2144, end: 2151 },
						},
						loc: { start: 2144, end: 2152 },
					},
					directives: [],
					loc: { start: 2135, end: 2152 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "dateCreated",
						loc: { start: 2155, end: 2166 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2168, end: 2174 },
							},
							loc: { start: 2168, end: 2174 },
						},
						loc: { start: 2168, end: 2175 },
					},
					directives: [],
					loc: { start: 2155, end: 2175 },
				},
			],
			loc: { start: 2041, end: 2177 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 2184, end: 2194 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 2199, end: 2203 },
					},
					directives: [],
					loc: { start: 2199, end: 2203 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 2206, end: 2215 },
					},
					directives: [],
					loc: { start: 2206, end: 2215 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 2218, end: 2228 },
					},
					directives: [],
					loc: { start: 2218, end: 2228 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 2231, end: 2238 },
					},
					directives: [],
					loc: { start: 2231, end: 2238 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 2241, end: 2250 },
					},
					directives: [],
					loc: { start: 2241, end: 2250 },
				},
			],
			loc: { start: 2179, end: 2252 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 2259, end: 2270 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 2275, end: 2277 } },
					directives: [],
					loc: { start: 2275, end: 2277 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 2280, end: 2282 } },
					directives: [],
					loc: { start: 2280, end: 2282 },
				},
			],
			loc: { start: 2254, end: 2284 },
		},
	],
	loc: { start: 0, end: 2285 },
} as unknown as DocumentNode;

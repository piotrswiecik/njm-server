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
								value: "DefaultOrderResponse",
								loc: { start: 110, end: 130 },
							},
							loc: { start: 110, end: 130 },
						},
						loc: { start: 110, end: 131 },
					},
					directives: [],
					loc: { start: 84, end: 131 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "addToOrder",
						loc: { start: 134, end: 144 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "to",
								loc: { start: 145, end: 147 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 149, end: 151 },
									},
									loc: { start: 149, end: 151 },
								},
								loc: { start: 149, end: 152 },
							},
							directives: [],
							loc: { start: 145, end: 152 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 154, end: 161 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 163, end: 165 },
									},
									loc: { start: 163, end: 165 },
								},
								loc: { start: 163, end: 166 },
							},
							directives: [],
							loc: { start: 154, end: 166 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 168, end: 175 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 177, end: 188 },
									},
									loc: { start: 177, end: 188 },
								},
								loc: { start: 177, end: 189 },
							},
							directives: [],
							loc: { start: 168, end: 189 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 192, end: 197 },
							},
							loc: { start: 192, end: 197 },
						},
						loc: { start: 192, end: 198 },
					},
					directives: [],
					loc: { start: 134, end: 198 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeFromOrder",
						loc: { start: 201, end: 216 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "from",
								loc: { start: 217, end: 221 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 223, end: 225 },
									},
									loc: { start: 223, end: 225 },
								},
								loc: { start: 223, end: 226 },
							},
							directives: [],
							loc: { start: 217, end: 226 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 228, end: 235 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 237, end: 239 },
									},
									loc: { start: 237, end: 239 },
								},
								loc: { start: 237, end: 240 },
							},
							directives: [],
							loc: { start: 228, end: 240 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 242, end: 249 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 251, end: 262 },
									},
									loc: { start: 251, end: 262 },
								},
								loc: { start: 251, end: 263 },
							},
							directives: [],
							loc: { start: 242, end: 263 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 266, end: 271 },
							},
							loc: { start: 266, end: 271 },
						},
						loc: { start: 266, end: 272 },
					},
					directives: [],
					loc: { start: 201, end: 272 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 275, end: 286 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 287, end: 289 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 291, end: 293 },
									},
									loc: { start: 291, end: 293 },
								},
								loc: { start: 291, end: 294 },
							},
							directives: [],
							loc: { start: 287, end: 294 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultOrderResponse",
								loc: { start: 297, end: 317 },
							},
							loc: { start: 297, end: 317 },
						},
						loc: { start: 297, end: 318 },
					},
					directives: [],
					loc: { start: 275, end: 318 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "setOrderStatus",
						loc: { start: 321, end: 335 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 336, end: 341 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 343, end: 345 },
									},
									loc: { start: 343, end: 345 },
								},
								loc: { start: 343, end: 346 },
							},
							directives: [],
							loc: { start: 336, end: 346 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 348, end: 354 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "StatusEnum",
										loc: { start: 356, end: 366 },
									},
									loc: { start: 356, end: 366 },
								},
								loc: { start: 356, end: 367 },
							},
							directives: [],
							loc: { start: 348, end: 367 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultOrderResponse",
								loc: { start: 370, end: 390 },
							},
							loc: { start: 370, end: 390 },
						},
						loc: { start: 370, end: 391 },
					},
					directives: [],
					loc: { start: 321, end: 391 },
				},
			],
			loc: { start: 59, end: 393 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 406, end: 411 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 416, end: 420 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 421, end: 423 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 425, end: 427 },
									},
									loc: { start: 425, end: 427 },
								},
								loc: { start: 425, end: 428 },
							},
							directives: [],
							loc: { start: 421, end: 428 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 431, end: 435 },
						},
						loc: { start: 431, end: 435 },
					},
					directives: [],
					loc: { start: 416, end: 435 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "users", loc: { start: 438, end: 443 } },
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
										loc: { start: 446, end: 450 },
									},
									loc: { start: 446, end: 450 },
								},
								loc: { start: 446, end: 451 },
							},
							loc: { start: 445, end: 452 },
						},
						loc: { start: 445, end: 453 },
					},
					directives: [],
					loc: { start: 438, end: 453 },
				},
			],
			loc: { start: 394, end: 455 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 469, end: 474 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 479, end: 489 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 490, end: 494 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 496, end: 502 },
									},
									loc: { start: 496, end: 502 },
								},
								loc: { start: 496, end: 503 },
							},
							directives: [],
							loc: { start: 490, end: 503 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 506, end: 516 },
						},
						loc: { start: 506, end: 516 },
					},
					directives: [],
					loc: { start: 479, end: 516 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 519, end: 530 },
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
									loc: { start: 533, end: 543 },
								},
								loc: { start: 533, end: 543 },
							},
							loc: { start: 533, end: 544 },
						},
						loc: { start: 532, end: 545 },
					},
					directives: [],
					loc: { start: 519, end: 545 },
				},
			],
			loc: { start: 457, end: 547 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 561, end: 566 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 571, end: 576 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 577, end: 579 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 581, end: 583 },
									},
									loc: { start: 581, end: 583 },
								},
								loc: { start: 581, end: 584 },
							},
							directives: [],
							loc: { start: 577, end: 584 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 586, end: 592 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "StatusEnum",
									loc: { start: 594, end: 604 },
								},
								loc: { start: 594, end: 604 },
							},
							directives: [],
							loc: { start: 586, end: 604 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 607, end: 612 },
						},
						loc: { start: 607, end: 612 },
					},
					directives: [],
					loc: { start: 571, end: 612 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 615, end: 621 },
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
										loc: { start: 624, end: 629 },
									},
									loc: { start: 624, end: 629 },
								},
								loc: { start: 624, end: 630 },
							},
							loc: { start: 623, end: 631 },
						},
						loc: { start: 623, end: 632 },
					},
					directives: [],
					loc: { start: 615, end: 632 },
				},
			],
			loc: { start: 549, end: 634 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 648, end: 653 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 658, end: 665 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 666, end: 668 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 670, end: 672 },
									},
									loc: { start: 670, end: 672 },
								},
								loc: { start: 670, end: 673 },
							},
							directives: [],
							loc: { start: 666, end: 673 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 676, end: 683 },
						},
						loc: { start: 676, end: 683 },
					},
					directives: [],
					loc: { start: 658, end: 683 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 686, end: 694 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 695, end: 699 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 701, end: 704 },
								},
								loc: { start: 701, end: 704 },
							},
							directives: [],
							loc: { start: 695, end: 704 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 706, end: 710 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 712, end: 715 },
								},
								loc: { start: 712, end: 715 },
							},
							directives: [],
							loc: { start: 706, end: 715 },
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
										loc: { start: 719, end: 726 },
									},
									loc: { start: 719, end: 726 },
								},
								loc: { start: 719, end: 727 },
							},
							loc: { start: 718, end: 728 },
						},
						loc: { start: 718, end: 729 },
					},
					directives: [],
					loc: { start: 686, end: 729 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 732, end: 745 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 746, end: 751 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 753, end: 759 },
									},
									loc: { start: 753, end: 759 },
								},
								loc: { start: 753, end: 760 },
							},
							directives: [],
							loc: { start: 746, end: 760 },
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
									loc: { start: 764, end: 771 },
								},
								loc: { start: 764, end: 771 },
							},
							loc: { start: 764, end: 772 },
						},
						loc: { start: 763, end: 773 },
					},
					directives: [],
					loc: { start: 732, end: 773 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 776, end: 788 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 790, end: 793 },
							},
							loc: { start: 790, end: 793 },
						},
						loc: { start: 790, end: 794 },
					},
					directives: [],
					loc: { start: 776, end: 794 },
				},
			],
			loc: { start: 636, end: 796 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 810, end: 815 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 820, end: 833 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 834, end: 838 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 840, end: 846 },
									},
									loc: { start: 840, end: 846 },
								},
								loc: { start: 840, end: 847 },
							},
							directives: [],
							loc: { start: 834, end: 847 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 850, end: 853 },
							},
							loc: { start: 850, end: 853 },
						},
						loc: { start: 850, end: 854 },
					},
					directives: [],
					loc: { start: 820, end: 854 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 857, end: 865 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 866, end: 870 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 872, end: 878 },
									},
									loc: { start: 872, end: 878 },
								},
								loc: { start: 872, end: 879 },
							},
							directives: [],
							loc: { start: 866, end: 879 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 882, end: 890 },
						},
						loc: { start: 882, end: 890 },
					},
					directives: [],
					loc: { start: 857, end: 890 },
				},
			],
			loc: { start: 798, end: 892 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 898, end: 903 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 893, end: 903 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 910, end: 918 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 905, end: 918 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 924, end: 930 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 935, end: 939 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 941, end: 947 },
							},
							loc: { start: 941, end: 947 },
						},
						loc: { start: 941, end: 948 },
					},
					directives: [],
					loc: { start: 935, end: 948 },
				},
			],
			loc: { start: 919, end: 950 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 957, end: 965 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 970, end: 972 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 974, end: 976 },
							},
							loc: { start: 974, end: 976 },
						},
						loc: { start: 974, end: 977 },
					},
					directives: [],
					loc: { start: 970, end: 977 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 980, end: 984 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 986, end: 992 },
							},
							loc: { start: 986, end: 992 },
						},
						loc: { start: 986, end: 993 },
					},
					directives: [],
					loc: { start: 980, end: 993 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 996, end: 1004 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1005, end: 1009 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1011, end: 1014 },
								},
								loc: { start: 1011, end: 1014 },
							},
							directives: [],
							loc: { start: 1005, end: 1014 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1016, end: 1020 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1022, end: 1025 },
								},
								loc: { start: 1022, end: 1025 },
							},
							directives: [],
							loc: { start: 1016, end: 1025 },
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
										loc: { start: 1029, end: 1036 },
									},
									loc: { start: 1029, end: 1036 },
								},
								loc: { start: 1029, end: 1037 },
							},
							loc: { start: 1028, end: 1038 },
						},
						loc: { start: 1028, end: 1039 },
					},
					directives: [],
					loc: { start: 996, end: 1039 },
				},
			],
			loc: { start: 952, end: 1041 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1048, end: 1053 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1058, end: 1060 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1062, end: 1064 },
							},
							loc: { start: 1062, end: 1064 },
						},
						loc: { start: 1062, end: 1065 },
					},
					directives: [],
					loc: { start: 1058, end: 1065 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1068, end: 1078 },
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
									loc: { start: 1081, end: 1090 },
								},
								loc: { start: 1081, end: 1090 },
							},
							loc: { start: 1081, end: 1091 },
						},
						loc: { start: 1080, end: 1092 },
					},
					directives: [],
					loc: { start: 1068, end: 1092 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1095, end: 1099 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1101, end: 1105 },
							},
							loc: { start: 1101, end: 1105 },
						},
						loc: { start: 1101, end: 1106 },
					},
					directives: [],
					loc: { start: 1095, end: 1106 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1109, end: 1115 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1117, end: 1127 },
							},
							loc: { start: 1117, end: 1127 },
						},
						loc: { start: 1117, end: 1128 },
					},
					directives: [],
					loc: { start: 1109, end: 1128 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1131, end: 1136 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1138, end: 1141 },
							},
							loc: { start: 1138, end: 1141 },
						},
						loc: { start: 1138, end: 1142 },
					},
					directives: [],
					loc: { start: 1131, end: 1142 },
				},
			],
			loc: { start: 1043, end: 1144 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1151, end: 1160 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1165, end: 1167 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1169, end: 1171 },
							},
							loc: { start: 1169, end: 1171 },
						},
						loc: { start: 1169, end: 1172 },
					},
					directives: [],
					loc: { start: 1165, end: 1172 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1175, end: 1182 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1184, end: 1191 },
							},
							loc: { start: 1184, end: 1191 },
						},
						loc: { start: 1184, end: 1192 },
					},
					directives: [],
					loc: { start: 1175, end: 1192 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1195, end: 1203 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1205, end: 1208 },
							},
							loc: { start: 1205, end: 1208 },
						},
						loc: { start: 1205, end: 1209 },
					},
					directives: [],
					loc: { start: 1195, end: 1209 },
				},
			],
			loc: { start: 1146, end: 1211 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1218, end: 1228 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1233, end: 1235 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1237, end: 1239 },
							},
							loc: { start: 1237, end: 1239 },
						},
						loc: { start: 1237, end: 1240 },
					},
					directives: [],
					loc: { start: 1233, end: 1240 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1243, end: 1247 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1249, end: 1255 },
							},
							loc: { start: 1249, end: 1255 },
						},
						loc: { start: 1249, end: 1256 },
					},
					directives: [],
					loc: { start: 1243, end: 1256 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1259, end: 1267 },
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
										loc: { start: 1270, end: 1277 },
									},
									loc: { start: 1270, end: 1277 },
								},
								loc: { start: 1270, end: 1278 },
							},
							loc: { start: 1269, end: 1279 },
						},
						loc: { start: 1269, end: 1280 },
					},
					directives: [],
					loc: { start: 1259, end: 1280 },
				},
			],
			loc: { start: 1213, end: 1282 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "DefaultOrderResponse",
				loc: { start: 1289, end: 1309 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1314, end: 1316 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1318, end: 1320 },
							},
							loc: { start: 1318, end: 1320 },
						},
						loc: { start: 1318, end: 1321 },
					},
					directives: [],
					loc: { start: 1314, end: 1321 },
				},
			],
			loc: { start: 1284, end: 1323 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1330, end: 1334 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1339, end: 1341 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1343, end: 1345 },
							},
							loc: { start: 1343, end: 1345 },
						},
						loc: { start: 1343, end: 1346 },
					},
					directives: [],
					loc: { start: 1339, end: 1346 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1349, end: 1354 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1356, end: 1362 },
							},
							loc: { start: 1356, end: 1362 },
						},
						loc: { start: 1356, end: 1363 },
					},
					directives: [],
					loc: { start: 1349, end: 1363 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1366, end: 1374 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1376, end: 1383 },
							},
							loc: { start: 1376, end: 1383 },
						},
						loc: { start: 1376, end: 1384 },
					},
					directives: [],
					loc: { start: 1366, end: 1384 },
				},
			],
			loc: { start: 1325, end: 1386 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1393, end: 1400 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1405, end: 1407 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1409, end: 1411 },
							},
							loc: { start: 1409, end: 1411 },
						},
						loc: { start: 1409, end: 1412 },
					},
					directives: [],
					loc: { start: 1405, end: 1412 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1415, end: 1419 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1421, end: 1427 },
							},
							loc: { start: 1421, end: 1427 },
						},
						loc: { start: 1421, end: 1428 },
					},
					directives: [],
					loc: { start: 1415, end: 1428 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1431, end: 1436 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1438, end: 1441 },
							},
							loc: { start: 1438, end: 1441 },
						},
						loc: { start: 1438, end: 1442 },
					},
					directives: [],
					loc: { start: 1431, end: 1442 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1445, end: 1450 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1452, end: 1455 },
							},
							loc: { start: 1452, end: 1455 },
						},
						loc: { start: 1452, end: 1456 },
					},
					directives: [],
					loc: { start: 1445, end: 1456 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1459, end: 1466 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1468, end: 1475 },
						},
						loc: { start: 1468, end: 1475 },
					},
					directives: [],
					loc: { start: 1459, end: 1475 },
				},
			],
			loc: { start: 1388, end: 1477 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1484, end: 1489 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1494, end: 1498 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1500, end: 1506 },
							},
							loc: { start: 1500, end: 1506 },
						},
						loc: { start: 1500, end: 1507 },
					},
					directives: [],
					loc: { start: 1494, end: 1507 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1510, end: 1513 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1515, end: 1521 },
						},
						loc: { start: 1515, end: 1521 },
					},
					directives: [],
					loc: { start: 1510, end: 1521 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1524, end: 1530 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1532, end: 1535 },
							},
							loc: { start: 1532, end: 1535 },
						},
						loc: { start: 1532, end: 1536 },
					},
					directives: [],
					loc: { start: 1524, end: 1536 },
				},
			],
			loc: { start: 1479, end: 1538 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1545, end: 1552 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1557, end: 1559 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1561, end: 1563 },
							},
							loc: { start: 1561, end: 1563 },
						},
						loc: { start: 1561, end: 1564 },
					},
					directives: [],
					loc: { start: 1557, end: 1564 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1567, end: 1572 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1574, end: 1580 },
							},
							loc: { start: 1574, end: 1580 },
						},
						loc: { start: 1574, end: 1581 },
					},
					directives: [],
					loc: { start: 1567, end: 1581 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1584, end: 1597 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1599, end: 1605 },
							},
							loc: { start: 1599, end: 1605 },
						},
						loc: { start: 1599, end: 1606 },
					},
					directives: [],
					loc: { start: 1584, end: 1606 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1609, end: 1620 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1622, end: 1628 },
							},
							loc: { start: 1622, end: 1628 },
						},
						loc: { start: 1622, end: 1629 },
					},
					directives: [],
					loc: { start: 1609, end: 1629 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1632, end: 1638 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1640, end: 1646 },
							},
							loc: { start: 1640, end: 1646 },
						},
						loc: { start: 1640, end: 1647 },
					},
					directives: [],
					loc: { start: 1632, end: 1647 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1650, end: 1658 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1660, end: 1668 },
							},
							loc: { start: 1660, end: 1668 },
						},
						loc: { start: 1660, end: 1669 },
					},
					directives: [],
					loc: { start: 1650, end: 1669 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1672, end: 1678 },
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
										loc: { start: 1681, end: 1686 },
									},
									loc: { start: 1681, end: 1686 },
								},
								loc: { start: 1681, end: 1687 },
							},
							loc: { start: 1680, end: 1688 },
						},
						loc: { start: 1680, end: 1689 },
					},
					directives: [],
					loc: { start: 1672, end: 1689 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1692, end: 1700 },
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
										loc: { start: 1703, end: 1710 },
									},
									loc: { start: 1703, end: 1710 },
								},
								loc: { start: 1703, end: 1711 },
							},
							loc: { start: 1702, end: 1712 },
						},
						loc: { start: 1702, end: 1713 },
					},
					directives: [],
					loc: { start: 1692, end: 1713 },
				},
			],
			loc: { start: 1540, end: 1715 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 1722, end: 1732 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 1737, end: 1741 },
					},
					directives: [],
					loc: { start: 1737, end: 1741 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 1744, end: 1753 },
					},
					directives: [],
					loc: { start: 1744, end: 1753 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 1756, end: 1766 },
					},
					directives: [],
					loc: { start: 1756, end: 1766 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 1769, end: 1776 },
					},
					directives: [],
					loc: { start: 1769, end: 1776 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 1779, end: 1788 },
					},
					directives: [],
					loc: { start: 1779, end: 1788 },
				},
			],
			loc: { start: 1717, end: 1790 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 1797, end: 1808 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 1813, end: 1815 } },
					directives: [],
					loc: { start: 1813, end: 1815 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 1818, end: 1820 } },
					directives: [],
					loc: { start: 1818, end: 1820 },
				},
			],
			loc: { start: 1792, end: 1822 },
		},
	],
	loc: { start: 0, end: 1823 },
} as unknown as DocumentNode;

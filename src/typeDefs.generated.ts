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
						value: "removeAllFromOrder",
						loc: { start: 275, end: 293 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "from",
								loc: { start: 294, end: 298 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 300, end: 302 },
									},
									loc: { start: 300, end: 302 },
								},
								loc: { start: 300, end: 303 },
							},
							directives: [],
							loc: { start: 294, end: 303 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 305, end: 312 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 314, end: 316 },
									},
									loc: { start: 314, end: 316 },
								},
								loc: { start: 314, end: 317 },
							},
							directives: [],
							loc: { start: 305, end: 317 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 319, end: 326 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 328, end: 339 },
									},
									loc: { start: 328, end: 339 },
								},
								loc: { start: 328, end: 340 },
							},
							directives: [],
							loc: { start: 319, end: 340 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 343, end: 348 },
							},
							loc: { start: 343, end: 348 },
						},
						loc: { start: 343, end: 349 },
					},
					directives: [],
					loc: { start: 275, end: 349 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 352, end: 363 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 364, end: 366 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 368, end: 370 },
									},
									loc: { start: 368, end: 370 },
								},
								loc: { start: 368, end: 371 },
							},
							directives: [],
							loc: { start: 364, end: 371 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultOrderResponse",
								loc: { start: 374, end: 394 },
							},
							loc: { start: 374, end: 394 },
						},
						loc: { start: 374, end: 395 },
					},
					directives: [],
					loc: { start: 352, end: 395 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "setOrderStatus",
						loc: { start: 398, end: 412 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 413, end: 418 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 420, end: 422 },
									},
									loc: { start: 420, end: 422 },
								},
								loc: { start: 420, end: 423 },
							},
							directives: [],
							loc: { start: 413, end: 423 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 425, end: 431 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "StatusEnum",
										loc: { start: 433, end: 443 },
									},
									loc: { start: 433, end: 443 },
								},
								loc: { start: 433, end: 444 },
							},
							directives: [],
							loc: { start: 425, end: 444 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultOrderResponse",
								loc: { start: 447, end: 467 },
							},
							loc: { start: 447, end: 467 },
						},
						loc: { start: 447, end: 468 },
					},
					directives: [],
					loc: { start: 398, end: 468 },
				},
			],
			loc: { start: 59, end: 470 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 483, end: 488 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 493, end: 497 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 498, end: 500 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 502, end: 504 },
									},
									loc: { start: 502, end: 504 },
								},
								loc: { start: 502, end: 505 },
							},
							directives: [],
							loc: { start: 498, end: 505 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 508, end: 512 },
						},
						loc: { start: 508, end: 512 },
					},
					directives: [],
					loc: { start: 493, end: 512 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "users", loc: { start: 515, end: 520 } },
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
										loc: { start: 523, end: 527 },
									},
									loc: { start: 523, end: 527 },
								},
								loc: { start: 523, end: 528 },
							},
							loc: { start: 522, end: 529 },
						},
						loc: { start: 522, end: 530 },
					},
					directives: [],
					loc: { start: 515, end: 530 },
				},
			],
			loc: { start: 471, end: 532 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 546, end: 551 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 556, end: 566 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 567, end: 571 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 573, end: 579 },
									},
									loc: { start: 573, end: 579 },
								},
								loc: { start: 573, end: 580 },
							},
							directives: [],
							loc: { start: 567, end: 580 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 583, end: 593 },
						},
						loc: { start: 583, end: 593 },
					},
					directives: [],
					loc: { start: 556, end: 593 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 596, end: 607 },
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
									loc: { start: 610, end: 620 },
								},
								loc: { start: 610, end: 620 },
							},
							loc: { start: 610, end: 621 },
						},
						loc: { start: 609, end: 622 },
					},
					directives: [],
					loc: { start: 596, end: 622 },
				},
			],
			loc: { start: 534, end: 624 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 638, end: 643 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 648, end: 653 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 654, end: 656 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 658, end: 660 },
									},
									loc: { start: 658, end: 660 },
								},
								loc: { start: 658, end: 661 },
							},
							directives: [],
							loc: { start: 654, end: 661 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 663, end: 669 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "StatusEnum",
									loc: { start: 671, end: 681 },
								},
								loc: { start: 671, end: 681 },
							},
							directives: [],
							loc: { start: 663, end: 681 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 684, end: 689 },
						},
						loc: { start: 684, end: 689 },
					},
					directives: [],
					loc: { start: 648, end: 689 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 692, end: 698 },
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
										loc: { start: 701, end: 706 },
									},
									loc: { start: 701, end: 706 },
								},
								loc: { start: 701, end: 707 },
							},
							loc: { start: 700, end: 708 },
						},
						loc: { start: 700, end: 709 },
					},
					directives: [],
					loc: { start: 692, end: 709 },
				},
			],
			loc: { start: 626, end: 711 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 725, end: 730 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 735, end: 742 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 743, end: 745 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 747, end: 749 },
									},
									loc: { start: 747, end: 749 },
								},
								loc: { start: 747, end: 750 },
							},
							directives: [],
							loc: { start: 743, end: 750 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 753, end: 760 },
						},
						loc: { start: 753, end: 760 },
					},
					directives: [],
					loc: { start: 735, end: 760 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 763, end: 771 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 772, end: 776 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 778, end: 781 },
								},
								loc: { start: 778, end: 781 },
							},
							directives: [],
							loc: { start: 772, end: 781 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 783, end: 787 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 789, end: 792 },
								},
								loc: { start: 789, end: 792 },
							},
							directives: [],
							loc: { start: 783, end: 792 },
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
										loc: { start: 796, end: 803 },
									},
									loc: { start: 796, end: 803 },
								},
								loc: { start: 796, end: 804 },
							},
							loc: { start: 795, end: 805 },
						},
						loc: { start: 795, end: 806 },
					},
					directives: [],
					loc: { start: 763, end: 806 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 809, end: 822 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 823, end: 828 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 830, end: 836 },
									},
									loc: { start: 830, end: 836 },
								},
								loc: { start: 830, end: 837 },
							},
							directives: [],
							loc: { start: 823, end: 837 },
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
									loc: { start: 841, end: 848 },
								},
								loc: { start: 841, end: 848 },
							},
							loc: { start: 841, end: 849 },
						},
						loc: { start: 840, end: 850 },
					},
					directives: [],
					loc: { start: 809, end: 850 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 853, end: 865 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 867, end: 870 },
							},
							loc: { start: 867, end: 870 },
						},
						loc: { start: 867, end: 871 },
					},
					directives: [],
					loc: { start: 853, end: 871 },
				},
			],
			loc: { start: 713, end: 873 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 887, end: 892 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 897, end: 910 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 911, end: 915 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 917, end: 923 },
									},
									loc: { start: 917, end: 923 },
								},
								loc: { start: 917, end: 924 },
							},
							directives: [],
							loc: { start: 911, end: 924 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 927, end: 930 },
							},
							loc: { start: 927, end: 930 },
						},
						loc: { start: 927, end: 931 },
					},
					directives: [],
					loc: { start: 897, end: 931 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 934, end: 942 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 943, end: 947 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 949, end: 955 },
									},
									loc: { start: 949, end: 955 },
								},
								loc: { start: 949, end: 956 },
							},
							directives: [],
							loc: { start: 943, end: 956 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 959, end: 967 },
						},
						loc: { start: 959, end: 967 },
					},
					directives: [],
					loc: { start: 934, end: 967 },
				},
			],
			loc: { start: 875, end: 969 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 975, end: 980 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 970, end: 980 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 987, end: 995 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 982, end: 995 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 1001, end: 1007 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1012, end: 1016 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1018, end: 1024 },
							},
							loc: { start: 1018, end: 1024 },
						},
						loc: { start: 1018, end: 1025 },
					},
					directives: [],
					loc: { start: 1012, end: 1025 },
				},
			],
			loc: { start: 996, end: 1027 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 1034, end: 1042 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1047, end: 1049 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1051, end: 1053 },
							},
							loc: { start: 1051, end: 1053 },
						},
						loc: { start: 1051, end: 1054 },
					},
					directives: [],
					loc: { start: 1047, end: 1054 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1057, end: 1061 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1063, end: 1069 },
							},
							loc: { start: 1063, end: 1069 },
						},
						loc: { start: 1063, end: 1070 },
					},
					directives: [],
					loc: { start: 1057, end: 1070 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1073, end: 1081 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1082, end: 1086 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1088, end: 1091 },
								},
								loc: { start: 1088, end: 1091 },
							},
							directives: [],
							loc: { start: 1082, end: 1091 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1093, end: 1097 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1099, end: 1102 },
								},
								loc: { start: 1099, end: 1102 },
							},
							directives: [],
							loc: { start: 1093, end: 1102 },
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
										loc: { start: 1106, end: 1113 },
									},
									loc: { start: 1106, end: 1113 },
								},
								loc: { start: 1106, end: 1114 },
							},
							loc: { start: 1105, end: 1115 },
						},
						loc: { start: 1105, end: 1116 },
					},
					directives: [],
					loc: { start: 1073, end: 1116 },
				},
			],
			loc: { start: 1029, end: 1118 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1125, end: 1130 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1135, end: 1137 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1139, end: 1141 },
							},
							loc: { start: 1139, end: 1141 },
						},
						loc: { start: 1139, end: 1142 },
					},
					directives: [],
					loc: { start: 1135, end: 1142 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1145, end: 1155 },
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
									loc: { start: 1158, end: 1167 },
								},
								loc: { start: 1158, end: 1167 },
							},
							loc: { start: 1158, end: 1168 },
						},
						loc: { start: 1157, end: 1169 },
					},
					directives: [],
					loc: { start: 1145, end: 1169 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1172, end: 1176 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1178, end: 1182 },
							},
							loc: { start: 1178, end: 1182 },
						},
						loc: { start: 1178, end: 1183 },
					},
					directives: [],
					loc: { start: 1172, end: 1183 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1186, end: 1192 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1194, end: 1204 },
							},
							loc: { start: 1194, end: 1204 },
						},
						loc: { start: 1194, end: 1205 },
					},
					directives: [],
					loc: { start: 1186, end: 1205 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1208, end: 1213 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1215, end: 1218 },
							},
							loc: { start: 1215, end: 1218 },
						},
						loc: { start: 1215, end: 1219 },
					},
					directives: [],
					loc: { start: 1208, end: 1219 },
				},
			],
			loc: { start: 1120, end: 1221 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1228, end: 1237 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1242, end: 1244 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1246, end: 1248 },
							},
							loc: { start: 1246, end: 1248 },
						},
						loc: { start: 1246, end: 1249 },
					},
					directives: [],
					loc: { start: 1242, end: 1249 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1252, end: 1259 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1261, end: 1268 },
							},
							loc: { start: 1261, end: 1268 },
						},
						loc: { start: 1261, end: 1269 },
					},
					directives: [],
					loc: { start: 1252, end: 1269 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1272, end: 1280 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1282, end: 1285 },
							},
							loc: { start: 1282, end: 1285 },
						},
						loc: { start: 1282, end: 1286 },
					},
					directives: [],
					loc: { start: 1272, end: 1286 },
				},
			],
			loc: { start: 1223, end: 1288 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1295, end: 1305 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1310, end: 1312 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1314, end: 1316 },
							},
							loc: { start: 1314, end: 1316 },
						},
						loc: { start: 1314, end: 1317 },
					},
					directives: [],
					loc: { start: 1310, end: 1317 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1320, end: 1324 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1326, end: 1332 },
							},
							loc: { start: 1326, end: 1332 },
						},
						loc: { start: 1326, end: 1333 },
					},
					directives: [],
					loc: { start: 1320, end: 1333 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1336, end: 1344 },
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
										loc: { start: 1347, end: 1354 },
									},
									loc: { start: 1347, end: 1354 },
								},
								loc: { start: 1347, end: 1355 },
							},
							loc: { start: 1346, end: 1356 },
						},
						loc: { start: 1346, end: 1357 },
					},
					directives: [],
					loc: { start: 1336, end: 1357 },
				},
			],
			loc: { start: 1290, end: 1359 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "DefaultOrderResponse",
				loc: { start: 1366, end: 1386 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1391, end: 1393 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1395, end: 1397 },
							},
							loc: { start: 1395, end: 1397 },
						},
						loc: { start: 1395, end: 1398 },
					},
					directives: [],
					loc: { start: 1391, end: 1398 },
				},
			],
			loc: { start: 1361, end: 1400 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1407, end: 1411 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1416, end: 1418 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1420, end: 1422 },
							},
							loc: { start: 1420, end: 1422 },
						},
						loc: { start: 1420, end: 1423 },
					},
					directives: [],
					loc: { start: 1416, end: 1423 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1426, end: 1431 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1433, end: 1439 },
							},
							loc: { start: 1433, end: 1439 },
						},
						loc: { start: 1433, end: 1440 },
					},
					directives: [],
					loc: { start: 1426, end: 1440 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1443, end: 1451 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1453, end: 1460 },
							},
							loc: { start: 1453, end: 1460 },
						},
						loc: { start: 1453, end: 1461 },
					},
					directives: [],
					loc: { start: 1443, end: 1461 },
				},
			],
			loc: { start: 1402, end: 1463 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1470, end: 1477 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1482, end: 1484 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1486, end: 1488 },
							},
							loc: { start: 1486, end: 1488 },
						},
						loc: { start: 1486, end: 1489 },
					},
					directives: [],
					loc: { start: 1482, end: 1489 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1492, end: 1496 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1498, end: 1504 },
							},
							loc: { start: 1498, end: 1504 },
						},
						loc: { start: 1498, end: 1505 },
					},
					directives: [],
					loc: { start: 1492, end: 1505 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1508, end: 1513 },
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
					loc: { start: 1508, end: 1519 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1522, end: 1527 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1529, end: 1532 },
							},
							loc: { start: 1529, end: 1532 },
						},
						loc: { start: 1529, end: 1533 },
					},
					directives: [],
					loc: { start: 1522, end: 1533 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1536, end: 1543 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1545, end: 1552 },
							},
							loc: { start: 1545, end: 1552 },
						},
						loc: { start: 1545, end: 1553 },
					},
					directives: [],
					loc: { start: 1536, end: 1553 },
				},
			],
			loc: { start: 1465, end: 1555 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1562, end: 1567 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1572, end: 1576 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1578, end: 1584 },
							},
							loc: { start: 1578, end: 1584 },
						},
						loc: { start: 1578, end: 1585 },
					},
					directives: [],
					loc: { start: 1572, end: 1585 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1588, end: 1591 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1593, end: 1599 },
						},
						loc: { start: 1593, end: 1599 },
					},
					directives: [],
					loc: { start: 1588, end: 1599 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1602, end: 1608 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1610, end: 1613 },
							},
							loc: { start: 1610, end: 1613 },
						},
						loc: { start: 1610, end: 1614 },
					},
					directives: [],
					loc: { start: 1602, end: 1614 },
				},
			],
			loc: { start: 1557, end: 1616 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1623, end: 1630 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1635, end: 1637 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1639, end: 1641 },
							},
							loc: { start: 1639, end: 1641 },
						},
						loc: { start: 1639, end: 1642 },
					},
					directives: [],
					loc: { start: 1635, end: 1642 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1645, end: 1650 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1652, end: 1658 },
							},
							loc: { start: 1652, end: 1658 },
						},
						loc: { start: 1652, end: 1659 },
					},
					directives: [],
					loc: { start: 1645, end: 1659 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1662, end: 1675 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1677, end: 1683 },
							},
							loc: { start: 1677, end: 1683 },
						},
						loc: { start: 1677, end: 1684 },
					},
					directives: [],
					loc: { start: 1662, end: 1684 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1687, end: 1698 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1700, end: 1706 },
							},
							loc: { start: 1700, end: 1706 },
						},
						loc: { start: 1700, end: 1707 },
					},
					directives: [],
					loc: { start: 1687, end: 1707 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1710, end: 1716 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1718, end: 1724 },
							},
							loc: { start: 1718, end: 1724 },
						},
						loc: { start: 1718, end: 1725 },
					},
					directives: [],
					loc: { start: 1710, end: 1725 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1728, end: 1736 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1738, end: 1746 },
							},
							loc: { start: 1738, end: 1746 },
						},
						loc: { start: 1738, end: 1747 },
					},
					directives: [],
					loc: { start: 1728, end: 1747 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1750, end: 1756 },
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
										loc: { start: 1759, end: 1764 },
									},
									loc: { start: 1759, end: 1764 },
								},
								loc: { start: 1759, end: 1765 },
							},
							loc: { start: 1758, end: 1766 },
						},
						loc: { start: 1758, end: 1767 },
					},
					directives: [],
					loc: { start: 1750, end: 1767 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1770, end: 1778 },
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
										loc: { start: 1781, end: 1788 },
									},
									loc: { start: 1781, end: 1788 },
								},
								loc: { start: 1781, end: 1789 },
							},
							loc: { start: 1780, end: 1790 },
						},
						loc: { start: 1780, end: 1791 },
					},
					directives: [],
					loc: { start: 1770, end: 1791 },
				},
			],
			loc: { start: 1618, end: 1793 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 1800, end: 1810 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 1815, end: 1819 },
					},
					directives: [],
					loc: { start: 1815, end: 1819 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 1822, end: 1831 },
					},
					directives: [],
					loc: { start: 1822, end: 1831 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 1834, end: 1844 },
					},
					directives: [],
					loc: { start: 1834, end: 1844 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 1847, end: 1854 },
					},
					directives: [],
					loc: { start: 1847, end: 1854 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 1857, end: 1866 },
					},
					directives: [],
					loc: { start: 1857, end: 1866 },
				},
			],
			loc: { start: 1795, end: 1868 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 1875, end: 1886 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 1891, end: 1893 } },
					directives: [],
					loc: { start: 1891, end: 1893 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 1896, end: 1898 } },
					directives: [],
					loc: { start: 1896, end: 1898 },
				},
			],
			loc: { start: 1870, end: 1900 },
		},
	],
	loc: { start: 0, end: 1901 },
} as unknown as DocumentNode;

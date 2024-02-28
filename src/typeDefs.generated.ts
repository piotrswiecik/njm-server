import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "InputObjectTypeDefinition",
			name: { kind: "Name", value: "OrderInput", loc: { start: 6, end: 16 } },
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "orderId", loc: { start: 21, end: 28 } },
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 30, end: 32 } },
							loc: { start: 30, end: 32 },
						},
						loc: { start: 30, end: 33 },
					},
					directives: [],
					loc: { start: 21, end: 33 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 36, end: 46 },
					},
					type: {
						kind: "ListType",
						type: {
							kind: "NonNullType",
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "OrderItemInput",
									loc: { start: 49, end: 63 },
								},
								loc: { start: 49, end: 63 },
							},
							loc: { start: 49, end: 64 },
						},
						loc: { start: 48, end: 65 },
					},
					directives: [],
					loc: { start: 36, end: 65 },
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "status", loc: { start: 68, end: 74 } },
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Status",
							loc: { start: 76, end: 82 },
						},
						loc: { start: 76, end: 82 },
					},
					directives: [],
					loc: { start: 68, end: 82 },
				},
			],
			loc: { start: 0, end: 84 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItemInput",
				loc: { start: 92, end: 106 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "variantId",
						loc: { start: 111, end: 120 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 122, end: 124 },
							},
							loc: { start: 122, end: 124 },
						},
						loc: { start: 122, end: 125 },
					},
					directives: [],
					loc: { start: 111, end: 125 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 128, end: 136 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 138, end: 141 },
							},
							loc: { start: 138, end: 141 },
						},
						loc: { start: 138, end: 142 },
					},
					directives: [],
					loc: { start: 128, end: 142 },
				},
			],
			loc: { start: 86, end: 144 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 157, end: 165 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 170, end: 181 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "userId",
								loc: { start: 182, end: 188 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 190, end: 192 },
									},
									loc: { start: 190, end: 192 },
								},
								loc: { start: 190, end: 193 },
							},
							directives: [],
							loc: { start: 182, end: 193 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CreateOrderResponse",
								loc: { start: 196, end: 215 },
							},
							loc: { start: 196, end: 215 },
						},
						loc: { start: 196, end: 216 },
					},
					directives: [],
					loc: { start: 170, end: 216 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrder",
						loc: { start: 219, end: 230 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 231, end: 236 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderInput",
										loc: { start: 238, end: 248 },
									},
									loc: { start: 238, end: 248 },
								},
								loc: { start: 238, end: 249 },
							},
							directives: [],
							loc: { start: 231, end: 249 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 252, end: 257 },
							},
							loc: { start: 252, end: 257 },
						},
						loc: { start: 252, end: 258 },
					},
					directives: [],
					loc: { start: 219, end: 258 },
				},
			],
			loc: { start: 145, end: 260 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 273, end: 278 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 283, end: 287 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 288, end: 290 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 292, end: 294 },
									},
									loc: { start: 292, end: 294 },
								},
								loc: { start: 292, end: 295 },
							},
							directives: [],
							loc: { start: 288, end: 295 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 298, end: 302 },
						},
						loc: { start: 298, end: 302 },
					},
					directives: [],
					loc: { start: 283, end: 302 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "users", loc: { start: 305, end: 310 } },
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
										loc: { start: 313, end: 317 },
									},
									loc: { start: 313, end: 317 },
								},
								loc: { start: 313, end: 318 },
							},
							loc: { start: 312, end: 319 },
						},
						loc: { start: 312, end: 320 },
					},
					directives: [],
					loc: { start: 305, end: 320 },
				},
			],
			loc: { start: 261, end: 322 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 336, end: 341 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 346, end: 356 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 357, end: 361 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 363, end: 369 },
									},
									loc: { start: 363, end: 369 },
								},
								loc: { start: 363, end: 370 },
							},
							directives: [],
							loc: { start: 357, end: 370 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 373, end: 383 },
						},
						loc: { start: 373, end: 383 },
					},
					directives: [],
					loc: { start: 346, end: 383 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 386, end: 397 },
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
									loc: { start: 400, end: 410 },
								},
								loc: { start: 400, end: 410 },
							},
							loc: { start: 400, end: 411 },
						},
						loc: { start: 399, end: 412 },
					},
					directives: [],
					loc: { start: 386, end: 412 },
				},
			],
			loc: { start: 324, end: 414 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 428, end: 433 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 438, end: 443 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 444, end: 446 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 448, end: 450 },
									},
									loc: { start: 448, end: 450 },
								},
								loc: { start: 448, end: 451 },
							},
							directives: [],
							loc: { start: 444, end: 451 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 453, end: 459 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Status",
									loc: { start: 461, end: 467 },
								},
								loc: { start: 461, end: 467 },
							},
							directives: [],
							loc: { start: 453, end: 467 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 470, end: 475 },
						},
						loc: { start: 470, end: 475 },
					},
					directives: [],
					loc: { start: 438, end: 475 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 478, end: 484 },
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
										loc: { start: 487, end: 492 },
									},
									loc: { start: 487, end: 492 },
								},
								loc: { start: 487, end: 493 },
							},
							loc: { start: 486, end: 494 },
						},
						loc: { start: 486, end: 495 },
					},
					directives: [],
					loc: { start: 478, end: 495 },
				},
			],
			loc: { start: 416, end: 497 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 511, end: 516 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 521, end: 528 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 529, end: 531 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 533, end: 535 },
									},
									loc: { start: 533, end: 535 },
								},
								loc: { start: 533, end: 536 },
							},
							directives: [],
							loc: { start: 529, end: 536 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 539, end: 546 },
						},
						loc: { start: 539, end: 546 },
					},
					directives: [],
					loc: { start: 521, end: 546 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 549, end: 557 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 558, end: 562 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 564, end: 567 },
								},
								loc: { start: 564, end: 567 },
							},
							directives: [],
							loc: { start: 558, end: 567 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 569, end: 573 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 575, end: 578 },
								},
								loc: { start: 575, end: 578 },
							},
							directives: [],
							loc: { start: 569, end: 578 },
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
										loc: { start: 582, end: 589 },
									},
									loc: { start: 582, end: 589 },
								},
								loc: { start: 582, end: 590 },
							},
							loc: { start: 581, end: 591 },
						},
						loc: { start: 581, end: 592 },
					},
					directives: [],
					loc: { start: 549, end: 592 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 595, end: 608 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 609, end: 614 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 616, end: 622 },
									},
									loc: { start: 616, end: 622 },
								},
								loc: { start: 616, end: 623 },
							},
							directives: [],
							loc: { start: 609, end: 623 },
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
									loc: { start: 627, end: 634 },
								},
								loc: { start: 627, end: 634 },
							},
							loc: { start: 627, end: 635 },
						},
						loc: { start: 626, end: 636 },
					},
					directives: [],
					loc: { start: 595, end: 636 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 639, end: 651 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 653, end: 656 },
							},
							loc: { start: 653, end: 656 },
						},
						loc: { start: 653, end: 657 },
					},
					directives: [],
					loc: { start: 639, end: 657 },
				},
			],
			loc: { start: 499, end: 659 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 673, end: 678 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 683, end: 696 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 697, end: 701 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 703, end: 709 },
									},
									loc: { start: 703, end: 709 },
								},
								loc: { start: 703, end: 710 },
							},
							directives: [],
							loc: { start: 697, end: 710 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 713, end: 716 },
							},
							loc: { start: 713, end: 716 },
						},
						loc: { start: 713, end: 717 },
					},
					directives: [],
					loc: { start: 683, end: 717 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 720, end: 728 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 729, end: 733 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 735, end: 741 },
									},
									loc: { start: 735, end: 741 },
								},
								loc: { start: 735, end: 742 },
							},
							directives: [],
							loc: { start: 729, end: 742 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 745, end: 753 },
						},
						loc: { start: 745, end: 753 },
					},
					directives: [],
					loc: { start: 720, end: 753 },
				},
			],
			loc: { start: 661, end: 755 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 761, end: 766 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 756, end: 766 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 773, end: 781 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 768, end: 781 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 787, end: 793 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 798, end: 802 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 804, end: 810 },
							},
							loc: { start: 804, end: 810 },
						},
						loc: { start: 804, end: 811 },
					},
					directives: [],
					loc: { start: 798, end: 811 },
				},
			],
			loc: { start: 782, end: 813 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 820, end: 828 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 833, end: 835 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 837, end: 839 },
							},
							loc: { start: 837, end: 839 },
						},
						loc: { start: 837, end: 840 },
					},
					directives: [],
					loc: { start: 833, end: 840 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 843, end: 847 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 849, end: 855 },
							},
							loc: { start: 849, end: 855 },
						},
						loc: { start: 849, end: 856 },
					},
					directives: [],
					loc: { start: 843, end: 856 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 859, end: 867 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 868, end: 872 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 874, end: 877 },
								},
								loc: { start: 874, end: 877 },
							},
							directives: [],
							loc: { start: 868, end: 877 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 879, end: 883 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 885, end: 888 },
								},
								loc: { start: 885, end: 888 },
							},
							directives: [],
							loc: { start: 879, end: 888 },
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
										loc: { start: 892, end: 899 },
									},
									loc: { start: 892, end: 899 },
								},
								loc: { start: 892, end: 900 },
							},
							loc: { start: 891, end: 901 },
						},
						loc: { start: 891, end: 902 },
					},
					directives: [],
					loc: { start: 859, end: 902 },
				},
			],
			loc: { start: 815, end: 904 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 911, end: 916 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 921, end: 923 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 925, end: 927 },
							},
							loc: { start: 925, end: 927 },
						},
						loc: { start: 925, end: 928 },
					},
					directives: [],
					loc: { start: 921, end: 928 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 931, end: 941 },
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
									loc: { start: 944, end: 953 },
								},
								loc: { start: 944, end: 953 },
							},
							loc: { start: 944, end: 954 },
						},
						loc: { start: 943, end: 955 },
					},
					directives: [],
					loc: { start: 931, end: 955 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 958, end: 962 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 964, end: 968 },
							},
							loc: { start: 964, end: 968 },
						},
						loc: { start: 964, end: 969 },
					},
					directives: [],
					loc: { start: 958, end: 969 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 972, end: 978 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Status",
								loc: { start: 980, end: 986 },
							},
							loc: { start: 980, end: 986 },
						},
						loc: { start: 980, end: 987 },
					},
					directives: [],
					loc: { start: 972, end: 987 },
				},
			],
			loc: { start: 906, end: 989 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 996, end: 1005 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1010, end: 1012 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1014, end: 1016 },
							},
							loc: { start: 1014, end: 1016 },
						},
						loc: { start: 1014, end: 1017 },
					},
					directives: [],
					loc: { start: 1010, end: 1017 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1020, end: 1027 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1029, end: 1036 },
							},
							loc: { start: 1029, end: 1036 },
						},
						loc: { start: 1029, end: 1037 },
					},
					directives: [],
					loc: { start: 1020, end: 1037 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1040, end: 1048 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1050, end: 1053 },
							},
							loc: { start: 1050, end: 1053 },
						},
						loc: { start: 1050, end: 1054 },
					},
					directives: [],
					loc: { start: 1040, end: 1054 },
				},
			],
			loc: { start: 991, end: 1056 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1063, end: 1073 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1078, end: 1080 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1082, end: 1084 },
							},
							loc: { start: 1082, end: 1084 },
						},
						loc: { start: 1082, end: 1085 },
					},
					directives: [],
					loc: { start: 1078, end: 1085 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1088, end: 1092 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1094, end: 1100 },
							},
							loc: { start: 1094, end: 1100 },
						},
						loc: { start: 1094, end: 1101 },
					},
					directives: [],
					loc: { start: 1088, end: 1101 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1104, end: 1112 },
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
										loc: { start: 1115, end: 1122 },
									},
									loc: { start: 1115, end: 1122 },
								},
								loc: { start: 1115, end: 1123 },
							},
							loc: { start: 1114, end: 1124 },
						},
						loc: { start: 1114, end: 1125 },
					},
					directives: [],
					loc: { start: 1104, end: 1125 },
				},
			],
			loc: { start: 1058, end: 1127 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CreateOrderResponse",
				loc: { start: 1134, end: 1153 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1158, end: 1160 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1162, end: 1164 },
							},
							loc: { start: 1162, end: 1164 },
						},
						loc: { start: 1162, end: 1165 },
					},
					directives: [],
					loc: { start: 1158, end: 1165 },
				},
			],
			loc: { start: 1129, end: 1167 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1174, end: 1178 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1183, end: 1185 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1187, end: 1189 },
							},
							loc: { start: 1187, end: 1189 },
						},
						loc: { start: 1187, end: 1190 },
					},
					directives: [],
					loc: { start: 1183, end: 1190 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1193, end: 1198 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1200, end: 1206 },
							},
							loc: { start: 1200, end: 1206 },
						},
						loc: { start: 1200, end: 1207 },
					},
					directives: [],
					loc: { start: 1193, end: 1207 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1210, end: 1218 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1220, end: 1227 },
							},
							loc: { start: 1220, end: 1227 },
						},
						loc: { start: 1220, end: 1228 },
					},
					directives: [],
					loc: { start: 1210, end: 1228 },
				},
			],
			loc: { start: 1169, end: 1230 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1237, end: 1244 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1249, end: 1251 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1253, end: 1255 },
							},
							loc: { start: 1253, end: 1255 },
						},
						loc: { start: 1253, end: 1256 },
					},
					directives: [],
					loc: { start: 1249, end: 1256 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1259, end: 1263 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1265, end: 1271 },
							},
							loc: { start: 1265, end: 1271 },
						},
						loc: { start: 1265, end: 1272 },
					},
					directives: [],
					loc: { start: 1259, end: 1272 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1275, end: 1280 },
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
					loc: { start: 1275, end: 1286 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1289, end: 1294 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1296, end: 1299 },
							},
							loc: { start: 1296, end: 1299 },
						},
						loc: { start: 1296, end: 1300 },
					},
					directives: [],
					loc: { start: 1289, end: 1300 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1303, end: 1310 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1312, end: 1319 },
						},
						loc: { start: 1312, end: 1319 },
					},
					directives: [],
					loc: { start: 1303, end: 1319 },
				},
			],
			loc: { start: 1232, end: 1321 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1328, end: 1333 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1338, end: 1342 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1344, end: 1350 },
							},
							loc: { start: 1344, end: 1350 },
						},
						loc: { start: 1344, end: 1351 },
					},
					directives: [],
					loc: { start: 1338, end: 1351 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1354, end: 1357 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1359, end: 1365 },
						},
						loc: { start: 1359, end: 1365 },
					},
					directives: [],
					loc: { start: 1354, end: 1365 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1368, end: 1374 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1376, end: 1379 },
							},
							loc: { start: 1376, end: 1379 },
						},
						loc: { start: 1376, end: 1380 },
					},
					directives: [],
					loc: { start: 1368, end: 1380 },
				},
			],
			loc: { start: 1323, end: 1382 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1389, end: 1396 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1401, end: 1403 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1405, end: 1407 },
							},
							loc: { start: 1405, end: 1407 },
						},
						loc: { start: 1405, end: 1408 },
					},
					directives: [],
					loc: { start: 1401, end: 1408 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1411, end: 1416 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1418, end: 1424 },
							},
							loc: { start: 1418, end: 1424 },
						},
						loc: { start: 1418, end: 1425 },
					},
					directives: [],
					loc: { start: 1411, end: 1425 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1428, end: 1441 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1443, end: 1449 },
							},
							loc: { start: 1443, end: 1449 },
						},
						loc: { start: 1443, end: 1450 },
					},
					directives: [],
					loc: { start: 1428, end: 1450 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1453, end: 1464 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1466, end: 1472 },
							},
							loc: { start: 1466, end: 1472 },
						},
						loc: { start: 1466, end: 1473 },
					},
					directives: [],
					loc: { start: 1453, end: 1473 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1476, end: 1482 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1484, end: 1490 },
							},
							loc: { start: 1484, end: 1490 },
						},
						loc: { start: 1484, end: 1491 },
					},
					directives: [],
					loc: { start: 1476, end: 1491 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1494, end: 1502 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1504, end: 1512 },
							},
							loc: { start: 1504, end: 1512 },
						},
						loc: { start: 1504, end: 1513 },
					},
					directives: [],
					loc: { start: 1494, end: 1513 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1516, end: 1522 },
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
										loc: { start: 1525, end: 1530 },
									},
									loc: { start: 1525, end: 1530 },
								},
								loc: { start: 1525, end: 1531 },
							},
							loc: { start: 1524, end: 1532 },
						},
						loc: { start: 1524, end: 1533 },
					},
					directives: [],
					loc: { start: 1516, end: 1533 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1536, end: 1544 },
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
										loc: { start: 1547, end: 1554 },
									},
									loc: { start: 1547, end: 1554 },
								},
								loc: { start: 1547, end: 1555 },
							},
							loc: { start: 1546, end: 1556 },
						},
						loc: { start: 1546, end: 1557 },
					},
					directives: [],
					loc: { start: 1536, end: 1557 },
				},
			],
			loc: { start: 1384, end: 1559 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "Status", loc: { start: 1566, end: 1572 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 1577, end: 1581 },
					},
					directives: [],
					loc: { start: 1577, end: 1581 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 1584, end: 1593 },
					},
					directives: [],
					loc: { start: 1584, end: 1593 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 1596, end: 1606 },
					},
					directives: [],
					loc: { start: 1596, end: 1606 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 1609, end: 1616 },
					},
					directives: [],
					loc: { start: 1609, end: 1616 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 1619, end: 1628 },
					},
					directives: [],
					loc: { start: 1619, end: 1628 },
				},
			],
			loc: { start: 1561, end: 1630 },
		},
	],
	loc: { start: 0, end: 1631 },
} as unknown as DocumentNode;

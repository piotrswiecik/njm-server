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
								value: "CreateOrderResponse",
								loc: { start: 110, end: 129 },
							},
							loc: { start: 110, end: 129 },
						},
						loc: { start: 110, end: 130 },
					},
					directives: [],
					loc: { start: 84, end: 130 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "addToOrder",
						loc: { start: 133, end: 143 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "to",
								loc: { start: 144, end: 146 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 148, end: 150 },
									},
									loc: { start: 148, end: 150 },
								},
								loc: { start: 148, end: 151 },
							},
							directives: [],
							loc: { start: 144, end: 151 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 153, end: 160 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 162, end: 164 },
									},
									loc: { start: 162, end: 164 },
								},
								loc: { start: 162, end: 165 },
							},
							directives: [],
							loc: { start: 153, end: 165 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 167, end: 174 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 176, end: 187 },
									},
									loc: { start: 176, end: 187 },
								},
								loc: { start: 176, end: 188 },
							},
							directives: [],
							loc: { start: 167, end: 188 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 191, end: 196 },
							},
							loc: { start: 191, end: 196 },
						},
						loc: { start: 191, end: 197 },
					},
					directives: [],
					loc: { start: 133, end: 197 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeFromOrder",
						loc: { start: 200, end: 215 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "from",
								loc: { start: 216, end: 220 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 222, end: 224 },
									},
									loc: { start: 222, end: 224 },
								},
								loc: { start: 222, end: 225 },
							},
							directives: [],
							loc: { start: 216, end: 225 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 227, end: 234 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 236, end: 238 },
									},
									loc: { start: 236, end: 238 },
								},
								loc: { start: 236, end: 239 },
							},
							directives: [],
							loc: { start: 227, end: 239 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 241, end: 248 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 250, end: 261 },
									},
									loc: { start: 250, end: 261 },
								},
								loc: { start: 250, end: 262 },
							},
							directives: [],
							loc: { start: 241, end: 262 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 265, end: 270 },
							},
							loc: { start: 265, end: 270 },
						},
						loc: { start: 265, end: 271 },
					},
					directives: [],
					loc: { start: 200, end: 271 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 274, end: 285 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 286, end: 288 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 290, end: 292 },
									},
									loc: { start: 290, end: 292 },
								},
								loc: { start: 290, end: 293 },
							},
							directives: [],
							loc: { start: 286, end: 293 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 296, end: 298 },
							},
							loc: { start: 296, end: 298 },
						},
						loc: { start: 296, end: 299 },
					},
					directives: [],
					loc: { start: 274, end: 299 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "setOrderStatus",
						loc: { start: 302, end: 316 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 317, end: 322 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 324, end: 326 },
									},
									loc: { start: 324, end: 326 },
								},
								loc: { start: 324, end: 327 },
							},
							directives: [],
							loc: { start: 317, end: 327 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 329, end: 335 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "StatusEnum",
										loc: { start: 337, end: 347 },
									},
									loc: { start: 337, end: 347 },
								},
								loc: { start: 337, end: 348 },
							},
							directives: [],
							loc: { start: 329, end: 348 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 351, end: 353 },
							},
							loc: { start: 351, end: 353 },
						},
						loc: { start: 351, end: 354 },
					},
					directives: [],
					loc: { start: 302, end: 354 },
				},
			],
			loc: { start: 59, end: 356 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 369, end: 374 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 379, end: 383 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 384, end: 386 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 388, end: 390 },
									},
									loc: { start: 388, end: 390 },
								},
								loc: { start: 388, end: 391 },
							},
							directives: [],
							loc: { start: 384, end: 391 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 394, end: 398 },
						},
						loc: { start: 394, end: 398 },
					},
					directives: [],
					loc: { start: 379, end: 398 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "users", loc: { start: 401, end: 406 } },
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
										loc: { start: 409, end: 413 },
									},
									loc: { start: 409, end: 413 },
								},
								loc: { start: 409, end: 414 },
							},
							loc: { start: 408, end: 415 },
						},
						loc: { start: 408, end: 416 },
					},
					directives: [],
					loc: { start: 401, end: 416 },
				},
			],
			loc: { start: 357, end: 418 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 432, end: 437 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 442, end: 452 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 453, end: 457 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 459, end: 465 },
									},
									loc: { start: 459, end: 465 },
								},
								loc: { start: 459, end: 466 },
							},
							directives: [],
							loc: { start: 453, end: 466 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 469, end: 479 },
						},
						loc: { start: 469, end: 479 },
					},
					directives: [],
					loc: { start: 442, end: 479 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 482, end: 493 },
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
									loc: { start: 496, end: 506 },
								},
								loc: { start: 496, end: 506 },
							},
							loc: { start: 496, end: 507 },
						},
						loc: { start: 495, end: 508 },
					},
					directives: [],
					loc: { start: 482, end: 508 },
				},
			],
			loc: { start: 420, end: 510 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 524, end: 529 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 534, end: 539 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 540, end: 542 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 544, end: 546 },
									},
									loc: { start: 544, end: 546 },
								},
								loc: { start: 544, end: 547 },
							},
							directives: [],
							loc: { start: 540, end: 547 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 549, end: 555 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "StatusEnum",
									loc: { start: 557, end: 567 },
								},
								loc: { start: 557, end: 567 },
							},
							directives: [],
							loc: { start: 549, end: 567 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 570, end: 575 },
						},
						loc: { start: 570, end: 575 },
					},
					directives: [],
					loc: { start: 534, end: 575 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 578, end: 584 },
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
										loc: { start: 587, end: 592 },
									},
									loc: { start: 587, end: 592 },
								},
								loc: { start: 587, end: 593 },
							},
							loc: { start: 586, end: 594 },
						},
						loc: { start: 586, end: 595 },
					},
					directives: [],
					loc: { start: 578, end: 595 },
				},
			],
			loc: { start: 512, end: 597 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 611, end: 616 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 621, end: 628 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 629, end: 631 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 633, end: 635 },
									},
									loc: { start: 633, end: 635 },
								},
								loc: { start: 633, end: 636 },
							},
							directives: [],
							loc: { start: 629, end: 636 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 639, end: 646 },
						},
						loc: { start: 639, end: 646 },
					},
					directives: [],
					loc: { start: 621, end: 646 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 649, end: 657 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 658, end: 662 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 664, end: 667 },
								},
								loc: { start: 664, end: 667 },
							},
							directives: [],
							loc: { start: 658, end: 667 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 669, end: 673 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 675, end: 678 },
								},
								loc: { start: 675, end: 678 },
							},
							directives: [],
							loc: { start: 669, end: 678 },
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
										loc: { start: 682, end: 689 },
									},
									loc: { start: 682, end: 689 },
								},
								loc: { start: 682, end: 690 },
							},
							loc: { start: 681, end: 691 },
						},
						loc: { start: 681, end: 692 },
					},
					directives: [],
					loc: { start: 649, end: 692 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 695, end: 708 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 709, end: 714 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 716, end: 722 },
									},
									loc: { start: 716, end: 722 },
								},
								loc: { start: 716, end: 723 },
							},
							directives: [],
							loc: { start: 709, end: 723 },
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
									loc: { start: 727, end: 734 },
								},
								loc: { start: 727, end: 734 },
							},
							loc: { start: 727, end: 735 },
						},
						loc: { start: 726, end: 736 },
					},
					directives: [],
					loc: { start: 695, end: 736 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 739, end: 751 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 753, end: 756 },
							},
							loc: { start: 753, end: 756 },
						},
						loc: { start: 753, end: 757 },
					},
					directives: [],
					loc: { start: 739, end: 757 },
				},
			],
			loc: { start: 599, end: 759 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 773, end: 778 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 783, end: 796 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 797, end: 801 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 803, end: 809 },
									},
									loc: { start: 803, end: 809 },
								},
								loc: { start: 803, end: 810 },
							},
							directives: [],
							loc: { start: 797, end: 810 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 813, end: 816 },
							},
							loc: { start: 813, end: 816 },
						},
						loc: { start: 813, end: 817 },
					},
					directives: [],
					loc: { start: 783, end: 817 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 820, end: 828 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 829, end: 833 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 835, end: 841 },
									},
									loc: { start: 835, end: 841 },
								},
								loc: { start: 835, end: 842 },
							},
							directives: [],
							loc: { start: 829, end: 842 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 845, end: 853 },
						},
						loc: { start: 845, end: 853 },
					},
					directives: [],
					loc: { start: 820, end: 853 },
				},
			],
			loc: { start: 761, end: 855 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 861, end: 866 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 856, end: 866 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Mutation", loc: { start: 873, end: 881 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 868, end: 881 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 887, end: 893 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 898, end: 902 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 904, end: 910 },
							},
							loc: { start: 904, end: 910 },
						},
						loc: { start: 904, end: 911 },
					},
					directives: [],
					loc: { start: 898, end: 911 },
				},
			],
			loc: { start: 882, end: 913 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 920, end: 928 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 933, end: 935 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 937, end: 939 },
							},
							loc: { start: 937, end: 939 },
						},
						loc: { start: 937, end: 940 },
					},
					directives: [],
					loc: { start: 933, end: 940 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 943, end: 947 } },
					arguments: [],
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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 959, end: 967 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 968, end: 972 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 974, end: 977 },
								},
								loc: { start: 974, end: 977 },
							},
							directives: [],
							loc: { start: 968, end: 977 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 979, end: 983 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 985, end: 988 },
								},
								loc: { start: 985, end: 988 },
							},
							directives: [],
							loc: { start: 979, end: 988 },
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
										loc: { start: 992, end: 999 },
									},
									loc: { start: 992, end: 999 },
								},
								loc: { start: 992, end: 1000 },
							},
							loc: { start: 991, end: 1001 },
						},
						loc: { start: 991, end: 1002 },
					},
					directives: [],
					loc: { start: 959, end: 1002 },
				},
			],
			loc: { start: 915, end: 1004 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1011, end: 1016 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1021, end: 1023 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1025, end: 1027 },
							},
							loc: { start: 1025, end: 1027 },
						},
						loc: { start: 1025, end: 1028 },
					},
					directives: [],
					loc: { start: 1021, end: 1028 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1031, end: 1041 },
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
									loc: { start: 1044, end: 1053 },
								},
								loc: { start: 1044, end: 1053 },
							},
							loc: { start: 1044, end: 1054 },
						},
						loc: { start: 1043, end: 1055 },
					},
					directives: [],
					loc: { start: 1031, end: 1055 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1058, end: 1062 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1064, end: 1068 },
							},
							loc: { start: 1064, end: 1068 },
						},
						loc: { start: 1064, end: 1069 },
					},
					directives: [],
					loc: { start: 1058, end: 1069 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1072, end: 1078 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1080, end: 1090 },
							},
							loc: { start: 1080, end: 1090 },
						},
						loc: { start: 1080, end: 1091 },
					},
					directives: [],
					loc: { start: 1072, end: 1091 },
				},
			],
			loc: { start: 1006, end: 1093 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1100, end: 1109 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1114, end: 1116 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1118, end: 1120 },
							},
							loc: { start: 1118, end: 1120 },
						},
						loc: { start: 1118, end: 1121 },
					},
					directives: [],
					loc: { start: 1114, end: 1121 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1124, end: 1131 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1133, end: 1140 },
							},
							loc: { start: 1133, end: 1140 },
						},
						loc: { start: 1133, end: 1141 },
					},
					directives: [],
					loc: { start: 1124, end: 1141 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1144, end: 1152 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1154, end: 1157 },
							},
							loc: { start: 1154, end: 1157 },
						},
						loc: { start: 1154, end: 1158 },
					},
					directives: [],
					loc: { start: 1144, end: 1158 },
				},
			],
			loc: { start: 1095, end: 1160 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1167, end: 1177 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1182, end: 1184 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1186, end: 1188 },
							},
							loc: { start: 1186, end: 1188 },
						},
						loc: { start: 1186, end: 1189 },
					},
					directives: [],
					loc: { start: 1182, end: 1189 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1192, end: 1196 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1198, end: 1204 },
							},
							loc: { start: 1198, end: 1204 },
						},
						loc: { start: 1198, end: 1205 },
					},
					directives: [],
					loc: { start: 1192, end: 1205 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1208, end: 1216 },
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
										loc: { start: 1219, end: 1226 },
									},
									loc: { start: 1219, end: 1226 },
								},
								loc: { start: 1219, end: 1227 },
							},
							loc: { start: 1218, end: 1228 },
						},
						loc: { start: 1218, end: 1229 },
					},
					directives: [],
					loc: { start: 1208, end: 1229 },
				},
			],
			loc: { start: 1162, end: 1231 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CreateOrderResponse",
				loc: { start: 1238, end: 1257 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1262, end: 1264 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1266, end: 1268 },
							},
							loc: { start: 1266, end: 1268 },
						},
						loc: { start: 1266, end: 1269 },
					},
					directives: [],
					loc: { start: 1262, end: 1269 },
				},
			],
			loc: { start: 1233, end: 1271 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1278, end: 1282 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1287, end: 1289 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1291, end: 1293 },
							},
							loc: { start: 1291, end: 1293 },
						},
						loc: { start: 1291, end: 1294 },
					},
					directives: [],
					loc: { start: 1287, end: 1294 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1297, end: 1302 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1304, end: 1310 },
							},
							loc: { start: 1304, end: 1310 },
						},
						loc: { start: 1304, end: 1311 },
					},
					directives: [],
					loc: { start: 1297, end: 1311 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1314, end: 1322 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1324, end: 1331 },
							},
							loc: { start: 1324, end: 1331 },
						},
						loc: { start: 1324, end: 1332 },
					},
					directives: [],
					loc: { start: 1314, end: 1332 },
				},
			],
			loc: { start: 1273, end: 1334 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1341, end: 1348 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1353, end: 1355 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1357, end: 1359 },
							},
							loc: { start: 1357, end: 1359 },
						},
						loc: { start: 1357, end: 1360 },
					},
					directives: [],
					loc: { start: 1353, end: 1360 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1363, end: 1367 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1369, end: 1375 },
							},
							loc: { start: 1369, end: 1375 },
						},
						loc: { start: 1369, end: 1376 },
					},
					directives: [],
					loc: { start: 1363, end: 1376 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1379, end: 1384 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1386, end: 1389 },
							},
							loc: { start: 1386, end: 1389 },
						},
						loc: { start: 1386, end: 1390 },
					},
					directives: [],
					loc: { start: 1379, end: 1390 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1393, end: 1398 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1400, end: 1403 },
							},
							loc: { start: 1400, end: 1403 },
						},
						loc: { start: 1400, end: 1404 },
					},
					directives: [],
					loc: { start: 1393, end: 1404 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1407, end: 1414 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1416, end: 1423 },
						},
						loc: { start: 1416, end: 1423 },
					},
					directives: [],
					loc: { start: 1407, end: 1423 },
				},
			],
			loc: { start: 1336, end: 1425 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1432, end: 1437 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1442, end: 1446 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1448, end: 1454 },
							},
							loc: { start: 1448, end: 1454 },
						},
						loc: { start: 1448, end: 1455 },
					},
					directives: [],
					loc: { start: 1442, end: 1455 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1458, end: 1461 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1463, end: 1469 },
						},
						loc: { start: 1463, end: 1469 },
					},
					directives: [],
					loc: { start: 1458, end: 1469 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1472, end: 1478 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1480, end: 1483 },
							},
							loc: { start: 1480, end: 1483 },
						},
						loc: { start: 1480, end: 1484 },
					},
					directives: [],
					loc: { start: 1472, end: 1484 },
				},
			],
			loc: { start: 1427, end: 1486 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1493, end: 1500 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1505, end: 1507 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1509, end: 1511 },
							},
							loc: { start: 1509, end: 1511 },
						},
						loc: { start: 1509, end: 1512 },
					},
					directives: [],
					loc: { start: 1505, end: 1512 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1515, end: 1520 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1522, end: 1528 },
							},
							loc: { start: 1522, end: 1528 },
						},
						loc: { start: 1522, end: 1529 },
					},
					directives: [],
					loc: { start: 1515, end: 1529 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1532, end: 1545 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1547, end: 1553 },
							},
							loc: { start: 1547, end: 1553 },
						},
						loc: { start: 1547, end: 1554 },
					},
					directives: [],
					loc: { start: 1532, end: 1554 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1557, end: 1568 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1570, end: 1576 },
							},
							loc: { start: 1570, end: 1576 },
						},
						loc: { start: 1570, end: 1577 },
					},
					directives: [],
					loc: { start: 1557, end: 1577 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1580, end: 1586 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1588, end: 1594 },
							},
							loc: { start: 1588, end: 1594 },
						},
						loc: { start: 1588, end: 1595 },
					},
					directives: [],
					loc: { start: 1580, end: 1595 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1598, end: 1606 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1608, end: 1616 },
							},
							loc: { start: 1608, end: 1616 },
						},
						loc: { start: 1608, end: 1617 },
					},
					directives: [],
					loc: { start: 1598, end: 1617 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1620, end: 1626 },
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
										loc: { start: 1629, end: 1634 },
									},
									loc: { start: 1629, end: 1634 },
								},
								loc: { start: 1629, end: 1635 },
							},
							loc: { start: 1628, end: 1636 },
						},
						loc: { start: 1628, end: 1637 },
					},
					directives: [],
					loc: { start: 1620, end: 1637 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1640, end: 1648 },
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
										loc: { start: 1651, end: 1658 },
									},
									loc: { start: 1651, end: 1658 },
								},
								loc: { start: 1651, end: 1659 },
							},
							loc: { start: 1650, end: 1660 },
						},
						loc: { start: 1650, end: 1661 },
					},
					directives: [],
					loc: { start: 1640, end: 1661 },
				},
			],
			loc: { start: 1488, end: 1663 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 1670, end: 1680 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 1685, end: 1689 },
					},
					directives: [],
					loc: { start: 1685, end: 1689 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 1692, end: 1701 },
					},
					directives: [],
					loc: { start: 1692, end: 1701 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 1704, end: 1714 },
					},
					directives: [],
					loc: { start: 1704, end: 1714 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 1717, end: 1724 },
					},
					directives: [],
					loc: { start: 1717, end: 1724 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 1727, end: 1736 },
					},
					directives: [],
					loc: { start: 1727, end: 1736 },
				},
			],
			loc: { start: 1665, end: 1738 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 1745, end: 1756 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 1761, end: 1763 } },
					directives: [],
					loc: { start: 1761, end: 1763 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 1766, end: 1768 } },
					directives: [],
					loc: { start: 1766, end: 1768 },
				},
			],
			loc: { start: 1740, end: 1770 },
		},
	],
	loc: { start: 0, end: 1771 },
} as unknown as DocumentNode;

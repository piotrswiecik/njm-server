import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 5, end: 11 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 16, end: 20 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 22, end: 28 },
							},
							loc: { start: 22, end: 28 },
						},
						loc: { start: 22, end: 29 },
					},
					directives: [],
					loc: { start: 16, end: 29 },
				},
			],
			loc: { start: 0, end: 31 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 44, end: 49 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 54, end: 67 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 68, end: 72 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 74, end: 80 },
									},
									loc: { start: 74, end: 80 },
								},
								loc: { start: 74, end: 81 },
							},
							directives: [],
							loc: { start: 68, end: 81 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 84, end: 87 } },
							loc: { start: 84, end: 87 },
						},
						loc: { start: 84, end: 88 },
					},
					directives: [],
					loc: { start: 54, end: 88 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 91, end: 99 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 100, end: 104 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 106, end: 112 },
									},
									loc: { start: 106, end: 112 },
								},
								loc: { start: 106, end: 113 },
							},
							directives: [],
							loc: { start: 100, end: 113 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 116, end: 124 },
						},
						loc: { start: 116, end: 124 },
					},
					directives: [],
					loc: { start: 91, end: 124 },
				},
			],
			loc: { start: 32, end: 126 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 133, end: 141 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 146, end: 148 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 150, end: 152 },
							},
							loc: { start: 150, end: 152 },
						},
						loc: { start: 150, end: 153 },
					},
					directives: [],
					loc: { start: 146, end: 153 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 156, end: 160 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 162, end: 168 },
							},
							loc: { start: 162, end: 168 },
						},
						loc: { start: 162, end: 169 },
					},
					directives: [],
					loc: { start: 156, end: 169 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 172, end: 180 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 181, end: 185 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 187, end: 190 },
								},
								loc: { start: 187, end: 190 },
							},
							directives: [],
							loc: { start: 181, end: 190 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 192, end: 196 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 198, end: 201 },
								},
								loc: { start: 198, end: 201 },
							},
							directives: [],
							loc: { start: 192, end: 201 },
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
										loc: { start: 205, end: 212 },
									},
									loc: { start: 205, end: 212 },
								},
								loc: { start: 205, end: 213 },
							},
							loc: { start: 204, end: 214 },
						},
						loc: { start: 204, end: 215 },
					},
					directives: [],
					loc: { start: 172, end: 215 },
				},
			],
			loc: { start: 128, end: 217 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 230, end: 235 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 240, end: 250 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 251, end: 255 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 257, end: 263 },
									},
									loc: { start: 257, end: 263 },
								},
								loc: { start: 257, end: 264 },
							},
							directives: [],
							loc: { start: 251, end: 264 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 267, end: 277 },
						},
						loc: { start: 267, end: 277 },
					},
					directives: [],
					loc: { start: 240, end: 277 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 280, end: 291 },
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
									loc: { start: 294, end: 304 },
								},
								loc: { start: 294, end: 304 },
							},
							loc: { start: 294, end: 305 },
						},
						loc: { start: 293, end: 306 },
					},
					directives: [],
					loc: { start: 280, end: 306 },
				},
			],
			loc: { start: 218, end: 308 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 315, end: 325 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 330, end: 332 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 334, end: 336 },
							},
							loc: { start: 334, end: 336 },
						},
						loc: { start: 334, end: 337 },
					},
					directives: [],
					loc: { start: 330, end: 337 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 340, end: 344 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 346, end: 352 },
							},
							loc: { start: 346, end: 352 },
						},
						loc: { start: 346, end: 353 },
					},
					directives: [],
					loc: { start: 340, end: 353 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 356, end: 364 },
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
										loc: { start: 367, end: 374 },
									},
									loc: { start: 367, end: 374 },
								},
								loc: { start: 367, end: 375 },
							},
							loc: { start: 366, end: 376 },
						},
						loc: { start: 366, end: 377 },
					},
					directives: [],
					loc: { start: 356, end: 377 },
				},
			],
			loc: { start: 310, end: 379 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 392, end: 397 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 402, end: 407 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 408, end: 410 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 412, end: 414 },
									},
									loc: { start: 412, end: 414 },
								},
								loc: { start: 412, end: 415 },
							},
							directives: [],
							loc: { start: 408, end: 415 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 417, end: 423 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Status",
									loc: { start: 425, end: 431 },
								},
								loc: { start: 425, end: 431 },
							},
							directives: [],
							loc: { start: 417, end: 431 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 434, end: 439 },
						},
						loc: { start: 434, end: 439 },
					},
					directives: [],
					loc: { start: 402, end: 439 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 442, end: 448 },
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
										loc: { start: 451, end: 456 },
									},
									loc: { start: 451, end: 456 },
								},
								loc: { start: 451, end: 457 },
							},
							loc: { start: 450, end: 458 },
						},
						loc: { start: 450, end: 459 },
					},
					directives: [],
					loc: { start: 442, end: 459 },
				},
			],
			loc: { start: 380, end: 461 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 468, end: 473 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 478, end: 480 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 482, end: 484 },
							},
							loc: { start: 482, end: 484 },
						},
						loc: { start: 482, end: 485 },
					},
					directives: [],
					loc: { start: 478, end: 485 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 488, end: 498 },
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
									loc: { start: 501, end: 510 },
								},
								loc: { start: 501, end: 510 },
							},
							loc: { start: 501, end: 511 },
						},
						loc: { start: 500, end: 512 },
					},
					directives: [],
					loc: { start: 488, end: 512 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 515, end: 519 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 521, end: 525 },
							},
							loc: { start: 521, end: 525 },
						},
						loc: { start: 521, end: 526 },
					},
					directives: [],
					loc: { start: 515, end: 526 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 529, end: 535 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Status",
								loc: { start: 537, end: 543 },
							},
							loc: { start: 537, end: 543 },
						},
						loc: { start: 537, end: 544 },
					},
					directives: [],
					loc: { start: 529, end: 544 },
				},
			],
			loc: { start: 463, end: 546 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 553, end: 562 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 567, end: 569 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 571, end: 573 },
							},
							loc: { start: 571, end: 573 },
						},
						loc: { start: 571, end: 574 },
					},
					directives: [],
					loc: { start: 567, end: 574 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 577, end: 584 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 586, end: 593 },
							},
							loc: { start: 586, end: 593 },
						},
						loc: { start: 586, end: 594 },
					},
					directives: [],
					loc: { start: 577, end: 594 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 597, end: 605 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 607, end: 610 },
							},
							loc: { start: 607, end: 610 },
						},
						loc: { start: 607, end: 611 },
					},
					directives: [],
					loc: { start: 597, end: 611 },
				},
			],
			loc: { start: 548, end: 613 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "Status", loc: { start: 620, end: 626 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CART", loc: { start: 631, end: 635 } },
					directives: [],
					loc: { start: 631, end: 635 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 638, end: 647 },
					},
					directives: [],
					loc: { start: 638, end: 647 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 650, end: 660 },
					},
					directives: [],
					loc: { start: 650, end: 660 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 663, end: 670 },
					},
					directives: [],
					loc: { start: 663, end: 670 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 673, end: 682 },
					},
					directives: [],
					loc: { start: 673, end: 682 },
				},
			],
			loc: { start: 615, end: 684 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 698, end: 706 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 711, end: 722 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "userId",
								loc: { start: 723, end: 729 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 731, end: 733 },
									},
									loc: { start: 731, end: 733 },
								},
								loc: { start: 731, end: 734 },
							},
							directives: [],
							loc: { start: 723, end: 734 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CreateOrderResponse",
								loc: { start: 737, end: 756 },
							},
							loc: { start: 737, end: 756 },
						},
						loc: { start: 737, end: 757 },
					},
					directives: [],
					loc: { start: 711, end: 757 },
				},
			],
			loc: { start: 686, end: 759 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CreateOrderResponse",
				loc: { start: 766, end: 785 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 790, end: 792 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 794, end: 796 },
							},
							loc: { start: 794, end: 796 },
						},
						loc: { start: 794, end: 797 },
					},
					directives: [],
					loc: { start: 790, end: 797 },
				},
			],
			loc: { start: 761, end: 799 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 812, end: 817 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 822, end: 829 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 830, end: 832 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 834, end: 836 },
									},
									loc: { start: 834, end: 836 },
								},
								loc: { start: 834, end: 837 },
							},
							directives: [],
							loc: { start: 830, end: 837 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 840, end: 847 },
						},
						loc: { start: 840, end: 847 },
					},
					directives: [],
					loc: { start: 822, end: 847 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 850, end: 858 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 859, end: 863 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 865, end: 868 },
								},
								loc: { start: 865, end: 868 },
							},
							directives: [],
							loc: { start: 859, end: 868 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 870, end: 874 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 876, end: 879 },
								},
								loc: { start: 876, end: 879 },
							},
							directives: [],
							loc: { start: 870, end: 879 },
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
										loc: { start: 883, end: 890 },
									},
									loc: { start: 883, end: 890 },
								},
								loc: { start: 883, end: 891 },
							},
							loc: { start: 882, end: 892 },
						},
						loc: { start: 882, end: 893 },
					},
					directives: [],
					loc: { start: 850, end: 893 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 896, end: 909 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 910, end: 915 },
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
							loc: { start: 910, end: 924 },
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
									loc: { start: 928, end: 935 },
								},
								loc: { start: 928, end: 935 },
							},
							loc: { start: 928, end: 936 },
						},
						loc: { start: 927, end: 937 },
					},
					directives: [],
					loc: { start: 896, end: 937 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 940, end: 952 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 954, end: 957 },
							},
							loc: { start: 954, end: 957 },
						},
						loc: { start: 954, end: 958 },
					},
					directives: [],
					loc: { start: 940, end: 958 },
				},
			],
			loc: { start: 800, end: 960 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 967, end: 974 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 979, end: 981 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 983, end: 985 },
							},
							loc: { start: 983, end: 985 },
						},
						loc: { start: 983, end: 986 },
					},
					directives: [],
					loc: { start: 979, end: 986 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 989, end: 994 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 996, end: 1002 },
							},
							loc: { start: 996, end: 1002 },
						},
						loc: { start: 996, end: 1003 },
					},
					directives: [],
					loc: { start: 989, end: 1003 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1006, end: 1019 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1021, end: 1027 },
							},
							loc: { start: 1021, end: 1027 },
						},
						loc: { start: 1021, end: 1028 },
					},
					directives: [],
					loc: { start: 1006, end: 1028 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1031, end: 1042 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1044, end: 1050 },
							},
							loc: { start: 1044, end: 1050 },
						},
						loc: { start: 1044, end: 1051 },
					},
					directives: [],
					loc: { start: 1031, end: 1051 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1054, end: 1060 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1062, end: 1068 },
							},
							loc: { start: 1062, end: 1068 },
						},
						loc: { start: 1062, end: 1069 },
					},
					directives: [],
					loc: { start: 1054, end: 1069 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1072, end: 1080 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1082, end: 1090 },
							},
							loc: { start: 1082, end: 1090 },
						},
						loc: { start: 1082, end: 1091 },
					},
					directives: [],
					loc: { start: 1072, end: 1091 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1094, end: 1100 },
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
										loc: { start: 1103, end: 1108 },
									},
									loc: { start: 1103, end: 1108 },
								},
								loc: { start: 1103, end: 1109 },
							},
							loc: { start: 1102, end: 1110 },
						},
						loc: { start: 1102, end: 1111 },
					},
					directives: [],
					loc: { start: 1094, end: 1111 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1114, end: 1122 },
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
										loc: { start: 1125, end: 1132 },
									},
									loc: { start: 1125, end: 1132 },
								},
								loc: { start: 1125, end: 1133 },
							},
							loc: { start: 1124, end: 1134 },
						},
						loc: { start: 1124, end: 1135 },
					},
					directives: [],
					loc: { start: 1114, end: 1135 },
				},
			],
			loc: { start: 962, end: 1137 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1143, end: 1148 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1138, end: 1148 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1155, end: 1163 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1150, end: 1163 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1169, end: 1174 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1179, end: 1183 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1185, end: 1191 },
							},
							loc: { start: 1185, end: 1191 },
						},
						loc: { start: 1185, end: 1192 },
					},
					directives: [],
					loc: { start: 1179, end: 1192 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1195, end: 1198 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1200, end: 1206 },
						},
						loc: { start: 1200, end: 1206 },
					},
					directives: [],
					loc: { start: 1195, end: 1206 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1209, end: 1215 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1217, end: 1220 },
							},
							loc: { start: 1217, end: 1220 },
						},
						loc: { start: 1217, end: 1221 },
					},
					directives: [],
					loc: { start: 1209, end: 1221 },
				},
			],
			loc: { start: 1164, end: 1223 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1236, end: 1241 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1246, end: 1250 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1251, end: 1253 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1255, end: 1257 },
									},
									loc: { start: 1255, end: 1257 },
								},
								loc: { start: 1255, end: 1258 },
							},
							directives: [],
							loc: { start: 1251, end: 1258 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 1261, end: 1265 },
						},
						loc: { start: 1261, end: 1265 },
					},
					directives: [],
					loc: { start: 1246, end: 1265 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "users",
						loc: { start: 1268, end: 1273 },
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
										value: "User",
										loc: { start: 1276, end: 1280 },
									},
									loc: { start: 1276, end: 1280 },
								},
								loc: { start: 1276, end: 1281 },
							},
							loc: { start: 1275, end: 1282 },
						},
						loc: { start: 1275, end: 1283 },
					},
					directives: [],
					loc: { start: 1268, end: 1283 },
				},
			],
			loc: { start: 1224, end: 1285 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1292, end: 1296 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1301, end: 1303 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1305, end: 1307 },
							},
							loc: { start: 1305, end: 1307 },
						},
						loc: { start: 1305, end: 1308 },
					},
					directives: [],
					loc: { start: 1301, end: 1308 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1311, end: 1316 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1318, end: 1324 },
							},
							loc: { start: 1318, end: 1324 },
						},
						loc: { start: 1318, end: 1325 },
					},
					directives: [],
					loc: { start: 1311, end: 1325 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1328, end: 1336 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1338, end: 1345 },
							},
							loc: { start: 1338, end: 1345 },
						},
						loc: { start: 1338, end: 1346 },
					},
					directives: [],
					loc: { start: 1328, end: 1346 },
				},
			],
			loc: { start: 1287, end: 1348 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1354, end: 1361 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1366, end: 1368 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1370, end: 1372 },
							},
							loc: { start: 1370, end: 1372 },
						},
						loc: { start: 1370, end: 1373 },
					},
					directives: [],
					loc: { start: 1366, end: 1373 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1376, end: 1380 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1382, end: 1388 },
							},
							loc: { start: 1382, end: 1388 },
						},
						loc: { start: 1382, end: 1389 },
					},
					directives: [],
					loc: { start: 1376, end: 1389 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1392, end: 1397 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1399, end: 1402 },
							},
							loc: { start: 1399, end: 1402 },
						},
						loc: { start: 1399, end: 1403 },
					},
					directives: [],
					loc: { start: 1392, end: 1403 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1406, end: 1411 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1413, end: 1416 },
							},
							loc: { start: 1413, end: 1416 },
						},
						loc: { start: 1413, end: 1417 },
					},
					directives: [],
					loc: { start: 1406, end: 1417 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1420, end: 1427 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1429, end: 1436 },
						},
						loc: { start: 1429, end: 1436 },
					},
					directives: [],
					loc: { start: 1420, end: 1436 },
				},
			],
			loc: { start: 1349, end: 1438 },
		},
	],
	loc: { start: 0, end: 1439 },
} as unknown as DocumentNode;

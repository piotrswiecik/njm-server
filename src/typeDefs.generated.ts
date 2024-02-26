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
								value: "Order",
								loc: { start: 737, end: 742 },
							},
							loc: { start: 737, end: 742 },
						},
						loc: { start: 737, end: 743 },
					},
					directives: [],
					loc: { start: 711, end: 743 },
				},
			],
			loc: { start: 686, end: 745 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 758, end: 763 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 768, end: 775 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 776, end: 778 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 780, end: 782 },
									},
									loc: { start: 780, end: 782 },
								},
								loc: { start: 780, end: 783 },
							},
							directives: [],
							loc: { start: 776, end: 783 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 786, end: 793 },
						},
						loc: { start: 786, end: 793 },
					},
					directives: [],
					loc: { start: 768, end: 793 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 796, end: 804 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 805, end: 809 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 811, end: 814 },
								},
								loc: { start: 811, end: 814 },
							},
							directives: [],
							loc: { start: 805, end: 814 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 816, end: 820 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 822, end: 825 },
								},
								loc: { start: 822, end: 825 },
							},
							directives: [],
							loc: { start: 816, end: 825 },
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
										loc: { start: 829, end: 836 },
									},
									loc: { start: 829, end: 836 },
								},
								loc: { start: 829, end: 837 },
							},
							loc: { start: 828, end: 838 },
						},
						loc: { start: 828, end: 839 },
					},
					directives: [],
					loc: { start: 796, end: 839 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 842, end: 855 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 856, end: 861 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 863, end: 869 },
									},
									loc: { start: 863, end: 869 },
								},
								loc: { start: 863, end: 870 },
							},
							directives: [],
							loc: { start: 856, end: 870 },
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
									loc: { start: 874, end: 881 },
								},
								loc: { start: 874, end: 881 },
							},
							loc: { start: 874, end: 882 },
						},
						loc: { start: 873, end: 883 },
					},
					directives: [],
					loc: { start: 842, end: 883 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 886, end: 898 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 900, end: 903 },
							},
							loc: { start: 900, end: 903 },
						},
						loc: { start: 900, end: 904 },
					},
					directives: [],
					loc: { start: 886, end: 904 },
				},
			],
			loc: { start: 746, end: 906 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 913, end: 920 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 925, end: 927 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 929, end: 931 },
							},
							loc: { start: 929, end: 931 },
						},
						loc: { start: 929, end: 932 },
					},
					directives: [],
					loc: { start: 925, end: 932 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 935, end: 940 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 942, end: 948 },
							},
							loc: { start: 942, end: 948 },
						},
						loc: { start: 942, end: 949 },
					},
					directives: [],
					loc: { start: 935, end: 949 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 952, end: 965 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 967, end: 973 },
							},
							loc: { start: 967, end: 973 },
						},
						loc: { start: 967, end: 974 },
					},
					directives: [],
					loc: { start: 952, end: 974 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 977, end: 988 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 990, end: 996 },
							},
							loc: { start: 990, end: 996 },
						},
						loc: { start: 990, end: 997 },
					},
					directives: [],
					loc: { start: 977, end: 997 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1000, end: 1006 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1008, end: 1014 },
							},
							loc: { start: 1008, end: 1014 },
						},
						loc: { start: 1008, end: 1015 },
					},
					directives: [],
					loc: { start: 1000, end: 1015 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1018, end: 1026 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1028, end: 1036 },
							},
							loc: { start: 1028, end: 1036 },
						},
						loc: { start: 1028, end: 1037 },
					},
					directives: [],
					loc: { start: 1018, end: 1037 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1040, end: 1046 },
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
										loc: { start: 1049, end: 1054 },
									},
									loc: { start: 1049, end: 1054 },
								},
								loc: { start: 1049, end: 1055 },
							},
							loc: { start: 1048, end: 1056 },
						},
						loc: { start: 1048, end: 1057 },
					},
					directives: [],
					loc: { start: 1040, end: 1057 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1060, end: 1068 },
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
										loc: { start: 1071, end: 1078 },
									},
									loc: { start: 1071, end: 1078 },
								},
								loc: { start: 1071, end: 1079 },
							},
							loc: { start: 1070, end: 1080 },
						},
						loc: { start: 1070, end: 1081 },
					},
					directives: [],
					loc: { start: 1060, end: 1081 },
				},
			],
			loc: { start: 908, end: 1083 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1089, end: 1094 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1084, end: 1094 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1101, end: 1109 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1096, end: 1109 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1115, end: 1120 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1125, end: 1129 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1131, end: 1137 },
							},
							loc: { start: 1131, end: 1137 },
						},
						loc: { start: 1131, end: 1138 },
					},
					directives: [],
					loc: { start: 1125, end: 1138 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1141, end: 1144 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1146, end: 1152 },
						},
						loc: { start: 1146, end: 1152 },
					},
					directives: [],
					loc: { start: 1141, end: 1152 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1155, end: 1161 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1163, end: 1166 },
							},
							loc: { start: 1163, end: 1166 },
						},
						loc: { start: 1163, end: 1167 },
					},
					directives: [],
					loc: { start: 1155, end: 1167 },
				},
			],
			loc: { start: 1110, end: 1169 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1182, end: 1187 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1192, end: 1196 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1197, end: 1199 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1201, end: 1203 },
									},
									loc: { start: 1201, end: 1203 },
								},
								loc: { start: 1201, end: 1204 },
							},
							directives: [],
							loc: { start: 1197, end: 1204 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 1207, end: 1211 },
						},
						loc: { start: 1207, end: 1211 },
					},
					directives: [],
					loc: { start: 1192, end: 1211 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "users",
						loc: { start: 1214, end: 1219 },
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
										loc: { start: 1222, end: 1226 },
									},
									loc: { start: 1222, end: 1226 },
								},
								loc: { start: 1222, end: 1227 },
							},
							loc: { start: 1221, end: 1228 },
						},
						loc: { start: 1221, end: 1229 },
					},
					directives: [],
					loc: { start: 1214, end: 1229 },
				},
			],
			loc: { start: 1170, end: 1231 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1238, end: 1242 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1247, end: 1249 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1251, end: 1253 },
							},
							loc: { start: 1251, end: 1253 },
						},
						loc: { start: 1251, end: 1254 },
					},
					directives: [],
					loc: { start: 1247, end: 1254 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1257, end: 1262 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1264, end: 1270 },
							},
							loc: { start: 1264, end: 1270 },
						},
						loc: { start: 1264, end: 1271 },
					},
					directives: [],
					loc: { start: 1257, end: 1271 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1274, end: 1282 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1284, end: 1291 },
							},
							loc: { start: 1284, end: 1291 },
						},
						loc: { start: 1284, end: 1292 },
					},
					directives: [],
					loc: { start: 1274, end: 1292 },
				},
			],
			loc: { start: 1233, end: 1294 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1300, end: 1307 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1312, end: 1314 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1316, end: 1318 },
							},
							loc: { start: 1316, end: 1318 },
						},
						loc: { start: 1316, end: 1319 },
					},
					directives: [],
					loc: { start: 1312, end: 1319 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1322, end: 1326 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1328, end: 1334 },
							},
							loc: { start: 1328, end: 1334 },
						},
						loc: { start: 1328, end: 1335 },
					},
					directives: [],
					loc: { start: 1322, end: 1335 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1338, end: 1343 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1345, end: 1348 },
							},
							loc: { start: 1345, end: 1348 },
						},
						loc: { start: 1345, end: 1349 },
					},
					directives: [],
					loc: { start: 1338, end: 1349 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1352, end: 1357 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1359, end: 1362 },
							},
							loc: { start: 1359, end: 1362 },
						},
						loc: { start: 1359, end: 1363 },
					},
					directives: [],
					loc: { start: 1352, end: 1363 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1366, end: 1373 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1375, end: 1382 },
						},
						loc: { start: 1375, end: 1382 },
					},
					directives: [],
					loc: { start: 1366, end: 1382 },
				},
			],
			loc: { start: 1295, end: 1384 },
		},
	],
	loc: { start: 0, end: 1385 },
} as unknown as DocumentNode;

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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "datePlaced",
						loc: { start: 547, end: 557 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 559, end: 565 },
						},
						loc: { start: 559, end: 565 },
					},
					directives: [],
					loc: { start: 547, end: 565 },
				},
			],
			loc: { start: 463, end: 567 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "OrderItem", loc: { start: 574, end: 583 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 588, end: 590 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 592, end: 594 },
							},
							loc: { start: 592, end: 594 },
						},
						loc: { start: 592, end: 595 },
					},
					directives: [],
					loc: { start: 588, end: 595 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 598, end: 605 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 607, end: 614 },
							},
							loc: { start: 607, end: 614 },
						},
						loc: { start: 607, end: 615 },
					},
					directives: [],
					loc: { start: 598, end: 615 },
				},
			],
			loc: { start: 569, end: 617 },
		},
		{
			kind: "EnumTypeDefinition",
			name: { kind: "Name", value: "Status", loc: { start: 624, end: 630 } },
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "CART", loc: { start: 635, end: 639 } },
					directives: [],
					loc: { start: 635, end: 639 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 642, end: 651 },
					},
					directives: [],
					loc: { start: 642, end: 651 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 654, end: 664 },
					},
					directives: [],
					loc: { start: 654, end: 664 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 667, end: 674 },
					},
					directives: [],
					loc: { start: 667, end: 674 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 677, end: 686 },
					},
					directives: [],
					loc: { start: 677, end: 686 },
				},
			],
			loc: { start: 619, end: 688 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 702, end: 710 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 715, end: 726 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 727, end: 732 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "CreateOrderInput",
										loc: { start: 734, end: 750 },
									},
									loc: { start: 734, end: 750 },
								},
								loc: { start: 734, end: 751 },
							},
							directives: [],
							loc: { start: 727, end: 751 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 754, end: 759 },
						},
						loc: { start: 754, end: 759 },
					},
					directives: [],
					loc: { start: 715, end: 759 },
				},
			],
			loc: { start: 690, end: 761 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CreateOrderInput",
				loc: { start: 769, end: 785 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "userId",
						loc: { start: 790, end: 796 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 798, end: 800 },
							},
							loc: { start: 798, end: 800 },
						},
						loc: { start: 798, end: 801 },
					},
					directives: [],
					loc: { start: 790, end: 801 },
				},
			],
			loc: { start: 763, end: 803 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 816, end: 821 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 826, end: 833 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 834, end: 836 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 838, end: 840 },
									},
									loc: { start: 838, end: 840 },
								},
								loc: { start: 838, end: 841 },
							},
							directives: [],
							loc: { start: 834, end: 841 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 844, end: 851 },
						},
						loc: { start: 844, end: 851 },
					},
					directives: [],
					loc: { start: 826, end: 851 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 854, end: 862 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 863, end: 867 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 869, end: 872 },
								},
								loc: { start: 869, end: 872 },
							},
							directives: [],
							loc: { start: 863, end: 872 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 874, end: 878 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 880, end: 883 },
								},
								loc: { start: 880, end: 883 },
							},
							directives: [],
							loc: { start: 874, end: 883 },
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
										loc: { start: 887, end: 894 },
									},
									loc: { start: 887, end: 894 },
								},
								loc: { start: 887, end: 895 },
							},
							loc: { start: 886, end: 896 },
						},
						loc: { start: 886, end: 897 },
					},
					directives: [],
					loc: { start: 854, end: 897 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 900, end: 913 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 914, end: 919 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 921, end: 927 },
									},
									loc: { start: 921, end: 927 },
								},
								loc: { start: 921, end: 928 },
							},
							directives: [],
							loc: { start: 914, end: 928 },
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
									loc: { start: 932, end: 939 },
								},
								loc: { start: 932, end: 939 },
							},
							loc: { start: 932, end: 940 },
						},
						loc: { start: 931, end: 941 },
					},
					directives: [],
					loc: { start: 900, end: 941 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 944, end: 956 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 958, end: 961 },
							},
							loc: { start: 958, end: 961 },
						},
						loc: { start: 958, end: 962 },
					},
					directives: [],
					loc: { start: 944, end: 962 },
				},
			],
			loc: { start: 804, end: 964 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 971, end: 978 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 983, end: 985 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 987, end: 989 },
							},
							loc: { start: 987, end: 989 },
						},
						loc: { start: 987, end: 990 },
					},
					directives: [],
					loc: { start: 983, end: 990 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 993, end: 998 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1000, end: 1006 },
							},
							loc: { start: 1000, end: 1006 },
						},
						loc: { start: 1000, end: 1007 },
					},
					directives: [],
					loc: { start: 993, end: 1007 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1010, end: 1023 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1025, end: 1031 },
							},
							loc: { start: 1025, end: 1031 },
						},
						loc: { start: 1025, end: 1032 },
					},
					directives: [],
					loc: { start: 1010, end: 1032 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1035, end: 1046 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1048, end: 1054 },
							},
							loc: { start: 1048, end: 1054 },
						},
						loc: { start: 1048, end: 1055 },
					},
					directives: [],
					loc: { start: 1035, end: 1055 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1058, end: 1064 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1066, end: 1072 },
							},
							loc: { start: 1066, end: 1072 },
						},
						loc: { start: 1066, end: 1073 },
					},
					directives: [],
					loc: { start: 1058, end: 1073 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1076, end: 1084 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1086, end: 1094 },
							},
							loc: { start: 1086, end: 1094 },
						},
						loc: { start: 1086, end: 1095 },
					},
					directives: [],
					loc: { start: 1076, end: 1095 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1098, end: 1104 },
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
										loc: { start: 1107, end: 1112 },
									},
									loc: { start: 1107, end: 1112 },
								},
								loc: { start: 1107, end: 1113 },
							},
							loc: { start: 1106, end: 1114 },
						},
						loc: { start: 1106, end: 1115 },
					},
					directives: [],
					loc: { start: 1098, end: 1115 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1118, end: 1126 },
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
										loc: { start: 1129, end: 1136 },
									},
									loc: { start: 1129, end: 1136 },
								},
								loc: { start: 1129, end: 1137 },
							},
							loc: { start: 1128, end: 1138 },
						},
						loc: { start: 1128, end: 1139 },
					},
					directives: [],
					loc: { start: 1118, end: 1139 },
				},
			],
			loc: { start: 966, end: 1141 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1147, end: 1152 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1142, end: 1152 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1159, end: 1167 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1154, end: 1167 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1173, end: 1178 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1183, end: 1187 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1189, end: 1195 },
							},
							loc: { start: 1189, end: 1195 },
						},
						loc: { start: 1189, end: 1196 },
					},
					directives: [],
					loc: { start: 1183, end: 1196 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1199, end: 1202 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1204, end: 1210 },
						},
						loc: { start: 1204, end: 1210 },
					},
					directives: [],
					loc: { start: 1199, end: 1210 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1213, end: 1219 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1221, end: 1224 },
							},
							loc: { start: 1221, end: 1224 },
						},
						loc: { start: 1221, end: 1225 },
					},
					directives: [],
					loc: { start: 1213, end: 1225 },
				},
			],
			loc: { start: 1168, end: 1227 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1240, end: 1245 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1250, end: 1254 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1255, end: 1257 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1259, end: 1261 },
									},
									loc: { start: 1259, end: 1261 },
								},
								loc: { start: 1259, end: 1262 },
							},
							directives: [],
							loc: { start: 1255, end: 1262 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 1265, end: 1269 },
						},
						loc: { start: 1265, end: 1269 },
					},
					directives: [],
					loc: { start: 1250, end: 1269 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "users",
						loc: { start: 1272, end: 1277 },
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
										loc: { start: 1280, end: 1284 },
									},
									loc: { start: 1280, end: 1284 },
								},
								loc: { start: 1280, end: 1285 },
							},
							loc: { start: 1279, end: 1286 },
						},
						loc: { start: 1279, end: 1287 },
					},
					directives: [],
					loc: { start: 1272, end: 1287 },
				},
			],
			loc: { start: 1228, end: 1289 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1296, end: 1300 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1305, end: 1307 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1309, end: 1311 },
							},
							loc: { start: 1309, end: 1311 },
						},
						loc: { start: 1309, end: 1312 },
					},
					directives: [],
					loc: { start: 1305, end: 1312 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1315, end: 1320 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1322, end: 1328 },
							},
							loc: { start: 1322, end: 1328 },
						},
						loc: { start: 1322, end: 1329 },
					},
					directives: [],
					loc: { start: 1315, end: 1329 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1332, end: 1340 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1342, end: 1349 },
							},
							loc: { start: 1342, end: 1349 },
						},
						loc: { start: 1342, end: 1350 },
					},
					directives: [],
					loc: { start: 1332, end: 1350 },
				},
			],
			loc: { start: 1291, end: 1352 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1358, end: 1365 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1370, end: 1372 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1374, end: 1376 },
							},
							loc: { start: 1374, end: 1376 },
						},
						loc: { start: 1374, end: 1377 },
					},
					directives: [],
					loc: { start: 1370, end: 1377 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1380, end: 1384 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1386, end: 1392 },
							},
							loc: { start: 1386, end: 1392 },
						},
						loc: { start: 1386, end: 1393 },
					},
					directives: [],
					loc: { start: 1380, end: 1393 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1396, end: 1401 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1403, end: 1406 },
							},
							loc: { start: 1403, end: 1406 },
						},
						loc: { start: 1403, end: 1407 },
					},
					directives: [],
					loc: { start: 1396, end: 1407 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1410, end: 1415 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1417, end: 1420 },
							},
							loc: { start: 1417, end: 1420 },
						},
						loc: { start: 1417, end: 1421 },
					},
					directives: [],
					loc: { start: 1410, end: 1421 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1424, end: 1431 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1433, end: 1440 },
						},
						loc: { start: 1433, end: 1440 },
					},
					directives: [],
					loc: { start: 1424, end: 1440 },
				},
			],
			loc: { start: 1353, end: 1442 },
		},
	],
	loc: { start: 0, end: 1443 },
} as unknown as DocumentNode;

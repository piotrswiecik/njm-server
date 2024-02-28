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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "updateOrder",
						loc: { start: 760, end: 771 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "input",
								loc: { start: 772, end: 777 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "OrderInput",
										loc: { start: 779, end: 789 },
									},
									loc: { start: 779, end: 789 },
								},
								loc: { start: 779, end: 790 },
							},
							directives: [],
							loc: { start: 772, end: 790 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 793, end: 798 },
							},
							loc: { start: 793, end: 798 },
						},
						loc: { start: 793, end: 799 },
					},
					directives: [],
					loc: { start: 760, end: 799 },
				},
			],
			loc: { start: 686, end: 801 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CreateOrderResponse",
				loc: { start: 808, end: 827 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 832, end: 834 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 836, end: 838 },
							},
							loc: { start: 836, end: 838 },
						},
						loc: { start: 836, end: 839 },
					},
					directives: [],
					loc: { start: 832, end: 839 },
				},
			],
			loc: { start: 803, end: 841 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderInput",
				loc: { start: 849, end: 859 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "orderId",
						loc: { start: 864, end: 871 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 873, end: 875 },
							},
							loc: { start: 873, end: 875 },
						},
						loc: { start: 873, end: 876 },
					},
					directives: [],
					loc: { start: 864, end: 876 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 879, end: 889 },
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
									loc: { start: 892, end: 906 },
								},
								loc: { start: 892, end: 906 },
							},
							loc: { start: 892, end: 907 },
						},
						loc: { start: 891, end: 908 },
					},
					directives: [],
					loc: { start: 879, end: 908 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 911, end: 917 },
					},
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Status",
							loc: { start: 919, end: 925 },
						},
						loc: { start: 919, end: 925 },
					},
					directives: [],
					loc: { start: 911, end: 925 },
				},
			],
			loc: { start: 843, end: 927 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItemInput",
				loc: { start: 935, end: 949 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "variantId",
						loc: { start: 954, end: 963 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 965, end: 967 },
							},
							loc: { start: 965, end: 967 },
						},
						loc: { start: 965, end: 968 },
					},
					directives: [],
					loc: { start: 954, end: 968 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 971, end: 979 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 981, end: 984 },
							},
							loc: { start: 981, end: 984 },
						},
						loc: { start: 981, end: 985 },
					},
					directives: [],
					loc: { start: 971, end: 985 },
				},
			],
			loc: { start: 929, end: 987 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1000, end: 1005 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1010, end: 1017 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1018, end: 1020 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1022, end: 1024 },
									},
									loc: { start: 1022, end: 1024 },
								},
								loc: { start: 1022, end: 1025 },
							},
							directives: [],
							loc: { start: 1018, end: 1025 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1028, end: 1035 },
						},
						loc: { start: 1028, end: 1035 },
					},
					directives: [],
					loc: { start: 1010, end: 1035 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1038, end: 1046 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1047, end: 1051 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1053, end: 1056 },
								},
								loc: { start: 1053, end: 1056 },
							},
							directives: [],
							loc: { start: 1047, end: 1056 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1058, end: 1062 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1064, end: 1067 },
								},
								loc: { start: 1064, end: 1067 },
							},
							directives: [],
							loc: { start: 1058, end: 1067 },
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
					loc: { start: 1038, end: 1081 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 1084, end: 1097 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 1098, end: 1103 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1105, end: 1111 },
									},
									loc: { start: 1105, end: 1111 },
								},
								loc: { start: 1105, end: 1112 },
							},
							directives: [],
							loc: { start: 1098, end: 1112 },
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
									loc: { start: 1116, end: 1123 },
								},
								loc: { start: 1116, end: 1123 },
							},
							loc: { start: 1116, end: 1124 },
						},
						loc: { start: 1115, end: 1125 },
					},
					directives: [],
					loc: { start: 1084, end: 1125 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 1128, end: 1140 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1142, end: 1145 },
							},
							loc: { start: 1142, end: 1145 },
						},
						loc: { start: 1142, end: 1146 },
					},
					directives: [],
					loc: { start: 1128, end: 1146 },
				},
			],
			loc: { start: 988, end: 1148 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1155, end: 1162 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1167, end: 1169 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1171, end: 1173 },
							},
							loc: { start: 1171, end: 1173 },
						},
						loc: { start: 1171, end: 1174 },
					},
					directives: [],
					loc: { start: 1167, end: 1174 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1177, end: 1182 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1184, end: 1190 },
							},
							loc: { start: 1184, end: 1190 },
						},
						loc: { start: 1184, end: 1191 },
					},
					directives: [],
					loc: { start: 1177, end: 1191 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 1194, end: 1207 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1209, end: 1215 },
							},
							loc: { start: 1209, end: 1215 },
						},
						loc: { start: 1209, end: 1216 },
					},
					directives: [],
					loc: { start: 1194, end: 1216 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 1219, end: 1230 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1232, end: 1238 },
							},
							loc: { start: 1232, end: 1238 },
						},
						loc: { start: 1232, end: 1239 },
					},
					directives: [],
					loc: { start: 1219, end: 1239 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1242, end: 1248 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 1250, end: 1256 },
							},
							loc: { start: 1250, end: 1256 },
						},
						loc: { start: 1250, end: 1257 },
					},
					directives: [],
					loc: { start: 1242, end: 1257 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1260, end: 1268 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 1270, end: 1278 },
							},
							loc: { start: 1270, end: 1278 },
						},
						loc: { start: 1270, end: 1279 },
					},
					directives: [],
					loc: { start: 1260, end: 1279 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 1282, end: 1288 },
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
										loc: { start: 1291, end: 1296 },
									},
									loc: { start: 1291, end: 1296 },
								},
								loc: { start: 1291, end: 1297 },
							},
							loc: { start: 1290, end: 1298 },
						},
						loc: { start: 1290, end: 1299 },
					},
					directives: [],
					loc: { start: 1282, end: 1299 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1302, end: 1310 },
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
										loc: { start: 1313, end: 1320 },
									},
									loc: { start: 1313, end: 1320 },
								},
								loc: { start: 1313, end: 1321 },
							},
							loc: { start: 1312, end: 1322 },
						},
						loc: { start: 1312, end: 1323 },
					},
					directives: [],
					loc: { start: 1302, end: 1323 },
				},
			],
			loc: { start: 1150, end: 1325 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1331, end: 1336 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1326, end: 1336 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1343, end: 1351 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1338, end: 1351 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1357, end: 1362 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1367, end: 1371 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1373, end: 1379 },
							},
							loc: { start: 1373, end: 1379 },
						},
						loc: { start: 1373, end: 1380 },
					},
					directives: [],
					loc: { start: 1367, end: 1380 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1383, end: 1386 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1388, end: 1394 },
						},
						loc: { start: 1388, end: 1394 },
					},
					directives: [],
					loc: { start: 1383, end: 1394 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1397, end: 1403 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1405, end: 1408 },
							},
							loc: { start: 1405, end: 1408 },
						},
						loc: { start: 1405, end: 1409 },
					},
					directives: [],
					loc: { start: 1397, end: 1409 },
				},
			],
			loc: { start: 1352, end: 1411 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1424, end: 1429 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1434, end: 1438 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1439, end: 1441 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1443, end: 1445 },
									},
									loc: { start: 1443, end: 1445 },
								},
								loc: { start: 1443, end: 1446 },
							},
							directives: [],
							loc: { start: 1439, end: 1446 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 1449, end: 1453 },
						},
						loc: { start: 1449, end: 1453 },
					},
					directives: [],
					loc: { start: 1434, end: 1453 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "users",
						loc: { start: 1456, end: 1461 },
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
										loc: { start: 1464, end: 1468 },
									},
									loc: { start: 1464, end: 1468 },
								},
								loc: { start: 1464, end: 1469 },
							},
							loc: { start: 1463, end: 1470 },
						},
						loc: { start: 1463, end: 1471 },
					},
					directives: [],
					loc: { start: 1456, end: 1471 },
				},
			],
			loc: { start: 1412, end: 1473 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1480, end: 1484 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1489, end: 1491 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1493, end: 1495 },
							},
							loc: { start: 1493, end: 1495 },
						},
						loc: { start: 1493, end: 1496 },
					},
					directives: [],
					loc: { start: 1489, end: 1496 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1499, end: 1504 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1506, end: 1512 },
							},
							loc: { start: 1506, end: 1512 },
						},
						loc: { start: 1506, end: 1513 },
					},
					directives: [],
					loc: { start: 1499, end: 1513 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1516, end: 1524 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1526, end: 1533 },
							},
							loc: { start: 1526, end: 1533 },
						},
						loc: { start: 1526, end: 1534 },
					},
					directives: [],
					loc: { start: 1516, end: 1534 },
				},
			],
			loc: { start: 1475, end: 1536 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1542, end: 1549 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1554, end: 1556 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1558, end: 1560 },
							},
							loc: { start: 1558, end: 1560 },
						},
						loc: { start: 1558, end: 1561 },
					},
					directives: [],
					loc: { start: 1554, end: 1561 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1564, end: 1568 },
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
					loc: { start: 1564, end: 1577 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1580, end: 1585 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1587, end: 1590 },
							},
							loc: { start: 1587, end: 1590 },
						},
						loc: { start: 1587, end: 1591 },
					},
					directives: [],
					loc: { start: 1580, end: 1591 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1594, end: 1599 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1601, end: 1604 },
							},
							loc: { start: 1601, end: 1604 },
						},
						loc: { start: 1601, end: 1605 },
					},
					directives: [],
					loc: { start: 1594, end: 1605 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1608, end: 1615 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1617, end: 1624 },
						},
						loc: { start: 1617, end: 1624 },
					},
					directives: [],
					loc: { start: 1608, end: 1624 },
				},
			],
			loc: { start: 1537, end: 1626 },
		},
	],
	loc: { start: 0, end: 1627 },
} as unknown as DocumentNode;

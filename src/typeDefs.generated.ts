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
			name: { kind: "Name", value: "Query", loc: { start: 701, end: 706 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 711, end: 718 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 719, end: 721 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 723, end: 725 },
									},
									loc: { start: 723, end: 725 },
								},
								loc: { start: 723, end: 726 },
							},
							directives: [],
							loc: { start: 719, end: 726 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 729, end: 736 },
						},
						loc: { start: 729, end: 736 },
					},
					directives: [],
					loc: { start: 711, end: 736 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 739, end: 747 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 748, end: 752 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 754, end: 757 },
								},
								loc: { start: 754, end: 757 },
							},
							directives: [],
							loc: { start: 748, end: 757 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 759, end: 763 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 765, end: 768 },
								},
								loc: { start: 765, end: 768 },
							},
							directives: [],
							loc: { start: 759, end: 768 },
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
										loc: { start: 772, end: 779 },
									},
									loc: { start: 772, end: 779 },
								},
								loc: { start: 772, end: 780 },
							},
							loc: { start: 771, end: 781 },
						},
						loc: { start: 771, end: 782 },
					},
					directives: [],
					loc: { start: 739, end: 782 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 785, end: 798 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 799, end: 804 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 806, end: 812 },
									},
									loc: { start: 806, end: 812 },
								},
								loc: { start: 806, end: 813 },
							},
							directives: [],
							loc: { start: 799, end: 813 },
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
									loc: { start: 817, end: 824 },
								},
								loc: { start: 817, end: 824 },
							},
							loc: { start: 817, end: 825 },
						},
						loc: { start: 816, end: 826 },
					},
					directives: [],
					loc: { start: 785, end: 826 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 829, end: 841 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 843, end: 846 },
							},
							loc: { start: 843, end: 846 },
						},
						loc: { start: 843, end: 847 },
					},
					directives: [],
					loc: { start: 829, end: 847 },
				},
			],
			loc: { start: 689, end: 849 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 856, end: 863 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 868, end: 870 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 872, end: 874 },
							},
							loc: { start: 872, end: 874 },
						},
						loc: { start: 872, end: 875 },
					},
					directives: [],
					loc: { start: 868, end: 875 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 878, end: 883 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 885, end: 891 },
							},
							loc: { start: 885, end: 891 },
						},
						loc: { start: 885, end: 892 },
					},
					directives: [],
					loc: { start: 878, end: 892 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 895, end: 908 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 910, end: 916 },
							},
							loc: { start: 910, end: 916 },
						},
						loc: { start: 910, end: 917 },
					},
					directives: [],
					loc: { start: 895, end: 917 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 920, end: 931 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 933, end: 939 },
							},
							loc: { start: 933, end: 939 },
						},
						loc: { start: 933, end: 940 },
					},
					directives: [],
					loc: { start: 920, end: 940 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 943, end: 949 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 951, end: 957 },
							},
							loc: { start: 951, end: 957 },
						},
						loc: { start: 951, end: 958 },
					},
					directives: [],
					loc: { start: 943, end: 958 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 961, end: 969 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 971, end: 979 },
							},
							loc: { start: 971, end: 979 },
						},
						loc: { start: 971, end: 980 },
					},
					directives: [],
					loc: { start: 961, end: 980 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 983, end: 989 },
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
										loc: { start: 992, end: 997 },
									},
									loc: { start: 992, end: 997 },
								},
								loc: { start: 992, end: 998 },
							},
							loc: { start: 991, end: 999 },
						},
						loc: { start: 991, end: 1000 },
					},
					directives: [],
					loc: { start: 983, end: 1000 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 1003, end: 1011 },
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
										loc: { start: 1014, end: 1021 },
									},
									loc: { start: 1014, end: 1021 },
								},
								loc: { start: 1014, end: 1022 },
							},
							loc: { start: 1013, end: 1023 },
						},
						loc: { start: 1013, end: 1024 },
					},
					directives: [],
					loc: { start: 1003, end: 1024 },
				},
			],
			loc: { start: 851, end: 1026 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1032, end: 1037 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1027, end: 1037 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1043, end: 1048 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1053, end: 1057 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1059, end: 1065 },
							},
							loc: { start: 1059, end: 1065 },
						},
						loc: { start: 1059, end: 1066 },
					},
					directives: [],
					loc: { start: 1053, end: 1066 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1069, end: 1072 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1074, end: 1080 },
						},
						loc: { start: 1074, end: 1080 },
					},
					directives: [],
					loc: { start: 1069, end: 1080 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1083, end: 1089 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1091, end: 1094 },
							},
							loc: { start: 1091, end: 1094 },
						},
						loc: { start: 1091, end: 1095 },
					},
					directives: [],
					loc: { start: 1083, end: 1095 },
				},
			],
			loc: { start: 1038, end: 1097 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1110, end: 1115 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1120, end: 1124 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1125, end: 1127 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1129, end: 1131 },
									},
									loc: { start: 1129, end: 1131 },
								},
								loc: { start: 1129, end: 1132 },
							},
							directives: [],
							loc: { start: 1125, end: 1132 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 1135, end: 1139 },
						},
						loc: { start: 1135, end: 1139 },
					},
					directives: [],
					loc: { start: 1120, end: 1139 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "users",
						loc: { start: 1142, end: 1147 },
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
										loc: { start: 1150, end: 1154 },
									},
									loc: { start: 1150, end: 1154 },
								},
								loc: { start: 1150, end: 1155 },
							},
							loc: { start: 1149, end: 1156 },
						},
						loc: { start: 1149, end: 1157 },
					},
					directives: [],
					loc: { start: 1142, end: 1157 },
				},
			],
			loc: { start: 1098, end: 1159 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1166, end: 1170 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1175, end: 1177 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1179, end: 1181 },
							},
							loc: { start: 1179, end: 1181 },
						},
						loc: { start: 1179, end: 1182 },
					},
					directives: [],
					loc: { start: 1175, end: 1182 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1185, end: 1190 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1192, end: 1198 },
							},
							loc: { start: 1192, end: 1198 },
						},
						loc: { start: 1192, end: 1199 },
					},
					directives: [],
					loc: { start: 1185, end: 1199 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1202, end: 1210 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1212, end: 1219 },
							},
							loc: { start: 1212, end: 1219 },
						},
						loc: { start: 1212, end: 1220 },
					},
					directives: [],
					loc: { start: 1202, end: 1220 },
				},
			],
			loc: { start: 1161, end: 1222 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1228, end: 1235 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1240, end: 1242 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1244, end: 1246 },
							},
							loc: { start: 1244, end: 1246 },
						},
						loc: { start: 1244, end: 1247 },
					},
					directives: [],
					loc: { start: 1240, end: 1247 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1250, end: 1254 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1256, end: 1262 },
							},
							loc: { start: 1256, end: 1262 },
						},
						loc: { start: 1256, end: 1263 },
					},
					directives: [],
					loc: { start: 1250, end: 1263 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1266, end: 1271 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1273, end: 1276 },
							},
							loc: { start: 1273, end: 1276 },
						},
						loc: { start: 1273, end: 1277 },
					},
					directives: [],
					loc: { start: 1266, end: 1277 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1280, end: 1285 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1287, end: 1290 },
							},
							loc: { start: 1287, end: 1290 },
						},
						loc: { start: 1287, end: 1291 },
					},
					directives: [],
					loc: { start: 1280, end: 1291 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1294, end: 1301 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1303, end: 1310 },
						},
						loc: { start: 1303, end: 1310 },
					},
					directives: [],
					loc: { start: 1294, end: 1310 },
				},
			],
			loc: { start: 1223, end: 1312 },
		},
	],
	loc: { start: 0, end: 1313 },
} as unknown as DocumentNode;

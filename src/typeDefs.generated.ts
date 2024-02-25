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
					name: { kind: "Name", value: "cart", loc: { start: 54, end: 58 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 59, end: 61 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 63, end: 65 },
									},
									loc: { start: 63, end: 65 },
								},
								loc: { start: 63, end: 66 },
							},
							directives: [],
							loc: { start: 59, end: 66 },
						},
					],
					type: {
						kind: "NamedType",
						name: { kind: "Name", value: "Cart", loc: { start: 69, end: 73 } },
						loc: { start: 69, end: 73 },
					},
					directives: [],
					loc: { start: 54, end: 73 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "carts", loc: { start: 76, end: 81 } },
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
										value: "Cart",
										loc: { start: 84, end: 88 },
									},
									loc: { start: 84, end: 88 },
								},
								loc: { start: 84, end: 89 },
							},
							loc: { start: 83, end: 90 },
						},
						loc: { start: 83, end: 91 },
					},
					directives: [],
					loc: { start: 76, end: 91 },
				},
			],
			loc: { start: 32, end: 93 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Cart", loc: { start: 100, end: 104 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 109, end: 111 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 113, end: 115 },
							},
							loc: { start: 113, end: 115 },
						},
						loc: { start: 113, end: 116 },
					},
					directives: [],
					loc: { start: 109, end: 116 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "cartItems",
						loc: { start: 119, end: 128 },
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
									value: "CartItem",
									loc: { start: 131, end: 139 },
								},
								loc: { start: 131, end: 139 },
							},
							loc: { start: 131, end: 140 },
						},
						loc: { start: 130, end: 141 },
					},
					directives: [],
					loc: { start: 119, end: 141 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 144, end: 148 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 150, end: 154 },
							},
							loc: { start: 150, end: 154 },
						},
						loc: { start: 150, end: 155 },
					},
					directives: [],
					loc: { start: 144, end: 155 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isPlaced",
						loc: { start: 158, end: 166 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 168, end: 175 },
							},
							loc: { start: 168, end: 175 },
						},
						loc: { start: 168, end: 176 },
					},
					directives: [],
					loc: { start: 158, end: 176 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "datePlaced",
						loc: { start: 179, end: 189 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 191, end: 197 },
						},
						loc: { start: 191, end: 197 },
					},
					directives: [],
					loc: { start: 179, end: 197 },
				},
			],
			loc: { start: 95, end: 199 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "CartItem", loc: { start: 206, end: 214 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 219, end: 221 } },
					arguments: [],
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
					loc: { start: 219, end: 226 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 229, end: 236 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 238, end: 245 },
							},
							loc: { start: 238, end: 245 },
						},
						loc: { start: 238, end: 246 },
					},
					directives: [],
					loc: { start: 229, end: 246 },
				},
			],
			loc: { start: 201, end: 248 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 261, end: 266 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 271, end: 284 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 285, end: 289 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 291, end: 297 },
									},
									loc: { start: 291, end: 297 },
								},
								loc: { start: 291, end: 298 },
							},
							directives: [],
							loc: { start: 285, end: 298 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 301, end: 304 },
							},
							loc: { start: 301, end: 304 },
						},
						loc: { start: 301, end: 305 },
					},
					directives: [],
					loc: { start: 271, end: 305 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 308, end: 316 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 317, end: 321 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 323, end: 329 },
									},
									loc: { start: 323, end: 329 },
								},
								loc: { start: 323, end: 330 },
							},
							directives: [],
							loc: { start: 317, end: 330 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 333, end: 341 },
						},
						loc: { start: 333, end: 341 },
					},
					directives: [],
					loc: { start: 308, end: 341 },
				},
			],
			loc: { start: 249, end: 343 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 350, end: 358 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 363, end: 365 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 367, end: 369 },
							},
							loc: { start: 367, end: 369 },
						},
						loc: { start: 367, end: 370 },
					},
					directives: [],
					loc: { start: 363, end: 370 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 373, end: 377 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 379, end: 385 },
							},
							loc: { start: 379, end: 385 },
						},
						loc: { start: 379, end: 386 },
					},
					directives: [],
					loc: { start: 373, end: 386 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 389, end: 397 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 398, end: 402 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 404, end: 407 },
								},
								loc: { start: 404, end: 407 },
							},
							directives: [],
							loc: { start: 398, end: 407 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 409, end: 413 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 415, end: 418 },
								},
								loc: { start: 415, end: 418 },
							},
							directives: [],
							loc: { start: 409, end: 418 },
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
										loc: { start: 422, end: 429 },
									},
									loc: { start: 422, end: 429 },
								},
								loc: { start: 422, end: 430 },
							},
							loc: { start: 421, end: 431 },
						},
						loc: { start: 421, end: 432 },
					},
					directives: [],
					loc: { start: 389, end: 432 },
				},
			],
			loc: { start: 345, end: 434 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 447, end: 452 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 457, end: 467 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 468, end: 472 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 474, end: 480 },
									},
									loc: { start: 474, end: 480 },
								},
								loc: { start: 474, end: 481 },
							},
							directives: [],
							loc: { start: 468, end: 481 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 484, end: 494 },
						},
						loc: { start: 484, end: 494 },
					},
					directives: [],
					loc: { start: 457, end: 494 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 497, end: 508 },
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
									loc: { start: 511, end: 521 },
								},
								loc: { start: 511, end: 521 },
							},
							loc: { start: 511, end: 522 },
						},
						loc: { start: 510, end: 523 },
					},
					directives: [],
					loc: { start: 497, end: 523 },
				},
			],
			loc: { start: 435, end: 525 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 532, end: 542 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 547, end: 549 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 551, end: 553 },
							},
							loc: { start: 551, end: 553 },
						},
						loc: { start: 551, end: 554 },
					},
					directives: [],
					loc: { start: 547, end: 554 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 557, end: 561 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 563, end: 569 },
							},
							loc: { start: 563, end: 569 },
						},
						loc: { start: 563, end: 570 },
					},
					directives: [],
					loc: { start: 557, end: 570 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 573, end: 581 },
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
										loc: { start: 584, end: 591 },
									},
									loc: { start: 584, end: 591 },
								},
								loc: { start: 584, end: 592 },
							},
							loc: { start: 583, end: 593 },
						},
						loc: { start: 583, end: 594 },
					},
					directives: [],
					loc: { start: 573, end: 594 },
				},
			],
			loc: { start: 527, end: 596 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 609, end: 614 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 619, end: 626 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 627, end: 629 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 631, end: 633 },
									},
									loc: { start: 631, end: 633 },
								},
								loc: { start: 631, end: 634 },
							},
							directives: [],
							loc: { start: 627, end: 634 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 637, end: 644 },
						},
						loc: { start: 637, end: 644 },
					},
					directives: [],
					loc: { start: 619, end: 644 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 647, end: 655 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 656, end: 660 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 662, end: 665 },
								},
								loc: { start: 662, end: 665 },
							},
							directives: [],
							loc: { start: 656, end: 665 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 667, end: 671 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 673, end: 676 },
								},
								loc: { start: 673, end: 676 },
							},
							directives: [],
							loc: { start: 667, end: 676 },
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
										loc: { start: 680, end: 687 },
									},
									loc: { start: 680, end: 687 },
								},
								loc: { start: 680, end: 688 },
							},
							loc: { start: 679, end: 689 },
						},
						loc: { start: 679, end: 690 },
					},
					directives: [],
					loc: { start: 647, end: 690 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 693, end: 706 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 707, end: 712 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 714, end: 720 },
									},
									loc: { start: 714, end: 720 },
								},
								loc: { start: 714, end: 721 },
							},
							directives: [],
							loc: { start: 707, end: 721 },
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
									loc: { start: 725, end: 732 },
								},
								loc: { start: 725, end: 732 },
							},
							loc: { start: 725, end: 733 },
						},
						loc: { start: 724, end: 734 },
					},
					directives: [],
					loc: { start: 693, end: 734 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 737, end: 749 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 751, end: 754 },
							},
							loc: { start: 751, end: 754 },
						},
						loc: { start: 751, end: 755 },
					},
					directives: [],
					loc: { start: 737, end: 755 },
				},
			],
			loc: { start: 597, end: 757 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 764, end: 771 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 776, end: 778 } },
					arguments: [],
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
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 786, end: 791 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 793, end: 799 },
							},
							loc: { start: 793, end: 799 },
						},
						loc: { start: 793, end: 800 },
					},
					directives: [],
					loc: { start: 786, end: 800 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 803, end: 816 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 818, end: 824 },
							},
							loc: { start: 818, end: 824 },
						},
						loc: { start: 818, end: 825 },
					},
					directives: [],
					loc: { start: 803, end: 825 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 828, end: 839 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 841, end: 847 },
							},
							loc: { start: 841, end: 847 },
						},
						loc: { start: 841, end: 848 },
					},
					directives: [],
					loc: { start: 828, end: 848 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 851, end: 857 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 859, end: 865 },
							},
							loc: { start: 859, end: 865 },
						},
						loc: { start: 859, end: 866 },
					},
					directives: [],
					loc: { start: 851, end: 866 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 869, end: 877 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 879, end: 887 },
							},
							loc: { start: 879, end: 887 },
						},
						loc: { start: 879, end: 888 },
					},
					directives: [],
					loc: { start: 869, end: 888 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 891, end: 897 },
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
										loc: { start: 900, end: 905 },
									},
									loc: { start: 900, end: 905 },
								},
								loc: { start: 900, end: 906 },
							},
							loc: { start: 899, end: 907 },
						},
						loc: { start: 899, end: 908 },
					},
					directives: [],
					loc: { start: 891, end: 908 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 911, end: 919 },
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
										loc: { start: 922, end: 929 },
									},
									loc: { start: 922, end: 929 },
								},
								loc: { start: 922, end: 930 },
							},
							loc: { start: 921, end: 931 },
						},
						loc: { start: 921, end: 932 },
					},
					directives: [],
					loc: { start: 911, end: 932 },
				},
			],
			loc: { start: 759, end: 934 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 940, end: 945 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 935, end: 945 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 951, end: 956 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 961, end: 965 } },
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
					loc: { start: 961, end: 974 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 977, end: 980 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 982, end: 988 },
						},
						loc: { start: 982, end: 988 },
					},
					directives: [],
					loc: { start: 977, end: 988 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 991, end: 997 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 999, end: 1002 },
							},
							loc: { start: 999, end: 1002 },
						},
						loc: { start: 999, end: 1003 },
					},
					directives: [],
					loc: { start: 991, end: 1003 },
				},
			],
			loc: { start: 946, end: 1005 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1018, end: 1023 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1028, end: 1032 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1033, end: 1035 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1037, end: 1039 },
									},
									loc: { start: 1037, end: 1039 },
								},
								loc: { start: 1037, end: 1040 },
							},
							directives: [],
							loc: { start: 1033, end: 1040 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 1043, end: 1047 },
						},
						loc: { start: 1043, end: 1047 },
					},
					directives: [],
					loc: { start: 1028, end: 1047 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "users",
						loc: { start: 1050, end: 1055 },
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
										loc: { start: 1058, end: 1062 },
									},
									loc: { start: 1058, end: 1062 },
								},
								loc: { start: 1058, end: 1063 },
							},
							loc: { start: 1057, end: 1064 },
						},
						loc: { start: 1057, end: 1065 },
					},
					directives: [],
					loc: { start: 1050, end: 1065 },
				},
			],
			loc: { start: 1006, end: 1067 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1074, end: 1078 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1083, end: 1085 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1087, end: 1089 },
							},
							loc: { start: 1087, end: 1089 },
						},
						loc: { start: 1087, end: 1090 },
					},
					directives: [],
					loc: { start: 1083, end: 1090 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1093, end: 1098 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1100, end: 1106 },
							},
							loc: { start: 1100, end: 1106 },
						},
						loc: { start: 1100, end: 1107 },
					},
					directives: [],
					loc: { start: 1093, end: 1107 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1110, end: 1118 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1120, end: 1127 },
							},
							loc: { start: 1120, end: 1127 },
						},
						loc: { start: 1120, end: 1128 },
					},
					directives: [],
					loc: { start: 1110, end: 1128 },
				},
			],
			loc: { start: 1069, end: 1130 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1136, end: 1143 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1148, end: 1150 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1152, end: 1154 },
							},
							loc: { start: 1152, end: 1154 },
						},
						loc: { start: 1152, end: 1155 },
					},
					directives: [],
					loc: { start: 1148, end: 1155 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1158, end: 1162 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1164, end: 1170 },
							},
							loc: { start: 1164, end: 1170 },
						},
						loc: { start: 1164, end: 1171 },
					},
					directives: [],
					loc: { start: 1158, end: 1171 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1174, end: 1179 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1181, end: 1184 },
							},
							loc: { start: 1181, end: 1184 },
						},
						loc: { start: 1181, end: 1185 },
					},
					directives: [],
					loc: { start: 1174, end: 1185 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1188, end: 1193 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1195, end: 1198 },
							},
							loc: { start: 1195, end: 1198 },
						},
						loc: { start: 1195, end: 1199 },
					},
					directives: [],
					loc: { start: 1188, end: 1199 },
				},
			],
			loc: { start: 1131, end: 1201 },
		},
	],
	loc: { start: 0, end: 1202 },
} as unknown as DocumentNode;

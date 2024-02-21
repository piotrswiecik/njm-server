import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 12, end: 17 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 22, end: 29 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 30, end: 32 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 34, end: 36 },
									},
									loc: { start: 34, end: 36 },
								},
								loc: { start: 34, end: 37 },
							},
							directives: [],
							loc: { start: 30, end: 37 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 40, end: 47 },
						},
						loc: { start: 40, end: 47 },
					},
					directives: [],
					loc: { start: 22, end: 47 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 50, end: 58 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 59, end: 63 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 65, end: 68 },
								},
								loc: { start: 65, end: 68 },
							},
							directives: [],
							loc: { start: 59, end: 68 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 70, end: 74 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 76, end: 79 },
								},
								loc: { start: 76, end: 79 },
							},
							directives: [],
							loc: { start: 70, end: 79 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 83, end: 90 },
							},
							loc: { start: 83, end: 90 },
						},
						loc: { start: 82, end: 91 },
					},
					directives: [],
					loc: { start: 50, end: 91 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 94, end: 107 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 108, end: 113 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 115, end: 121 },
									},
									loc: { start: 115, end: 121 },
								},
								loc: { start: 115, end: 122 },
							},
							directives: [],
							loc: { start: 108, end: 122 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 126, end: 133 },
							},
							loc: { start: 126, end: 133 },
						},
						loc: { start: 125, end: 134 },
					},
					directives: [],
					loc: { start: 94, end: 134 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 137, end: 142 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 144, end: 147 },
							},
							loc: { start: 144, end: 147 },
						},
						loc: { start: 144, end: 148 },
					},
					directives: [],
					loc: { start: 137, end: 148 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 151, end: 164 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 165, end: 169 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 171, end: 177 },
									},
									loc: { start: 171, end: 177 },
								},
								loc: { start: 171, end: 178 },
							},
							directives: [],
							loc: { start: 165, end: 178 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 181, end: 184 },
							},
							loc: { start: 181, end: 184 },
						},
						loc: { start: 181, end: 185 },
					},
					directives: [],
					loc: { start: 151, end: 185 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 188, end: 196 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 197, end: 201 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 203, end: 209 },
									},
									loc: { start: 203, end: 209 },
								},
								loc: { start: 203, end: 210 },
							},
							directives: [],
							loc: { start: 197, end: 210 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 213, end: 221 },
						},
						loc: { start: 213, end: 221 },
					},
					directives: [],
					loc: { start: 188, end: 221 },
				},
			],
			loc: { start: 0, end: 223 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 230, end: 237 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 242, end: 244 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 246, end: 248 },
							},
							loc: { start: 246, end: 248 },
						},
						loc: { start: 246, end: 249 },
					},
					directives: [],
					loc: { start: 242, end: 249 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 252, end: 258 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 260, end: 266 },
							},
							loc: { start: 260, end: 266 },
						},
						loc: { start: 260, end: 267 },
					},
					directives: [],
					loc: { start: 252, end: 267 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 270, end: 275 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 277, end: 283 },
							},
							loc: { start: 277, end: 283 },
						},
						loc: { start: 277, end: 284 },
					},
					directives: [],
					loc: { start: 270, end: 284 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 287, end: 292 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 294, end: 297 },
							},
							loc: { start: 294, end: 297 },
						},
						loc: { start: 294, end: 298 },
					},
					directives: [],
					loc: { start: 287, end: 298 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 301, end: 309 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 311, end: 321 },
							},
							loc: { start: 311, end: 321 },
						},
						loc: { start: 311, end: 322 },
					},
					directives: [],
					loc: { start: 301, end: 322 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 325, end: 333 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 335, end: 343 },
							},
							loc: { start: 335, end: 343 },
						},
						loc: { start: 335, end: 344 },
					},
					directives: [],
					loc: { start: 325, end: 344 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 347, end: 357 },
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
									loc: { start: 360, end: 370 },
								},
								loc: { start: 360, end: 370 },
							},
							loc: { start: 360, end: 371 },
						},
						loc: { start: 359, end: 372 },
					},
					directives: [],
					loc: { start: 347, end: 372 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 375, end: 380 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 382, end: 387 },
							},
							loc: { start: 382, end: 387 },
						},
						loc: { start: 382, end: 388 },
					},
					directives: [],
					loc: { start: 375, end: 388 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 391, end: 397 },
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
										loc: { start: 400, end: 405 },
									},
									loc: { start: 400, end: 405 },
								},
								loc: { start: 400, end: 406 },
							},
							loc: { start: 399, end: 407 },
						},
						loc: { start: 399, end: 408 },
					},
					directives: [],
					loc: { start: 391, end: 408 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 411, end: 422 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 424, end: 430 },
							},
							loc: { start: 424, end: 430 },
						},
						loc: { start: 424, end: 431 },
					},
					directives: [],
					loc: { start: 411, end: 431 },
				},
			],
			loc: { start: 225, end: 433 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 440, end: 448 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 453, end: 455 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 457, end: 459 },
							},
							loc: { start: 457, end: 459 },
						},
						loc: { start: 457, end: 460 },
					},
					directives: [],
					loc: { start: 453, end: 460 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 463, end: 467 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 469, end: 475 },
							},
							loc: { start: 469, end: 475 },
						},
						loc: { start: 469, end: 476 },
					},
					directives: [],
					loc: { start: 463, end: 476 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 479, end: 487 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 488, end: 492 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 494, end: 497 },
								},
								loc: { start: 494, end: 497 },
							},
							directives: [],
							loc: { start: 488, end: 497 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 499, end: 503 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 505, end: 508 },
								},
								loc: { start: 505, end: 508 },
							},
							directives: [],
							loc: { start: 499, end: 508 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 512, end: 519 },
							},
							loc: { start: 512, end: 519 },
						},
						loc: { start: 511, end: 520 },
					},
					directives: [],
					loc: { start: 479, end: 520 },
				},
			],
			loc: { start: 435, end: 522 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 529, end: 535 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 540, end: 542 } },
					arguments: [],
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
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 550, end: 554 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 556, end: 562 },
							},
							loc: { start: 556, end: 562 },
						},
						loc: { start: 556, end: 563 },
					},
					directives: [],
					loc: { start: 550, end: 563 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 566, end: 573 },
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
									value: "Product",
									loc: { start: 576, end: 583 },
								},
								loc: { start: 576, end: 583 },
							},
							loc: { start: 576, end: 584 },
						},
						loc: { start: 575, end: 585 },
					},
					directives: [],
					loc: { start: 566, end: 585 },
				},
			],
			loc: { start: 524, end: 587 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 594, end: 604 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 609, end: 611 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 613, end: 615 },
							},
							loc: { start: 613, end: 615 },
						},
						loc: { start: 613, end: 616 },
					},
					directives: [],
					loc: { start: 609, end: 616 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 619, end: 622 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 624, end: 630 },
							},
							loc: { start: 624, end: 630 },
						},
						loc: { start: 624, end: 631 },
					},
					directives: [],
					loc: { start: 619, end: 631 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 634, end: 639 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 641, end: 644 },
							},
							loc: { start: 641, end: 644 },
						},
						loc: { start: 641, end: 645 },
					},
					directives: [],
					loc: { start: 634, end: 645 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 648, end: 654 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 656, end: 659 },
							},
							loc: { start: 656, end: 659 },
						},
						loc: { start: 656, end: 660 },
					},
					directives: [],
					loc: { start: 648, end: 660 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 663, end: 670 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 672, end: 679 },
						},
						loc: { start: 672, end: 679 },
					},
					directives: [],
					loc: { start: 663, end: 679 },
				},
			],
			loc: { start: 589, end: 681 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 688, end: 698 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 703, end: 705 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 707, end: 709 },
							},
							loc: { start: 707, end: 709 },
						},
						loc: { start: 707, end: 710 },
					},
					directives: [],
					loc: { start: 703, end: 710 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 713, end: 717 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 719, end: 725 },
							},
							loc: { start: 719, end: 725 },
						},
						loc: { start: 719, end: 726 },
					},
					directives: [],
					loc: { start: 713, end: 726 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 729, end: 736 },
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
									value: "Product",
									loc: { start: 739, end: 746 },
								},
								loc: { start: 739, end: 746 },
							},
							loc: { start: 739, end: 747 },
						},
						loc: { start: 738, end: 748 },
					},
					directives: [],
					loc: { start: 729, end: 748 },
				},
			],
			loc: { start: 683, end: 750 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 757, end: 762 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 767, end: 769 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 771, end: 773 },
							},
							loc: { start: 771, end: 773 },
						},
						loc: { start: 771, end: 774 },
					},
					directives: [],
					loc: { start: 767, end: 774 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 777, end: 782 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 784, end: 787 },
							},
							loc: { start: 784, end: 787 },
						},
						loc: { start: 784, end: 788 },
					},
					directives: [],
					loc: { start: 777, end: 788 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 791, end: 796 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 798, end: 801 },
							},
							loc: { start: 798, end: 801 },
						},
						loc: { start: 798, end: 802 },
					},
					directives: [],
					loc: { start: 791, end: 802 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 805, end: 812 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 814, end: 821 },
						},
						loc: { start: 814, end: 821 },
					},
					directives: [],
					loc: { start: 805, end: 821 },
				},
			],
			loc: { start: 752, end: 823 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 830, end: 835 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 840, end: 842 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 844, end: 846 },
							},
							loc: { start: 844, end: 846 },
						},
						loc: { start: 844, end: 847 },
					},
					directives: [],
					loc: { start: 840, end: 847 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 850, end: 854 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 856, end: 862 },
							},
							loc: { start: 856, end: 862 },
						},
						loc: { start: 856, end: 863 },
					},
					directives: [],
					loc: { start: 850, end: 863 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 866, end: 869 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 871, end: 877 },
							},
							loc: { start: 871, end: 877 },
						},
						loc: { start: 871, end: 878 },
					},
					directives: [],
					loc: { start: 866, end: 878 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 881, end: 888 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 890, end: 897 },
						},
						loc: { start: 890, end: 897 },
					},
					directives: [],
					loc: { start: 881, end: 897 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 900, end: 906 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 908, end: 914 },
						},
						loc: { start: 908, end: 914 },
					},
					directives: [],
					loc: { start: 900, end: 914 },
				},
			],
			loc: { start: 825, end: 916 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 922, end: 927 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 917, end: 927 },
		},
	],
	loc: { start: 0, end: 928 },
} as unknown as DocumentNode;

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
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 22, end: 32 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 33, end: 37 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 39, end: 45 },
									},
									loc: { start: 39, end: 45 },
								},
								loc: { start: 39, end: 46 },
							},
							directives: [],
							loc: { start: 33, end: 46 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 49, end: 59 },
						},
						loc: { start: 49, end: 59 },
					},
					directives: [],
					loc: { start: 22, end: 59 },
				},
			],
			loc: { start: 0, end: 61 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Collection", loc: { start: 68, end: 78 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 83, end: 85 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 87, end: 89 } },
							loc: { start: 87, end: 89 },
						},
						loc: { start: 87, end: 90 },
					},
					directives: [],
					loc: { start: 83, end: 90 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 93, end: 97 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 99, end: 105 },
							},
							loc: { start: 99, end: 105 },
						},
						loc: { start: 99, end: 106 },
					},
					directives: [],
					loc: { start: 93, end: 106 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 109, end: 117 },
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
									loc: { start: 120, end: 127 },
								},
								loc: { start: 120, end: 127 },
							},
							loc: { start: 120, end: 128 },
						},
						loc: { start: 119, end: 129 },
					},
					directives: [],
					loc: { start: 109, end: 129 },
				},
			],
			loc: { start: 63, end: 131 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 144, end: 149 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 154, end: 161 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 162, end: 164 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 166, end: 168 },
									},
									loc: { start: 166, end: 168 },
								},
								loc: { start: 166, end: 169 },
							},
							directives: [],
							loc: { start: 162, end: 169 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 172, end: 179 },
						},
						loc: { start: 172, end: 179 },
					},
					directives: [],
					loc: { start: 154, end: 179 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 182, end: 190 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 191, end: 195 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 197, end: 200 },
								},
								loc: { start: 197, end: 200 },
							},
							directives: [],
							loc: { start: 191, end: 200 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 202, end: 206 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 208, end: 211 },
								},
								loc: { start: 208, end: 211 },
							},
							directives: [],
							loc: { start: 202, end: 211 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 215, end: 222 },
							},
							loc: { start: 215, end: 222 },
						},
						loc: { start: 214, end: 223 },
					},
					directives: [],
					loc: { start: 182, end: 223 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 226, end: 239 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 240, end: 245 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 247, end: 253 },
									},
									loc: { start: 247, end: 253 },
								},
								loc: { start: 247, end: 254 },
							},
							directives: [],
							loc: { start: 240, end: 254 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 258, end: 265 },
							},
							loc: { start: 258, end: 265 },
						},
						loc: { start: 257, end: 266 },
					},
					directives: [],
					loc: { start: 226, end: 266 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 269, end: 274 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 276, end: 279 },
							},
							loc: { start: 276, end: 279 },
						},
						loc: { start: 276, end: 280 },
					},
					directives: [],
					loc: { start: 269, end: 280 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 283, end: 296 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 297, end: 301 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 303, end: 309 },
									},
									loc: { start: 303, end: 309 },
								},
								loc: { start: 303, end: 310 },
							},
							directives: [],
							loc: { start: 297, end: 310 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 313, end: 316 },
							},
							loc: { start: 313, end: 316 },
						},
						loc: { start: 313, end: 317 },
					},
					directives: [],
					loc: { start: 283, end: 317 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 320, end: 328 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 329, end: 333 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 335, end: 341 },
									},
									loc: { start: 335, end: 341 },
								},
								loc: { start: 335, end: 342 },
							},
							directives: [],
							loc: { start: 329, end: 342 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 345, end: 353 },
						},
						loc: { start: 345, end: 353 },
					},
					directives: [],
					loc: { start: 320, end: 353 },
				},
			],
			loc: { start: 132, end: 355 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 362, end: 369 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 374, end: 376 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 378, end: 380 },
							},
							loc: { start: 378, end: 380 },
						},
						loc: { start: 378, end: 381 },
					},
					directives: [],
					loc: { start: 374, end: 381 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 384, end: 390 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 392, end: 398 },
							},
							loc: { start: 392, end: 398 },
						},
						loc: { start: 392, end: 399 },
					},
					directives: [],
					loc: { start: 384, end: 399 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 402, end: 407 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 409, end: 415 },
							},
							loc: { start: 409, end: 415 },
						},
						loc: { start: 409, end: 416 },
					},
					directives: [],
					loc: { start: 402, end: 416 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 419, end: 424 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 426, end: 429 },
							},
							loc: { start: 426, end: 429 },
						},
						loc: { start: 426, end: 430 },
					},
					directives: [],
					loc: { start: 419, end: 430 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 433, end: 441 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 443, end: 453 },
							},
							loc: { start: 443, end: 453 },
						},
						loc: { start: 443, end: 454 },
					},
					directives: [],
					loc: { start: 433, end: 454 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 457, end: 465 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 467, end: 475 },
							},
							loc: { start: 467, end: 475 },
						},
						loc: { start: 467, end: 476 },
					},
					directives: [],
					loc: { start: 457, end: 476 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 479, end: 489 },
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
									loc: { start: 492, end: 502 },
								},
								loc: { start: 492, end: 502 },
							},
							loc: { start: 492, end: 503 },
						},
						loc: { start: 491, end: 504 },
					},
					directives: [],
					loc: { start: 479, end: 504 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 507, end: 512 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 514, end: 519 },
							},
							loc: { start: 514, end: 519 },
						},
						loc: { start: 514, end: 520 },
					},
					directives: [],
					loc: { start: 507, end: 520 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 523, end: 529 },
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
										loc: { start: 532, end: 537 },
									},
									loc: { start: 532, end: 537 },
								},
								loc: { start: 532, end: 538 },
							},
							loc: { start: 531, end: 539 },
						},
						loc: { start: 531, end: 540 },
					},
					directives: [],
					loc: { start: 523, end: 540 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 543, end: 554 },
					},
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
					loc: { start: 543, end: 563 },
				},
			],
			loc: { start: 357, end: 565 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 572, end: 580 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 585, end: 587 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 589, end: 591 },
							},
							loc: { start: 589, end: 591 },
						},
						loc: { start: 589, end: 592 },
					},
					directives: [],
					loc: { start: 585, end: 592 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 595, end: 599 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 601, end: 607 },
							},
							loc: { start: 601, end: 607 },
						},
						loc: { start: 601, end: 608 },
					},
					directives: [],
					loc: { start: 595, end: 608 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 611, end: 619 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 620, end: 624 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 626, end: 629 },
								},
								loc: { start: 626, end: 629 },
							},
							directives: [],
							loc: { start: 620, end: 629 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 631, end: 635 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 637, end: 640 },
								},
								loc: { start: 637, end: 640 },
							},
							directives: [],
							loc: { start: 631, end: 640 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 644, end: 651 },
							},
							loc: { start: 644, end: 651 },
						},
						loc: { start: 643, end: 652 },
					},
					directives: [],
					loc: { start: 611, end: 652 },
				},
			],
			loc: { start: 567, end: 654 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 661, end: 667 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 672, end: 674 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 676, end: 678 },
							},
							loc: { start: 676, end: 678 },
						},
						loc: { start: 676, end: 679 },
					},
					directives: [],
					loc: { start: 672, end: 679 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 682, end: 686 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 688, end: 694 },
							},
							loc: { start: 688, end: 694 },
						},
						loc: { start: 688, end: 695 },
					},
					directives: [],
					loc: { start: 682, end: 695 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 698, end: 705 },
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
									loc: { start: 708, end: 715 },
								},
								loc: { start: 708, end: 715 },
							},
							loc: { start: 708, end: 716 },
						},
						loc: { start: 707, end: 717 },
					},
					directives: [],
					loc: { start: 698, end: 717 },
				},
			],
			loc: { start: 656, end: 719 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 726, end: 736 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 741, end: 743 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 745, end: 747 },
							},
							loc: { start: 745, end: 747 },
						},
						loc: { start: 745, end: 748 },
					},
					directives: [],
					loc: { start: 741, end: 748 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 751, end: 754 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 756, end: 762 },
							},
							loc: { start: 756, end: 762 },
						},
						loc: { start: 756, end: 763 },
					},
					directives: [],
					loc: { start: 751, end: 763 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 766, end: 771 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 773, end: 776 },
							},
							loc: { start: 773, end: 776 },
						},
						loc: { start: 773, end: 777 },
					},
					directives: [],
					loc: { start: 766, end: 777 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 780, end: 786 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 788, end: 791 },
							},
							loc: { start: 788, end: 791 },
						},
						loc: { start: 788, end: 792 },
					},
					directives: [],
					loc: { start: 780, end: 792 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 795, end: 802 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 804, end: 811 },
						},
						loc: { start: 804, end: 811 },
					},
					directives: [],
					loc: { start: 795, end: 811 },
				},
			],
			loc: { start: 721, end: 813 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 820, end: 830 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 835, end: 837 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 839, end: 841 },
							},
							loc: { start: 839, end: 841 },
						},
						loc: { start: 839, end: 842 },
					},
					directives: [],
					loc: { start: 835, end: 842 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 845, end: 849 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 851, end: 857 },
							},
							loc: { start: 851, end: 857 },
						},
						loc: { start: 851, end: 858 },
					},
					directives: [],
					loc: { start: 845, end: 858 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 861, end: 868 },
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
									loc: { start: 871, end: 878 },
								},
								loc: { start: 871, end: 878 },
							},
							loc: { start: 871, end: 879 },
						},
						loc: { start: 870, end: 880 },
					},
					directives: [],
					loc: { start: 861, end: 880 },
				},
			],
			loc: { start: 815, end: 882 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 889, end: 894 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 899, end: 901 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 903, end: 905 },
							},
							loc: { start: 903, end: 905 },
						},
						loc: { start: 903, end: 906 },
					},
					directives: [],
					loc: { start: 899, end: 906 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 909, end: 914 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 916, end: 919 },
							},
							loc: { start: 916, end: 919 },
						},
						loc: { start: 916, end: 920 },
					},
					directives: [],
					loc: { start: 909, end: 920 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 923, end: 928 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 930, end: 933 },
							},
							loc: { start: 930, end: 933 },
						},
						loc: { start: 930, end: 934 },
					},
					directives: [],
					loc: { start: 923, end: 934 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 937, end: 944 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 946, end: 953 },
						},
						loc: { start: 946, end: 953 },
					},
					directives: [],
					loc: { start: 937, end: 953 },
				},
			],
			loc: { start: 884, end: 955 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 962, end: 967 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 972, end: 974 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 976, end: 978 },
							},
							loc: { start: 976, end: 978 },
						},
						loc: { start: 976, end: 979 },
					},
					directives: [],
					loc: { start: 972, end: 979 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 982, end: 986 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 988, end: 994 },
							},
							loc: { start: 988, end: 994 },
						},
						loc: { start: 988, end: 995 },
					},
					directives: [],
					loc: { start: 982, end: 995 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 998, end: 1001 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1003, end: 1009 },
							},
							loc: { start: 1003, end: 1009 },
						},
						loc: { start: 1003, end: 1010 },
					},
					directives: [],
					loc: { start: 998, end: 1010 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1013, end: 1020 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1022, end: 1029 },
						},
						loc: { start: 1022, end: 1029 },
					},
					directives: [],
					loc: { start: 1013, end: 1029 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1032, end: 1038 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 1040, end: 1046 },
						},
						loc: { start: 1040, end: 1046 },
					},
					directives: [],
					loc: { start: 1032, end: 1046 },
				},
			],
			loc: { start: 957, end: 1048 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1054, end: 1059 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1049, end: 1059 },
		},
	],
	loc: { start: 0, end: 1060 },
} as unknown as DocumentNode;

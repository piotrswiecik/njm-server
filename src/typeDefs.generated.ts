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
					name: { kind: "Name", value: "count", loc: { start: 94, end: 99 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 101, end: 104 },
							},
							loc: { start: 101, end: 104 },
						},
						loc: { start: 101, end: 105 },
					},
					directives: [],
					loc: { start: 94, end: 105 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 108, end: 121 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 122, end: 126 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 128, end: 134 },
									},
									loc: { start: 128, end: 134 },
								},
								loc: { start: 128, end: 135 },
							},
							directives: [],
							loc: { start: 122, end: 135 },
						},
					],
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
					loc: { start: 108, end: 142 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 145, end: 153 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 154, end: 158 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 160, end: 166 },
									},
									loc: { start: 160, end: 166 },
								},
								loc: { start: 160, end: 167 },
							},
							directives: [],
							loc: { start: 154, end: 167 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 170, end: 178 },
						},
						loc: { start: 170, end: 178 },
					},
					directives: [],
					loc: { start: 145, end: 178 },
				},
			],
			loc: { start: 0, end: 180 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 187, end: 194 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 199, end: 201 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 203, end: 205 },
							},
							loc: { start: 203, end: 205 },
						},
						loc: { start: 203, end: 206 },
					},
					directives: [],
					loc: { start: 199, end: 206 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 209, end: 215 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 217, end: 223 },
							},
							loc: { start: 217, end: 223 },
						},
						loc: { start: 217, end: 224 },
					},
					directives: [],
					loc: { start: 209, end: 224 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 227, end: 232 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 234, end: 240 },
							},
							loc: { start: 234, end: 240 },
						},
						loc: { start: 234, end: 241 },
					},
					directives: [],
					loc: { start: 227, end: 241 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 244, end: 249 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 251, end: 254 },
							},
							loc: { start: 251, end: 254 },
						},
						loc: { start: 251, end: 255 },
					},
					directives: [],
					loc: { start: 244, end: 255 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 258, end: 266 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 268, end: 278 },
							},
							loc: { start: 268, end: 278 },
						},
						loc: { start: 268, end: 279 },
					},
					directives: [],
					loc: { start: 258, end: 279 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 282, end: 290 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 292, end: 300 },
							},
							loc: { start: 292, end: 300 },
						},
						loc: { start: 292, end: 301 },
					},
					directives: [],
					loc: { start: 282, end: 301 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 304, end: 314 },
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
									loc: { start: 317, end: 327 },
								},
								loc: { start: 317, end: 327 },
							},
							loc: { start: 317, end: 328 },
						},
						loc: { start: 316, end: 329 },
					},
					directives: [],
					loc: { start: 304, end: 329 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 332, end: 337 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 339, end: 344 },
							},
							loc: { start: 339, end: 344 },
						},
						loc: { start: 339, end: 345 },
					},
					directives: [],
					loc: { start: 332, end: 345 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 348, end: 354 },
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
										loc: { start: 357, end: 362 },
									},
									loc: { start: 357, end: 362 },
								},
								loc: { start: 357, end: 363 },
							},
							loc: { start: 356, end: 364 },
						},
						loc: { start: 356, end: 365 },
					},
					directives: [],
					loc: { start: 348, end: 365 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 368, end: 379 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 381, end: 387 },
							},
							loc: { start: 381, end: 387 },
						},
						loc: { start: 381, end: 388 },
					},
					directives: [],
					loc: { start: 368, end: 388 },
				},
			],
			loc: { start: 182, end: 390 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 397, end: 405 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 410, end: 412 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 414, end: 416 },
							},
							loc: { start: 414, end: 416 },
						},
						loc: { start: 414, end: 417 },
					},
					directives: [],
					loc: { start: 410, end: 417 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 420, end: 424 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 426, end: 432 },
							},
							loc: { start: 426, end: 432 },
						},
						loc: { start: 426, end: 433 },
					},
					directives: [],
					loc: { start: 420, end: 433 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 436, end: 444 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 445, end: 449 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 451, end: 454 },
								},
								loc: { start: 451, end: 454 },
							},
							directives: [],
							loc: { start: 445, end: 454 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 456, end: 460 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 462, end: 465 },
								},
								loc: { start: 462, end: 465 },
							},
							directives: [],
							loc: { start: 456, end: 465 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 469, end: 476 },
							},
							loc: { start: 469, end: 476 },
						},
						loc: { start: 468, end: 477 },
					},
					directives: [],
					loc: { start: 436, end: 477 },
				},
			],
			loc: { start: 392, end: 479 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 486, end: 492 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 497, end: 499 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 501, end: 503 },
							},
							loc: { start: 501, end: 503 },
						},
						loc: { start: 501, end: 504 },
					},
					directives: [],
					loc: { start: 497, end: 504 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 507, end: 511 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 513, end: 519 },
							},
							loc: { start: 513, end: 519 },
						},
						loc: { start: 513, end: 520 },
					},
					directives: [],
					loc: { start: 507, end: 520 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 523, end: 530 },
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
									loc: { start: 533, end: 540 },
								},
								loc: { start: 533, end: 540 },
							},
							loc: { start: 533, end: 541 },
						},
						loc: { start: 532, end: 542 },
					},
					directives: [],
					loc: { start: 523, end: 542 },
				},
			],
			loc: { start: 481, end: 544 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 551, end: 561 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 566, end: 568 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 570, end: 572 },
							},
							loc: { start: 570, end: 572 },
						},
						loc: { start: 570, end: 573 },
					},
					directives: [],
					loc: { start: 566, end: 573 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 576, end: 579 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 581, end: 587 },
							},
							loc: { start: 581, end: 587 },
						},
						loc: { start: 581, end: 588 },
					},
					directives: [],
					loc: { start: 576, end: 588 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 591, end: 596 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 598, end: 601 },
							},
							loc: { start: 598, end: 601 },
						},
						loc: { start: 598, end: 602 },
					},
					directives: [],
					loc: { start: 591, end: 602 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 605, end: 611 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 613, end: 616 },
							},
							loc: { start: 613, end: 616 },
						},
						loc: { start: 613, end: 617 },
					},
					directives: [],
					loc: { start: 605, end: 617 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 620, end: 627 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 629, end: 636 },
						},
						loc: { start: 629, end: 636 },
					},
					directives: [],
					loc: { start: 620, end: 636 },
				},
			],
			loc: { start: 546, end: 638 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 645, end: 655 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 660, end: 662 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 664, end: 666 },
							},
							loc: { start: 664, end: 666 },
						},
						loc: { start: 664, end: 667 },
					},
					directives: [],
					loc: { start: 660, end: 667 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 670, end: 674 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 676, end: 682 },
							},
							loc: { start: 676, end: 682 },
						},
						loc: { start: 676, end: 683 },
					},
					directives: [],
					loc: { start: 670, end: 683 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 686, end: 693 },
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
									loc: { start: 696, end: 703 },
								},
								loc: { start: 696, end: 703 },
							},
							loc: { start: 696, end: 704 },
						},
						loc: { start: 695, end: 705 },
					},
					directives: [],
					loc: { start: 686, end: 705 },
				},
			],
			loc: { start: 640, end: 707 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 714, end: 719 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 724, end: 726 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 728, end: 730 },
							},
							loc: { start: 728, end: 730 },
						},
						loc: { start: 728, end: 731 },
					},
					directives: [],
					loc: { start: 724, end: 731 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 734, end: 739 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 741, end: 744 },
							},
							loc: { start: 741, end: 744 },
						},
						loc: { start: 741, end: 745 },
					},
					directives: [],
					loc: { start: 734, end: 745 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 748, end: 753 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 755, end: 758 },
							},
							loc: { start: 755, end: 758 },
						},
						loc: { start: 755, end: 759 },
					},
					directives: [],
					loc: { start: 748, end: 759 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 762, end: 769 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 771, end: 778 },
						},
						loc: { start: 771, end: 778 },
					},
					directives: [],
					loc: { start: 762, end: 778 },
				},
			],
			loc: { start: 709, end: 780 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 787, end: 792 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 797, end: 799 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 801, end: 803 },
							},
							loc: { start: 801, end: 803 },
						},
						loc: { start: 801, end: 804 },
					},
					directives: [],
					loc: { start: 797, end: 804 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 807, end: 811 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 813, end: 819 },
							},
							loc: { start: 813, end: 819 },
						},
						loc: { start: 813, end: 820 },
					},
					directives: [],
					loc: { start: 807, end: 820 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 823, end: 826 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 828, end: 834 },
							},
							loc: { start: 828, end: 834 },
						},
						loc: { start: 828, end: 835 },
					},
					directives: [],
					loc: { start: 823, end: 835 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 838, end: 845 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 847, end: 854 },
						},
						loc: { start: 847, end: 854 },
					},
					directives: [],
					loc: { start: 838, end: 854 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 857, end: 863 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 865, end: 871 },
						},
						loc: { start: 865, end: 871 },
					},
					directives: [],
					loc: { start: 857, end: 871 },
				},
			],
			loc: { start: 782, end: 873 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 879, end: 884 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 874, end: 884 },
		},
	],
	loc: { start: 0, end: 885 },
} as unknown as DocumentNode;

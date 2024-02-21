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
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 124, end: 128 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 130, end: 133 },
								},
								loc: { start: 130, end: 133 },
							},
							directives: [],
							loc: { start: 124, end: 133 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 135, end: 139 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 141, end: 144 },
								},
								loc: { start: 141, end: 144 },
							},
							directives: [],
							loc: { start: 135, end: 144 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 148, end: 155 },
							},
							loc: { start: 148, end: 155 },
						},
						loc: { start: 147, end: 156 },
					},
					directives: [],
					loc: { start: 94, end: 156 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 159, end: 164 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 166, end: 169 },
							},
							loc: { start: 166, end: 169 },
						},
						loc: { start: 166, end: 170 },
					},
					directives: [],
					loc: { start: 159, end: 170 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 173, end: 186 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 187, end: 191 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 193, end: 199 },
									},
									loc: { start: 193, end: 199 },
								},
								loc: { start: 193, end: 200 },
							},
							directives: [],
							loc: { start: 187, end: 200 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 203, end: 206 },
							},
							loc: { start: 203, end: 206 },
						},
						loc: { start: 203, end: 207 },
					},
					directives: [],
					loc: { start: 173, end: 207 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 210, end: 218 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 219, end: 223 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 225, end: 231 },
									},
									loc: { start: 225, end: 231 },
								},
								loc: { start: 225, end: 232 },
							},
							directives: [],
							loc: { start: 219, end: 232 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 235, end: 243 },
						},
						loc: { start: 235, end: 243 },
					},
					directives: [],
					loc: { start: 210, end: 243 },
				},
			],
			loc: { start: 0, end: 245 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 252, end: 259 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 264, end: 266 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 268, end: 270 },
							},
							loc: { start: 268, end: 270 },
						},
						loc: { start: 268, end: 271 },
					},
					directives: [],
					loc: { start: 264, end: 271 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 274, end: 280 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 282, end: 288 },
							},
							loc: { start: 282, end: 288 },
						},
						loc: { start: 282, end: 289 },
					},
					directives: [],
					loc: { start: 274, end: 289 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 292, end: 297 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 299, end: 305 },
							},
							loc: { start: 299, end: 305 },
						},
						loc: { start: 299, end: 306 },
					},
					directives: [],
					loc: { start: 292, end: 306 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 309, end: 314 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 316, end: 319 },
							},
							loc: { start: 316, end: 319 },
						},
						loc: { start: 316, end: 320 },
					},
					directives: [],
					loc: { start: 309, end: 320 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 323, end: 331 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 333, end: 343 },
							},
							loc: { start: 333, end: 343 },
						},
						loc: { start: 333, end: 344 },
					},
					directives: [],
					loc: { start: 323, end: 344 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 347, end: 355 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 357, end: 365 },
							},
							loc: { start: 357, end: 365 },
						},
						loc: { start: 357, end: 366 },
					},
					directives: [],
					loc: { start: 347, end: 366 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 369, end: 379 },
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
									loc: { start: 382, end: 392 },
								},
								loc: { start: 382, end: 392 },
							},
							loc: { start: 382, end: 393 },
						},
						loc: { start: 381, end: 394 },
					},
					directives: [],
					loc: { start: 369, end: 394 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 397, end: 402 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 404, end: 409 },
							},
							loc: { start: 404, end: 409 },
						},
						loc: { start: 404, end: 410 },
					},
					directives: [],
					loc: { start: 397, end: 410 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 413, end: 419 },
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
										loc: { start: 422, end: 427 },
									},
									loc: { start: 422, end: 427 },
								},
								loc: { start: 422, end: 428 },
							},
							loc: { start: 421, end: 429 },
						},
						loc: { start: 421, end: 430 },
					},
					directives: [],
					loc: { start: 413, end: 430 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 433, end: 444 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 446, end: 452 },
							},
							loc: { start: 446, end: 452 },
						},
						loc: { start: 446, end: 453 },
					},
					directives: [],
					loc: { start: 433, end: 453 },
				},
			],
			loc: { start: 247, end: 455 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 462, end: 470 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 475, end: 477 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 479, end: 481 },
							},
							loc: { start: 479, end: 481 },
						},
						loc: { start: 479, end: 482 },
					},
					directives: [],
					loc: { start: 475, end: 482 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 485, end: 489 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 491, end: 497 },
							},
							loc: { start: 491, end: 497 },
						},
						loc: { start: 491, end: 498 },
					},
					directives: [],
					loc: { start: 485, end: 498 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 501, end: 509 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 510, end: 514 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 516, end: 519 },
								},
								loc: { start: 516, end: 519 },
							},
							directives: [],
							loc: { start: 510, end: 519 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 521, end: 525 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 527, end: 530 },
								},
								loc: { start: 527, end: 530 },
							},
							directives: [],
							loc: { start: 521, end: 530 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 534, end: 541 },
							},
							loc: { start: 534, end: 541 },
						},
						loc: { start: 533, end: 542 },
					},
					directives: [],
					loc: { start: 501, end: 542 },
				},
			],
			loc: { start: 457, end: 544 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 551, end: 557 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 562, end: 564 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 566, end: 568 },
							},
							loc: { start: 566, end: 568 },
						},
						loc: { start: 566, end: 569 },
					},
					directives: [],
					loc: { start: 562, end: 569 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 572, end: 576 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 578, end: 584 },
							},
							loc: { start: 578, end: 584 },
						},
						loc: { start: 578, end: 585 },
					},
					directives: [],
					loc: { start: 572, end: 585 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 588, end: 595 },
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
									loc: { start: 598, end: 605 },
								},
								loc: { start: 598, end: 605 },
							},
							loc: { start: 598, end: 606 },
						},
						loc: { start: 597, end: 607 },
					},
					directives: [],
					loc: { start: 588, end: 607 },
				},
			],
			loc: { start: 546, end: 609 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 616, end: 626 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 631, end: 633 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 635, end: 637 },
							},
							loc: { start: 635, end: 637 },
						},
						loc: { start: 635, end: 638 },
					},
					directives: [],
					loc: { start: 631, end: 638 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 641, end: 644 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 646, end: 652 },
							},
							loc: { start: 646, end: 652 },
						},
						loc: { start: 646, end: 653 },
					},
					directives: [],
					loc: { start: 641, end: 653 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 656, end: 661 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 663, end: 666 },
							},
							loc: { start: 663, end: 666 },
						},
						loc: { start: 663, end: 667 },
					},
					directives: [],
					loc: { start: 656, end: 667 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 670, end: 676 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 678, end: 681 },
							},
							loc: { start: 678, end: 681 },
						},
						loc: { start: 678, end: 682 },
					},
					directives: [],
					loc: { start: 670, end: 682 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 685, end: 692 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 694, end: 701 },
						},
						loc: { start: 694, end: 701 },
					},
					directives: [],
					loc: { start: 685, end: 701 },
				},
			],
			loc: { start: 611, end: 703 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 710, end: 720 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 725, end: 727 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 729, end: 731 },
							},
							loc: { start: 729, end: 731 },
						},
						loc: { start: 729, end: 732 },
					},
					directives: [],
					loc: { start: 725, end: 732 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 735, end: 739 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 741, end: 747 },
							},
							loc: { start: 741, end: 747 },
						},
						loc: { start: 741, end: 748 },
					},
					directives: [],
					loc: { start: 735, end: 748 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 751, end: 758 },
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
									loc: { start: 761, end: 768 },
								},
								loc: { start: 761, end: 768 },
							},
							loc: { start: 761, end: 769 },
						},
						loc: { start: 760, end: 770 },
					},
					directives: [],
					loc: { start: 751, end: 770 },
				},
			],
			loc: { start: 705, end: 772 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 779, end: 784 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 789, end: 791 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 793, end: 795 },
							},
							loc: { start: 793, end: 795 },
						},
						loc: { start: 793, end: 796 },
					},
					directives: [],
					loc: { start: 789, end: 796 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 799, end: 804 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 806, end: 809 },
							},
							loc: { start: 806, end: 809 },
						},
						loc: { start: 806, end: 810 },
					},
					directives: [],
					loc: { start: 799, end: 810 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 813, end: 818 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 820, end: 823 },
							},
							loc: { start: 820, end: 823 },
						},
						loc: { start: 820, end: 824 },
					},
					directives: [],
					loc: { start: 813, end: 824 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 827, end: 834 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 836, end: 843 },
						},
						loc: { start: 836, end: 843 },
					},
					directives: [],
					loc: { start: 827, end: 843 },
				},
			],
			loc: { start: 774, end: 845 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 852, end: 857 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 862, end: 864 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 866, end: 868 },
							},
							loc: { start: 866, end: 868 },
						},
						loc: { start: 866, end: 869 },
					},
					directives: [],
					loc: { start: 862, end: 869 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 872, end: 876 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 878, end: 884 },
							},
							loc: { start: 878, end: 884 },
						},
						loc: { start: 878, end: 885 },
					},
					directives: [],
					loc: { start: 872, end: 885 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 888, end: 891 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 893, end: 899 },
							},
							loc: { start: 893, end: 899 },
						},
						loc: { start: 893, end: 900 },
					},
					directives: [],
					loc: { start: 888, end: 900 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 903, end: 910 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 912, end: 919 },
						},
						loc: { start: 912, end: 919 },
					},
					directives: [],
					loc: { start: 903, end: 919 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 922, end: 928 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 930, end: 936 },
						},
						loc: { start: 930, end: 936 },
					},
					directives: [],
					loc: { start: 922, end: 936 },
				},
			],
			loc: { start: 847, end: 938 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 944, end: 949 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 939, end: 949 },
		},
	],
	loc: { start: 0, end: 950 },
} as unknown as DocumentNode;

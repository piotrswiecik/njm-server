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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 62, end: 73 },
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
									loc: { start: 76, end: 86 },
								},
								loc: { start: 76, end: 86 },
							},
							loc: { start: 76, end: 87 },
						},
						loc: { start: 75, end: 88 },
					},
					directives: [],
					loc: { start: 62, end: 88 },
				},
			],
			loc: { start: 0, end: 90 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Collection", loc: { start: 97, end: 107 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 112, end: 114 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 116, end: 118 },
							},
							loc: { start: 116, end: 118 },
						},
						loc: { start: 116, end: 119 },
					},
					directives: [],
					loc: { start: 112, end: 119 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 122, end: 126 } },
					arguments: [],
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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 138, end: 146 },
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
									loc: { start: 149, end: 156 },
								},
								loc: { start: 149, end: 156 },
							},
							loc: { start: 149, end: 157 },
						},
						loc: { start: 148, end: 158 },
					},
					directives: [],
					loc: { start: 138, end: 158 },
				},
			],
			loc: { start: 92, end: 160 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 173, end: 178 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 183, end: 190 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 191, end: 193 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 195, end: 197 },
									},
									loc: { start: 195, end: 197 },
								},
								loc: { start: 195, end: 198 },
							},
							directives: [],
							loc: { start: 191, end: 198 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 201, end: 208 },
						},
						loc: { start: 201, end: 208 },
					},
					directives: [],
					loc: { start: 183, end: 208 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 211, end: 219 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 220, end: 224 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 226, end: 229 },
								},
								loc: { start: 226, end: 229 },
							},
							directives: [],
							loc: { start: 220, end: 229 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 231, end: 235 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 237, end: 240 },
								},
								loc: { start: 237, end: 240 },
							},
							directives: [],
							loc: { start: 231, end: 240 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 244, end: 251 },
							},
							loc: { start: 244, end: 251 },
						},
						loc: { start: 243, end: 252 },
					},
					directives: [],
					loc: { start: 211, end: 252 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 255, end: 268 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 269, end: 274 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 276, end: 282 },
									},
									loc: { start: 276, end: 282 },
								},
								loc: { start: 276, end: 283 },
							},
							directives: [],
							loc: { start: 269, end: 283 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 287, end: 294 },
							},
							loc: { start: 287, end: 294 },
						},
						loc: { start: 286, end: 295 },
					},
					directives: [],
					loc: { start: 255, end: 295 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "count", loc: { start: 298, end: 303 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 305, end: 308 },
							},
							loc: { start: 305, end: 308 },
						},
						loc: { start: 305, end: 309 },
					},
					directives: [],
					loc: { start: 298, end: 309 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 312, end: 325 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 326, end: 330 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 332, end: 338 },
									},
									loc: { start: 332, end: 338 },
								},
								loc: { start: 332, end: 339 },
							},
							directives: [],
							loc: { start: 326, end: 339 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 342, end: 345 },
							},
							loc: { start: 342, end: 345 },
						},
						loc: { start: 342, end: 346 },
					},
					directives: [],
					loc: { start: 312, end: 346 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 349, end: 357 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 358, end: 362 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 364, end: 370 },
									},
									loc: { start: 364, end: 370 },
								},
								loc: { start: 364, end: 371 },
							},
							directives: [],
							loc: { start: 358, end: 371 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 374, end: 382 },
						},
						loc: { start: 374, end: 382 },
					},
					directives: [],
					loc: { start: 349, end: 382 },
				},
			],
			loc: { start: 161, end: 384 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 391, end: 398 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 403, end: 405 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 407, end: 409 },
							},
							loc: { start: 407, end: 409 },
						},
						loc: { start: 407, end: 410 },
					},
					directives: [],
					loc: { start: 403, end: 410 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 413, end: 419 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 421, end: 427 },
							},
							loc: { start: 421, end: 427 },
						},
						loc: { start: 421, end: 428 },
					},
					directives: [],
					loc: { start: 413, end: 428 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 431, end: 436 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 438, end: 444 },
							},
							loc: { start: 438, end: 444 },
						},
						loc: { start: 438, end: 445 },
					},
					directives: [],
					loc: { start: 431, end: 445 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 448, end: 453 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 455, end: 458 },
							},
							loc: { start: 455, end: 458 },
						},
						loc: { start: 455, end: 459 },
					},
					directives: [],
					loc: { start: 448, end: 459 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 462, end: 470 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 472, end: 482 },
							},
							loc: { start: 472, end: 482 },
						},
						loc: { start: 472, end: 483 },
					},
					directives: [],
					loc: { start: 462, end: 483 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 486, end: 494 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 496, end: 504 },
							},
							loc: { start: 496, end: 504 },
						},
						loc: { start: 496, end: 505 },
					},
					directives: [],
					loc: { start: 486, end: 505 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 508, end: 518 },
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
									loc: { start: 521, end: 531 },
								},
								loc: { start: 521, end: 531 },
							},
							loc: { start: 521, end: 532 },
						},
						loc: { start: 520, end: 533 },
					},
					directives: [],
					loc: { start: 508, end: 533 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 536, end: 541 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 543, end: 548 },
							},
							loc: { start: 543, end: 548 },
						},
						loc: { start: 543, end: 549 },
					},
					directives: [],
					loc: { start: 536, end: 549 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 552, end: 558 },
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
										loc: { start: 561, end: 566 },
									},
									loc: { start: 561, end: 566 },
								},
								loc: { start: 561, end: 567 },
							},
							loc: { start: 560, end: 568 },
						},
						loc: { start: 560, end: 569 },
					},
					directives: [],
					loc: { start: 552, end: 569 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 572, end: 583 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 585, end: 591 },
							},
							loc: { start: 585, end: 591 },
						},
						loc: { start: 585, end: 592 },
					},
					directives: [],
					loc: { start: 572, end: 592 },
				},
			],
			loc: { start: 386, end: 594 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 601, end: 609 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 614, end: 616 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 618, end: 620 },
							},
							loc: { start: 618, end: 620 },
						},
						loc: { start: 618, end: 621 },
					},
					directives: [],
					loc: { start: 614, end: 621 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 624, end: 628 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 630, end: 636 },
							},
							loc: { start: 630, end: 636 },
						},
						loc: { start: 630, end: 637 },
					},
					directives: [],
					loc: { start: 624, end: 637 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 640, end: 648 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 649, end: 653 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 655, end: 658 },
								},
								loc: { start: 655, end: 658 },
							},
							directives: [],
							loc: { start: 649, end: 658 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 660, end: 664 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 666, end: 669 },
								},
								loc: { start: 666, end: 669 },
							},
							directives: [],
							loc: { start: 660, end: 669 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 673, end: 680 },
							},
							loc: { start: 673, end: 680 },
						},
						loc: { start: 672, end: 681 },
					},
					directives: [],
					loc: { start: 640, end: 681 },
				},
			],
			loc: { start: 596, end: 683 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 690, end: 696 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 701, end: 703 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 705, end: 707 },
							},
							loc: { start: 705, end: 707 },
						},
						loc: { start: 705, end: 708 },
					},
					directives: [],
					loc: { start: 701, end: 708 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 711, end: 715 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 717, end: 723 },
							},
							loc: { start: 717, end: 723 },
						},
						loc: { start: 717, end: 724 },
					},
					directives: [],
					loc: { start: 711, end: 724 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 727, end: 734 },
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
									loc: { start: 737, end: 744 },
								},
								loc: { start: 737, end: 744 },
							},
							loc: { start: 737, end: 745 },
						},
						loc: { start: 736, end: 746 },
					},
					directives: [],
					loc: { start: 727, end: 746 },
				},
			],
			loc: { start: 685, end: 748 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 755, end: 765 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 770, end: 772 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 774, end: 776 },
							},
							loc: { start: 774, end: 776 },
						},
						loc: { start: 774, end: 777 },
					},
					directives: [],
					loc: { start: 770, end: 777 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 780, end: 783 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 785, end: 791 },
							},
							loc: { start: 785, end: 791 },
						},
						loc: { start: 785, end: 792 },
					},
					directives: [],
					loc: { start: 780, end: 792 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 795, end: 800 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 802, end: 805 },
							},
							loc: { start: 802, end: 805 },
						},
						loc: { start: 802, end: 806 },
					},
					directives: [],
					loc: { start: 795, end: 806 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 809, end: 815 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 817, end: 820 },
							},
							loc: { start: 817, end: 820 },
						},
						loc: { start: 817, end: 821 },
					},
					directives: [],
					loc: { start: 809, end: 821 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 824, end: 831 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 833, end: 840 },
						},
						loc: { start: 833, end: 840 },
					},
					directives: [],
					loc: { start: 824, end: 840 },
				},
			],
			loc: { start: 750, end: 842 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 849, end: 859 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 864, end: 866 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 868, end: 870 },
							},
							loc: { start: 868, end: 870 },
						},
						loc: { start: 868, end: 871 },
					},
					directives: [],
					loc: { start: 864, end: 871 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 874, end: 878 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 880, end: 886 },
							},
							loc: { start: 880, end: 886 },
						},
						loc: { start: 880, end: 887 },
					},
					directives: [],
					loc: { start: 874, end: 887 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 890, end: 897 },
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
									loc: { start: 900, end: 907 },
								},
								loc: { start: 900, end: 907 },
							},
							loc: { start: 900, end: 908 },
						},
						loc: { start: 899, end: 909 },
					},
					directives: [],
					loc: { start: 890, end: 909 },
				},
			],
			loc: { start: 844, end: 911 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 918, end: 923 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 928, end: 930 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 932, end: 934 },
							},
							loc: { start: 932, end: 934 },
						},
						loc: { start: 932, end: 935 },
					},
					directives: [],
					loc: { start: 928, end: 935 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 938, end: 943 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 945, end: 948 },
							},
							loc: { start: 945, end: 948 },
						},
						loc: { start: 945, end: 949 },
					},
					directives: [],
					loc: { start: 938, end: 949 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 952, end: 957 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 959, end: 962 },
							},
							loc: { start: 959, end: 962 },
						},
						loc: { start: 959, end: 963 },
					},
					directives: [],
					loc: { start: 952, end: 963 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 966, end: 973 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 975, end: 982 },
						},
						loc: { start: 975, end: 982 },
					},
					directives: [],
					loc: { start: 966, end: 982 },
				},
			],
			loc: { start: 913, end: 984 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 991, end: 996 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1001, end: 1003 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1005, end: 1007 },
							},
							loc: { start: 1005, end: 1007 },
						},
						loc: { start: 1005, end: 1008 },
					},
					directives: [],
					loc: { start: 1001, end: 1008 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1011, end: 1015 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1017, end: 1023 },
							},
							loc: { start: 1017, end: 1023 },
						},
						loc: { start: 1017, end: 1024 },
					},
					directives: [],
					loc: { start: 1011, end: 1024 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1027, end: 1030 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1032, end: 1038 },
							},
							loc: { start: 1032, end: 1038 },
						},
						loc: { start: 1032, end: 1039 },
					},
					directives: [],
					loc: { start: 1027, end: 1039 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1042, end: 1049 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1051, end: 1058 },
						},
						loc: { start: 1051, end: 1058 },
					},
					directives: [],
					loc: { start: 1042, end: 1058 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 1061, end: 1067 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 1069, end: 1075 },
						},
						loc: { start: 1069, end: 1075 },
					},
					directives: [],
					loc: { start: 1061, end: 1075 },
				},
			],
			loc: { start: 986, end: 1077 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1083, end: 1088 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1078, end: 1088 },
		},
	],
	loc: { start: 0, end: 1089 },
} as unknown as DocumentNode;

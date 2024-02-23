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
					directives: [],
					loc: { start: 172, end: 214 },
				},
			],
			loc: { start: 128, end: 216 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 229, end: 234 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 239, end: 249 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 250, end: 254 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 256, end: 262 },
									},
									loc: { start: 256, end: 262 },
								},
								loc: { start: 256, end: 263 },
							},
							directives: [],
							loc: { start: 250, end: 263 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 266, end: 276 },
						},
						loc: { start: 266, end: 276 },
					},
					directives: [],
					loc: { start: 239, end: 276 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 279, end: 290 },
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
									loc: { start: 293, end: 303 },
								},
								loc: { start: 293, end: 303 },
							},
							loc: { start: 293, end: 304 },
						},
						loc: { start: 292, end: 305 },
					},
					directives: [],
					loc: { start: 279, end: 305 },
				},
			],
			loc: { start: 217, end: 307 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 314, end: 324 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 329, end: 331 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 333, end: 335 },
							},
							loc: { start: 333, end: 335 },
						},
						loc: { start: 333, end: 336 },
					},
					directives: [],
					loc: { start: 329, end: 336 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 339, end: 343 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 345, end: 351 },
							},
							loc: { start: 345, end: 351 },
						},
						loc: { start: 345, end: 352 },
					},
					directives: [],
					loc: { start: 339, end: 352 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 355, end: 363 },
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
									loc: { start: 366, end: 373 },
								},
								loc: { start: 366, end: 373 },
							},
							loc: { start: 366, end: 374 },
						},
						loc: { start: 365, end: 375 },
					},
					directives: [],
					loc: { start: 355, end: 375 },
				},
			],
			loc: { start: 309, end: 377 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 390, end: 395 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 400, end: 407 },
					},
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
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 418, end: 425 },
						},
						loc: { start: 418, end: 425 },
					},
					directives: [],
					loc: { start: 400, end: 425 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 428, end: 436 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 437, end: 441 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 443, end: 446 },
								},
								loc: { start: 443, end: 446 },
							},
							directives: [],
							loc: { start: 437, end: 446 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 448, end: 452 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 454, end: 457 },
								},
								loc: { start: 454, end: 457 },
							},
							directives: [],
							loc: { start: 448, end: 457 },
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
										loc: { start: 461, end: 468 },
									},
									loc: { start: 461, end: 468 },
								},
								loc: { start: 461, end: 469 },
							},
							loc: { start: 460, end: 470 },
						},
						loc: { start: 460, end: 471 },
					},
					directives: [],
					loc: { start: 428, end: 471 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 474, end: 487 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 488, end: 493 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 495, end: 501 },
									},
									loc: { start: 495, end: 501 },
								},
								loc: { start: 495, end: 502 },
							},
							directives: [],
							loc: { start: 488, end: 502 },
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
									loc: { start: 506, end: 513 },
								},
								loc: { start: 506, end: 513 },
							},
							loc: { start: 506, end: 514 },
						},
						loc: { start: 505, end: 515 },
					},
					directives: [],
					loc: { start: 474, end: 515 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 518, end: 530 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 532, end: 535 },
							},
							loc: { start: 532, end: 535 },
						},
						loc: { start: 532, end: 536 },
					},
					directives: [],
					loc: { start: 518, end: 536 },
				},
			],
			loc: { start: 378, end: 538 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 545, end: 552 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 557, end: 559 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 561, end: 563 },
							},
							loc: { start: 561, end: 563 },
						},
						loc: { start: 561, end: 564 },
					},
					directives: [],
					loc: { start: 557, end: 564 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 567, end: 572 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 574, end: 580 },
							},
							loc: { start: 574, end: 580 },
						},
						loc: { start: 574, end: 581 },
					},
					directives: [],
					loc: { start: 567, end: 581 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 584, end: 597 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 599, end: 605 },
							},
							loc: { start: 599, end: 605 },
						},
						loc: { start: 599, end: 606 },
					},
					directives: [],
					loc: { start: 584, end: 606 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 609, end: 620 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 622, end: 628 },
							},
							loc: { start: 622, end: 628 },
						},
						loc: { start: 622, end: 629 },
					},
					directives: [],
					loc: { start: 609, end: 629 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 632, end: 638 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 640, end: 646 },
							},
							loc: { start: 640, end: 646 },
						},
						loc: { start: 640, end: 647 },
					},
					directives: [],
					loc: { start: 632, end: 647 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 650, end: 658 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 660, end: 668 },
							},
							loc: { start: 660, end: 668 },
						},
						loc: { start: 660, end: 669 },
					},
					directives: [],
					loc: { start: 650, end: 669 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 672, end: 678 },
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
										loc: { start: 681, end: 686 },
									},
									loc: { start: 681, end: 686 },
								},
								loc: { start: 681, end: 687 },
							},
							loc: { start: 680, end: 688 },
						},
						loc: { start: 680, end: 689 },
					},
					directives: [],
					loc: { start: 672, end: 689 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 692, end: 700 },
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
										loc: { start: 703, end: 710 },
									},
									loc: { start: 703, end: 710 },
								},
								loc: { start: 703, end: 711 },
							},
							loc: { start: 702, end: 712 },
						},
						loc: { start: 702, end: 713 },
					},
					directives: [],
					loc: { start: 692, end: 713 },
				},
			],
			loc: { start: 540, end: 715 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 721, end: 726 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 716, end: 726 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 732, end: 737 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 742, end: 746 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 748, end: 754 },
							},
							loc: { start: 748, end: 754 },
						},
						loc: { start: 748, end: 755 },
					},
					directives: [],
					loc: { start: 742, end: 755 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 758, end: 761 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 763, end: 769 },
						},
						loc: { start: 763, end: 769 },
					},
					directives: [],
					loc: { start: 758, end: 769 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 772, end: 778 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 780, end: 783 },
							},
							loc: { start: 780, end: 783 },
						},
						loc: { start: 780, end: 784 },
					},
					directives: [],
					loc: { start: 772, end: 784 },
				},
			],
			loc: { start: 727, end: 786 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 792, end: 799 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 804, end: 808 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 810, end: 816 },
							},
							loc: { start: 810, end: 816 },
						},
						loc: { start: 810, end: 817 },
					},
					directives: [],
					loc: { start: 804, end: 817 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 820, end: 825 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 827, end: 830 },
							},
							loc: { start: 827, end: 830 },
						},
						loc: { start: 827, end: 831 },
					},
					directives: [],
					loc: { start: 820, end: 831 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 834, end: 839 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 841, end: 844 },
							},
							loc: { start: 841, end: 844 },
						},
						loc: { start: 841, end: 845 },
					},
					directives: [],
					loc: { start: 834, end: 845 },
				},
			],
			loc: { start: 787, end: 847 },
		},
	],
	loc: { start: 0, end: 848 },
} as unknown as DocumentNode;

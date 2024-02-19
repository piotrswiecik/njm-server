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
			],
			loc: { start: 0, end: 93 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 100, end: 107 } },
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
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 122, end: 128 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 130, end: 136 },
							},
							loc: { start: 130, end: 136 },
						},
						loc: { start: 130, end: 137 },
					},
					directives: [],
					loc: { start: 122, end: 137 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 140, end: 145 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 147, end: 153 },
							},
							loc: { start: 147, end: 153 },
						},
						loc: { start: 147, end: 154 },
					},
					directives: [],
					loc: { start: 140, end: 154 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 157, end: 162 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 164, end: 167 },
							},
							loc: { start: 164, end: 167 },
						},
						loc: { start: 164, end: 168 },
					},
					directives: [],
					loc: { start: 157, end: 168 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 171, end: 179 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 181, end: 191 },
							},
							loc: { start: 181, end: 191 },
						},
						loc: { start: 181, end: 192 },
					},
					directives: [],
					loc: { start: 171, end: 192 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 195, end: 203 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 205, end: 211 },
							},
							loc: { start: 205, end: 211 },
						},
						loc: { start: 205, end: 212 },
					},
					directives: [],
					loc: { start: 195, end: 212 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 215, end: 225 },
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
									loc: { start: 228, end: 238 },
								},
								loc: { start: 228, end: 238 },
							},
							loc: { start: 228, end: 239 },
						},
						loc: { start: 227, end: 240 },
					},
					directives: [],
					loc: { start: 215, end: 240 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 243, end: 248 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 250, end: 255 },
							},
							loc: { start: 250, end: 255 },
						},
						loc: { start: 250, end: 256 },
					},
					directives: [],
					loc: { start: 243, end: 256 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 259, end: 265 },
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
										loc: { start: 268, end: 273 },
									},
									loc: { start: 268, end: 273 },
								},
								loc: { start: 268, end: 274 },
							},
							loc: { start: 267, end: 275 },
						},
						loc: { start: 267, end: 276 },
					},
					directives: [],
					loc: { start: 259, end: 276 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 279, end: 290 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 292, end: 298 },
							},
							loc: { start: 292, end: 298 },
						},
						loc: { start: 292, end: 299 },
					},
					directives: [],
					loc: { start: 279, end: 299 },
				},
			],
			loc: { start: 95, end: 301 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 308, end: 314 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 319, end: 321 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 323, end: 325 },
							},
							loc: { start: 323, end: 325 },
						},
						loc: { start: 323, end: 326 },
					},
					directives: [],
					loc: { start: 319, end: 326 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 329, end: 333 } },
					arguments: [],
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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 345, end: 352 },
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
									loc: { start: 355, end: 362 },
								},
								loc: { start: 355, end: 362 },
							},
							loc: { start: 355, end: 363 },
						},
						loc: { start: 354, end: 364 },
					},
					directives: [],
					loc: { start: 345, end: 364 },
				},
			],
			loc: { start: 303, end: 366 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 373, end: 383 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 388, end: 390 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 392, end: 394 },
							},
							loc: { start: 392, end: 394 },
						},
						loc: { start: 392, end: 395 },
					},
					directives: [],
					loc: { start: 388, end: 395 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 398, end: 401 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 403, end: 409 },
							},
							loc: { start: 403, end: 409 },
						},
						loc: { start: 403, end: 410 },
					},
					directives: [],
					loc: { start: 398, end: 410 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 413, end: 418 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 420, end: 423 },
							},
							loc: { start: 420, end: 423 },
						},
						loc: { start: 420, end: 424 },
					},
					directives: [],
					loc: { start: 413, end: 424 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 427, end: 433 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 435, end: 438 },
							},
							loc: { start: 435, end: 438 },
						},
						loc: { start: 435, end: 439 },
					},
					directives: [],
					loc: { start: 427, end: 439 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 442, end: 449 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 451, end: 458 },
						},
						loc: { start: 451, end: 458 },
					},
					directives: [],
					loc: { start: 442, end: 458 },
				},
			],
			loc: { start: 368, end: 460 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 467, end: 477 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 482, end: 484 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 486, end: 488 },
							},
							loc: { start: 486, end: 488 },
						},
						loc: { start: 486, end: 489 },
					},
					directives: [],
					loc: { start: 482, end: 489 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 492, end: 496 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 498, end: 504 },
							},
							loc: { start: 498, end: 504 },
						},
						loc: { start: 498, end: 505 },
					},
					directives: [],
					loc: { start: 492, end: 505 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 508, end: 515 },
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
									loc: { start: 518, end: 525 },
								},
								loc: { start: 518, end: 525 },
							},
							loc: { start: 518, end: 526 },
						},
						loc: { start: 517, end: 527 },
					},
					directives: [],
					loc: { start: 508, end: 527 },
				},
			],
			loc: { start: 462, end: 529 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 536, end: 541 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 546, end: 548 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 550, end: 552 },
							},
							loc: { start: 550, end: 552 },
						},
						loc: { start: 550, end: 553 },
					},
					directives: [],
					loc: { start: 546, end: 553 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 556, end: 561 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 563, end: 566 },
							},
							loc: { start: 563, end: 566 },
						},
						loc: { start: 563, end: 567 },
					},
					directives: [],
					loc: { start: 556, end: 567 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 570, end: 575 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 577, end: 580 },
							},
							loc: { start: 577, end: 580 },
						},
						loc: { start: 577, end: 581 },
					},
					directives: [],
					loc: { start: 570, end: 581 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 584, end: 591 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 593, end: 600 },
						},
						loc: { start: 593, end: 600 },
					},
					directives: [],
					loc: { start: 584, end: 600 },
				},
			],
			loc: { start: 531, end: 602 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 609, end: 614 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 619, end: 621 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 623, end: 625 },
							},
							loc: { start: 623, end: 625 },
						},
						loc: { start: 623, end: 626 },
					},
					directives: [],
					loc: { start: 619, end: 626 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 629, end: 633 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 635, end: 641 },
							},
							loc: { start: 635, end: 641 },
						},
						loc: { start: 635, end: 642 },
					},
					directives: [],
					loc: { start: 629, end: 642 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 645, end: 648 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 650, end: 656 },
							},
							loc: { start: 650, end: 656 },
						},
						loc: { start: 650, end: 657 },
					},
					directives: [],
					loc: { start: 645, end: 657 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 660, end: 667 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 669, end: 676 },
						},
						loc: { start: 669, end: 676 },
					},
					directives: [],
					loc: { start: 660, end: 676 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 679, end: 685 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 687, end: 693 },
						},
						loc: { start: 687, end: 693 },
					},
					directives: [],
					loc: { start: 679, end: 693 },
				},
			],
			loc: { start: 604, end: 695 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 701, end: 706 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 696, end: 706 },
		},
	],
	loc: { start: 0, end: 707 },
} as unknown as DocumentNode;

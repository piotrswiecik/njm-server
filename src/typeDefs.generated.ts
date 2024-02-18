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
			],
			loc: { start: 0, end: 49 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 56, end: 63 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 68, end: 70 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 72, end: 74 } },
							loc: { start: 72, end: 74 },
						},
						loc: { start: 72, end: 75 },
					},
					directives: [],
					loc: { start: 68, end: 75 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "artist", loc: { start: 78, end: 84 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 86, end: 92 },
							},
							loc: { start: 86, end: 92 },
						},
						loc: { start: 86, end: 93 },
					},
					directives: [],
					loc: { start: 78, end: 93 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 96, end: 101 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 103, end: 109 },
							},
							loc: { start: 103, end: 109 },
						},
						loc: { start: 103, end: 110 },
					},
					directives: [],
					loc: { start: 96, end: 110 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 113, end: 118 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 120, end: 123 },
							},
							loc: { start: 120, end: 123 },
						},
						loc: { start: 120, end: 124 },
					},
					directives: [],
					loc: { start: 113, end: 124 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 127, end: 135 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 137, end: 147 },
							},
							loc: { start: 137, end: 147 },
						},
						loc: { start: 137, end: 148 },
					},
					directives: [],
					loc: { start: 127, end: 148 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 151, end: 159 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 161, end: 167 },
							},
							loc: { start: 161, end: 167 },
						},
						loc: { start: 161, end: 168 },
					},
					directives: [],
					loc: { start: 151, end: 168 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 171, end: 181 },
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
									loc: { start: 184, end: 194 },
								},
								loc: { start: 184, end: 194 },
							},
							loc: { start: 184, end: 195 },
						},
						loc: { start: 183, end: 196 },
					},
					directives: [],
					loc: { start: 171, end: 196 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 199, end: 204 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 206, end: 211 },
							},
							loc: { start: 206, end: 211 },
						},
						loc: { start: 206, end: 212 },
					},
					directives: [],
					loc: { start: 199, end: 212 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 215, end: 221 },
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
										loc: { start: 224, end: 229 },
									},
									loc: { start: 224, end: 229 },
								},
								loc: { start: 224, end: 230 },
							},
							loc: { start: 223, end: 231 },
						},
						loc: { start: 223, end: 232 },
					},
					directives: [],
					loc: { start: 215, end: 232 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 235, end: 246 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 248, end: 254 },
							},
							loc: { start: 248, end: 254 },
						},
						loc: { start: 248, end: 255 },
					},
					directives: [],
					loc: { start: 235, end: 255 },
				},
			],
			loc: { start: 51, end: 257 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 264, end: 270 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 275, end: 277 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 279, end: 281 },
							},
							loc: { start: 279, end: 281 },
						},
						loc: { start: 279, end: 282 },
					},
					directives: [],
					loc: { start: 275, end: 282 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 285, end: 289 } },
					arguments: [],
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
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 301, end: 308 },
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
									loc: { start: 311, end: 318 },
								},
								loc: { start: 311, end: 318 },
							},
							loc: { start: 311, end: 319 },
						},
						loc: { start: 310, end: 320 },
					},
					directives: [],
					loc: { start: 301, end: 320 },
				},
			],
			loc: { start: 259, end: 322 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 329, end: 339 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 344, end: 346 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 348, end: 350 },
							},
							loc: { start: 348, end: 350 },
						},
						loc: { start: 348, end: 351 },
					},
					directives: [],
					loc: { start: 344, end: 351 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 354, end: 357 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 359, end: 365 },
							},
							loc: { start: 359, end: 365 },
						},
						loc: { start: 359, end: 366 },
					},
					directives: [],
					loc: { start: 354, end: 366 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 369, end: 374 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 376, end: 379 },
							},
							loc: { start: 376, end: 379 },
						},
						loc: { start: 376, end: 380 },
					},
					directives: [],
					loc: { start: 369, end: 380 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 383, end: 389 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 391, end: 394 },
							},
							loc: { start: 391, end: 394 },
						},
						loc: { start: 391, end: 395 },
					},
					directives: [],
					loc: { start: 383, end: 395 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 398, end: 405 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 407, end: 414 },
						},
						loc: { start: 407, end: 414 },
					},
					directives: [],
					loc: { start: 398, end: 414 },
				},
			],
			loc: { start: 324, end: 416 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 423, end: 433 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 438, end: 440 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 442, end: 444 },
							},
							loc: { start: 442, end: 444 },
						},
						loc: { start: 442, end: 445 },
					},
					directives: [],
					loc: { start: 438, end: 445 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 448, end: 452 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 454, end: 460 },
							},
							loc: { start: 454, end: 460 },
						},
						loc: { start: 454, end: 461 },
					},
					directives: [],
					loc: { start: 448, end: 461 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 464, end: 471 },
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
									loc: { start: 474, end: 481 },
								},
								loc: { start: 474, end: 481 },
							},
							loc: { start: 474, end: 482 },
						},
						loc: { start: 473, end: 483 },
					},
					directives: [],
					loc: { start: 464, end: 483 },
				},
			],
			loc: { start: 418, end: 485 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 492, end: 497 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 502, end: 504 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 506, end: 508 },
							},
							loc: { start: 506, end: 508 },
						},
						loc: { start: 506, end: 509 },
					},
					directives: [],
					loc: { start: 502, end: 509 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 512, end: 517 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 519, end: 522 },
							},
							loc: { start: 519, end: 522 },
						},
						loc: { start: 519, end: 523 },
					},
					directives: [],
					loc: { start: 512, end: 523 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 526, end: 531 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 533, end: 536 },
							},
							loc: { start: 533, end: 536 },
						},
						loc: { start: 533, end: 537 },
					},
					directives: [],
					loc: { start: 526, end: 537 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 540, end: 547 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 549, end: 556 },
						},
						loc: { start: 549, end: 556 },
					},
					directives: [],
					loc: { start: 540, end: 556 },
				},
			],
			loc: { start: 487, end: 558 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 565, end: 570 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 575, end: 577 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 579, end: 581 },
							},
							loc: { start: 579, end: 581 },
						},
						loc: { start: 579, end: 582 },
					},
					directives: [],
					loc: { start: 575, end: 582 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 585, end: 589 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 591, end: 597 },
							},
							loc: { start: 591, end: 597 },
						},
						loc: { start: 591, end: 598 },
					},
					directives: [],
					loc: { start: 585, end: 598 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 601, end: 604 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 606, end: 612 },
							},
							loc: { start: 606, end: 612 },
						},
						loc: { start: 606, end: 613 },
					},
					directives: [],
					loc: { start: 601, end: 613 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 616, end: 623 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 625, end: 632 },
						},
						loc: { start: 625, end: 632 },
					},
					directives: [],
					loc: { start: 616, end: 632 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 635, end: 641 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 643, end: 649 },
						},
						loc: { start: 643, end: 649 },
					},
					directives: [],
					loc: { start: 635, end: 649 },
				},
			],
			loc: { start: 560, end: 651 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 657, end: 662 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 652, end: 662 },
		},
	],
	loc: { start: 0, end: 663 },
} as unknown as DocumentNode;

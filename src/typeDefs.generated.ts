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
					name: { kind: "Name", value: "track", loc: { start: 215, end: 220 } },
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
										loc: { start: 223, end: 228 },
									},
									loc: { start: 223, end: 228 },
								},
								loc: { start: 223, end: 229 },
							},
							loc: { start: 222, end: 230 },
						},
						loc: { start: 222, end: 231 },
					},
					directives: [],
					loc: { start: 215, end: 231 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 234, end: 245 },
					},
					arguments: [],
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
					loc: { start: 234, end: 254 },
				},
			],
			loc: { start: 51, end: 256 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 263, end: 269 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 274, end: 276 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 278, end: 280 },
							},
							loc: { start: 278, end: 280 },
						},
						loc: { start: 278, end: 281 },
					},
					directives: [],
					loc: { start: 274, end: 281 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 284, end: 288 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 290, end: 296 },
							},
							loc: { start: 290, end: 296 },
						},
						loc: { start: 290, end: 297 },
					},
					directives: [],
					loc: { start: 284, end: 297 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 300, end: 307 },
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
									loc: { start: 310, end: 317 },
								},
								loc: { start: 310, end: 317 },
							},
							loc: { start: 310, end: 318 },
						},
						loc: { start: 309, end: 319 },
					},
					directives: [],
					loc: { start: 300, end: 319 },
				},
			],
			loc: { start: 258, end: 321 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 328, end: 338 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 343, end: 345 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 347, end: 349 },
							},
							loc: { start: 347, end: 349 },
						},
						loc: { start: 347, end: 350 },
					},
					directives: [],
					loc: { start: 343, end: 350 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 353, end: 356 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 358, end: 364 },
							},
							loc: { start: 358, end: 364 },
						},
						loc: { start: 358, end: 365 },
					},
					directives: [],
					loc: { start: 353, end: 365 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 368, end: 373 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 375, end: 378 },
							},
							loc: { start: 375, end: 378 },
						},
						loc: { start: 375, end: 379 },
					},
					directives: [],
					loc: { start: 368, end: 379 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 382, end: 388 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 390, end: 393 },
							},
							loc: { start: 390, end: 393 },
						},
						loc: { start: 390, end: 394 },
					},
					directives: [],
					loc: { start: 382, end: 394 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 397, end: 404 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 406, end: 413 },
							},
							loc: { start: 406, end: 413 },
						},
						loc: { start: 406, end: 414 },
					},
					directives: [],
					loc: { start: 397, end: 414 },
				},
			],
			loc: { start: 323, end: 416 },
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
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 549, end: 556 },
							},
							loc: { start: 549, end: 556 },
						},
						loc: { start: 549, end: 557 },
					},
					directives: [],
					loc: { start: 540, end: 557 },
				},
			],
			loc: { start: 487, end: 559 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 566, end: 571 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 576, end: 578 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 580, end: 582 },
							},
							loc: { start: 580, end: 582 },
						},
						loc: { start: 580, end: 583 },
					},
					directives: [],
					loc: { start: 576, end: 583 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 586, end: 590 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 592, end: 598 },
							},
							loc: { start: 592, end: 598 },
						},
						loc: { start: 592, end: 599 },
					},
					directives: [],
					loc: { start: 586, end: 599 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 602, end: 605 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 607, end: 613 },
							},
							loc: { start: 607, end: 613 },
						},
						loc: { start: 607, end: 614 },
					},
					directives: [],
					loc: { start: 602, end: 614 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 617, end: 624 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 626, end: 633 },
							},
							loc: { start: 626, end: 633 },
						},
						loc: { start: 626, end: 634 },
					},
					directives: [],
					loc: { start: 617, end: 634 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 637, end: 643 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 645, end: 651 },
						},
						loc: { start: 645, end: 651 },
					},
					directives: [],
					loc: { start: 637, end: 651 },
				},
			],
			loc: { start: 561, end: 653 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 659, end: 664 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 654, end: 664 },
		},
	],
	loc: { start: 0, end: 665 },
} as unknown as DocumentNode;

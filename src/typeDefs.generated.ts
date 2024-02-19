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
					arguments: [],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 61, end: 68 },
							},
							loc: { start: 61, end: 68 },
						},
						loc: { start: 60, end: 69 },
					},
					directives: [],
					loc: { start: 50, end: 69 },
				},
			],
			loc: { start: 0, end: 71 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 78, end: 85 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 90, end: 92 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 94, end: 96 } },
							loc: { start: 94, end: 96 },
						},
						loc: { start: 94, end: 97 },
					},
					directives: [],
					loc: { start: 90, end: 97 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 100, end: 106 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 108, end: 114 },
							},
							loc: { start: 108, end: 114 },
						},
						loc: { start: 108, end: 115 },
					},
					directives: [],
					loc: { start: 100, end: 115 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 118, end: 123 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 125, end: 131 },
							},
							loc: { start: 125, end: 131 },
						},
						loc: { start: 125, end: 132 },
					},
					directives: [],
					loc: { start: 118, end: 132 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 135, end: 140 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 142, end: 145 },
							},
							loc: { start: 142, end: 145 },
						},
						loc: { start: 142, end: 146 },
					},
					directives: [],
					loc: { start: 135, end: 146 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 149, end: 157 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 159, end: 169 },
							},
							loc: { start: 159, end: 169 },
						},
						loc: { start: 159, end: 170 },
					},
					directives: [],
					loc: { start: 149, end: 170 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 173, end: 181 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 183, end: 189 },
							},
							loc: { start: 183, end: 189 },
						},
						loc: { start: 183, end: 190 },
					},
					directives: [],
					loc: { start: 173, end: 190 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 193, end: 203 },
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
									loc: { start: 206, end: 216 },
								},
								loc: { start: 206, end: 216 },
							},
							loc: { start: 206, end: 217 },
						},
						loc: { start: 205, end: 218 },
					},
					directives: [],
					loc: { start: 193, end: 218 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 221, end: 226 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 228, end: 233 },
							},
							loc: { start: 228, end: 233 },
						},
						loc: { start: 228, end: 234 },
					},
					directives: [],
					loc: { start: 221, end: 234 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 237, end: 243 },
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
										loc: { start: 246, end: 251 },
									},
									loc: { start: 246, end: 251 },
								},
								loc: { start: 246, end: 252 },
							},
							loc: { start: 245, end: 253 },
						},
						loc: { start: 245, end: 254 },
					},
					directives: [],
					loc: { start: 237, end: 254 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 257, end: 268 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 270, end: 276 },
							},
							loc: { start: 270, end: 276 },
						},
						loc: { start: 270, end: 277 },
					},
					directives: [],
					loc: { start: 257, end: 277 },
				},
			],
			loc: { start: 73, end: 279 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 286, end: 292 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 297, end: 299 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 301, end: 303 },
							},
							loc: { start: 301, end: 303 },
						},
						loc: { start: 301, end: 304 },
					},
					directives: [],
					loc: { start: 297, end: 304 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 307, end: 311 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 313, end: 319 },
							},
							loc: { start: 313, end: 319 },
						},
						loc: { start: 313, end: 320 },
					},
					directives: [],
					loc: { start: 307, end: 320 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 323, end: 330 },
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
									loc: { start: 333, end: 340 },
								},
								loc: { start: 333, end: 340 },
							},
							loc: { start: 333, end: 341 },
						},
						loc: { start: 332, end: 342 },
					},
					directives: [],
					loc: { start: 323, end: 342 },
				},
			],
			loc: { start: 281, end: 344 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 351, end: 361 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 366, end: 368 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 370, end: 372 },
							},
							loc: { start: 370, end: 372 },
						},
						loc: { start: 370, end: 373 },
					},
					directives: [],
					loc: { start: 366, end: 373 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 376, end: 379 } },
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
					loc: { start: 376, end: 388 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 391, end: 396 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 398, end: 401 },
							},
							loc: { start: 398, end: 401 },
						},
						loc: { start: 398, end: 402 },
					},
					directives: [],
					loc: { start: 391, end: 402 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 405, end: 411 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 413, end: 416 },
							},
							loc: { start: 413, end: 416 },
						},
						loc: { start: 413, end: 417 },
					},
					directives: [],
					loc: { start: 405, end: 417 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 420, end: 427 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 429, end: 436 },
						},
						loc: { start: 429, end: 436 },
					},
					directives: [],
					loc: { start: 420, end: 436 },
				},
			],
			loc: { start: 346, end: 438 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 445, end: 455 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 460, end: 462 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 464, end: 466 },
							},
							loc: { start: 464, end: 466 },
						},
						loc: { start: 464, end: 467 },
					},
					directives: [],
					loc: { start: 460, end: 467 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 470, end: 474 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 476, end: 482 },
							},
							loc: { start: 476, end: 482 },
						},
						loc: { start: 476, end: 483 },
					},
					directives: [],
					loc: { start: 470, end: 483 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 486, end: 493 },
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
									loc: { start: 496, end: 503 },
								},
								loc: { start: 496, end: 503 },
							},
							loc: { start: 496, end: 504 },
						},
						loc: { start: 495, end: 505 },
					},
					directives: [],
					loc: { start: 486, end: 505 },
				},
			],
			loc: { start: 440, end: 507 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 514, end: 519 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 524, end: 526 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 528, end: 530 },
							},
							loc: { start: 528, end: 530 },
						},
						loc: { start: 528, end: 531 },
					},
					directives: [],
					loc: { start: 524, end: 531 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 534, end: 539 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 541, end: 544 },
							},
							loc: { start: 541, end: 544 },
						},
						loc: { start: 541, end: 545 },
					},
					directives: [],
					loc: { start: 534, end: 545 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 548, end: 553 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 555, end: 558 },
							},
							loc: { start: 555, end: 558 },
						},
						loc: { start: 555, end: 559 },
					},
					directives: [],
					loc: { start: 548, end: 559 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 562, end: 569 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 571, end: 578 },
						},
						loc: { start: 571, end: 578 },
					},
					directives: [],
					loc: { start: 562, end: 578 },
				},
			],
			loc: { start: 509, end: 580 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 587, end: 592 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 597, end: 599 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 601, end: 603 },
							},
							loc: { start: 601, end: 603 },
						},
						loc: { start: 601, end: 604 },
					},
					directives: [],
					loc: { start: 597, end: 604 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 607, end: 611 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 613, end: 619 },
							},
							loc: { start: 613, end: 619 },
						},
						loc: { start: 613, end: 620 },
					},
					directives: [],
					loc: { start: 607, end: 620 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 623, end: 626 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 628, end: 634 },
							},
							loc: { start: 628, end: 634 },
						},
						loc: { start: 628, end: 635 },
					},
					directives: [],
					loc: { start: 623, end: 635 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 638, end: 645 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 647, end: 654 },
						},
						loc: { start: 647, end: 654 },
					},
					directives: [],
					loc: { start: 638, end: 654 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 657, end: 663 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 665, end: 671 },
						},
						loc: { start: 665, end: 671 },
					},
					directives: [],
					loc: { start: 657, end: 671 },
				},
			],
			loc: { start: 582, end: 673 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 679, end: 684 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 674, end: 684 },
		},
	],
	loc: { start: 0, end: 685 },
} as unknown as DocumentNode;

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
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 406, end: 413 },
						},
						loc: { start: 406, end: 413 },
					},
					directives: [],
					loc: { start: 397, end: 413 },
				},
			],
			loc: { start: 323, end: 415 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 422, end: 432 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 437, end: 439 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 441, end: 443 },
							},
							loc: { start: 441, end: 443 },
						},
						loc: { start: 441, end: 444 },
					},
					directives: [],
					loc: { start: 437, end: 444 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 447, end: 451 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 453, end: 459 },
							},
							loc: { start: 453, end: 459 },
						},
						loc: { start: 453, end: 460 },
					},
					directives: [],
					loc: { start: 447, end: 460 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 463, end: 470 },
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
									loc: { start: 473, end: 480 },
								},
								loc: { start: 473, end: 480 },
							},
							loc: { start: 473, end: 481 },
						},
						loc: { start: 472, end: 482 },
					},
					directives: [],
					loc: { start: 463, end: 482 },
				},
			],
			loc: { start: 417, end: 484 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 491, end: 496 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 501, end: 503 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 505, end: 507 },
							},
							loc: { start: 505, end: 507 },
						},
						loc: { start: 505, end: 508 },
					},
					directives: [],
					loc: { start: 501, end: 508 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 511, end: 516 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 518, end: 521 },
							},
							loc: { start: 518, end: 521 },
						},
						loc: { start: 518, end: 522 },
					},
					directives: [],
					loc: { start: 511, end: 522 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 525, end: 530 } },
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
					loc: { start: 525, end: 536 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 539, end: 546 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 548, end: 555 },
						},
						loc: { start: 548, end: 555 },
					},
					directives: [],
					loc: { start: 539, end: 555 },
				},
			],
			loc: { start: 486, end: 557 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 564, end: 569 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 574, end: 576 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 578, end: 580 },
							},
							loc: { start: 578, end: 580 },
						},
						loc: { start: 578, end: 581 },
					},
					directives: [],
					loc: { start: 574, end: 581 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 584, end: 588 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 590, end: 596 },
							},
							loc: { start: 590, end: 596 },
						},
						loc: { start: 590, end: 597 },
					},
					directives: [],
					loc: { start: 584, end: 597 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 600, end: 603 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 605, end: 611 },
							},
							loc: { start: 605, end: 611 },
						},
						loc: { start: 605, end: 612 },
					},
					directives: [],
					loc: { start: 600, end: 612 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 615, end: 622 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 624, end: 631 },
							},
							loc: { start: 624, end: 631 },
						},
						loc: { start: 624, end: 632 },
					},
					directives: [],
					loc: { start: 615, end: 632 },
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
			loc: { start: 559, end: 651 },
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

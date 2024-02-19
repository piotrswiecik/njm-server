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
			],
			loc: { start: 0, end: 107 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 114, end: 121 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 126, end: 128 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 130, end: 132 },
							},
							loc: { start: 130, end: 132 },
						},
						loc: { start: 130, end: 133 },
					},
					directives: [],
					loc: { start: 126, end: 133 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 136, end: 142 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 144, end: 150 },
							},
							loc: { start: 144, end: 150 },
						},
						loc: { start: 144, end: 151 },
					},
					directives: [],
					loc: { start: 136, end: 151 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 154, end: 159 } },
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
					loc: { start: 154, end: 168 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 171, end: 176 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 178, end: 181 },
							},
							loc: { start: 178, end: 181 },
						},
						loc: { start: 178, end: 182 },
					},
					directives: [],
					loc: { start: 171, end: 182 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 185, end: 193 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 195, end: 205 },
							},
							loc: { start: 195, end: 205 },
						},
						loc: { start: 195, end: 206 },
					},
					directives: [],
					loc: { start: 185, end: 206 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 209, end: 217 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 219, end: 225 },
							},
							loc: { start: 219, end: 225 },
						},
						loc: { start: 219, end: 226 },
					},
					directives: [],
					loc: { start: 209, end: 226 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 229, end: 239 },
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
									loc: { start: 242, end: 252 },
								},
								loc: { start: 242, end: 252 },
							},
							loc: { start: 242, end: 253 },
						},
						loc: { start: 241, end: 254 },
					},
					directives: [],
					loc: { start: 229, end: 254 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 257, end: 262 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 264, end: 269 },
							},
							loc: { start: 264, end: 269 },
						},
						loc: { start: 264, end: 270 },
					},
					directives: [],
					loc: { start: 257, end: 270 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 273, end: 279 },
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
										loc: { start: 282, end: 287 },
									},
									loc: { start: 282, end: 287 },
								},
								loc: { start: 282, end: 288 },
							},
							loc: { start: 281, end: 289 },
						},
						loc: { start: 281, end: 290 },
					},
					directives: [],
					loc: { start: 273, end: 290 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 293, end: 304 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 306, end: 312 },
							},
							loc: { start: 306, end: 312 },
						},
						loc: { start: 306, end: 313 },
					},
					directives: [],
					loc: { start: 293, end: 313 },
				},
			],
			loc: { start: 109, end: 315 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 322, end: 328 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 333, end: 335 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 337, end: 339 },
							},
							loc: { start: 337, end: 339 },
						},
						loc: { start: 337, end: 340 },
					},
					directives: [],
					loc: { start: 333, end: 340 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 343, end: 347 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 349, end: 355 },
							},
							loc: { start: 349, end: 355 },
						},
						loc: { start: 349, end: 356 },
					},
					directives: [],
					loc: { start: 343, end: 356 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 359, end: 366 },
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
									loc: { start: 369, end: 376 },
								},
								loc: { start: 369, end: 376 },
							},
							loc: { start: 369, end: 377 },
						},
						loc: { start: 368, end: 378 },
					},
					directives: [],
					loc: { start: 359, end: 378 },
				},
			],
			loc: { start: 317, end: 380 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 387, end: 397 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 402, end: 404 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 406, end: 408 },
							},
							loc: { start: 406, end: 408 },
						},
						loc: { start: 406, end: 409 },
					},
					directives: [],
					loc: { start: 402, end: 409 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 412, end: 415 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 417, end: 423 },
							},
							loc: { start: 417, end: 423 },
						},
						loc: { start: 417, end: 424 },
					},
					directives: [],
					loc: { start: 412, end: 424 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 427, end: 432 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 434, end: 437 },
							},
							loc: { start: 434, end: 437 },
						},
						loc: { start: 434, end: 438 },
					},
					directives: [],
					loc: { start: 427, end: 438 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 441, end: 447 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 449, end: 452 },
							},
							loc: { start: 449, end: 452 },
						},
						loc: { start: 449, end: 453 },
					},
					directives: [],
					loc: { start: 441, end: 453 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 456, end: 463 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 465, end: 472 },
						},
						loc: { start: 465, end: 472 },
					},
					directives: [],
					loc: { start: 456, end: 472 },
				},
			],
			loc: { start: 382, end: 474 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 481, end: 491 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 496, end: 498 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 500, end: 502 },
							},
							loc: { start: 500, end: 502 },
						},
						loc: { start: 500, end: 503 },
					},
					directives: [],
					loc: { start: 496, end: 503 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 506, end: 510 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 512, end: 518 },
							},
							loc: { start: 512, end: 518 },
						},
						loc: { start: 512, end: 519 },
					},
					directives: [],
					loc: { start: 506, end: 519 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 522, end: 529 },
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
									loc: { start: 532, end: 539 },
								},
								loc: { start: 532, end: 539 },
							},
							loc: { start: 532, end: 540 },
						},
						loc: { start: 531, end: 541 },
					},
					directives: [],
					loc: { start: 522, end: 541 },
				},
			],
			loc: { start: 476, end: 543 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 550, end: 555 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 560, end: 562 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 564, end: 566 },
							},
							loc: { start: 564, end: 566 },
						},
						loc: { start: 564, end: 567 },
					},
					directives: [],
					loc: { start: 560, end: 567 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 570, end: 575 } },
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
					name: { kind: "Name", value: "qtyLp", loc: { start: 584, end: 589 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 591, end: 594 },
							},
							loc: { start: 591, end: 594 },
						},
						loc: { start: 591, end: 595 },
					},
					directives: [],
					loc: { start: 584, end: 595 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 598, end: 605 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 607, end: 614 },
						},
						loc: { start: 607, end: 614 },
					},
					directives: [],
					loc: { start: 598, end: 614 },
				},
			],
			loc: { start: 545, end: 616 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 623, end: 628 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 633, end: 635 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 637, end: 639 },
							},
							loc: { start: 637, end: 639 },
						},
						loc: { start: 637, end: 640 },
					},
					directives: [],
					loc: { start: 633, end: 640 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 643, end: 647 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 649, end: 655 },
							},
							loc: { start: 649, end: 655 },
						},
						loc: { start: 649, end: 656 },
					},
					directives: [],
					loc: { start: 643, end: 656 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 659, end: 662 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 664, end: 670 },
							},
							loc: { start: 664, end: 670 },
						},
						loc: { start: 664, end: 671 },
					},
					directives: [],
					loc: { start: 659, end: 671 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 674, end: 681 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 683, end: 690 },
						},
						loc: { start: 683, end: 690 },
					},
					directives: [],
					loc: { start: 674, end: 690 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 693, end: 699 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 701, end: 707 },
						},
						loc: { start: 701, end: 707 },
					},
					directives: [],
					loc: { start: 693, end: 707 },
				},
			],
			loc: { start: 618, end: 709 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 715, end: 720 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 710, end: 720 },
		},
	],
	loc: { start: 0, end: 721 },
} as unknown as DocumentNode;

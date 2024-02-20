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
						value: "category",
						loc: { start: 108, end: 116 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 117, end: 121 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 123, end: 129 },
									},
									loc: { start: 123, end: 129 },
								},
								loc: { start: 123, end: 130 },
							},
							directives: [],
							loc: { start: 117, end: 130 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 133, end: 141 },
						},
						loc: { start: 133, end: 141 },
					},
					directives: [],
					loc: { start: 108, end: 141 },
				},
			],
			loc: { start: 0, end: 143 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 150, end: 157 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 162, end: 164 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 166, end: 168 },
							},
							loc: { start: 166, end: 168 },
						},
						loc: { start: 166, end: 169 },
					},
					directives: [],
					loc: { start: 162, end: 169 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 172, end: 178 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 180, end: 186 },
							},
							loc: { start: 180, end: 186 },
						},
						loc: { start: 180, end: 187 },
					},
					directives: [],
					loc: { start: 172, end: 187 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "title", loc: { start: 190, end: 195 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 197, end: 203 },
							},
							loc: { start: 197, end: 203 },
						},
						loc: { start: 197, end: 204 },
					},
					directives: [],
					loc: { start: 190, end: 204 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 207, end: 212 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 214, end: 217 },
							},
							loc: { start: 214, end: 217 },
						},
						loc: { start: 214, end: 218 },
					},
					directives: [],
					loc: { start: 207, end: 218 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 221, end: 229 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "CoverImage",
								loc: { start: 231, end: 241 },
							},
							loc: { start: 231, end: 241 },
						},
						loc: { start: 231, end: 242 },
					},
					directives: [],
					loc: { start: 221, end: 242 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 245, end: 253 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 255, end: 263 },
							},
							loc: { start: 255, end: 263 },
						},
						loc: { start: 255, end: 264 },
					},
					directives: [],
					loc: { start: 245, end: 264 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 267, end: 277 },
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
									loc: { start: 280, end: 290 },
								},
								loc: { start: 280, end: 290 },
							},
							loc: { start: 280, end: 291 },
						},
						loc: { start: 279, end: 292 },
					},
					directives: [],
					loc: { start: 267, end: 292 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "stock", loc: { start: 295, end: 300 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Stock",
								loc: { start: 302, end: 307 },
							},
							loc: { start: 302, end: 307 },
						},
						loc: { start: 302, end: 308 },
					},
					directives: [],
					loc: { start: 295, end: 308 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 311, end: 317 },
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
										loc: { start: 320, end: 325 },
									},
									loc: { start: 320, end: 325 },
								},
								loc: { start: 320, end: 326 },
							},
							loc: { start: 319, end: 327 },
						},
						loc: { start: 319, end: 328 },
					},
					directives: [],
					loc: { start: 311, end: 328 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 331, end: 342 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 344, end: 350 },
							},
							loc: { start: 344, end: 350 },
						},
						loc: { start: 344, end: 351 },
					},
					directives: [],
					loc: { start: 331, end: 351 },
				},
			],
			loc: { start: 145, end: 353 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Category", loc: { start: 360, end: 368 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 373, end: 375 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 377, end: 379 },
							},
							loc: { start: 377, end: 379 },
						},
						loc: { start: 377, end: 380 },
					},
					directives: [],
					loc: { start: 373, end: 380 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 383, end: 387 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 389, end: 395 },
							},
							loc: { start: 389, end: 395 },
						},
						loc: { start: 389, end: 396 },
					},
					directives: [],
					loc: { start: 383, end: 396 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 399, end: 407 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 408, end: 412 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 414, end: 417 },
								},
								loc: { start: 414, end: 417 },
							},
							directives: [],
							loc: { start: 408, end: 417 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 419, end: 423 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 425, end: 428 },
								},
								loc: { start: 425, end: 428 },
							},
							directives: [],
							loc: { start: 419, end: 428 },
						},
					],
					type: {
						kind: "ListType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 432, end: 439 },
							},
							loc: { start: 432, end: 439 },
						},
						loc: { start: 431, end: 440 },
					},
					directives: [],
					loc: { start: 399, end: 440 },
				},
			],
			loc: { start: 355, end: 442 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 449, end: 455 } },
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
			loc: { start: 444, end: 507 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 514, end: 524 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 529, end: 531 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 533, end: 535 },
							},
							loc: { start: 533, end: 535 },
						},
						loc: { start: 533, end: 536 },
					},
					directives: [],
					loc: { start: 529, end: 536 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 539, end: 542 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 544, end: 550 },
							},
							loc: { start: 544, end: 550 },
						},
						loc: { start: 544, end: 551 },
					},
					directives: [],
					loc: { start: 539, end: 551 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 554, end: 559 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 561, end: 564 },
							},
							loc: { start: 561, end: 564 },
						},
						loc: { start: 561, end: 565 },
					},
					directives: [],
					loc: { start: 554, end: 565 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 568, end: 574 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 576, end: 579 },
							},
							loc: { start: 576, end: 579 },
						},
						loc: { start: 576, end: 580 },
					},
					directives: [],
					loc: { start: 568, end: 580 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 583, end: 590 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 592, end: 599 },
						},
						loc: { start: 592, end: 599 },
					},
					directives: [],
					loc: { start: 583, end: 599 },
				},
			],
			loc: { start: 509, end: 601 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 608, end: 618 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 623, end: 625 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 627, end: 629 },
							},
							loc: { start: 627, end: 629 },
						},
						loc: { start: 627, end: 630 },
					},
					directives: [],
					loc: { start: 623, end: 630 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 633, end: 637 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 639, end: 645 },
							},
							loc: { start: 639, end: 645 },
						},
						loc: { start: 639, end: 646 },
					},
					directives: [],
					loc: { start: 633, end: 646 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 649, end: 656 },
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
									loc: { start: 659, end: 666 },
								},
								loc: { start: 659, end: 666 },
							},
							loc: { start: 659, end: 667 },
						},
						loc: { start: 658, end: 668 },
					},
					directives: [],
					loc: { start: 649, end: 668 },
				},
			],
			loc: { start: 603, end: 670 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 677, end: 682 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 687, end: 689 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 691, end: 693 },
							},
							loc: { start: 691, end: 693 },
						},
						loc: { start: 691, end: 694 },
					},
					directives: [],
					loc: { start: 687, end: 694 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 697, end: 702 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 704, end: 707 },
							},
							loc: { start: 704, end: 707 },
						},
						loc: { start: 704, end: 708 },
					},
					directives: [],
					loc: { start: 697, end: 708 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 711, end: 716 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 718, end: 721 },
							},
							loc: { start: 718, end: 721 },
						},
						loc: { start: 718, end: 722 },
					},
					directives: [],
					loc: { start: 711, end: 722 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 725, end: 732 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 734, end: 741 },
						},
						loc: { start: 734, end: 741 },
					},
					directives: [],
					loc: { start: 725, end: 741 },
				},
			],
			loc: { start: 672, end: 743 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 750, end: 755 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 760, end: 762 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 764, end: 766 },
							},
							loc: { start: 764, end: 766 },
						},
						loc: { start: 764, end: 767 },
					},
					directives: [],
					loc: { start: 760, end: 767 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 770, end: 774 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 776, end: 782 },
							},
							loc: { start: 776, end: 782 },
						},
						loc: { start: 776, end: 783 },
					},
					directives: [],
					loc: { start: 770, end: 783 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 786, end: 789 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 791, end: 797 },
							},
							loc: { start: 791, end: 797 },
						},
						loc: { start: 791, end: 798 },
					},
					directives: [],
					loc: { start: 786, end: 798 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 801, end: 808 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 810, end: 817 },
						},
						loc: { start: 810, end: 817 },
					},
					directives: [],
					loc: { start: 801, end: 817 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 820, end: 826 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 828, end: 834 },
						},
						loc: { start: 828, end: 834 },
					},
					directives: [],
					loc: { start: 820, end: 834 },
				},
			],
			loc: { start: 745, end: 836 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 842, end: 847 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 837, end: 847 },
		},
	],
	loc: { start: 0, end: 848 },
} as unknown as DocumentNode;

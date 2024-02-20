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
									loc: { start: 410, end: 417 },
								},
								loc: { start: 410, end: 417 },
							},
							loc: { start: 410, end: 418 },
						},
						loc: { start: 409, end: 419 },
					},
					directives: [],
					loc: { start: 399, end: 419 },
				},
			],
			loc: { start: 355, end: 421 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 428, end: 434 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 439, end: 441 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 443, end: 445 },
							},
							loc: { start: 443, end: 445 },
						},
						loc: { start: 443, end: 446 },
					},
					directives: [],
					loc: { start: 439, end: 446 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 449, end: 453 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 455, end: 461 },
							},
							loc: { start: 455, end: 461 },
						},
						loc: { start: 455, end: 462 },
					},
					directives: [],
					loc: { start: 449, end: 462 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 465, end: 472 },
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
									loc: { start: 475, end: 482 },
								},
								loc: { start: 475, end: 482 },
							},
							loc: { start: 475, end: 483 },
						},
						loc: { start: 474, end: 484 },
					},
					directives: [],
					loc: { start: 465, end: 484 },
				},
			],
			loc: { start: 423, end: 486 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "CoverImage",
				loc: { start: 493, end: 503 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 508, end: 510 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 512, end: 514 },
							},
							loc: { start: 512, end: 514 },
						},
						loc: { start: 512, end: 515 },
					},
					directives: [],
					loc: { start: 508, end: 515 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 518, end: 521 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 523, end: 529 },
							},
							loc: { start: 523, end: 529 },
						},
						loc: { start: 523, end: 530 },
					},
					directives: [],
					loc: { start: 518, end: 530 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "width", loc: { start: 533, end: 538 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 540, end: 543 },
							},
							loc: { start: 540, end: 543 },
						},
						loc: { start: 540, end: 544 },
					},
					directives: [],
					loc: { start: 533, end: 544 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "height",
						loc: { start: 547, end: 553 },
					},
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
					loc: { start: 547, end: 559 },
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
			loc: { start: 488, end: 580 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 587, end: 597 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 602, end: 604 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 606, end: 608 },
							},
							loc: { start: 606, end: 608 },
						},
						loc: { start: 606, end: 609 },
					},
					directives: [],
					loc: { start: 602, end: 609 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 612, end: 616 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 618, end: 624 },
							},
							loc: { start: 618, end: 624 },
						},
						loc: { start: 618, end: 625 },
					},
					directives: [],
					loc: { start: 612, end: 625 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 628, end: 635 },
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
									loc: { start: 638, end: 645 },
								},
								loc: { start: 638, end: 645 },
							},
							loc: { start: 638, end: 646 },
						},
						loc: { start: 637, end: 647 },
					},
					directives: [],
					loc: { start: 628, end: 647 },
				},
			],
			loc: { start: 582, end: 649 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Stock", loc: { start: 656, end: 661 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 666, end: 668 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 670, end: 672 },
							},
							loc: { start: 670, end: 672 },
						},
						loc: { start: 670, end: 673 },
					},
					directives: [],
					loc: { start: 666, end: 673 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyCd", loc: { start: 676, end: 681 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 683, end: 686 },
							},
							loc: { start: 683, end: 686 },
						},
						loc: { start: 683, end: 687 },
					},
					directives: [],
					loc: { start: 676, end: 687 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "qtyLp", loc: { start: 690, end: 695 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 697, end: 700 },
							},
							loc: { start: 697, end: 700 },
						},
						loc: { start: 697, end: 701 },
					},
					directives: [],
					loc: { start: 690, end: 701 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 704, end: 711 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 713, end: 720 },
						},
						loc: { start: 713, end: 720 },
					},
					directives: [],
					loc: { start: 704, end: 720 },
				},
			],
			loc: { start: 651, end: 722 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 729, end: 734 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 739, end: 741 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 743, end: 745 },
							},
							loc: { start: 743, end: 745 },
						},
						loc: { start: 743, end: 746 },
					},
					directives: [],
					loc: { start: 739, end: 746 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 749, end: 753 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 755, end: 761 },
							},
							loc: { start: 755, end: 761 },
						},
						loc: { start: 755, end: 762 },
					},
					directives: [],
					loc: { start: 749, end: 762 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 765, end: 768 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 770, end: 776 },
							},
							loc: { start: 770, end: 776 },
						},
						loc: { start: 770, end: 777 },
					},
					directives: [],
					loc: { start: 765, end: 777 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 780, end: 787 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 789, end: 796 },
						},
						loc: { start: 789, end: 796 },
					},
					directives: [],
					loc: { start: 780, end: 796 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 799, end: 805 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Artist",
							loc: { start: 807, end: 813 },
						},
						loc: { start: 807, end: 813 },
					},
					directives: [],
					loc: { start: 799, end: 813 },
				},
			],
			loc: { start: 724, end: 815 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 821, end: 826 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 816, end: 826 },
		},
	],
	loc: { start: 0, end: 827 },
} as unknown as DocumentNode;

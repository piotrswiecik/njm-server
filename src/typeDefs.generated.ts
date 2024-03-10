import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "InputObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItemInput",
				loc: { start: 6, end: 20 },
			},
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "variantId",
						loc: { start: 25, end: 34 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 36, end: 38 } },
							loc: { start: 36, end: 38 },
						},
						loc: { start: 36, end: 39 },
					},
					directives: [],
					loc: { start: 25, end: 39 },
				},
				{
					kind: "InputValueDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 42, end: 50 },
					},
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "Int", loc: { start: 52, end: 55 } },
							loc: { start: 52, end: 55 },
						},
						loc: { start: 52, end: 56 },
					},
					directives: [],
					loc: { start: 42, end: 56 },
				},
			],
			loc: { start: 0, end: 58 },
		},
		{
			kind: "InputObjectTypeDefinition",
			name: { kind: "Name", value: "SortInput", loc: { start: 66, end: 75 } },
			directives: [],
			fields: [
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "price", loc: { start: 80, end: 85 } },
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "SortEnum",
							loc: { start: 87, end: 95 },
						},
						loc: { start: 87, end: 95 },
					},
					directives: [],
					loc: { start: 80, end: 95 },
				},
				{
					kind: "InputValueDefinition",
					name: { kind: "Name", value: "rating", loc: { start: 98, end: 104 } },
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "SortEnum",
							loc: { start: 106, end: 114 },
						},
						loc: { start: 106, end: 114 },
					},
					directives: [],
					loc: { start: 98, end: 114 },
				},
			],
			loc: { start: 60, end: 116 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 129, end: 137 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createOrder",
						loc: { start: 142, end: 153 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "userId",
								loc: { start: 154, end: 160 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 162, end: 164 },
									},
									loc: { start: 162, end: 164 },
								},
								loc: { start: 162, end: 165 },
							},
							directives: [],
							loc: { start: 154, end: 165 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultIdResponse",
								loc: { start: 168, end: 185 },
							},
							loc: { start: 168, end: 185 },
						},
						loc: { start: 168, end: 186 },
					},
					directives: [],
					loc: { start: 142, end: 186 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "addToOrder",
						loc: { start: 189, end: 199 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "to",
								loc: { start: 200, end: 202 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 204, end: 206 },
									},
									loc: { start: 204, end: 206 },
								},
								loc: { start: 204, end: 207 },
							},
							directives: [],
							loc: { start: 200, end: 207 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 209, end: 216 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 218, end: 220 },
									},
									loc: { start: 218, end: 220 },
								},
								loc: { start: 218, end: 221 },
							},
							directives: [],
							loc: { start: 209, end: 221 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 223, end: 230 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 232, end: 243 },
									},
									loc: { start: 232, end: 243 },
								},
								loc: { start: 232, end: 244 },
							},
							directives: [],
							loc: { start: 223, end: 244 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 247, end: 252 },
							},
							loc: { start: 247, end: 252 },
						},
						loc: { start: 247, end: 253 },
					},
					directives: [],
					loc: { start: 189, end: 253 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeFromOrder",
						loc: { start: 256, end: 271 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "from",
								loc: { start: 272, end: 276 },
							},
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
							loc: { start: 272, end: 281 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 283, end: 290 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 292, end: 294 },
									},
									loc: { start: 292, end: 294 },
								},
								loc: { start: 292, end: 295 },
							},
							directives: [],
							loc: { start: 283, end: 295 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 297, end: 304 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 306, end: 317 },
									},
									loc: { start: 306, end: 317 },
								},
								loc: { start: 306, end: 318 },
							},
							directives: [],
							loc: { start: 297, end: 318 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 321, end: 326 },
							},
							loc: { start: 321, end: 326 },
						},
						loc: { start: 321, end: 327 },
					},
					directives: [],
					loc: { start: 256, end: 327 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "removeAllFromOrder",
						loc: { start: 330, end: 348 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "from",
								loc: { start: 349, end: 353 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 355, end: 357 },
									},
									loc: { start: 355, end: 357 },
								},
								loc: { start: 355, end: 358 },
							},
							directives: [],
							loc: { start: 349, end: 358 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "product",
								loc: { start: 360, end: 367 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 369, end: 371 },
									},
									loc: { start: 369, end: 371 },
								},
								loc: { start: 369, end: 372 },
							},
							directives: [],
							loc: { start: 360, end: 372 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "variant",
								loc: { start: 374, end: 381 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "VariantEnum",
										loc: { start: 383, end: 394 },
									},
									loc: { start: 383, end: 394 },
								},
								loc: { start: 383, end: 395 },
							},
							directives: [],
							loc: { start: 374, end: 395 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Order",
								loc: { start: 398, end: 403 },
							},
							loc: { start: 398, end: 403 },
						},
						loc: { start: 398, end: 404 },
					},
					directives: [],
					loc: { start: 330, end: 404 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteOrder",
						loc: { start: 407, end: 418 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 419, end: 421 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 423, end: 425 },
									},
									loc: { start: 423, end: 425 },
								},
								loc: { start: 423, end: 426 },
							},
							directives: [],
							loc: { start: 419, end: 426 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultIdResponse",
								loc: { start: 429, end: 446 },
							},
							loc: { start: 429, end: 446 },
						},
						loc: { start: 429, end: 447 },
					},
					directives: [],
					loc: { start: 407, end: 447 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "setOrderStatus",
						loc: { start: 450, end: 464 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "where",
								loc: { start: 465, end: 470 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 472, end: 474 },
									},
									loc: { start: 472, end: 474 },
								},
								loc: { start: 472, end: 475 },
							},
							directives: [],
							loc: { start: 465, end: 475 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 477, end: 483 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "StatusEnum",
										loc: { start: 485, end: 495 },
									},
									loc: { start: 485, end: 495 },
								},
								loc: { start: 485, end: 496 },
							},
							directives: [],
							loc: { start: 477, end: 496 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultIdResponse",
								loc: { start: 499, end: 516 },
							},
							loc: { start: 499, end: 516 },
						},
						loc: { start: 499, end: 517 },
					},
					directives: [],
					loc: { start: 450, end: 517 },
				},
			],
			loc: { start: 117, end: 519 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 533, end: 541 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createReview",
						loc: { start: 546, end: 558 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 559, end: 568 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 570, end: 572 },
									},
									loc: { start: 570, end: 572 },
								},
								loc: { start: 570, end: 573 },
							},
							directives: [],
							loc: { start: 559, end: 573 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "rating",
								loc: { start: 575, end: 581 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "Int",
										loc: { start: 583, end: 586 },
									},
									loc: { start: 583, end: 586 },
								},
								loc: { start: 583, end: 587 },
							},
							directives: [],
							loc: { start: 575, end: 587 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "headline",
								loc: { start: 589, end: 597 },
							},
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
							loc: { start: 589, end: 606 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "content",
								loc: { start: 608, end: 615 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 617, end: 623 },
									},
									loc: { start: 617, end: 623 },
								},
								loc: { start: 617, end: 624 },
							},
							directives: [],
							loc: { start: 608, end: 624 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "userId",
								loc: { start: 626, end: 632 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 634, end: 636 },
									},
									loc: { start: 634, end: 636 },
								},
								loc: { start: 634, end: 637 },
							},
							directives: [],
							loc: { start: 626, end: 637 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Review",
								loc: { start: 640, end: 646 },
							},
							loc: { start: 640, end: 646 },
						},
						loc: { start: 640, end: 647 },
					},
					directives: [],
					loc: { start: 546, end: 647 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "deleteReview",
						loc: { start: 650, end: 662 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 663, end: 665 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 667, end: 669 },
									},
									loc: { start: 667, end: 669 },
								},
								loc: { start: 667, end: 670 },
							},
							directives: [],
							loc: { start: 663, end: 670 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "DefaultIdResponse",
								loc: { start: 673, end: 690 },
							},
							loc: { start: 673, end: 690 },
						},
						loc: { start: 673, end: 691 },
					},
					directives: [],
					loc: { start: 650, end: 691 },
				},
			],
			loc: { start: 521, end: 693 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Mutation", loc: { start: 707, end: 715 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "createUser",
						loc: { start: 720, end: 730 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 731, end: 733 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 735, end: 737 },
									},
									loc: { start: 735, end: 737 },
								},
								loc: { start: 735, end: 738 },
							},
							directives: [],
							loc: { start: 731, end: 738 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "email",
								loc: { start: 740, end: 745 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 747, end: 753 },
									},
									loc: { start: 747, end: 753 },
								},
								loc: { start: 747, end: 754 },
							},
							directives: [],
							loc: { start: 740, end: 754 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 756, end: 760 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 762, end: 768 },
									},
									loc: { start: 762, end: 768 },
								},
								loc: { start: 762, end: 769 },
							},
							directives: [],
							loc: { start: 756, end: 769 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 772, end: 776 },
							},
							loc: { start: 772, end: 776 },
						},
						loc: { start: 772, end: 777 },
					},
					directives: [],
					loc: { start: 720, end: 777 },
				},
			],
			loc: { start: 695, end: 779 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 792, end: 797 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 802, end: 806 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 807, end: 809 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 811, end: 813 },
									},
									loc: { start: 811, end: 813 },
								},
								loc: { start: 811, end: 814 },
							},
							directives: [],
							loc: { start: 807, end: 814 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 817, end: 821 },
						},
						loc: { start: 817, end: 821 },
					},
					directives: [],
					loc: { start: 802, end: 821 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "users", loc: { start: 824, end: 829 } },
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
										value: "User",
										loc: { start: 832, end: 836 },
									},
									loc: { start: 832, end: 836 },
								},
								loc: { start: 832, end: 837 },
							},
							loc: { start: 831, end: 838 },
						},
						loc: { start: 831, end: 839 },
					},
					directives: [],
					loc: { start: 824, end: 839 },
				},
			],
			loc: { start: 780, end: 841 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 855, end: 860 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 865, end: 875 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 876, end: 880 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 882, end: 888 },
									},
									loc: { start: 882, end: 888 },
								},
								loc: { start: 882, end: 889 },
							},
							directives: [],
							loc: { start: 876, end: 889 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 892, end: 902 },
						},
						loc: { start: 892, end: 902 },
					},
					directives: [],
					loc: { start: 865, end: 902 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 905, end: 916 },
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
									loc: { start: 919, end: 929 },
								},
								loc: { start: 919, end: 929 },
							},
							loc: { start: 919, end: 930 },
						},
						loc: { start: 918, end: 931 },
					},
					directives: [],
					loc: { start: 905, end: 931 },
				},
			],
			loc: { start: 843, end: 933 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 947, end: 952 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 957, end: 962 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 963, end: 965 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 967, end: 969 },
									},
									loc: { start: 967, end: 969 },
								},
								loc: { start: 967, end: 970 },
							},
							directives: [],
							loc: { start: 963, end: 970 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 972, end: 978 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "StatusEnum",
									loc: { start: 980, end: 990 },
								},
								loc: { start: 980, end: 990 },
							},
							directives: [],
							loc: { start: 972, end: 990 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 993, end: 998 },
						},
						loc: { start: 993, end: 998 },
					},
					directives: [],
					loc: { start: 957, end: 998 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 1001, end: 1007 },
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
										value: "Order",
										loc: { start: 1010, end: 1015 },
									},
									loc: { start: 1010, end: 1015 },
								},
								loc: { start: 1010, end: 1016 },
							},
							loc: { start: 1009, end: 1017 },
						},
						loc: { start: 1009, end: 1018 },
					},
					directives: [],
					loc: { start: 1001, end: 1018 },
				},
			],
			loc: { start: 935, end: 1020 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1034, end: 1039 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1044, end: 1051 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 1052, end: 1054 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1056, end: 1058 },
									},
									loc: { start: 1056, end: 1058 },
								},
								loc: { start: 1056, end: 1059 },
							},
							directives: [],
							loc: { start: 1052, end: 1059 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 1062, end: 1069 },
						},
						loc: { start: 1062, end: 1069 },
					},
					directives: [],
					loc: { start: 1044, end: 1069 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1072, end: 1080 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1081, end: 1085 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1087, end: 1090 },
								},
								loc: { start: 1087, end: 1090 },
							},
							directives: [],
							loc: { start: 1081, end: 1090 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1092, end: 1096 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1098, end: 1101 },
								},
								loc: { start: 1098, end: 1101 },
							},
							directives: [],
							loc: { start: 1092, end: 1101 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "sort",
								loc: { start: 1103, end: 1107 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1109, end: 1115 },
								},
								loc: { start: 1109, end: 1115 },
							},
							directives: [],
							loc: { start: 1103, end: 1115 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "order",
								loc: { start: 1117, end: 1122 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1124, end: 1130 },
								},
								loc: { start: 1124, end: 1130 },
							},
							directives: [],
							loc: { start: 1117, end: 1130 },
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
										loc: { start: 1134, end: 1141 },
									},
									loc: { start: 1134, end: 1141 },
								},
								loc: { start: 1134, end: 1142 },
							},
							loc: { start: 1133, end: 1143 },
						},
						loc: { start: 1133, end: 1144 },
					},
					directives: [],
					loc: { start: 1072, end: 1144 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 1147, end: 1160 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 1161, end: 1166 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1168, end: 1174 },
									},
									loc: { start: 1168, end: 1174 },
								},
								loc: { start: 1168, end: 1175 },
							},
							directives: [],
							loc: { start: 1161, end: 1175 },
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
									loc: { start: 1179, end: 1186 },
								},
								loc: { start: 1179, end: 1186 },
							},
							loc: { start: 1179, end: 1187 },
						},
						loc: { start: 1178, end: 1188 },
					},
					directives: [],
					loc: { start: 1147, end: 1188 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 1191, end: 1203 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1205, end: 1208 },
							},
							loc: { start: 1205, end: 1208 },
						},
						loc: { start: 1205, end: 1209 },
					},
					directives: [],
					loc: { start: 1191, end: 1209 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productRange",
						loc: { start: 1212, end: 1224 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "in",
								loc: { start: 1225, end: 1227 },
							},
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
												value: "ID",
												loc: { start: 1230, end: 1232 },
											},
											loc: { start: 1230, end: 1232 },
										},
										loc: { start: 1230, end: 1233 },
									},
									loc: { start: 1229, end: 1234 },
								},
								loc: { start: 1229, end: 1235 },
							},
							directives: [],
							loc: { start: 1225, end: 1235 },
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
									loc: { start: 1239, end: 1246 },
								},
								loc: { start: 1239, end: 1246 },
							},
							loc: { start: 1239, end: 1247 },
						},
						loc: { start: 1238, end: 1248 },
					},
					directives: [],
					loc: { start: 1212, end: 1248 },
				},
			],
			loc: { start: 1022, end: 1250 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1264, end: 1269 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 1274, end: 1287 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1288, end: 1292 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1294, end: 1300 },
									},
									loc: { start: 1294, end: 1300 },
								},
								loc: { start: 1294, end: 1301 },
							},
							directives: [],
							loc: { start: 1288, end: 1301 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1304, end: 1307 },
							},
							loc: { start: 1304, end: 1307 },
						},
						loc: { start: 1304, end: 1308 },
					},
					directives: [],
					loc: { start: 1274, end: 1308 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1311, end: 1319 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1320, end: 1324 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1326, end: 1332 },
									},
									loc: { start: 1326, end: 1332 },
								},
								loc: { start: 1326, end: 1333 },
							},
							directives: [],
							loc: { start: 1320, end: 1333 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 1336, end: 1344 },
						},
						loc: { start: 1336, end: 1344 },
					},
					directives: [],
					loc: { start: 1311, end: 1344 },
				},
			],
			loc: { start: 1252, end: 1346 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1360, end: 1365 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productReviews",
						loc: { start: 1370, end: 1384 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 1385, end: 1394 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1396, end: 1398 },
									},
									loc: { start: 1396, end: 1398 },
								},
								loc: { start: 1396, end: 1399 },
							},
							directives: [],
							loc: { start: 1385, end: 1399 },
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
										value: "Review",
										loc: { start: 1403, end: 1409 },
									},
									loc: { start: 1403, end: 1409 },
								},
								loc: { start: 1403, end: 1410 },
							},
							loc: { start: 1402, end: 1411 },
						},
						loc: { start: 1402, end: 1412 },
					},
					directives: [],
					loc: { start: 1370, end: 1412 },
				},
			],
			loc: { start: 1348, end: 1414 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1420, end: 1425 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1415, end: 1425 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1432, end: 1440 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1427, end: 1440 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 1446, end: 1452 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1457, end: 1461 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1463, end: 1469 },
							},
							loc: { start: 1463, end: 1469 },
						},
						loc: { start: 1463, end: 1470 },
					},
					directives: [],
					loc: { start: 1457, end: 1470 },
				},
			],
			loc: { start: 1441, end: 1472 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 1479, end: 1487 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1492, end: 1494 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1496, end: 1498 },
							},
							loc: { start: 1496, end: 1498 },
						},
						loc: { start: 1496, end: 1499 },
					},
					directives: [],
					loc: { start: 1492, end: 1499 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1502, end: 1506 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1508, end: 1514 },
							},
							loc: { start: 1508, end: 1514 },
						},
						loc: { start: 1508, end: 1515 },
					},
					directives: [],
					loc: { start: 1502, end: 1515 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1518, end: 1526 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1527, end: 1531 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1533, end: 1536 },
								},
								loc: { start: 1533, end: 1536 },
							},
							directives: [],
							loc: { start: 1527, end: 1536 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1538, end: 1542 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1544, end: 1547 },
								},
								loc: { start: 1544, end: 1547 },
							},
							directives: [],
							loc: { start: 1538, end: 1547 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "sort",
								loc: { start: 1549, end: 1553 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1555, end: 1561 },
								},
								loc: { start: 1555, end: 1561 },
							},
							directives: [],
							loc: { start: 1549, end: 1561 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "order",
								loc: { start: 1563, end: 1568 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1570, end: 1576 },
								},
								loc: { start: 1570, end: 1576 },
							},
							directives: [],
							loc: { start: 1563, end: 1576 },
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
										loc: { start: 1580, end: 1587 },
									},
									loc: { start: 1580, end: 1587 },
								},
								loc: { start: 1580, end: 1588 },
							},
							loc: { start: 1579, end: 1589 },
						},
						loc: { start: 1579, end: 1590 },
					},
					directives: [],
					loc: { start: 1518, end: 1590 },
				},
			],
			loc: { start: 1474, end: 1592 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1599, end: 1604 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1609, end: 1611 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1613, end: 1615 },
							},
							loc: { start: 1613, end: 1615 },
						},
						loc: { start: 1613, end: 1616 },
					},
					directives: [],
					loc: { start: 1609, end: 1616 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1619, end: 1629 },
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
									value: "OrderItem",
									loc: { start: 1632, end: 1641 },
								},
								loc: { start: 1632, end: 1641 },
							},
							loc: { start: 1632, end: 1642 },
						},
						loc: { start: 1631, end: 1643 },
					},
					directives: [],
					loc: { start: 1619, end: 1643 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1646, end: 1650 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1652, end: 1656 },
							},
							loc: { start: 1652, end: 1656 },
						},
						loc: { start: 1652, end: 1657 },
					},
					directives: [],
					loc: { start: 1646, end: 1657 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1660, end: 1666 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1668, end: 1678 },
							},
							loc: { start: 1668, end: 1678 },
						},
						loc: { start: 1668, end: 1679 },
					},
					directives: [],
					loc: { start: 1660, end: 1679 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1682, end: 1687 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1689, end: 1692 },
							},
							loc: { start: 1689, end: 1692 },
						},
						loc: { start: 1689, end: 1693 },
					},
					directives: [],
					loc: { start: 1682, end: 1693 },
				},
			],
			loc: { start: 1594, end: 1695 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1702, end: 1711 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1716, end: 1718 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1720, end: 1722 },
							},
							loc: { start: 1720, end: 1722 },
						},
						loc: { start: 1720, end: 1723 },
					},
					directives: [],
					loc: { start: 1716, end: 1723 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1726, end: 1733 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1735, end: 1742 },
							},
							loc: { start: 1735, end: 1742 },
						},
						loc: { start: 1735, end: 1743 },
					},
					directives: [],
					loc: { start: 1726, end: 1743 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1746, end: 1754 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1756, end: 1759 },
							},
							loc: { start: 1756, end: 1759 },
						},
						loc: { start: 1756, end: 1760 },
					},
					directives: [],
					loc: { start: 1746, end: 1760 },
				},
			],
			loc: { start: 1697, end: 1762 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1769, end: 1779 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1784, end: 1786 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1788, end: 1790 },
							},
							loc: { start: 1788, end: 1790 },
						},
						loc: { start: 1788, end: 1791 },
					},
					directives: [],
					loc: { start: 1784, end: 1791 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1794, end: 1798 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1800, end: 1806 },
							},
							loc: { start: 1800, end: 1806 },
						},
						loc: { start: 1800, end: 1807 },
					},
					directives: [],
					loc: { start: 1794, end: 1807 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1810, end: 1818 },
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
										value: "Product",
										loc: { start: 1821, end: 1828 },
									},
									loc: { start: 1821, end: 1828 },
								},
								loc: { start: 1821, end: 1829 },
							},
							loc: { start: 1820, end: 1830 },
						},
						loc: { start: 1820, end: 1831 },
					},
					directives: [],
					loc: { start: 1810, end: 1831 },
				},
			],
			loc: { start: 1764, end: 1833 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "DefaultIdResponse",
				loc: { start: 1840, end: 1857 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1862, end: 1864 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1866, end: 1868 },
							},
							loc: { start: 1866, end: 1868 },
						},
						loc: { start: 1866, end: 1869 },
					},
					directives: [],
					loc: { start: 1862, end: 1869 },
				},
			],
			loc: { start: 1835, end: 1871 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1878, end: 1882 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1887, end: 1889 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1891, end: 1893 },
							},
							loc: { start: 1891, end: 1893 },
						},
						loc: { start: 1891, end: 1894 },
					},
					directives: [],
					loc: { start: 1887, end: 1894 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1897, end: 1901 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1903, end: 1909 },
							},
							loc: { start: 1903, end: 1909 },
						},
						loc: { start: 1903, end: 1910 },
					},
					directives: [],
					loc: { start: 1897, end: 1910 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1913, end: 1918 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1920, end: 1926 },
							},
							loc: { start: 1920, end: 1926 },
						},
						loc: { start: 1920, end: 1927 },
					},
					directives: [],
					loc: { start: 1913, end: 1927 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1930, end: 1938 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1940, end: 1947 },
							},
							loc: { start: 1940, end: 1947 },
						},
						loc: { start: 1940, end: 1948 },
					},
					directives: [],
					loc: { start: 1930, end: 1948 },
				},
			],
			loc: { start: 1873, end: 1950 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1957, end: 1964 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1969, end: 1971 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1973, end: 1975 },
							},
							loc: { start: 1973, end: 1975 },
						},
						loc: { start: 1973, end: 1976 },
					},
					directives: [],
					loc: { start: 1969, end: 1976 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1979, end: 1983 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1985, end: 1991 },
							},
							loc: { start: 1985, end: 1991 },
						},
						loc: { start: 1985, end: 1992 },
					},
					directives: [],
					loc: { start: 1979, end: 1992 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1995, end: 2000 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2002, end: 2005 },
							},
							loc: { start: 2002, end: 2005 },
						},
						loc: { start: 2002, end: 2006 },
					},
					directives: [],
					loc: { start: 1995, end: 2006 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 2009, end: 2014 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2016, end: 2019 },
							},
							loc: { start: 2016, end: 2019 },
						},
						loc: { start: 2016, end: 2020 },
					},
					directives: [],
					loc: { start: 2009, end: 2020 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2023, end: 2030 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2032, end: 2039 },
							},
							loc: { start: 2032, end: 2039 },
						},
						loc: { start: 2032, end: 2040 },
					},
					directives: [],
					loc: { start: 2023, end: 2040 },
				},
			],
			loc: { start: 1952, end: 2042 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 2049, end: 2054 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2059, end: 2063 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2065, end: 2071 },
							},
							loc: { start: 2065, end: 2071 },
						},
						loc: { start: 2065, end: 2072 },
					},
					directives: [],
					loc: { start: 2059, end: 2072 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 2075, end: 2078 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 2080, end: 2086 },
						},
						loc: { start: 2080, end: 2086 },
					},
					directives: [],
					loc: { start: 2075, end: 2086 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 2089, end: 2095 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2097, end: 2100 },
							},
							loc: { start: 2097, end: 2100 },
						},
						loc: { start: 2097, end: 2101 },
					},
					directives: [],
					loc: { start: 2089, end: 2101 },
				},
			],
			loc: { start: 2044, end: 2103 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 2110, end: 2117 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2122, end: 2124 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2126, end: 2128 },
							},
							loc: { start: 2126, end: 2128 },
						},
						loc: { start: 2126, end: 2129 },
					},
					directives: [],
					loc: { start: 2122, end: 2129 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 2132, end: 2137 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2139, end: 2145 },
							},
							loc: { start: 2139, end: 2145 },
						},
						loc: { start: 2139, end: 2146 },
					},
					directives: [],
					loc: { start: 2132, end: 2146 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 2149, end: 2162 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2164, end: 2170 },
							},
							loc: { start: 2164, end: 2170 },
						},
						loc: { start: 2164, end: 2171 },
					},
					directives: [],
					loc: { start: 2149, end: 2171 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 2174, end: 2185 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2187, end: 2193 },
							},
							loc: { start: 2187, end: 2193 },
						},
						loc: { start: 2187, end: 2194 },
					},
					directives: [],
					loc: { start: 2174, end: 2194 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 2197, end: 2203 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 2205, end: 2211 },
							},
							loc: { start: 2205, end: 2211 },
						},
						loc: { start: 2205, end: 2212 },
					},
					directives: [],
					loc: { start: 2197, end: 2212 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 2215, end: 2223 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 2225, end: 2233 },
							},
							loc: { start: 2225, end: 2233 },
						},
						loc: { start: 2225, end: 2234 },
					},
					directives: [],
					loc: { start: 2215, end: 2234 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 2237, end: 2243 },
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
										loc: { start: 2246, end: 2251 },
									},
									loc: { start: 2246, end: 2251 },
								},
								loc: { start: 2246, end: 2252 },
							},
							loc: { start: 2245, end: 2253 },
						},
						loc: { start: 2245, end: 2254 },
					},
					directives: [],
					loc: { start: 2237, end: 2254 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 2257, end: 2265 },
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
										loc: { start: 2268, end: 2275 },
									},
									loc: { start: 2268, end: 2275 },
								},
								loc: { start: 2268, end: 2276 },
							},
							loc: { start: 2267, end: 2277 },
						},
						loc: { start: 2267, end: 2278 },
					},
					directives: [],
					loc: { start: 2257, end: 2278 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2281, end: 2287 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Float",
							loc: { start: 2289, end: 2294 },
						},
						loc: { start: 2289, end: 2294 },
					},
					directives: [],
					loc: { start: 2281, end: 2294 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "numRatings",
						loc: { start: 2297, end: 2307 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2309, end: 2312 },
							},
							loc: { start: 2309, end: 2312 },
						},
						loc: { start: 2309, end: 2313 },
					},
					directives: [],
					loc: { start: 2297, end: 2313 },
				},
			],
			loc: { start: 2105, end: 2315 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2322, end: 2328 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2333, end: 2335 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2337, end: 2339 },
							},
							loc: { start: 2337, end: 2339 },
						},
						loc: { start: 2337, end: 2340 },
					},
					directives: [],
					loc: { start: 2333, end: 2340 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2343, end: 2349 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2351, end: 2354 },
							},
							loc: { start: 2351, end: 2354 },
						},
						loc: { start: 2351, end: 2355 },
					},
					directives: [],
					loc: { start: 2343, end: 2355 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "headline",
						loc: { start: 2358, end: 2366 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2368, end: 2374 },
							},
							loc: { start: 2368, end: 2374 },
						},
						loc: { start: 2368, end: 2375 },
					},
					directives: [],
					loc: { start: 2358, end: 2375 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "content",
						loc: { start: 2378, end: 2385 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2387, end: 2393 },
							},
							loc: { start: 2387, end: 2393 },
						},
						loc: { start: 2387, end: 2394 },
					},
					directives: [],
					loc: { start: 2378, end: 2394 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 2397, end: 2401 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 2403, end: 2407 },
							},
							loc: { start: 2403, end: 2407 },
						},
						loc: { start: 2403, end: 2408 },
					},
					directives: [],
					loc: { start: 2397, end: 2408 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2411, end: 2418 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2420, end: 2427 },
							},
							loc: { start: 2420, end: 2427 },
						},
						loc: { start: 2420, end: 2428 },
					},
					directives: [],
					loc: { start: 2411, end: 2428 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "dateCreated",
						loc: { start: 2431, end: 2442 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2444, end: 2450 },
							},
							loc: { start: 2444, end: 2450 },
						},
						loc: { start: 2444, end: 2451 },
					},
					directives: [],
					loc: { start: 2431, end: 2451 },
				},
			],
			loc: { start: 2317, end: 2453 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 2460, end: 2470 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 2475, end: 2479 },
					},
					directives: [],
					loc: { start: 2475, end: 2479 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 2482, end: 2491 },
					},
					directives: [],
					loc: { start: 2482, end: 2491 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 2494, end: 2504 },
					},
					directives: [],
					loc: { start: 2494, end: 2504 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 2507, end: 2514 },
					},
					directives: [],
					loc: { start: 2507, end: 2514 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 2517, end: 2526 },
					},
					directives: [],
					loc: { start: 2517, end: 2526 },
				},
			],
			loc: { start: 2455, end: 2528 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 2535, end: 2546 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 2551, end: 2553 } },
					directives: [],
					loc: { start: 2551, end: 2553 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 2556, end: 2558 } },
					directives: [],
					loc: { start: 2556, end: 2558 },
				},
			],
			loc: { start: 2530, end: 2560 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "SortEnum",
				loc: { start: 2567, end: 2575 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "asc", loc: { start: 2580, end: 2583 } },
					directives: [],
					loc: { start: 2580, end: 2583 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "desc",
						loc: { start: 2586, end: 2590 },
					},
					directives: [],
					loc: { start: 2586, end: 2590 },
				},
			],
			loc: { start: 2562, end: 2592 },
		},
	],
	loc: { start: 0, end: 2593 },
} as unknown as DocumentNode;

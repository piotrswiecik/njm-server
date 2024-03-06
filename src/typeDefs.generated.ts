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
			],
			loc: { start: 1022, end: 1211 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1225, end: 1230 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 1235, end: 1248 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1249, end: 1253 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1255, end: 1261 },
									},
									loc: { start: 1255, end: 1261 },
								},
								loc: { start: 1255, end: 1262 },
							},
							directives: [],
							loc: { start: 1249, end: 1262 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1265, end: 1268 },
							},
							loc: { start: 1265, end: 1268 },
						},
						loc: { start: 1265, end: 1269 },
					},
					directives: [],
					loc: { start: 1235, end: 1269 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1272, end: 1280 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1281, end: 1285 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1287, end: 1293 },
									},
									loc: { start: 1287, end: 1293 },
								},
								loc: { start: 1287, end: 1294 },
							},
							directives: [],
							loc: { start: 1281, end: 1294 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 1297, end: 1305 },
						},
						loc: { start: 1297, end: 1305 },
					},
					directives: [],
					loc: { start: 1272, end: 1305 },
				},
			],
			loc: { start: 1213, end: 1307 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1321, end: 1326 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productReviews",
						loc: { start: 1331, end: 1345 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 1346, end: 1355 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1357, end: 1359 },
									},
									loc: { start: 1357, end: 1359 },
								},
								loc: { start: 1357, end: 1360 },
							},
							directives: [],
							loc: { start: 1346, end: 1360 },
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
										loc: { start: 1364, end: 1370 },
									},
									loc: { start: 1364, end: 1370 },
								},
								loc: { start: 1364, end: 1371 },
							},
							loc: { start: 1363, end: 1372 },
						},
						loc: { start: 1363, end: 1373 },
					},
					directives: [],
					loc: { start: 1331, end: 1373 },
				},
			],
			loc: { start: 1309, end: 1375 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1381, end: 1386 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1376, end: 1386 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1393, end: 1401 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1388, end: 1401 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 1407, end: 1413 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1418, end: 1422 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1424, end: 1430 },
							},
							loc: { start: 1424, end: 1430 },
						},
						loc: { start: 1424, end: 1431 },
					},
					directives: [],
					loc: { start: 1418, end: 1431 },
				},
			],
			loc: { start: 1402, end: 1433 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 1440, end: 1448 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1453, end: 1455 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1457, end: 1459 },
							},
							loc: { start: 1457, end: 1459 },
						},
						loc: { start: 1457, end: 1460 },
					},
					directives: [],
					loc: { start: 1453, end: 1460 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1463, end: 1467 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1469, end: 1475 },
							},
							loc: { start: 1469, end: 1475 },
						},
						loc: { start: 1469, end: 1476 },
					},
					directives: [],
					loc: { start: 1463, end: 1476 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1479, end: 1487 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1488, end: 1492 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1494, end: 1497 },
								},
								loc: { start: 1494, end: 1497 },
							},
							directives: [],
							loc: { start: 1488, end: 1497 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1499, end: 1503 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1505, end: 1508 },
								},
								loc: { start: 1505, end: 1508 },
							},
							directives: [],
							loc: { start: 1499, end: 1508 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "sort",
								loc: { start: 1510, end: 1514 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1516, end: 1522 },
								},
								loc: { start: 1516, end: 1522 },
							},
							directives: [],
							loc: { start: 1510, end: 1522 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "order",
								loc: { start: 1524, end: 1529 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1531, end: 1537 },
								},
								loc: { start: 1531, end: 1537 },
							},
							directives: [],
							loc: { start: 1524, end: 1537 },
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
										loc: { start: 1541, end: 1548 },
									},
									loc: { start: 1541, end: 1548 },
								},
								loc: { start: 1541, end: 1549 },
							},
							loc: { start: 1540, end: 1550 },
						},
						loc: { start: 1540, end: 1551 },
					},
					directives: [],
					loc: { start: 1479, end: 1551 },
				},
			],
			loc: { start: 1435, end: 1553 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1560, end: 1565 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1570, end: 1572 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1574, end: 1576 },
							},
							loc: { start: 1574, end: 1576 },
						},
						loc: { start: 1574, end: 1577 },
					},
					directives: [],
					loc: { start: 1570, end: 1577 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1580, end: 1590 },
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
									loc: { start: 1593, end: 1602 },
								},
								loc: { start: 1593, end: 1602 },
							},
							loc: { start: 1593, end: 1603 },
						},
						loc: { start: 1592, end: 1604 },
					},
					directives: [],
					loc: { start: 1580, end: 1604 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1607, end: 1611 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1613, end: 1617 },
							},
							loc: { start: 1613, end: 1617 },
						},
						loc: { start: 1613, end: 1618 },
					},
					directives: [],
					loc: { start: 1607, end: 1618 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1621, end: 1627 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1629, end: 1639 },
							},
							loc: { start: 1629, end: 1639 },
						},
						loc: { start: 1629, end: 1640 },
					},
					directives: [],
					loc: { start: 1621, end: 1640 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1643, end: 1648 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1650, end: 1653 },
							},
							loc: { start: 1650, end: 1653 },
						},
						loc: { start: 1650, end: 1654 },
					},
					directives: [],
					loc: { start: 1643, end: 1654 },
				},
			],
			loc: { start: 1555, end: 1656 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1663, end: 1672 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1677, end: 1679 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1681, end: 1683 },
							},
							loc: { start: 1681, end: 1683 },
						},
						loc: { start: 1681, end: 1684 },
					},
					directives: [],
					loc: { start: 1677, end: 1684 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1687, end: 1694 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1696, end: 1703 },
							},
							loc: { start: 1696, end: 1703 },
						},
						loc: { start: 1696, end: 1704 },
					},
					directives: [],
					loc: { start: 1687, end: 1704 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1707, end: 1715 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1717, end: 1720 },
							},
							loc: { start: 1717, end: 1720 },
						},
						loc: { start: 1717, end: 1721 },
					},
					directives: [],
					loc: { start: 1707, end: 1721 },
				},
			],
			loc: { start: 1658, end: 1723 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1730, end: 1740 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1745, end: 1747 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1749, end: 1751 },
							},
							loc: { start: 1749, end: 1751 },
						},
						loc: { start: 1749, end: 1752 },
					},
					directives: [],
					loc: { start: 1745, end: 1752 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1755, end: 1759 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1761, end: 1767 },
							},
							loc: { start: 1761, end: 1767 },
						},
						loc: { start: 1761, end: 1768 },
					},
					directives: [],
					loc: { start: 1755, end: 1768 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1771, end: 1779 },
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
										loc: { start: 1782, end: 1789 },
									},
									loc: { start: 1782, end: 1789 },
								},
								loc: { start: 1782, end: 1790 },
							},
							loc: { start: 1781, end: 1791 },
						},
						loc: { start: 1781, end: 1792 },
					},
					directives: [],
					loc: { start: 1771, end: 1792 },
				},
			],
			loc: { start: 1725, end: 1794 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "DefaultIdResponse",
				loc: { start: 1801, end: 1818 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1823, end: 1825 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1827, end: 1829 },
							},
							loc: { start: 1827, end: 1829 },
						},
						loc: { start: 1827, end: 1830 },
					},
					directives: [],
					loc: { start: 1823, end: 1830 },
				},
			],
			loc: { start: 1796, end: 1832 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1839, end: 1843 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1848, end: 1850 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1852, end: 1854 },
							},
							loc: { start: 1852, end: 1854 },
						},
						loc: { start: 1852, end: 1855 },
					},
					directives: [],
					loc: { start: 1848, end: 1855 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1858, end: 1862 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1864, end: 1870 },
							},
							loc: { start: 1864, end: 1870 },
						},
						loc: { start: 1864, end: 1871 },
					},
					directives: [],
					loc: { start: 1858, end: 1871 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1874, end: 1879 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1881, end: 1887 },
							},
							loc: { start: 1881, end: 1887 },
						},
						loc: { start: 1881, end: 1888 },
					},
					directives: [],
					loc: { start: 1874, end: 1888 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1891, end: 1899 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1901, end: 1908 },
							},
							loc: { start: 1901, end: 1908 },
						},
						loc: { start: 1901, end: 1909 },
					},
					directives: [],
					loc: { start: 1891, end: 1909 },
				},
			],
			loc: { start: 1834, end: 1911 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1918, end: 1925 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1930, end: 1932 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1934, end: 1936 },
							},
							loc: { start: 1934, end: 1936 },
						},
						loc: { start: 1934, end: 1937 },
					},
					directives: [],
					loc: { start: 1930, end: 1937 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1940, end: 1944 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1946, end: 1952 },
							},
							loc: { start: 1946, end: 1952 },
						},
						loc: { start: 1946, end: 1953 },
					},
					directives: [],
					loc: { start: 1940, end: 1953 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1956, end: 1961 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1963, end: 1966 },
							},
							loc: { start: 1963, end: 1966 },
						},
						loc: { start: 1963, end: 1967 },
					},
					directives: [],
					loc: { start: 1956, end: 1967 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1970, end: 1975 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1977, end: 1980 },
							},
							loc: { start: 1977, end: 1980 },
						},
						loc: { start: 1977, end: 1981 },
					},
					directives: [],
					loc: { start: 1970, end: 1981 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1984, end: 1991 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1993, end: 2000 },
							},
							loc: { start: 1993, end: 2000 },
						},
						loc: { start: 1993, end: 2001 },
					},
					directives: [],
					loc: { start: 1984, end: 2001 },
				},
			],
			loc: { start: 1913, end: 2003 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 2010, end: 2015 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 2020, end: 2024 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2026, end: 2032 },
							},
							loc: { start: 2026, end: 2032 },
						},
						loc: { start: 2026, end: 2033 },
					},
					directives: [],
					loc: { start: 2020, end: 2033 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 2036, end: 2039 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 2041, end: 2047 },
						},
						loc: { start: 2041, end: 2047 },
					},
					directives: [],
					loc: { start: 2036, end: 2047 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 2050, end: 2056 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2058, end: 2061 },
							},
							loc: { start: 2058, end: 2061 },
						},
						loc: { start: 2058, end: 2062 },
					},
					directives: [],
					loc: { start: 2050, end: 2062 },
				},
			],
			loc: { start: 2005, end: 2064 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 2071, end: 2078 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2083, end: 2085 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2087, end: 2089 },
							},
							loc: { start: 2087, end: 2089 },
						},
						loc: { start: 2087, end: 2090 },
					},
					directives: [],
					loc: { start: 2083, end: 2090 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 2093, end: 2098 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2100, end: 2106 },
							},
							loc: { start: 2100, end: 2106 },
						},
						loc: { start: 2100, end: 2107 },
					},
					directives: [],
					loc: { start: 2093, end: 2107 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 2110, end: 2123 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2125, end: 2131 },
							},
							loc: { start: 2125, end: 2131 },
						},
						loc: { start: 2125, end: 2132 },
					},
					directives: [],
					loc: { start: 2110, end: 2132 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 2135, end: 2146 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2148, end: 2154 },
							},
							loc: { start: 2148, end: 2154 },
						},
						loc: { start: 2148, end: 2155 },
					},
					directives: [],
					loc: { start: 2135, end: 2155 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 2158, end: 2164 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 2166, end: 2172 },
							},
							loc: { start: 2166, end: 2172 },
						},
						loc: { start: 2166, end: 2173 },
					},
					directives: [],
					loc: { start: 2158, end: 2173 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 2176, end: 2184 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 2186, end: 2194 },
							},
							loc: { start: 2186, end: 2194 },
						},
						loc: { start: 2186, end: 2195 },
					},
					directives: [],
					loc: { start: 2176, end: 2195 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 2198, end: 2204 },
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
										loc: { start: 2207, end: 2212 },
									},
									loc: { start: 2207, end: 2212 },
								},
								loc: { start: 2207, end: 2213 },
							},
							loc: { start: 2206, end: 2214 },
						},
						loc: { start: 2206, end: 2215 },
					},
					directives: [],
					loc: { start: 2198, end: 2215 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 2218, end: 2226 },
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
										loc: { start: 2229, end: 2236 },
									},
									loc: { start: 2229, end: 2236 },
								},
								loc: { start: 2229, end: 2237 },
							},
							loc: { start: 2228, end: 2238 },
						},
						loc: { start: 2228, end: 2239 },
					},
					directives: [],
					loc: { start: 2218, end: 2239 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2242, end: 2248 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Float",
							loc: { start: 2250, end: 2255 },
						},
						loc: { start: 2250, end: 2255 },
					},
					directives: [],
					loc: { start: 2242, end: 2255 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "numRatings",
						loc: { start: 2258, end: 2268 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2270, end: 2273 },
							},
							loc: { start: 2270, end: 2273 },
						},
						loc: { start: 2270, end: 2274 },
					},
					directives: [],
					loc: { start: 2258, end: 2274 },
				},
			],
			loc: { start: 2066, end: 2276 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2283, end: 2289 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2294, end: 2296 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2298, end: 2300 },
							},
							loc: { start: 2298, end: 2300 },
						},
						loc: { start: 2298, end: 2301 },
					},
					directives: [],
					loc: { start: 2294, end: 2301 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2304, end: 2310 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2312, end: 2315 },
							},
							loc: { start: 2312, end: 2315 },
						},
						loc: { start: 2312, end: 2316 },
					},
					directives: [],
					loc: { start: 2304, end: 2316 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "headline",
						loc: { start: 2319, end: 2327 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2329, end: 2335 },
							},
							loc: { start: 2329, end: 2335 },
						},
						loc: { start: 2329, end: 2336 },
					},
					directives: [],
					loc: { start: 2319, end: 2336 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "content",
						loc: { start: 2339, end: 2346 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2348, end: 2354 },
							},
							loc: { start: 2348, end: 2354 },
						},
						loc: { start: 2348, end: 2355 },
					},
					directives: [],
					loc: { start: 2339, end: 2355 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 2358, end: 2362 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 2364, end: 2368 },
							},
							loc: { start: 2364, end: 2368 },
						},
						loc: { start: 2364, end: 2369 },
					},
					directives: [],
					loc: { start: 2358, end: 2369 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2372, end: 2379 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2381, end: 2388 },
							},
							loc: { start: 2381, end: 2388 },
						},
						loc: { start: 2381, end: 2389 },
					},
					directives: [],
					loc: { start: 2372, end: 2389 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "dateCreated",
						loc: { start: 2392, end: 2403 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2405, end: 2411 },
							},
							loc: { start: 2405, end: 2411 },
						},
						loc: { start: 2405, end: 2412 },
					},
					directives: [],
					loc: { start: 2392, end: 2412 },
				},
			],
			loc: { start: 2278, end: 2414 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 2421, end: 2431 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 2436, end: 2440 },
					},
					directives: [],
					loc: { start: 2436, end: 2440 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 2443, end: 2452 },
					},
					directives: [],
					loc: { start: 2443, end: 2452 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 2455, end: 2465 },
					},
					directives: [],
					loc: { start: 2455, end: 2465 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 2468, end: 2475 },
					},
					directives: [],
					loc: { start: 2468, end: 2475 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 2478, end: 2487 },
					},
					directives: [],
					loc: { start: 2478, end: 2487 },
				},
			],
			loc: { start: 2416, end: 2489 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 2496, end: 2507 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 2512, end: 2514 } },
					directives: [],
					loc: { start: 2512, end: 2514 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 2517, end: 2519 } },
					directives: [],
					loc: { start: 2517, end: 2519 },
				},
			],
			loc: { start: 2491, end: 2521 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "SortEnum",
				loc: { start: 2528, end: 2536 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "asc", loc: { start: 2541, end: 2544 } },
					directives: [],
					loc: { start: 2541, end: 2544 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "desc",
						loc: { start: 2547, end: 2551 },
					},
					directives: [],
					loc: { start: 2547, end: 2551 },
				},
			],
			loc: { start: 2523, end: 2553 },
		},
	],
	loc: { start: 0, end: 2554 },
} as unknown as DocumentNode;

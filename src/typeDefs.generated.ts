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
			name: { kind: "Name", value: "Query", loc: { start: 706, end: 711 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "user", loc: { start: 716, end: 720 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 721, end: 723 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 725, end: 727 },
									},
									loc: { start: 725, end: 727 },
								},
								loc: { start: 725, end: 728 },
							},
							directives: [],
							loc: { start: 721, end: 728 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "User",
							loc: { start: 731, end: 735 },
						},
						loc: { start: 731, end: 735 },
					},
					directives: [],
					loc: { start: 716, end: 735 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "users", loc: { start: 738, end: 743 } },
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
										loc: { start: 746, end: 750 },
									},
									loc: { start: 746, end: 750 },
								},
								loc: { start: 746, end: 751 },
							},
							loc: { start: 745, end: 752 },
						},
						loc: { start: 745, end: 753 },
					},
					directives: [],
					loc: { start: 738, end: 753 },
				},
			],
			loc: { start: 694, end: 755 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 769, end: 774 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collection",
						loc: { start: 779, end: 789 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 790, end: 794 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 796, end: 802 },
									},
									loc: { start: 796, end: 802 },
								},
								loc: { start: 796, end: 803 },
							},
							directives: [],
							loc: { start: 790, end: 803 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Collection",
							loc: { start: 806, end: 816 },
						},
						loc: { start: 806, end: 816 },
					},
					directives: [],
					loc: { start: 779, end: 816 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "collections",
						loc: { start: 819, end: 830 },
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
									loc: { start: 833, end: 843 },
								},
								loc: { start: 833, end: 843 },
							},
							loc: { start: 833, end: 844 },
						},
						loc: { start: 832, end: 845 },
					},
					directives: [],
					loc: { start: 819, end: 845 },
				},
			],
			loc: { start: 757, end: 847 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 861, end: 866 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "order", loc: { start: 871, end: 876 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 877, end: 879 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 881, end: 883 },
									},
									loc: { start: 881, end: 883 },
								},
								loc: { start: 881, end: 884 },
							},
							directives: [],
							loc: { start: 877, end: 884 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "status",
								loc: { start: 886, end: 892 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "StatusEnum",
									loc: { start: 894, end: 904 },
								},
								loc: { start: 894, end: 904 },
							},
							directives: [],
							loc: { start: 886, end: 904 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Order",
							loc: { start: 907, end: 912 },
						},
						loc: { start: 907, end: 912 },
					},
					directives: [],
					loc: { start: 871, end: 912 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orders",
						loc: { start: 915, end: 921 },
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
										loc: { start: 924, end: 929 },
									},
									loc: { start: 924, end: 929 },
								},
								loc: { start: 924, end: 930 },
							},
							loc: { start: 923, end: 931 },
						},
						loc: { start: 923, end: 932 },
					},
					directives: [],
					loc: { start: 915, end: 932 },
				},
			],
			loc: { start: 849, end: 934 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 948, end: 953 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 958, end: 965 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "id",
								loc: { start: 966, end: 968 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 970, end: 972 },
									},
									loc: { start: 970, end: 972 },
								},
								loc: { start: 970, end: 973 },
							},
							directives: [],
							loc: { start: 966, end: 973 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 976, end: 983 },
						},
						loc: { start: 976, end: 983 },
					},
					directives: [],
					loc: { start: 958, end: 983 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 986, end: 994 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 995, end: 999 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1001, end: 1004 },
								},
								loc: { start: 1001, end: 1004 },
							},
							directives: [],
							loc: { start: 995, end: 1004 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1006, end: 1010 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1012, end: 1015 },
								},
								loc: { start: 1012, end: 1015 },
							},
							directives: [],
							loc: { start: 1006, end: 1015 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "sort",
								loc: { start: 1017, end: 1021 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1023, end: 1029 },
								},
								loc: { start: 1023, end: 1029 },
							},
							directives: [],
							loc: { start: 1017, end: 1029 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "order",
								loc: { start: 1031, end: 1036 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1038, end: 1044 },
								},
								loc: { start: 1038, end: 1044 },
							},
							directives: [],
							loc: { start: 1031, end: 1044 },
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
										loc: { start: 1048, end: 1055 },
									},
									loc: { start: 1048, end: 1055 },
								},
								loc: { start: 1048, end: 1056 },
							},
							loc: { start: 1047, end: 1057 },
						},
						loc: { start: 1047, end: 1058 },
					},
					directives: [],
					loc: { start: 986, end: 1058 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 1061, end: 1074 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 1075, end: 1080 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1082, end: 1088 },
									},
									loc: { start: 1082, end: 1088 },
								},
								loc: { start: 1082, end: 1089 },
							},
							directives: [],
							loc: { start: 1075, end: 1089 },
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
									loc: { start: 1093, end: 1100 },
								},
								loc: { start: 1093, end: 1100 },
							},
							loc: { start: 1093, end: 1101 },
						},
						loc: { start: 1092, end: 1102 },
					},
					directives: [],
					loc: { start: 1061, end: 1102 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 1105, end: 1117 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1119, end: 1122 },
							},
							loc: { start: 1119, end: 1122 },
						},
						loc: { start: 1119, end: 1123 },
					},
					directives: [],
					loc: { start: 1105, end: 1123 },
				},
			],
			loc: { start: 936, end: 1125 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1139, end: 1144 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 1149, end: 1162 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1163, end: 1167 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1169, end: 1175 },
									},
									loc: { start: 1169, end: 1175 },
								},
								loc: { start: 1169, end: 1176 },
							},
							directives: [],
							loc: { start: 1163, end: 1176 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1179, end: 1182 },
							},
							loc: { start: 1179, end: 1182 },
						},
						loc: { start: 1179, end: 1183 },
					},
					directives: [],
					loc: { start: 1149, end: 1183 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1186, end: 1194 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1195, end: 1199 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1201, end: 1207 },
									},
									loc: { start: 1201, end: 1207 },
								},
								loc: { start: 1201, end: 1208 },
							},
							directives: [],
							loc: { start: 1195, end: 1208 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "sort",
								loc: { start: 1210, end: 1214 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1216, end: 1222 },
								},
								loc: { start: 1216, end: 1222 },
							},
							directives: [],
							loc: { start: 1210, end: 1222 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "order",
								loc: { start: 1224, end: 1229 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "String",
									loc: { start: 1231, end: 1237 },
								},
								loc: { start: 1231, end: 1237 },
							},
							directives: [],
							loc: { start: 1224, end: 1237 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 1240, end: 1248 },
						},
						loc: { start: 1240, end: 1248 },
					},
					directives: [],
					loc: { start: 1186, end: 1248 },
				},
			],
			loc: { start: 1127, end: 1250 },
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
						value: "productReviews",
						loc: { start: 1274, end: 1288 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 1289, end: 1298 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1300, end: 1302 },
									},
									loc: { start: 1300, end: 1302 },
								},
								loc: { start: 1300, end: 1303 },
							},
							directives: [],
							loc: { start: 1289, end: 1303 },
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
										loc: { start: 1307, end: 1313 },
									},
									loc: { start: 1307, end: 1313 },
								},
								loc: { start: 1307, end: 1314 },
							},
							loc: { start: 1306, end: 1315 },
						},
						loc: { start: 1306, end: 1316 },
					},
					directives: [],
					loc: { start: 1274, end: 1316 },
				},
			],
			loc: { start: 1252, end: 1318 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1324, end: 1329 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1319, end: 1329 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1336, end: 1344 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1331, end: 1344 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 1350, end: 1356 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1361, end: 1365 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1367, end: 1373 },
							},
							loc: { start: 1367, end: 1373 },
						},
						loc: { start: 1367, end: 1374 },
					},
					directives: [],
					loc: { start: 1361, end: 1374 },
				},
			],
			loc: { start: 1345, end: 1376 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 1383, end: 1391 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1396, end: 1398 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1400, end: 1402 },
							},
							loc: { start: 1400, end: 1402 },
						},
						loc: { start: 1400, end: 1403 },
					},
					directives: [],
					loc: { start: 1396, end: 1403 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1406, end: 1410 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1412, end: 1418 },
							},
							loc: { start: 1412, end: 1418 },
						},
						loc: { start: 1412, end: 1419 },
					},
					directives: [],
					loc: { start: 1406, end: 1419 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1422, end: 1430 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1431, end: 1435 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1437, end: 1440 },
								},
								loc: { start: 1437, end: 1440 },
							},
							directives: [],
							loc: { start: 1431, end: 1440 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1442, end: 1446 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1448, end: 1451 },
								},
								loc: { start: 1448, end: 1451 },
							},
							directives: [],
							loc: { start: 1442, end: 1451 },
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
										loc: { start: 1455, end: 1462 },
									},
									loc: { start: 1455, end: 1462 },
								},
								loc: { start: 1455, end: 1463 },
							},
							loc: { start: 1454, end: 1464 },
						},
						loc: { start: 1454, end: 1465 },
					},
					directives: [],
					loc: { start: 1422, end: 1465 },
				},
			],
			loc: { start: 1378, end: 1467 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1474, end: 1479 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1484, end: 1486 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1488, end: 1490 },
							},
							loc: { start: 1488, end: 1490 },
						},
						loc: { start: 1488, end: 1491 },
					},
					directives: [],
					loc: { start: 1484, end: 1491 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1494, end: 1504 },
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
									loc: { start: 1507, end: 1516 },
								},
								loc: { start: 1507, end: 1516 },
							},
							loc: { start: 1507, end: 1517 },
						},
						loc: { start: 1506, end: 1518 },
					},
					directives: [],
					loc: { start: 1494, end: 1518 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1521, end: 1525 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1527, end: 1531 },
							},
							loc: { start: 1527, end: 1531 },
						},
						loc: { start: 1527, end: 1532 },
					},
					directives: [],
					loc: { start: 1521, end: 1532 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1535, end: 1541 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1543, end: 1553 },
							},
							loc: { start: 1543, end: 1553 },
						},
						loc: { start: 1543, end: 1554 },
					},
					directives: [],
					loc: { start: 1535, end: 1554 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1557, end: 1562 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1564, end: 1567 },
							},
							loc: { start: 1564, end: 1567 },
						},
						loc: { start: 1564, end: 1568 },
					},
					directives: [],
					loc: { start: 1557, end: 1568 },
				},
			],
			loc: { start: 1469, end: 1570 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1577, end: 1586 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1591, end: 1593 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1595, end: 1597 },
							},
							loc: { start: 1595, end: 1597 },
						},
						loc: { start: 1595, end: 1598 },
					},
					directives: [],
					loc: { start: 1591, end: 1598 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1601, end: 1608 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1610, end: 1617 },
							},
							loc: { start: 1610, end: 1617 },
						},
						loc: { start: 1610, end: 1618 },
					},
					directives: [],
					loc: { start: 1601, end: 1618 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1621, end: 1629 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1631, end: 1634 },
							},
							loc: { start: 1631, end: 1634 },
						},
						loc: { start: 1631, end: 1635 },
					},
					directives: [],
					loc: { start: 1621, end: 1635 },
				},
			],
			loc: { start: 1572, end: 1637 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1644, end: 1654 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1659, end: 1661 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1663, end: 1665 },
							},
							loc: { start: 1663, end: 1665 },
						},
						loc: { start: 1663, end: 1666 },
					},
					directives: [],
					loc: { start: 1659, end: 1666 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1669, end: 1673 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1675, end: 1681 },
							},
							loc: { start: 1675, end: 1681 },
						},
						loc: { start: 1675, end: 1682 },
					},
					directives: [],
					loc: { start: 1669, end: 1682 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1685, end: 1693 },
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
										loc: { start: 1696, end: 1703 },
									},
									loc: { start: 1696, end: 1703 },
								},
								loc: { start: 1696, end: 1704 },
							},
							loc: { start: 1695, end: 1705 },
						},
						loc: { start: 1695, end: 1706 },
					},
					directives: [],
					loc: { start: 1685, end: 1706 },
				},
			],
			loc: { start: 1639, end: 1708 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "DefaultIdResponse",
				loc: { start: 1715, end: 1732 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1737, end: 1739 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1741, end: 1743 },
							},
							loc: { start: 1741, end: 1743 },
						},
						loc: { start: 1741, end: 1744 },
					},
					directives: [],
					loc: { start: 1737, end: 1744 },
				},
			],
			loc: { start: 1710, end: 1746 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1753, end: 1757 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1762, end: 1764 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1766, end: 1768 },
							},
							loc: { start: 1766, end: 1768 },
						},
						loc: { start: 1766, end: 1769 },
					},
					directives: [],
					loc: { start: 1762, end: 1769 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1772, end: 1776 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1778, end: 1784 },
							},
							loc: { start: 1778, end: 1784 },
						},
						loc: { start: 1778, end: 1785 },
					},
					directives: [],
					loc: { start: 1772, end: 1785 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1788, end: 1793 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1795, end: 1801 },
							},
							loc: { start: 1795, end: 1801 },
						},
						loc: { start: 1795, end: 1802 },
					},
					directives: [],
					loc: { start: 1788, end: 1802 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1805, end: 1813 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1815, end: 1822 },
							},
							loc: { start: 1815, end: 1822 },
						},
						loc: { start: 1815, end: 1823 },
					},
					directives: [],
					loc: { start: 1805, end: 1823 },
				},
			],
			loc: { start: 1748, end: 1825 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1832, end: 1839 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1844, end: 1846 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1848, end: 1850 },
							},
							loc: { start: 1848, end: 1850 },
						},
						loc: { start: 1848, end: 1851 },
					},
					directives: [],
					loc: { start: 1844, end: 1851 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1854, end: 1858 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1860, end: 1866 },
							},
							loc: { start: 1860, end: 1866 },
						},
						loc: { start: 1860, end: 1867 },
					},
					directives: [],
					loc: { start: 1854, end: 1867 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1870, end: 1875 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1877, end: 1880 },
							},
							loc: { start: 1877, end: 1880 },
						},
						loc: { start: 1877, end: 1881 },
					},
					directives: [],
					loc: { start: 1870, end: 1881 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1884, end: 1889 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1891, end: 1894 },
							},
							loc: { start: 1891, end: 1894 },
						},
						loc: { start: 1891, end: 1895 },
					},
					directives: [],
					loc: { start: 1884, end: 1895 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1898, end: 1905 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1907, end: 1914 },
							},
							loc: { start: 1907, end: 1914 },
						},
						loc: { start: 1907, end: 1915 },
					},
					directives: [],
					loc: { start: 1898, end: 1915 },
				},
			],
			loc: { start: 1827, end: 1917 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1924, end: 1929 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1934, end: 1938 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1940, end: 1946 },
							},
							loc: { start: 1940, end: 1946 },
						},
						loc: { start: 1940, end: 1947 },
					},
					directives: [],
					loc: { start: 1934, end: 1947 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1950, end: 1953 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1955, end: 1961 },
						},
						loc: { start: 1955, end: 1961 },
					},
					directives: [],
					loc: { start: 1950, end: 1961 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1964, end: 1970 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1972, end: 1975 },
							},
							loc: { start: 1972, end: 1975 },
						},
						loc: { start: 1972, end: 1976 },
					},
					directives: [],
					loc: { start: 1964, end: 1976 },
				},
			],
			loc: { start: 1919, end: 1978 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1985, end: 1992 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1997, end: 1999 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2001, end: 2003 },
							},
							loc: { start: 2001, end: 2003 },
						},
						loc: { start: 2001, end: 2004 },
					},
					directives: [],
					loc: { start: 1997, end: 2004 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 2007, end: 2012 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2014, end: 2020 },
							},
							loc: { start: 2014, end: 2020 },
						},
						loc: { start: 2014, end: 2021 },
					},
					directives: [],
					loc: { start: 2007, end: 2021 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 2024, end: 2037 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2039, end: 2045 },
							},
							loc: { start: 2039, end: 2045 },
						},
						loc: { start: 2039, end: 2046 },
					},
					directives: [],
					loc: { start: 2024, end: 2046 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 2049, end: 2060 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2062, end: 2068 },
							},
							loc: { start: 2062, end: 2068 },
						},
						loc: { start: 2062, end: 2069 },
					},
					directives: [],
					loc: { start: 2049, end: 2069 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 2072, end: 2078 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 2080, end: 2086 },
							},
							loc: { start: 2080, end: 2086 },
						},
						loc: { start: 2080, end: 2087 },
					},
					directives: [],
					loc: { start: 2072, end: 2087 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 2090, end: 2098 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 2100, end: 2108 },
							},
							loc: { start: 2100, end: 2108 },
						},
						loc: { start: 2100, end: 2109 },
					},
					directives: [],
					loc: { start: 2090, end: 2109 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 2112, end: 2118 },
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
										loc: { start: 2121, end: 2126 },
									},
									loc: { start: 2121, end: 2126 },
								},
								loc: { start: 2121, end: 2127 },
							},
							loc: { start: 2120, end: 2128 },
						},
						loc: { start: 2120, end: 2129 },
					},
					directives: [],
					loc: { start: 2112, end: 2129 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 2132, end: 2140 },
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
										loc: { start: 2143, end: 2150 },
									},
									loc: { start: 2143, end: 2150 },
								},
								loc: { start: 2143, end: 2151 },
							},
							loc: { start: 2142, end: 2152 },
						},
						loc: { start: 2142, end: 2153 },
					},
					directives: [],
					loc: { start: 2132, end: 2153 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2156, end: 2162 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Float",
							loc: { start: 2164, end: 2169 },
						},
						loc: { start: 2164, end: 2169 },
					},
					directives: [],
					loc: { start: 2156, end: 2169 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "numRatings",
						loc: { start: 2172, end: 2182 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2184, end: 2187 },
							},
							loc: { start: 2184, end: 2187 },
						},
						loc: { start: 2184, end: 2188 },
					},
					directives: [],
					loc: { start: 2172, end: 2188 },
				},
			],
			loc: { start: 1980, end: 2190 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2197, end: 2203 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2208, end: 2210 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2212, end: 2214 },
							},
							loc: { start: 2212, end: 2214 },
						},
						loc: { start: 2212, end: 2215 },
					},
					directives: [],
					loc: { start: 2208, end: 2215 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2218, end: 2224 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2226, end: 2229 },
							},
							loc: { start: 2226, end: 2229 },
						},
						loc: { start: 2226, end: 2230 },
					},
					directives: [],
					loc: { start: 2218, end: 2230 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "headline",
						loc: { start: 2233, end: 2241 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2243, end: 2249 },
							},
							loc: { start: 2243, end: 2249 },
						},
						loc: { start: 2243, end: 2250 },
					},
					directives: [],
					loc: { start: 2233, end: 2250 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "content",
						loc: { start: 2253, end: 2260 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2262, end: 2268 },
							},
							loc: { start: 2262, end: 2268 },
						},
						loc: { start: 2262, end: 2269 },
					},
					directives: [],
					loc: { start: 2253, end: 2269 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 2272, end: 2276 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 2278, end: 2282 },
							},
							loc: { start: 2278, end: 2282 },
						},
						loc: { start: 2278, end: 2283 },
					},
					directives: [],
					loc: { start: 2272, end: 2283 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2286, end: 2293 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2295, end: 2302 },
							},
							loc: { start: 2295, end: 2302 },
						},
						loc: { start: 2295, end: 2303 },
					},
					directives: [],
					loc: { start: 2286, end: 2303 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "dateCreated",
						loc: { start: 2306, end: 2317 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2319, end: 2325 },
							},
							loc: { start: 2319, end: 2325 },
						},
						loc: { start: 2319, end: 2326 },
					},
					directives: [],
					loc: { start: 2306, end: 2326 },
				},
			],
			loc: { start: 2192, end: 2328 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 2335, end: 2345 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 2350, end: 2354 },
					},
					directives: [],
					loc: { start: 2350, end: 2354 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 2357, end: 2366 },
					},
					directives: [],
					loc: { start: 2357, end: 2366 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 2369, end: 2379 },
					},
					directives: [],
					loc: { start: 2369, end: 2379 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 2382, end: 2389 },
					},
					directives: [],
					loc: { start: 2382, end: 2389 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 2392, end: 2401 },
					},
					directives: [],
					loc: { start: 2392, end: 2401 },
				},
			],
			loc: { start: 2330, end: 2403 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 2410, end: 2421 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 2426, end: 2428 } },
					directives: [],
					loc: { start: 2426, end: 2428 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 2431, end: 2433 } },
					directives: [],
					loc: { start: 2431, end: 2433 },
				},
			],
			loc: { start: 2405, end: 2435 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "SortEnum",
				loc: { start: 2442, end: 2450 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "asc", loc: { start: 2455, end: 2458 } },
					directives: [],
					loc: { start: 2455, end: 2458 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "desc",
						loc: { start: 2461, end: 2465 },
					},
					directives: [],
					loc: { start: 2461, end: 2465 },
				},
			],
			loc: { start: 2437, end: 2467 },
		},
	],
	loc: { start: 0, end: 2468 },
} as unknown as DocumentNode;

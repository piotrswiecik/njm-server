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
									value: "SortInput",
									loc: { start: 1023, end: 1032 },
								},
								loc: { start: 1023, end: 1032 },
							},
							directives: [],
							loc: { start: 1017, end: 1032 },
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
										loc: { start: 1036, end: 1043 },
									},
									loc: { start: 1036, end: 1043 },
								},
								loc: { start: 1036, end: 1044 },
							},
							loc: { start: 1035, end: 1045 },
						},
						loc: { start: 1035, end: 1046 },
					},
					directives: [],
					loc: { start: 986, end: 1046 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productSearch",
						loc: { start: 1049, end: 1062 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "query",
								loc: { start: 1063, end: 1068 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1070, end: 1076 },
									},
									loc: { start: 1070, end: 1076 },
								},
								loc: { start: 1070, end: 1077 },
							},
							directives: [],
							loc: { start: 1063, end: 1077 },
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
									loc: { start: 1081, end: 1088 },
								},
								loc: { start: 1081, end: 1088 },
							},
							loc: { start: 1081, end: 1089 },
						},
						loc: { start: 1080, end: 1090 },
					},
					directives: [],
					loc: { start: 1049, end: 1090 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productCount",
						loc: { start: 1093, end: 1105 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1107, end: 1110 },
							},
							loc: { start: 1107, end: 1110 },
						},
						loc: { start: 1107, end: 1111 },
					},
					directives: [],
					loc: { start: 1093, end: 1111 },
				},
			],
			loc: { start: 936, end: 1113 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1127, end: 1132 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "categoryCount",
						loc: { start: 1137, end: 1150 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1151, end: 1155 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1157, end: 1163 },
									},
									loc: { start: 1157, end: 1163 },
								},
								loc: { start: 1157, end: 1164 },
							},
							directives: [],
							loc: { start: 1151, end: 1164 },
						},
					],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1167, end: 1170 },
							},
							loc: { start: 1167, end: 1170 },
						},
						loc: { start: 1167, end: 1171 },
					},
					directives: [],
					loc: { start: 1137, end: 1171 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 1174, end: 1182 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "name",
								loc: { start: 1183, end: 1187 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "String",
										loc: { start: 1189, end: 1195 },
									},
									loc: { start: 1189, end: 1195 },
								},
								loc: { start: 1189, end: 1196 },
							},
							directives: [],
							loc: { start: 1183, end: 1196 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "sort",
								loc: { start: 1198, end: 1202 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "SortInput",
									loc: { start: 1204, end: 1213 },
								},
								loc: { start: 1204, end: 1213 },
							},
							directives: [],
							loc: { start: 1198, end: 1213 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Category",
							loc: { start: 1216, end: 1224 },
						},
						loc: { start: 1216, end: 1224 },
					},
					directives: [],
					loc: { start: 1174, end: 1224 },
				},
			],
			loc: { start: 1115, end: 1226 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 1240, end: 1245 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "productReviews",
						loc: { start: 1250, end: 1264 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "productId",
								loc: { start: 1265, end: 1274 },
							},
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 1276, end: 1278 },
									},
									loc: { start: 1276, end: 1278 },
								},
								loc: { start: 1276, end: 1279 },
							},
							directives: [],
							loc: { start: 1265, end: 1279 },
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
										loc: { start: 1283, end: 1289 },
									},
									loc: { start: 1283, end: 1289 },
								},
								loc: { start: 1283, end: 1290 },
							},
							loc: { start: 1282, end: 1291 },
						},
						loc: { start: 1282, end: 1292 },
					},
					directives: [],
					loc: { start: 1250, end: 1292 },
				},
			],
			loc: { start: 1228, end: 1294 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 1300, end: 1305 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1295, end: 1305 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Mutation",
				loc: { start: 1312, end: 1320 },
			},
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 1307, end: 1320 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Artist", loc: { start: 1326, end: 1332 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1337, end: 1341 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1343, end: 1349 },
							},
							loc: { start: 1343, end: 1349 },
						},
						loc: { start: 1343, end: 1350 },
					},
					directives: [],
					loc: { start: 1337, end: 1350 },
				},
			],
			loc: { start: 1321, end: 1352 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Category",
				loc: { start: 1359, end: 1367 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1372, end: 1374 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1376, end: 1378 },
							},
							loc: { start: 1376, end: 1378 },
						},
						loc: { start: 1376, end: 1379 },
					},
					directives: [],
					loc: { start: 1372, end: 1379 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1382, end: 1386 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1388, end: 1394 },
							},
							loc: { start: 1388, end: 1394 },
						},
						loc: { start: 1388, end: 1395 },
					},
					directives: [],
					loc: { start: 1382, end: 1395 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1398, end: 1406 },
					},
					arguments: [
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "skip",
								loc: { start: 1407, end: 1411 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1413, end: 1416 },
								},
								loc: { start: 1413, end: 1416 },
							},
							directives: [],
							loc: { start: 1407, end: 1416 },
						},
						{
							kind: "InputValueDefinition",
							name: {
								kind: "Name",
								value: "take",
								loc: { start: 1418, end: 1422 },
							},
							type: {
								kind: "NamedType",
								name: {
									kind: "Name",
									value: "Int",
									loc: { start: 1424, end: 1427 },
								},
								loc: { start: 1424, end: 1427 },
							},
							directives: [],
							loc: { start: 1418, end: 1427 },
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
										loc: { start: 1431, end: 1438 },
									},
									loc: { start: 1431, end: 1438 },
								},
								loc: { start: 1431, end: 1439 },
							},
							loc: { start: 1430, end: 1440 },
						},
						loc: { start: 1430, end: 1441 },
					},
					directives: [],
					loc: { start: 1398, end: 1441 },
				},
			],
			loc: { start: 1354, end: 1443 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Order", loc: { start: 1450, end: 1455 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1460, end: 1462 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1464, end: 1466 },
							},
							loc: { start: 1464, end: 1466 },
						},
						loc: { start: 1464, end: 1467 },
					},
					directives: [],
					loc: { start: 1460, end: 1467 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "orderItems",
						loc: { start: 1470, end: 1480 },
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
									loc: { start: 1483, end: 1492 },
								},
								loc: { start: 1483, end: 1492 },
							},
							loc: { start: 1483, end: 1493 },
						},
						loc: { start: 1482, end: 1494 },
					},
					directives: [],
					loc: { start: 1470, end: 1494 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 1497, end: 1501 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 1503, end: 1507 },
							},
							loc: { start: 1503, end: 1507 },
						},
						loc: { start: 1503, end: 1508 },
					},
					directives: [],
					loc: { start: 1497, end: 1508 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "status",
						loc: { start: 1511, end: 1517 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "StatusEnum",
								loc: { start: 1519, end: 1529 },
							},
							loc: { start: 1519, end: 1529 },
						},
						loc: { start: 1519, end: 1530 },
					},
					directives: [],
					loc: { start: 1511, end: 1530 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "total",
						loc: { start: 1533, end: 1538 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1540, end: 1543 },
							},
							loc: { start: 1540, end: 1543 },
						},
						loc: { start: 1540, end: 1544 },
					},
					directives: [],
					loc: { start: 1533, end: 1544 },
				},
			],
			loc: { start: 1445, end: 1546 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "OrderItem",
				loc: { start: 1553, end: 1562 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1567, end: 1569 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1571, end: 1573 },
							},
							loc: { start: 1571, end: 1573 },
						},
						loc: { start: 1571, end: 1574 },
					},
					directives: [],
					loc: { start: 1567, end: 1574 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variant",
						loc: { start: 1577, end: 1584 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Variant",
								loc: { start: 1586, end: 1593 },
							},
							loc: { start: 1586, end: 1593 },
						},
						loc: { start: 1586, end: 1594 },
					},
					directives: [],
					loc: { start: 1577, end: 1594 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "quantity",
						loc: { start: 1597, end: 1605 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1607, end: 1610 },
							},
							loc: { start: 1607, end: 1610 },
						},
						loc: { start: 1607, end: 1611 },
					},
					directives: [],
					loc: { start: 1597, end: 1611 },
				},
			],
			loc: { start: 1548, end: 1613 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "Collection",
				loc: { start: 1620, end: 1630 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1635, end: 1637 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1639, end: 1641 },
							},
							loc: { start: 1639, end: 1641 },
						},
						loc: { start: 1639, end: 1642 },
					},
					directives: [],
					loc: { start: 1635, end: 1642 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1645, end: 1649 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1651, end: 1657 },
							},
							loc: { start: 1651, end: 1657 },
						},
						loc: { start: 1651, end: 1658 },
					},
					directives: [],
					loc: { start: 1645, end: 1658 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "products",
						loc: { start: 1661, end: 1669 },
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
										loc: { start: 1672, end: 1679 },
									},
									loc: { start: 1672, end: 1679 },
								},
								loc: { start: 1672, end: 1680 },
							},
							loc: { start: 1671, end: 1681 },
						},
						loc: { start: 1671, end: 1682 },
					},
					directives: [],
					loc: { start: 1661, end: 1682 },
				},
			],
			loc: { start: 1615, end: 1684 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: {
				kind: "Name",
				value: "DefaultIdResponse",
				loc: { start: 1691, end: 1708 },
			},
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1713, end: 1715 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1717, end: 1719 },
							},
							loc: { start: 1717, end: 1719 },
						},
						loc: { start: 1717, end: 1720 },
					},
					directives: [],
					loc: { start: 1713, end: 1720 },
				},
			],
			loc: { start: 1686, end: 1722 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "User", loc: { start: 1729, end: 1733 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1738, end: 1740 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1742, end: 1744 },
							},
							loc: { start: 1742, end: 1744 },
						},
						loc: { start: 1742, end: 1745 },
					},
					directives: [],
					loc: { start: 1738, end: 1745 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1748, end: 1752 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1754, end: 1760 },
							},
							loc: { start: 1754, end: 1760 },
						},
						loc: { start: 1754, end: 1761 },
					},
					directives: [],
					loc: { start: 1748, end: 1761 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "email",
						loc: { start: 1764, end: 1769 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1771, end: 1777 },
							},
							loc: { start: 1771, end: 1777 },
						},
						loc: { start: 1771, end: 1778 },
					},
					directives: [],
					loc: { start: 1764, end: 1778 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "isActive",
						loc: { start: 1781, end: 1789 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Boolean",
								loc: { start: 1791, end: 1798 },
							},
							loc: { start: 1791, end: 1798 },
						},
						loc: { start: 1791, end: 1799 },
					},
					directives: [],
					loc: { start: 1781, end: 1799 },
				},
			],
			loc: { start: 1724, end: 1801 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Variant", loc: { start: 1808, end: 1815 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1820, end: 1822 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1824, end: 1826 },
							},
							loc: { start: 1824, end: 1826 },
						},
						loc: { start: 1824, end: 1827 },
					},
					directives: [],
					loc: { start: 1820, end: 1827 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1830, end: 1834 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1836, end: 1842 },
							},
							loc: { start: 1836, end: 1842 },
						},
						loc: { start: 1836, end: 1843 },
					},
					directives: [],
					loc: { start: 1830, end: 1843 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "price",
						loc: { start: 1846, end: 1851 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1853, end: 1856 },
							},
							loc: { start: 1853, end: 1856 },
						},
						loc: { start: 1853, end: 1857 },
					},
					directives: [],
					loc: { start: 1846, end: 1857 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "stock",
						loc: { start: 1860, end: 1865 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1867, end: 1870 },
							},
							loc: { start: 1867, end: 1870 },
						},
						loc: { start: 1867, end: 1871 },
					},
					directives: [],
					loc: { start: 1860, end: 1871 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 1874, end: 1881 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 1883, end: 1890 },
							},
							loc: { start: 1883, end: 1890 },
						},
						loc: { start: 1883, end: 1891 },
					},
					directives: [],
					loc: { start: 1874, end: 1891 },
				},
			],
			loc: { start: 1803, end: 1893 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Track", loc: { start: 1900, end: 1905 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "name",
						loc: { start: 1910, end: 1914 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1916, end: 1922 },
							},
							loc: { start: 1916, end: 1922 },
						},
						loc: { start: 1916, end: 1923 },
					},
					directives: [],
					loc: { start: 1910, end: 1923 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "url", loc: { start: 1926, end: 1929 } },
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "String",
							loc: { start: 1931, end: 1937 },
						},
						loc: { start: 1931, end: 1937 },
					},
					directives: [],
					loc: { start: 1926, end: 1937 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "number",
						loc: { start: 1940, end: 1946 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 1948, end: 1951 },
							},
							loc: { start: 1948, end: 1951 },
						},
						loc: { start: 1948, end: 1952 },
					},
					directives: [],
					loc: { start: 1940, end: 1952 },
				},
			],
			loc: { start: 1895, end: 1954 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 1961, end: 1968 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 1973, end: 1975 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 1977, end: 1979 },
							},
							loc: { start: 1977, end: 1979 },
						},
						loc: { start: 1977, end: 1980 },
					},
					directives: [],
					loc: { start: 1973, end: 1980 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "title",
						loc: { start: 1983, end: 1988 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 1990, end: 1996 },
							},
							loc: { start: 1990, end: 1996 },
						},
						loc: { start: 1990, end: 1997 },
					},
					directives: [],
					loc: { start: 1983, end: 1997 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImageUrl",
						loc: { start: 2000, end: 2013 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2015, end: 2021 },
							},
							loc: { start: 2015, end: 2021 },
						},
						loc: { start: 2015, end: 2022 },
					},
					directives: [],
					loc: { start: 2000, end: 2022 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "releaseDate",
						loc: { start: 2025, end: 2036 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2038, end: 2044 },
							},
							loc: { start: 2038, end: 2044 },
						},
						loc: { start: 2038, end: 2045 },
					},
					directives: [],
					loc: { start: 2025, end: 2045 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "artist",
						loc: { start: 2048, end: 2054 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Artist",
								loc: { start: 2056, end: 2062 },
							},
							loc: { start: 2056, end: 2062 },
						},
						loc: { start: 2056, end: 2063 },
					},
					directives: [],
					loc: { start: 2048, end: 2063 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "category",
						loc: { start: 2066, end: 2074 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Category",
								loc: { start: 2076, end: 2084 },
							},
							loc: { start: 2076, end: 2084 },
						},
						loc: { start: 2076, end: 2085 },
					},
					directives: [],
					loc: { start: 2066, end: 2085 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "tracks",
						loc: { start: 2088, end: 2094 },
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
										loc: { start: 2097, end: 2102 },
									},
									loc: { start: 2097, end: 2102 },
								},
								loc: { start: 2097, end: 2103 },
							},
							loc: { start: 2096, end: 2104 },
						},
						loc: { start: 2096, end: 2105 },
					},
					directives: [],
					loc: { start: 2088, end: 2105 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "variants",
						loc: { start: 2108, end: 2116 },
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
										loc: { start: 2119, end: 2126 },
									},
									loc: { start: 2119, end: 2126 },
								},
								loc: { start: 2119, end: 2127 },
							},
							loc: { start: 2118, end: 2128 },
						},
						loc: { start: 2118, end: 2129 },
					},
					directives: [],
					loc: { start: 2108, end: 2129 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2132, end: 2138 },
					},
					arguments: [],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Float",
							loc: { start: 2140, end: 2145 },
						},
						loc: { start: 2140, end: 2145 },
					},
					directives: [],
					loc: { start: 2132, end: 2145 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "numRatings",
						loc: { start: 2148, end: 2158 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2160, end: 2163 },
							},
							loc: { start: 2160, end: 2163 },
						},
						loc: { start: 2160, end: 2164 },
					},
					directives: [],
					loc: { start: 2148, end: 2164 },
				},
			],
			loc: { start: 1956, end: 2166 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Review", loc: { start: 2173, end: 2179 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 2184, end: 2186 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "ID",
								loc: { start: 2188, end: 2190 },
							},
							loc: { start: 2188, end: 2190 },
						},
						loc: { start: 2188, end: 2191 },
					},
					directives: [],
					loc: { start: 2184, end: 2191 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "rating",
						loc: { start: 2194, end: 2200 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 2202, end: 2205 },
							},
							loc: { start: 2202, end: 2205 },
						},
						loc: { start: 2202, end: 2206 },
					},
					directives: [],
					loc: { start: 2194, end: 2206 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "headline",
						loc: { start: 2209, end: 2217 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2219, end: 2225 },
							},
							loc: { start: 2219, end: 2225 },
						},
						loc: { start: 2219, end: 2226 },
					},
					directives: [],
					loc: { start: 2209, end: 2226 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "content",
						loc: { start: 2229, end: 2236 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2238, end: 2244 },
							},
							loc: { start: 2238, end: 2244 },
						},
						loc: { start: 2238, end: 2245 },
					},
					directives: [],
					loc: { start: 2229, end: 2245 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "user",
						loc: { start: 2248, end: 2252 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "User",
								loc: { start: 2254, end: 2258 },
							},
							loc: { start: 2254, end: 2258 },
						},
						loc: { start: 2254, end: 2259 },
					},
					directives: [],
					loc: { start: 2248, end: 2259 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "product",
						loc: { start: 2262, end: 2269 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Product",
								loc: { start: 2271, end: 2278 },
							},
							loc: { start: 2271, end: 2278 },
						},
						loc: { start: 2271, end: 2279 },
					},
					directives: [],
					loc: { start: 2262, end: 2279 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "dateCreated",
						loc: { start: 2282, end: 2293 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 2295, end: 2301 },
							},
							loc: { start: 2295, end: 2301 },
						},
						loc: { start: 2295, end: 2302 },
					},
					directives: [],
					loc: { start: 2282, end: 2302 },
				},
			],
			loc: { start: 2168, end: 2304 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "StatusEnum",
				loc: { start: 2311, end: 2321 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CART",
						loc: { start: 2326, end: 2330 },
					},
					directives: [],
					loc: { start: 2326, end: 2330 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_PAY",
						loc: { start: 2333, end: 2342 },
					},
					directives: [],
					loc: { start: 2333, end: 2342 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "AWAIT_SHIP",
						loc: { start: 2345, end: 2355 },
					},
					directives: [],
					loc: { start: 2345, end: 2355 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "SHIPPED",
						loc: { start: 2358, end: 2365 },
					},
					directives: [],
					loc: { start: 2358, end: 2365 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "CANCELLED",
						loc: { start: 2368, end: 2377 },
					},
					directives: [],
					loc: { start: 2368, end: 2377 },
				},
			],
			loc: { start: 2306, end: 2379 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "VariantEnum",
				loc: { start: 2386, end: 2397 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "cd", loc: { start: 2402, end: 2404 } },
					directives: [],
					loc: { start: 2402, end: 2404 },
				},
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "lp", loc: { start: 2407, end: 2409 } },
					directives: [],
					loc: { start: 2407, end: 2409 },
				},
			],
			loc: { start: 2381, end: 2411 },
		},
		{
			kind: "EnumTypeDefinition",
			name: {
				kind: "Name",
				value: "SortEnum",
				loc: { start: 2418, end: 2426 },
			},
			directives: [],
			values: [
				{
					kind: "EnumValueDefinition",
					name: { kind: "Name", value: "asc", loc: { start: 2431, end: 2434 } },
					directives: [],
					loc: { start: 2431, end: 2434 },
				},
				{
					kind: "EnumValueDefinition",
					name: {
						kind: "Name",
						value: "desc",
						loc: { start: 2437, end: 2441 },
					},
					directives: [],
					loc: { start: 2437, end: 2441 },
				},
			],
			loc: { start: 2413, end: 2443 },
		},
	],
	loc: { start: 0, end: 2444 },
} as unknown as DocumentNode;

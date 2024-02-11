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
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 113, end: 124 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 126, end: 132 },
							},
							loc: { start: 126, end: 132 },
						},
						loc: { start: 126, end: 133 },
					},
					directives: [],
					loc: { start: 113, end: 133 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 136, end: 141 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 143, end: 146 },
							},
							loc: { start: 143, end: 146 },
						},
						loc: { start: 143, end: 147 },
					},
					directives: [],
					loc: { start: 136, end: 147 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "coverImg",
						loc: { start: 150, end: 158 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 160, end: 166 },
							},
							loc: { start: 160, end: 166 },
						},
						loc: { start: 160, end: 167 },
					},
					directives: [],
					loc: { start: 150, end: 167 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "genre", loc: { start: 170, end: 175 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 177, end: 183 },
							},
							loc: { start: 177, end: 183 },
						},
						loc: { start: 177, end: 184 },
					},
					directives: [],
					loc: { start: 170, end: 184 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "format",
						loc: { start: 187, end: 193 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 195, end: 201 },
							},
							loc: { start: 195, end: 201 },
						},
						loc: { start: 195, end: 202 },
					},
					directives: [],
					loc: { start: 187, end: 202 },
				},
			],
			loc: { start: 51, end: 204 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 210, end: 215 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 205, end: 215 },
		},
	],
	loc: { start: 0, end: 216 },
} as unknown as DocumentNode;

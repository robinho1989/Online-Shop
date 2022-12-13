import { CodegenConfig } from '@graphql-codegen/cli';
const products= process.env.GET_PRODUCTS

export const config: CodegenConfig = {
	schema:
		products,
	documents: 'graphql/*.graphql',
	generates: {
		'src/gql/': {
			preset: 'client',
			plugins: [
				'typescript',
				'typescript-operations',
				'typescript-react-apollo',
			],
			presetConfig: {
				gqlTagName: 'gql',
			},
		},
	},
	ignoreNoDocuments: true,
};

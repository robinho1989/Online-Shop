import { CodegenConfig } from '@graphql-codegen/cli';

export const config: CodegenConfig = {
	schema:
		'https://api-eu-west-2.hygraph.com/v2/clbcovhq212ur01uib4v0eow6/master',
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

import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
	uri: 'https://api-eu-west-2.hygraph.com/v2/clbcovhq212ur01uib4v0eow6/master',
	cache: new InMemoryCache(),
});

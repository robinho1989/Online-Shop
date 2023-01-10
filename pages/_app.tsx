import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/apollo-client';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/Layout';
import { CardProvider } from '../contexts/CardContext';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<CardProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</CardProvider>
		</ApolloProvider>
	);
}

import { ApolloProvider } from '@apollo/client';
import { client } from '../graphql/apollo-client';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/layout/Layout';
import { CardProvider } from '../contexts/CardContext';
import { Open_Sans } from '@next/font/google';

const inter = Open_Sans();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<CardProvider>
				<Layout>
					<style jsx global>{`
						html {
							font-family: ${inter.style.fontFamily};
						}
					`}</style>
					<Component {...pageProps} />
				</Layout>
			</CardProvider>
		</ApolloProvider>
	);
}

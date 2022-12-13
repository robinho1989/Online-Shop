import { useQuery, gql } from '@apollo/client';
import { Category } from '../generated/graphql';
import styles from '../styles/Home.module.css';

export default function Home() {
	const GET_PRODUCTS = gql`
		query GetProducts {
			products {
				description
				name
				price

				images {
					fileName
					url
				}
			}
		}
	`;
	const { loading, error, data } = useQuery<Category>(GET_PRODUCTS);
	if (loading) return <p>Loading...</p>;
	console.log(data);
	return (
		<ul>
			{data?.products.map((item) => {
				return <li key={item.name}>{item.name}</li>;
			})}
		</ul>
	);
}

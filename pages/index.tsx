import Link from 'next/link';

import { useGetProductsQuery } from '../generated/graphql';
import styles from '../styles/Home.module.css';

export default function Home() {
	const { loading, data, error } = useGetProductsQuery();
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;
	return (
		<ul>
			{data?.products.map((item) => {
				const propsProduct = {
					id: item.id,
					name: item.name,
					price: item.price,
				};
				console.log(propsProduct);
				return (
					<li key={item.name}>
						<Link href={`${item.slug}`}>{item.name}</Link>
					</li>
				);
			})}
		</ul>
	);
}

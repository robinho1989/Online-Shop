import Link from 'next/link';
import { Product } from '../components/product/Product';

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
					image: { url: item.images[0].url, alt: item.images[0].fileName },
					name: item.name,
					price: item.price,
					slug:item.slug
				};
				
				return (
					<li key={item.id}>
						<Product {...propsProduct} />
						{/* <Link href={`${item.slug}`}>{item.name}</Link> */}
					</li>
				);
			})}
		</ul>
	);
}

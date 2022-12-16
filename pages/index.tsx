import Link from 'next/link';
import { useRouter } from 'next/router';
import {
	useGetProductDetailsBySlugQuery,
	useGetProductsQuery,
} from '../generated/graphql';
import styles from '../styles/Home.module.css';

export default function Home() {
	
	const { loading, data, error } = useGetProductsQuery();

	// const { data, loading, error } = useGetProductDetailsBySlugQuery({
	// 	variables: {
	// 		slug: productSlug,
	// 	},
	// });
	console.log(data);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;
	return (
		<ul>
			{data?.products.map((item) => {
				return (
					<li key={item.name}>
						<Link href={`/slug/${item.slug}`}>{item.name}</Link>
					</li>
				);
			})}
		</ul>
	);
}

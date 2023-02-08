import { Product } from '../components/product/Product';
import { useGetProductsQuery } from '../generated/graphql';
import styles from '../styles/Home.module.css';

export default function Home() {
	const { loading, data, error } = useGetProductsQuery();
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error</p>;
	return (
		
		<section className={styles.productsContainer}>
			<h2 className={styles.sectionHeading}>Produkty</h2>
			<div className='wrapper'>
				<ul className={styles.productsList}>
					{data?.products.map((item) => {
						const propsProduct = {
							id: item.id,
							isFavourite:false,
							image: { url: item.images[0].url, alt: item.images[0].fileName },
							name: item.name,
							price: item.price,
							slug: item.slug,
						};

						return (
							<li key={item.id} className={styles.productItem}>
								<Product {...propsProduct} />
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}

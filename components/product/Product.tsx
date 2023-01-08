import Link from 'next/link';
import styles from './product.module.css';

type ProductProps = {
	name: string;
	price: number;
	image: { url: string; alt: string };
	slug: string;
};

export const Product = ({ name, price, image, slug }: ProductProps) => {
	return (
		<Link href={slug}>
			<article className={styles.productCard}>
				<img className={styles.productImage} src={image.url} alt={image.url} />
				<div className={styles.productInfoContainer}>
					<h3 className={styles.productName}>{name}</h3>
					<p className={styles.productPrice}>{price}</p>
				</div>
			</article>
		</Link>
	);
};

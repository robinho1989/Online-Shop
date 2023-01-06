import styles from './product.module.css';

type ProductProps = {
	name: string;
	price: number;
	image: { url: string; alt: string };
};

export const Product = ({ name, price, image }: ProductProps) => {
	return (
		<article className={styles.productCard}>
			<img src={image.url} alt={image.url} />
			<div className={styles.productInfoContainer}>
				<h3 className={styles.productName}>{name}</h3>
				<p className={styles.productPrice}>{price}</p>
				<button className={styles.addButton}>Add to basket</button>
			</div>
		</article>
	);
};

import styles from './productView.module.css';
import Link from 'next/link';
import { useCardContext } from '../../contexts/CardContext';

type ProductViewProps = {
	alt: string;
	description: string;
	id: string;
	image: string;
	amount: number;
	name: string;
	price: number;
};

export const ProductView = (product: ProductViewProps) => {
	const { card, addProduct, removeProduct } = useCardContext();
	const amountProdcutInCart = card.find(
		(item) => item.id === product.id
	)?.amount;
	console.log(card);
	return (
		<section className={styles.productSection}>
			<article className={styles.productView}>
				<img
					className={styles.productImage}
					src={product.image}
					alt={product.alt}
				/>
				<div className={styles.descriptionContainer}>
					<div className={styles.productTextContainer}>
						<h3 className={styles.productHeading}>{product.name}</h3>
						<p className={styles.productPrice}>{product.price}</p>
						<p className={styles.productDescription}>{product.description}</p>
					</div>
					<div className={styles.buttonsContainer}>
						<button>
							<Link href={'/'}>Powrót</Link>
						</button>

						<button
							onClick={() => addProduct(product)}
							className={styles.productAddButton}
						>
							{`Dodaj do koszyka ${amountProdcutInCart ?? '0'}`}
						</button>
						<button
							onClick={() => removeProduct(product)}
							className={styles.productRemoveButton}
						>
							Usuń z koszyka
						</button>
					</div>
				</div>
			</article>
		</section>
	);
};

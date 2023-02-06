import styles from './shoppingBasket.module.css';
import { useCardContext } from '../../contexts/utils/CardContext';

export const ShoppingBasket = () => {
	const { card } = useCardContext();
	return (
		<div className={styles.shoppingBasketContainer}>
			<ul className={styles.productsList}>
				{card?.map((product) => {
					return (
						<li key={product.name} className={styles.product}>
							<article className={styles.productContainer}>
								<img src='' alt={product.name} />
								<div className={styles.infoContainer}>
									<p>{product.name}</p>
									<p>Ilość: {product.amount}</p>
									<p>Cena: {product.price}</p>
								</div>
							</article>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

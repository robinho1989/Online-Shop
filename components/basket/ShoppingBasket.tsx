import styles from './shoppingBasket.module.css';
import { useCardContext } from '../../contexts/utils/CardContext';
import Link from 'next/link';
import Image from 'next/image';

export const ShoppingBasket = () => {
	const { card } = useCardContext();
	return (
		<div className={styles.shoppingBasketContainer}>
			<ul className={styles.productsList}>
				{card?.map((product) => {
					return (
						<li key={product.name} className={styles.product}>
							<article className={styles.productContainer}>
								<div className={styles.productInfoContainer}>
									<Image
										className={styles.productImage}
										src={product.image}
										alt={product.name}
										height={150}
										width={150}
										// sizes='30vw'
									/>
									<div className={styles.infoContainer}>
										<p>{product.name}</p>
										<p>{product.description}</p>
										<div className={styles.productQuantity}>
											<p>Ilość: {product.amount}</p>
											<button className={styles.button}>Aktualizuj</button>
										</div>
									</div>
									<p>Cena: {product.price}</p>
								</div>

								<div className={styles.buttonsContainer}>
									<button className={styles.buttonFavourite}>Dodaj do ulubionych</button>
									<button className={styles.buttonDelete}>Usuń produkt</button>
								</div>
							</article>
						</li>
					);
				})}
			</ul>
			<div className={styles.cardTotals}>
				<ul className={styles.totalPriceList}>
					<li className={styles.totalPriceItem}>
						<p className={styles.totalPriceDescription}>Suma częsciowa</p>
						<p className={styles.totalPriceValue}></p>
					</li>
					<li className={styles.totalPriceItem}>
						<p className={styles.totalPriceDescription}>Dostawa</p>
						<p className={styles.totalPriceValue}></p>
					</li>
					<li className={styles.totalPriceItem}>
						<p className={styles.totalPriceDescription}>Łącznie</p>
						<p className={styles.totalPriceValue}></p>
					</li>
				</ul>
				<Link href={'/'}>Kontynuj zakupy</Link>
			</div>
		</div>
	);
};

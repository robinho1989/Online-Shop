import { useCardContext } from '../../contexts/utils/CardContext';
import styles from './favourites.module.css';
import Image from 'next/image';

export const Favourites = () => {
	const { favouritesCard } = useCardContext();
	return (
		<div className={styles.emptyFavouritesContainer}>
			<ul className={styles.favouritesList}>
				{favouritesCard?.map((product) => {
					return (
						<li key={product.id}>
							<article className={styles.productContainer}>
								<Image
									className={styles.productImage}
									src={product.image}
									alt={product.name}
									height={200}
									width={200}
									// sizes='30vw'
								/>
								<div className={styles.productDescription}>
									<h3 className={styles.productName}>{product.name}</h3>
									<p className={styles.productDescription}>
										{product.description}
									</p>
									<p className={styles.productPrice}>{product.price}</p>
								</div>
							</article>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

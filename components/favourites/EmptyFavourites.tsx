import Link from 'next/link';
import styles from './emptyFavourites.module.css';

export const EmptyFavourites = () => {
	return (
		<div className={styles.emptyFavouritesContainer}>
			<h2 className={styles.emptyFavouritesHeader}>
				Brak produktów w ulubionych
			</h2>
			<p className={styles.emptyFavouritesText}>
				Aby dodać produkt do ulubionych wystarczy wybrać ikonę serca przy danym
				produkcie. Zobacz jakie to proste przeglądając nasze produkty!
			</p>
			<Link href={'/'} className={styles.emptyFavouritesReturnLink}>
				Powrót
			</Link>
		</div>
	);
};

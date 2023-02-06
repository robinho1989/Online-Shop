import Link from 'next/link';
import styles from './emptyBasket.module.css';

export const EmptyBasket = () => {
	return (
		<div className={styles.emptyBasketContainer}>
			<h1 className={styles.emptyBasketHeading}>Twój koszyk jest pusty</h1>
			<p>Nie masz produktów w koszyku</p>
			<p>
				Kliknij{' '}
				<Link className={styles.emptyBasketLink} href={'/'}>
					tutaj
				</Link>{' '}
				aby kontynuować zakupy
			</p>
		</div>
	);
};

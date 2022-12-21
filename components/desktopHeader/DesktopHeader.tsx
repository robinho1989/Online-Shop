import { Logo } from '../logo/Logo';
import { SearchInput } from '../serachInput/SearchInput';
import { FaShoppingBasket, FaShuttleVan } from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import styles from './desktopHeader.module.css';
import { DesktopNavbar } from '../desktopNavbar/DesktopNavbar';

export const DesktopHeader = () => {
	return (
		<>
			<div className={styles.desktopHeaderContainer}>
				<Logo />
				<SearchInput />
				<button className={styles.infoButton}>
					<GiReturnArrow className={styles.buttonIcon} />
					<div className={styles.buttonContent}>
						<p className={styles.buttonContentHeader}>
							100 dni na darmowy zwrot
						</p>
						<p className={styles.buttonContentDescription}>zobacz szczegóły</p>
					</div>
				</button>
				<button className={styles.infoButton}>
					<FaShuttleVan className={styles.buttonIcon} />
					<div className={styles.buttonContent}>
						<p className={styles.buttonContentHeader}>darmowa dostawa</p>
						<p className={styles.buttonContentDescription}>zobacz szczegóły</p>
					</div>
				</button>
				<button className={styles.shoppingBasket}>
					<FaShoppingBasket className={styles.shoppingBasketIcon} /> Koszyk(0)
				</button>
			</div>
			<DesktopNavbar />
		</>
	);
};

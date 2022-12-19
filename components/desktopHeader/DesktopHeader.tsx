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
					<GiReturnArrow />
					<div className={styles.buttonConten}>
						<p>100 dni na darmowy zwrot</p>
						<p>zobacz szczegóły</p>
					</div>
				</button>
				<button className={styles.infoButton}>
					<FaShuttleVan />
					<div className={styles.buttonConten}>
						<p>darmowa dostawa</p>
						<p>zobacz szczegóły</p>
					</div>
				</button>
				<button className={styles.shoppingBasket}>
					<FaShoppingBasket /> Koszyk{' '}
				</button>
			</div>
			<DesktopNavbar />
		</>
	);
};

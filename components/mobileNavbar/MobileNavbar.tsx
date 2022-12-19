import { FaTimes } from 'react-icons/fa';
import styles from './mobileNavbar.module.css';
export const MobileNavbar = () => {
	return (
		<nav className={styles.mobileNavbar}>
			<ul className={styles.mobileLinkList}>
				<li className={styles.mobileLinkItem}>1</li>
				<li className={styles.mobileLinkItem}>2</li>
				<li className={styles.mobileLinkItem}>3</li>
				<li className={styles.mobileLinkItem}>4</li>
				<li className={styles.mobileLinkItem}>5</li>
			</ul>
			<button className={styles.mobileNavButton}>
				<FaTimes />
			</button>
		</nav>
	);
};

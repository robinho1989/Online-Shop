import { FaTimes } from 'react-icons/fa';
import styles from './mobileNavbar.module.css';
type ButtonProps = {
	handleCloseNav: () => void;
	isOpen: boolean;
};
export const MobileNavbar = ({ handleCloseNav, isOpen }: ButtonProps) => {
	return (
		<nav
			className={
				isOpen ? `${styles.mobileNavbar} ${styles.active}` : styles.mobileNavbar
			}
		>
			<ul className={styles.mobileLinkList}>
				<li className={styles.mobileLinkItem}>Link 1</li>
				<li className={styles.mobileLinkItem}>Link 2</li>
				<li className={styles.mobileLinkItem}>Link 3</li>
				<li className={styles.mobileLinkItem}>Link 4</li>
				<li className={styles.mobileLinkItem}>Link 5</li>
			</ul>
			<button onClick={handleCloseNav} className={styles.mobileNavButton}>
				<FaTimes className={styles.mobileButtonIcon} />
			</button>
		</nav>
	);
};

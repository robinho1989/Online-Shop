import styles from './desktopNavbar.module.css';

export const DesktopNavbar = () => {
	return (
		<nav className={styles.desktopNavbar}>
			<ul className={styles.desktopLinkList}>
				<li className={styles.desktopLinkItem}>1</li>
				<li className={styles.desktopLinkItem}>2</li>
				<li className={styles.desktopLinkItem}>3</li>
				<li className={styles.desktopLinkItem}>4</li>
				<li className={styles.desktopLinkItem}>5</li>
			</ul>
		</nav>
	);
};

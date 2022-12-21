import styles from './desktopNavbar.module.css';

export const DesktopNavbar = () => {
	return (
		<nav className={styles.desktopNavbar}>
			<ul className={styles.desktopLinkList}>
				<li className={styles.desktopLinkItem}> Link 1</li>
				<li className={styles.desktopLinkItem}>Link 2</li>
				<li className={styles.desktopLinkItem}>Link 3</li>
				<li className={styles.desktopLinkItem}>Link 4</li>
				<li className={styles.desktopLinkItem}>Link 5</li>
			</ul>
		</nav>
	);
};

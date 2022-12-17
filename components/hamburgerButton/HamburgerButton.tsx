import styles from './hamburgerButton.module.css';
export const HamburgerButton = () => {
	return (
		<button className={styles.hamburgerButton}>
			<div className={styles.container}>
				<div className={styles.barFirst}></div>
				<div className={styles.barSecond}></div>
				<div className={styles.barThird}></div>
			</div>
		</button>
	);
};

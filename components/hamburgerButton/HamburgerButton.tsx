import styles from './hamburgerButton.module.css';
type ButtonProps = {
	handleOpenNav: () => void;
};
export const HamburgerButton = ({handleOpenNav}: ButtonProps) => {
	return (
		<button onClick={handleOpenNav} className={styles.hamburgerButton}>
			<div className={styles.container}>
				<div className={styles.barFirst}></div>
				<div className={styles.barSecond}></div>
				<div className={styles.barThird}></div>
			</div>
		</button>
	);
};

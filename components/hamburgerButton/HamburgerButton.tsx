import styles from './hamburgerButton.module.css';
type ButtonProps = {
	handleOpenNav: () => void;
};
export const HamburgerButton = ({ handleOpenNav }: ButtonProps) => {
	return (
		<button onClick={handleOpenNav} className={styles.hamburgerButton}>
			<div className={styles.container}>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
			</div>
		</button>
	);
};

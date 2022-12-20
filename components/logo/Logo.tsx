import Link from 'next/link';
import styles from './logo.module.css';
export const Logo = () => {
	return (
		<Link className={styles.logo} href={'/'}>
			<span className={styles.logoSecondColor}>My</span>Online
			<span className={styles.logoSecondColor}>Shop</span>
		</Link>
	);
};

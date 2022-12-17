import Link from 'next/link';
import styles from './logo.module.css';
export const Logo = () => {
	return (
		<Link className={styles.logo} href={'/'}>
			My online shop
		</Link>
	);
};

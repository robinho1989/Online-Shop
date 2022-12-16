import Link from 'next/link';
import styles from './logo.module.css';
export const Logo = () => {
	return (
		<Link href={'/'}>
			<div className={styles.logoContainer}>
                <h1 className={styles.logoHeading}>My online shop</h1>
            </div>
		</Link>
	);
};

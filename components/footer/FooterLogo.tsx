import Link from 'next/link';
import styles from './footerLogo.module.css';

export const FooterLogo = () => {
	return (
		<Link className={styles.logo} href={'/'}>
			<span className={styles.logoSecondColor}>My</span>Online
			<span className={styles.logoSecondColor}>Shop</span>
		</Link>
	);
};

import { Logo } from '../logo/Logo';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className='wrapper'>
				<Logo />
				<nav className={styles.footerNav}>
					<ul className={styles.footerNavList}>
						<li className={styles.footerNavItem}>
							<Link href={'/'}>Koszty dostawy</Link>
						</li>
						<li className={styles.footerNavItem}>
							<Link href={'/'}>Zwrot</Link>
						</li>
						<li className={styles.footerNavItem}>
							<Link href={'/'}>Realizacja zamówienia</Link>
						</li>
						<li className={styles.footerNavItem}>
							<Link href={'/'}>Metody płatności</Link>
						</li>
						<li className={styles.footerNavItem}>
							<Link href={'/'}>Reklamacje</Link>
						</li>
						<li className={styles.footerNavItem}>
							<Link href={'/'}>Śledzenie przesyłki</Link>
						</li>
						<li className={styles.footerNavItem}>
							<Link href={'/'}>FAQ</Link>
						</li>
						<li className={styles.footerNavItem}>
							<Link href={'/'}>Kontakt</Link>
						</li>
					</ul>
				</nav>
				<form className={styles.newsletterContainer}>
					<label htmlFor='newsletter'>Zapisz się na nasz newsletter</label>
					<div className={styles.inputContainer}>
						<input
							className={styles.newsletterInput}
							type='email'
							name='newsletter'
							id='newsletter'
						/>
						<button className={styles.newsletterButton}>Zapisz</button>
					</div>
					<div className={styles.socialIcons}>
						<ul className={styles.socialIconsList}>
							<li className={styles.socialIconItem}>
								<Link href='https://www.facebook.com/'>Facebook</Link>
							</li>
							<li className={styles.socialIconItem}>
								<Link href='https://twitter.com/'>Twitter</Link>
							</li>
							<li className={styles.socialIconItem}>
								<Link href='https://www.youtube.com/'>Youtube</Link>
							</li>
						</ul>
					</div>
				</form>
			</div>
		</footer>
	);
};

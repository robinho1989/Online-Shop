import Link from 'next/link';
import styles from './footer.module.css';
import { useState } from 'react';

export const Footer = () => {
	const [clicked, setClicked] = useState(false);
	const expandableMenu = () => {
		setClicked((clicked) => !clicked);
	};
	
	return (
		<footer className={styles.footer}>
			<div className='wrapper'>
				<div className={styles.footerContainer}>
					<nav className={styles.footerNav}>
						<div className={styles.expandableMenuContainer}>
							<h3>Obsługa klienta</h3>
							<button
								className={styles.expandableMenuButton}
								onClick={expandableMenu}
							>
								Więcej
							</button>
						</div>

						<ul
							className={
								clicked ? styles.footerNavListActive : styles.footerNavList
							}
						>
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
						<label className={styles.formLabel} htmlFor='newsletter'>Zapisz się na nasz newsletter</label>
						<div className={styles.inputContainer}>
							<input
								className={styles.newsletterInput}
								type='email'
								name='newsletter'
								id='newsletter'
								placeholder='Twój e-mail'
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
			</div>
		</footer>
	);
};

import Link from 'next/link';
import {
	FaSearch,
	FaPhone,
	FaHeart,
	FaUser,
	FaShoppingBasket,
	FaShuttleVan,
	FaTimes,
} from 'react-icons/fa';
import { GiReturnArrow } from 'react-icons/gi';
import { HamburgerButton } from '../hamburgerButton/HamburgerButton';
import { Logo } from '../logo/Logo';
import { SearchInput } from '../serachInput/SearchInput';
import { useState } from 'react';
import styles from './header.module.css';

export const Header = () => {
	const [open, setIsopen] = useState(false);
	const handleOpenMobileNav = () => {
		setIsopen((open) => !open);
	};
	return (
		<header className={styles.header}>
			<div className='wrapper'>
				<HamburgerButton handleOpenNav={handleOpenMobileNav} />
				<Logo />
				<div className={styles.mobileHeaderContainer}>
					<div className={styles.linksContainer}>
						<button className={styles.mobileSearchButton}>
							<FaSearch className={styles.searchButtonIcon} />
						</button>
						<ul className={styles.anchorLinkList}>
							<li className={styles.anchorLink}>
								<Link href={''}>
									<FaPhone className={styles.anchorIcon} />
								</Link>
							</li>
							<li className={styles.anchorLink}>
								<Link href={''}>
									<FaHeart className={styles.anchorIcon} />
								</Link>
							</li>
							<li className={styles.anchorLink}>
								<Link href={''}>
									<FaUser className={styles.anchorIcon} />
								</Link>
							</li>
							<li className={styles.anchorLink}>
								<Link href={''}>
									<FaShoppingBasket className={styles.anchorIcon} />
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<SearchInput />
				<div className={styles.desktopHeaderContainer}>
					<button className={styles.infoButton}>
						<GiReturnArrow className={styles.buttonIcon} />
						<div className={styles.buttonContent}>
							<p className={styles.buttonContentHeader}>
								100 dni na darmowy zwrot
							</p>
							<p className={styles.buttonContentDescription}>
								zobacz szczegóły
							</p>
						</div>
					</button>
					<button className={styles.infoButton}>
						<FaShuttleVan className={styles.buttonIcon} />
						<div className={styles.buttonContent}>
							<p className={styles.buttonContentHeader}>darmowa dostawa</p>
							<p className={styles.buttonContentDescription}>
								zobacz szczegóły
							</p>
						</div>
					</button>
					<button className={styles.shoppingBasket}>
						<FaShoppingBasket className={styles.shoppingBasketIcon} /> Koszyk(0)
					</button>
				</div>
				<nav
					className={
						open
							? `${styles.mobileNavbar} ${styles.active}`
							: styles.mobileNavbar
					}
				>
					<ul className={styles.mobileLinkList}>
						<li className={styles.mobileLinkItem}>Link 1</li>
						<li className={styles.mobileLinkItem}>Link 2</li>
						<li className={styles.mobileLinkItem}>Link 3</li>
						<li className={styles.mobileLinkItem}>Link 4</li>
						<li className={styles.mobileLinkItem}>Link 5</li>
					</ul>
					<button
						onClick={handleOpenMobileNav}
						className={styles.mobileNavButton}
					>
						<FaTimes className={styles.mobileButtonIcon} />
					</button>
				</nav>
				<nav className={styles.desktopNavbar}>
					<ul className={styles.desktopLinkList}>
						<li className={styles.desktopLinkItem}> Link 1</li>
						<li className={styles.desktopLinkItem}>Link 2</li>
						<li className={styles.desktopLinkItem}>Link 3</li>
						<li className={styles.desktopLinkItem}>Link 4</li>
						<li className={styles.desktopLinkItem}>Link 5</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

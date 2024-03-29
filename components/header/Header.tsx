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
import { headerLinks } from './constants';
import { GiReturnArrow } from 'react-icons/gi';
import { HamburgerButton } from '../hamburgerButton/HamburgerButton';
import { Logo } from '../logo/Logo';
import { SearchInput } from '../searchInput/SearchInput';
import { useMemo, useState } from 'react';
import styles from './header.module.css';
import { useCardContext } from '../../contexts/utils/CardContext';

export const Header = () => {
	const [open, setIsopen] = useState(false);
	const handleOpenMobileNav = () => {
		setIsopen((open) => !open);
	};
	const { card } = useCardContext();
	const productsAmount = useMemo(() => {
		const productsInBasket = card?.reduce(function (
			accumulator,
			previousValue
		) {
			return accumulator + previousValue.amount;
		},
		0);
		return productsInBasket;
	}, [card]);

	return (
		<header className={styles.header}>
			<div className='wrapper'>
				<div className={styles.headerContainer}>
					<div className={styles.logoAndBurgerButtonContainer}>
						<HamburgerButton handleOpenNav={handleOpenMobileNav} />
						<Logo />
					</div>

					<div className={styles.mobileHeaderContainer}>
						<div className={styles.mobileLinksContainer}>
							<button className={styles.mobileSearchButton}>
								<FaSearch className={styles.searchButtonIcon} />
							</button>
							<ul className={styles.mobileAnchorLinkList}>
								{headerLinks.map(({ Icon, href }) => (
									<li key={href} className={styles.anchorLink}>
										<Link href={href}>
											<Icon className={styles.anchorIcon} />
										</Link>
									</li>
								))}
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
						<Link
							href={'/basket'}
							className={styles.shoppingBasket}
						>
							<FaShoppingBasket className={styles.shoppingBasketIcon} /> Koszyk(
							{`${productsAmount ?? 0}`})
						</Link>
					</div>
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

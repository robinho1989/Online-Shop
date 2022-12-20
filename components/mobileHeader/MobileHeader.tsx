import {
	FaSearch,
	FaPhone,
	FaHeart,
	FaUser,
	FaShoppingBasket,
} from 'react-icons/fa';
import { HamburgerButton } from '../hamburgerButton/HamburgerButton';
import { Logo } from '../logo/Logo';
import { MobileNavbar } from '../mobileNavbar/MobileNavbar';
import { useState } from 'react';
import styles from './mobileHeader.module.css';
import Link from 'next/link';
export const MobileHeader = () => {
	const [open, setIsopen] = useState(false);
	const handleOpenMobileNav = () => {
		setIsopen((open) => !open);
	};

	console.log(open);
	return (
		<div className={styles.mobileHeaderContainer}>
			<div className={styles.headerContainer}>
				<HamburgerButton handleOpenNav={handleOpenMobileNav} />
				<Logo />
			</div>

			<MobileNavbar isOpen={open} handleCloseNav={handleOpenMobileNav} />
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
	);
};

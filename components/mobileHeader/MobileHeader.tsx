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
import styles from './mobileHeader.module.css';
import Link from 'next/link';
export const MobileHeader = () => {
	return (
		<div className={styles.mobileHeaderContainer}>
			<div className={styles.headerContainer}>
				<HamburgerButton />
				<Logo />
			</div>
			<MobileNavbar/>
			<div className={styles.linksContainer}>
				<button className={styles.mobileSearchButton}>
					<FaSearch className={styles.searchButtonIcon} />
				</button>
				<ul className={styles.anchorLinkList}>
					<li>
						<Link href={''}>
							<FaPhone className={styles.anchorLink} />
						</Link>
					</li>
					<li>
						<Link href={''}>
							<FaHeart className={styles.anchorLink} />
						</Link>
					</li>
					<li>
						<Link href={''}>
							<FaUser className={styles.anchorLink} />
						</Link>
					</li>
					<li>
						<Link href={''}>
							<FaShoppingBasket className={styles.anchorLink} />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

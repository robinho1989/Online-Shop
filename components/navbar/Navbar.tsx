import { MobileNav } from '../mobileNav/MobileNav';
import styles from './navbar.module.css';
export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className='wrapper'>
				<MobileNav />
			</div>
		</nav>
	);
};

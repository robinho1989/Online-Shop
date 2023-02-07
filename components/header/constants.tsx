import { IconType } from 'react-icons';
import {
	FaSearch,
	FaPhone,
	FaHeart,
	FaUser,
	FaShoppingBasket,
	FaShuttleVan,
	FaTimes,
} from 'react-icons/fa';
type HeaderLnks = { Icon: IconType; href: string };
export const headerLinks: HeaderLnks[] = [
	{ Icon: FaPhone, href: '' },

	{ Icon: FaHeart, href: '' },

	{ Icon: FaUser, href: '' },

	{ Icon: FaShoppingBasket, href: '/basket', },
];

import React from 'react';
import { MobileHeader } from '../mobileHeader/MobileHeader';


export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header>
				<MobileHeader/>
			</header>
			<main>{children}</main>
			<footer>2</footer>
		</>
	);
};

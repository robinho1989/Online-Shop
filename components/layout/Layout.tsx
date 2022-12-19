import React from 'react';
import { DesktopHeader } from '../desktopHeader/DesktopHeader';
import { MobileHeader } from '../mobileHeader/MobileHeader';


export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header>
				<MobileHeader/>
				<DesktopHeader/>
			</header>
			<main>{children}</main>
			<footer>2</footer>
		</>
	);
};

import React from 'react';
import { Navbar } from '../navbar/Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<header>
				<Navbar/>
			</header>
			<main>{children}</main>
			<footer>2</footer>
		</>
	);
};

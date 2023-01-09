import React from 'react';

import { Header } from '../header/Header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<Header />
			<main >{children}</main>
			<footer>Future footer</footer>
		</>
	);
};

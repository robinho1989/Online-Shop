
import React, { useState } from 'react';
type Product = {
	amount: number;
	id: string;
	name: string;
	price: number;
	image: { url: string; alt: string };
};
type CardContext = {
	card: Product[];
	// addProduct: (id: string) => void;
};
export const CardContext = React.createContext<CardContext | undefined>(
	undefined
);
export const CardProvider = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	const [card, setCard] = useState([]);
	
	return (
		<CardContext.Provider value={{ card }}>{children}</CardContext.Provider>
	);
};

export const useCardContext = () => {
	const context = React.useContext(CardContext);
	if (context === undefined) {
		throw new Error('CardContext must be used within an CardContext Provider');
	}
	return context;
};

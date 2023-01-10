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
	initialValue:number
	addProduct: (id: string) => void;
};
export const CardContext = React.createContext<CardContext | undefined>(
	undefined
);
export const CardProvider = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	const [card, setCard] = useState<Product[]>([]);
	const [initialValue, setInitialValue] = useState(0);
	const addProduct = (id: string) => {
		// if (card.find((product) => product.id === id)) {
		// 	setInitialValue(initialValue + 1);
		// }
		setInitialValue(initialValue+1)
	};
	return (
		<CardContext.Provider value={{ card, addProduct,initialValue }}>
			{children}
		</CardContext.Provider>
	);
};

export const useCardContext = () => {
	const context = React.useContext(CardContext);
	if (context === undefined) {
		throw new Error('CardContext must be used within an CardContext Provider');
	}
	return context;
};

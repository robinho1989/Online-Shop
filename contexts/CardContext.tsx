import React, { useState } from 'react';
type Product = {
	amount: number;
	id: string;
	name: string;
	price: number;
};
type CardContext = {
	card: Product[];
	removeProduct: (product: Product) => void;
	addProduct: (product: Product) => void;
};
export const CardContext = React.createContext<CardContext | undefined>(
	undefined
);
export const CardProvider = ({
	children,
}: {
	children: React.ReactElement;
}) => {
	const [card, setCard] = useState<Product[] | []>([]);
	const addProduct = (product: Product) => {
		const existingItem = card.find((item) => item.id === product.id);
		if (existingItem) {
			const newOrder = card.map((item) => {
				if (item.id === existingItem.id) {
					return { ...item, amount: existingItem.amount + 1 };
				}
				return { ...item, amount: 1 };
			});
			return setCard(newOrder);
		}
		setCard((prev) => [...prev, { ...product, amount: 1 }]);
	};
	const removeProduct = (product: Product) => {
		const existingItem = card.find((item) => item.id === product.id);
		if (existingItem) {
			const newOrder = card.map((item) => {
				if (item.id === existingItem.id) {
					if (existingItem.amount <= 0) {
						existingItem.amount = 1;
					}
					return { ...item, amount: existingItem.amount - 1 };
				}
				return { ...item, amount: 1 };
			});
			return setCard(newOrder);
		}
		setCard((prev) => [...prev, { ...product, amount: 1 }]);
	};
	return (
		<CardContext.Provider value={{ card, addProduct, removeProduct }}>
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

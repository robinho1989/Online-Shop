import React, { useEffect, useState } from 'react';
import { Product } from '../components/product/Product';
type Product = {
	amount: number;
	id: string;
	name: string;
	price: number;
};
type CardContext = {
	card: Product[]|undefined;
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
	const [card, setCard] = useState<Product[] | undefined>(undefined);

	useEffect(() => {
		const cardFromLocalstorage = localStorage.getItem('card');
		setCard(() => JSON.parse(cardFromLocalstorage ?? '[]'));
	}, []);

	useEffect(() => {
		if (card === undefined) {
			return ;
		}
		localStorage.setItem('card', JSON.stringify(card));
	}, [card]);
	const addProduct = (product: Product) => {
		if(card===undefined){
			return [product]
		}
		const existingItem = card.find((item) => item.id === product.id);
		if (existingItem) {
			const newOrder = card.map((item) => {
				if (item.id === existingItem.id) {
					return { ...item, amount: existingItem.amount + 1 };
				}
				return { ...item, amount: item.amount };
			});
			return setCard(newOrder);
		}
		setCard((prev) => [...prev, { ...product, amount: 1 }]);
	};
	// const newFunction = (product: Product) => {
	// 	const existingItem = card.find((item) => item.id === product.id);
	// 	if (existingItem) {
	// 		const newOrder = card.map((item) => {
	// 			if (item.id === existingItem.id) {
	// 				return { ...item, amount: existingItem.amount + 1 };
	// 			}
	// 			return { ...item, amount: item.amount };
	// 		});
	// 		return setCard(newOrder);
	// 	}
	// };

	const removeProduct = (product: Product) => {
		if(card===undefined){
			return [product]
		}
		const existingItem = card.find((item) => item.id === product.id);
		if (existingItem) {
			const newOrder = card.map((item) => {
				if (item.id === existingItem.id) {
					if (existingItem.amount <= 0) {
						existingItem.amount = 1;
					}
					return { ...item, amount: existingItem.amount - 1 };
				}
				return { ...item, amount: item.amount };
			});
			const removedItems = newOrder.filter((product) => product.amount !== 0);
			return setCard(removedItems);
		}
		setCard((prev) => [...prev, { ...product }]);
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

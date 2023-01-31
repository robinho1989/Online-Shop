import React, { useEffect, useState } from 'react';
import { addProductToCard, removeProductFromCard } from './utilsCardContext';
type Product = {
	amount: number;
	id: string;
	name: string;
	price: number;
};
type CardContext = {
	card: Product[] | undefined;
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
		if (cardFromLocalstorage) {
			setCard(() => JSON.parse(cardFromLocalstorage ?? '[]'));
		}
	}, []);

	useEffect(() => {
		if (card === undefined) return;
		localStorage.setItem('card', JSON.stringify(card));
	}, [card]);

	const validateCard = (card: Product[] | undefined) => {
		card?.map((product) => {
			if (product.amount > 3) {
				setCard([]);
			} else {
				setCard([...card]);
			}
		});
	};

	return (
		<CardContext.Provider
			value={{
				card,
				addProduct: (product: Product) => {
					setCard(addProductToCard(card, product));
					console.log(addProductToCard(card, product));
				},
				removeProduct: (product: Product) => {
					setCard(removeProductFromCard(card, product));
				},
			}}
		>
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

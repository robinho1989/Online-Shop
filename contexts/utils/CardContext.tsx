import React, { useEffect, useState } from 'react';

import {
	addProductToCard,
	removeProductFromCard,
	removeProductFromBasket,
	productValidation,
	addToFavourites,
} from './utilsCardContext';
type Product = {
	amount: number;
	description: string;
	id: string;
	isFavourite: boolean;
	image: string;
	name: string;
	price: number;
};
type CardContext = {
	card: Product[] | undefined;
	favouritesCard: Product[] | undefined;
	removeProduct: (product: Product) => void;
	removeProductFromBasket: (product: Product) => void;
	addProduct: (product: Product) => void;
	favouritesProducts: (product: Product) => void;
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
	const [favouritesCard, setFavouritesCard] = useState<Product[] | undefined>(
		undefined
	);
	useEffect(() => {
		const cardFromLocalstorage = localStorage.getItem('card');
		const parsedCardFromLocalStorage: Product[] | [] = JSON.parse(
			cardFromLocalstorage ?? '[]'
		);
		if (parsedCardFromLocalStorage) {
			setCard(() => productValidation(parsedCardFromLocalStorage));
		}
	}, []);

	useEffect(() => {
		if (card === undefined) return;
		localStorage.setItem('card', JSON.stringify(card));
		setFavouritesCard(card.filter((item) => !item.isFavourite === false));
	}, [card]);

	return (
		<CardContext.Provider
			value={{
				card,
				favouritesCard,
				addProduct: (product: Product) => {
					setCard(addProductToCard(card, product));
				},
				favouritesProducts: (product: Product) => {
					setCard(addToFavourites(card, product));
				},
				removeProduct: (product: Product) => {
					setCard(removeProductFromCard(card, product));
				},
				removeProductFromBasket: (product: Product) => {
					setCard(removeProductFromBasket(card, product));
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

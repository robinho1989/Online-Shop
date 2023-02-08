import { validationSchema } from '../../schema/schema';
import { Product } from './types';

export const productValidation = (card: Product[] | undefined) => {
	const validateCard = card?.filter((item) => {
		if (validationSchema.isValidSync({ amount: item.amount })) {
			return { ...item };
		}
	});
	return validateCard;
};

export const addProductToCard = (
	card: Product[] | undefined,
	product: Product
) => {
	const filterdCardByAmout = productValidation(card);

	const existingItem = filterdCardByAmout?.find(
		(item) => item.id === product.id
	);
	if (existingItem) {
		const newOrder = filterdCardByAmout?.map((item) => {
			if (item.id === existingItem.id) {
				return { ...item, amount: existingItem.amount + 1 };
			}
			return item;
		});
		return newOrder;
	}
	if (!filterdCardByAmout) {
		return [product];
	}
	return [...filterdCardByAmout, { ...product }];
};
export const removeProductFromCard = (
	card: Product[] | undefined,
	product: Product
) => {
	if (!card) return card;
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
		return removedItems;
	}
};

export const removeProductFromBasket = (
	card: Product[] | undefined,
	product: Product
) => {
	const existingItem = card?.find((item) => item.id === product.id);
	if (existingItem) {
		const filteredBasket = card?.filter((item) => item.name !== product.name);
		return filteredBasket;
	}
};

export const addToFavourites = (
	card: Product[] | undefined,
	product: Product
) => {
	const existingItem = card?.find((item) => item.id === product.id);
	if (existingItem) {
		const arrayWithFovourites = card?.map((item) => {
			if(item.id===existingItem.id){
				return { ...item, isFavourite: !item.isFavourite };
			}
			return item
		});
		return arrayWithFovourites;
	}
};

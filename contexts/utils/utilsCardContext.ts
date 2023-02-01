import { Product } from './types';
import * as yup from 'yup';

export const productValidation = (card: Product[] | undefined) => {
	const validationSchema = yup.object().shape({ amount: yup.number().max(10) });
	const validateCard = card?.map((item) => {
		if (validationSchema.validateSync({ amount: item.amount })) {
			return { ...item };
		} else {
			return { ...item, amount: 0 };
		}
	});
	return validateCard;
};

export const addProductToCard = (
	card: Product[] | undefined,
	product: Product
) => {
	const existingItem = card?.find((item) => item.id === product.id);
	if (existingItem) {
		const newOrder = card?.map((item) => {
			if (item.id === existingItem.id) {
				return { ...item, amount: existingItem.amount + 1 };
			}
			return item;
		});
		return newOrder;
	}
	if (!card) {
		return [product];
	}
	return [...card, { ...product }];
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

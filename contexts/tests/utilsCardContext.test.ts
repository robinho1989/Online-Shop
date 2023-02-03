import { generateProduct, generateProductToFilter } from '../../mocks/product';
import {
	addProductToCard,
	removeProductFromCard,
	productValidation,
} from '../utils/utilsCardContext';

describe('Functionality of card', () => {
	it('Removing an item from products array', () => {
		const stateCard = Array.from({ length: 10 }, () => generateProduct());
		const cardWithoutProduct = removeProductFromCard(stateCard, stateCard[0]);
		expect(cardWithoutProduct?.length).toBe(stateCard.length - 1);
	});
	it('Adding an item to products array', () => {
		const stateCard = Array.from({ length: 10 }, () => generateProduct());
		const cardWithProduct = addProductToCard(stateCard, {
			amount: 1,
			id: '2',
			name: 'name',
			price: 2000,
		});
		expect(cardWithProduct?.length).toBe(stateCard.length + 1);
	});
	it('Filter a card by amount of products', () => {
		const stateCard = Array.from({ length: 10 }, () =>
			generateProductToFilter()
		);
		const filteredCard = productValidation(stateCard);
		expect(filteredCard?.length).toBe(0);
	});
});

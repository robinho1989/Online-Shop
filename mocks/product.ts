import { faker } from '@faker-js/faker';
import { Product } from '../contexts/utils/types';

export const generateProduct = (): Product => ({
	id: faker.datatype.uuid(),
	name: faker.commerce.productName(),
	price: Number(faker.commerce.price()),
	amount: 1,
});

export const generateProductToFilter=():Product=>({
	id:faker.datatype.uuid(),
	name: faker.commerce.productName(),
	price: Number(faker.commerce.price()),
	amount: 13,
})

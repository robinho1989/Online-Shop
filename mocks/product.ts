import { faker } from '@faker-js/faker';
import { Product } from '../contexts/utils/types';

export const generateProduct = (): Product => ({
	description:faker.commerce.product(),
	image:faker.image.image(),
	id: faker.datatype.uuid(),
	isFavourite:faker.datatype.boolean(),
	name: faker.commerce.productName(),
	price: Number(faker.commerce.price()),
	amount: 1,
});

export const generateProductToFilter=():Product=>({
	description:faker.commerce.product(),
	image:faker.image.image(),
	id:faker.datatype.uuid(),
	isFavourite:faker.datatype.boolean(),
	name: faker.commerce.productName(),
	price: Number(faker.commerce.price()),
	amount: 13,
})

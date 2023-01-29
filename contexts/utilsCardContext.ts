import { Product } from './types';

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
    return [product];
//     if(!card){
//         return[]
//     }
// return [...card,{...product}]
    // Mam problem z dodawaniem produktów, po pierwsze gdy dodaje to zaczyna od zera, a po drugie gdy chce dodać inny produkt to kasuje mi poprzedni z tablicy i zmienia tylko ten, który dodaje. W pliku CardContext dodałem consol.log, żebyś mogł zobaczyć o co mi chodzi :) Wiem, że to przerabialiśmy na lekcji ale wydaje mi się że kod jest przktycznie taki sam. Próbowałem jeszcze w ostatnim returnie zapisu, który zakomentowałem (linijka 19-22). Teraz dodaje już produkty i dostaję już listę obiektów z różnymi produktami ale wyskakuje kolejny problem. Kiedy chce dodać produkt to muszę klinknąć dwa razy, żeby mi pokazało że jest jeden produkt w koszyku. Świadomy jestem, że jest to spowodowane tym zapisem:   if(!card){
//         return[]
//     }
// Chciałem jakoś zabezpieczyć wartość 'card' bo była undefined hehe. I przyznam szczerze, że nie wiem jak wybrnąć z tej sytuacji :)
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

import { EmptyBasket } from '../components/basket/EmptyBasket';
import { ShoppingBasket } from '../components/basket/ShoppingBasket';
import { useCardContext } from '../contexts/utils/CardContext';

export default function Basket() {
	const { card } = useCardContext();
	return (
		<section className='wrapper'>
			{card?.length === 0 ? <EmptyBasket /> : <ShoppingBasket />}
		</section>
	);
}

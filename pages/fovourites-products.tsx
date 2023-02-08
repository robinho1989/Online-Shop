import { EmptyFavourites } from '../components/favourites/EmptyFavourites';
import { Favourites } from '../components/favourites/Favourites';
import { useCardContext } from '../contexts/utils/CardContext';

export default function FavouritesPage() {
	const { favouritesCard } = useCardContext();
	return (
		<section className='wrapper'>
			{favouritesCard?.length === 0 ? <EmptyFavourites /> : <Favourites />}
		</section>
	);
}

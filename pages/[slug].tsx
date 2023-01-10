import Link from 'next/link';
import { useRouter } from 'next/router';
import { useGetProductDetailsBySlugQuery } from '../generated/graphql';
import { useCardContext } from '../contexts/CardContext';

export default function ProductDetail() {
	const router = useRouter();
	const { slug } = router.query;
	const productSlug = typeof slug === 'string' ? slug : undefined;
	const { data, loading, error } = useGetProductDetailsBySlugQuery({
		variables: {
			slug: productSlug,
		},
	});

	const { card, addProduct, initialValue } = useCardContext();

	return (
		<>
			<article>
				<img
					src={data?.products[0].images[0].url}
					alt={data?.products[0].name}
				/>
				<div>
					<h3>{data?.products[0].name}</h3>
					<p>{data?.products[0].price}</p>
					<p>{data?.products[0].description}</p>
				</div>
				<div>
					<button>
						<Link href={'/'}>Back</Link>
					</button>
					<button onClick={() => addProduct}>
						{`Dodaj do koszyka ${initialValue}`}
					</button>
				</div>
			</article>
			<p>Product slug: {productSlug}</p>
		</>
	);
}

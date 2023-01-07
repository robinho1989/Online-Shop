import Link from 'next/link';
import { useRouter } from 'next/router';

import { useGetProductDetailsBySlugQuery } from '../generated/graphql';

export default function ProductDetail() {
	const router = useRouter();
	const { slug } = router.query;
	const productSlug = typeof slug === 'string' ? slug : undefined;
	const { data, loading, error } = useGetProductDetailsBySlugQuery({
		variables: {
			slug: productSlug,
		},
	});

	return (
		<>
			<article>
				<img src={data?.products[0].images[0].url} alt='' />
				<div>
					<h3>{data?.products[0].name}</h3>
					<p>{data?.products[0].price}</p>
					<p>{data?.products[0].description}</p>
				</div>
				<div>
					<button>
						<Link href={'/'}>Back</Link>
					</button>
				</div>
			</article>
			<p>Product slug: {productSlug}</p>
		</>
	);
}

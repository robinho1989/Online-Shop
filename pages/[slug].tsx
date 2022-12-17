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

	return <p>Product slug: {productSlug}</p>;
}

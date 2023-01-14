import { useRouter } from 'next/router';
import { useGetProductDetailsBySlugQuery } from '../generated/graphql';
import { ProductView } from './productView/ProductView';

export default function ProductDetail() {
	const router = useRouter();
	const { slug } = router.query;
	const productSlug = typeof slug === 'string' ? slug : undefined;
	const { data, loading, error } = useGetProductDetailsBySlugQuery({
		variables: {
			slug: productSlug,
		},
	});
	if (data === undefined) {
		return <></>;
	}

	const propsProduct = {
		amount: 0,
		alt: data.products[0].name,
		description: data.products[0].description,
		id: data.products[0].id,
		image: data.products[0].images[0].url,
		name: data.products[0].name,
		price: data.products[0].price,
	};

	return <ProductView {...propsProduct} />;
}

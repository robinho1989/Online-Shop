import { useRouter } from 'next/router';

export default function ProductDetail() {
	
	const router = useRouter();
	const {productSlug} = router.query;

	return <p>Product slug: {productSlug}</p>;
}

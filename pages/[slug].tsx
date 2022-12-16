import { useRouter } from 'next/router';

export default function ProductDetail() {
	const router = useRouter();
	const productSlug = router.query.slug;

	return <p>Product slug: {productSlug}</p>;
}

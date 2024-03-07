import { Pagination, ProductGridItem, Title } from '@/components';
import { getPaginatedProductsWithImages } from '@/actions';
import { Gender } from '@prisma/client';
import { redirect } from 'next/navigation';

interface Props {
	params: {
		gender: string;
	};
	searchParams: {
		page?: string;
	};
}

export default async function GenderPage({ params, searchParams }: Props) {
	const { gender } = params;

	const page = searchParams.page ? parseInt(searchParams.page) : 1;

	const { products, totalPages } = await getPaginatedProductsWithImages({
		page,
		gender: gender as Gender
	});

	if (products.length === 0) {
		redirect(`/gender/${gender}`);
	}

	const labels: Record<string, string> = {
		men: 'para hombres',
		women: 'para mujeres',
		kid: 'para niños',
		unisex: 'para todos'
	};

	// if (id === 'kids') {
	// 	notFound();
	// }

	return (
		<>
			<Title
				title={`Artículos ${labels[gender]}`}
				subtitle="Todos los productos"
				className="mb-2"
			/>

			<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
				{products.map((product) => (
					<ProductGridItem key={product.slug} product={product} />
				))}
			</div>

			<Pagination totalPages={totalPages} />
		</>
	);
}

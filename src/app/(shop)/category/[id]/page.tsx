// import { notFound } from 'next/navigation';
import { initialData } from '@/seed/seed';
import { ProductGridItem, Title } from '@/components';
import { Category } from '@/interfaces';

const seedProducts = initialData.products;

interface Props {
	params: {
		id: Category;
	};
}

export default function CategoryPage({ params }: Props) {
	const { id } = params;

	const products = seedProducts.filter((i) => i.gender === id);

	const labels: Record<Category, string> = {
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
				title={`Artículos ${labels[id]}`}
				subtitle="Todos los productos"
				className="mb-2"
			/>

			<div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
				{products.map((product) => (
					<ProductGridItem key={product.slug} product={product} />
				))}
			</div>
		</>
	);
}

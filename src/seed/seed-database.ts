import prisma from '../lib/prisma';
import { initialData } from './seed';

async function main() {
	// 1. Borrar registros previos
	await Promise.all([
		prisma.productImage.deleteMany(),
		prisma.product.deleteMany(),
		prisma.category.deleteMany()
	]);

	const { categories, products } = initialData;

	// Categorias
	const categoriesData = categories.map((name) => ({
		name
	}));

	await prisma.category.createMany({
		data: categoriesData
	});
}

(() => {
	if (process.env.NODE_ENV === 'production') return;
	main();
})();

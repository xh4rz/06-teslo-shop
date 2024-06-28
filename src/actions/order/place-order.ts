'use server';

import { auth } from '@/auth.config';
import type { Address, Size } from '@/interfaces';
import prisma from '@/lib/prisma';

interface ProductToOrder {
	productId: string;
	quantity: number;
	size: Size;
}

export const placeOrder = async (
	productIds: ProductToOrder[],
	address: Address
) => {
	const session = await auth();

	const userId = session?.user.id;

	// verificar sesión de usuario
	if (!userId) {
		return {
			ok: false,
			message: 'No hay sesión de usuario'
		};
	}

	// Obtener la información de los productos
	// Nota: recuerden que podemos llevar 2+ productos con el mismo ID

	const products = await prisma.product.findMany({
		where: {
			id: {
				in: productIds.map((p) => p.productId)
			}
		}
	});

	// calcular los montos // encabezado
	const itemsInOrder = productIds.reduce((count, p) => count + p.quantity, 0);

	// los totales de tax, subtotal y total
};

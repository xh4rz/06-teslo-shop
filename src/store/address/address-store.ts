import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface State {
	address: {
		firstName: string;
		lastName: string;
		address: string;
		adress2?: string;
		postalCode: string;
		city: string;
		country: string;
		phone: string;
	};

	// Metthods
	setAddress: (address: State['address']) => void;
}

export const useAddressStore = create<State>()(
	persist(
		(set, get) => ({
			address: {
				firstName: '',
				lastName: '',
				address: '',
				adress2: '',
				postalCode: '',
				city: '',
				country: '',
				phone: ''
			},

			setAddress: (address) => {
				set({ address });
			}
		}),
		{
			name: 'address-storage'
		}
	)
);

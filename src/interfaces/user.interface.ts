export interface User {
	id: string;
	name: string;
	email: string;
	emailVerified?: Date | null;
	password: String;
	role: string;
	image?: string | null;
}

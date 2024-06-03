export interface ThemeContextType {
	darkMode: string;
	toggle: () => void;
}

export interface searchParamsType {
	cat: string;
	page: string;
}

export interface paramsType {
	slug: string;
}

export interface CategoryTypes {
	id: number;
	slug: string;
	title: string;
	img: string;
	post: string[];
}

export interface postType {
	id: string;
	createdAt: string;
	slug: string;
	title: string;
	desc: string;
	img: string;
	views: number;
	catSlug: string;
	userEmail: string;
	user: {
		createdAt: string;
		email: string;
		id: string;
		image: string;
		name: string;
		updatedAt: string;
	};
}

export interface commentsType {
	id: string;
	createdAt: string;
	desc: string;
	userEmail: string;
	postSlug: string;
	user: {
		createdAt: string;
		email: string;
		id: string;
		image: string;
		name: string;
		updatedAt: string;
	};
}

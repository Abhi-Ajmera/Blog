export interface ThemeContextType {
	darkMode: string;
	toggle: () => void;
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
}

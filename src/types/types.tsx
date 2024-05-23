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

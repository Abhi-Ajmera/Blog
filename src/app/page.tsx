import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home({ searchParams }) {
	const page = parseInt(searchParams.page) || 1;

	return (
		<div className="max-w-[100vw] overflow-x-hidden">
			<Featured />
			<CategoryList />
			<div className="gap-12 mt-12 lg:flex">
				<CardList page={page} />
				<Menu />
			</div>
		</div>
	);
}

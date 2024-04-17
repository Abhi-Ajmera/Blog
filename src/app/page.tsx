import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";

export default function Home() {
	return (
		<div className="max-w-[100vw] overflow-x-hidden">
			<Featured />
			<CategoryList />
			<div className="gap-12 mt-12 lg:flex">
				<CardList />
				<Menu />
			</div>
		</div>
	);
}

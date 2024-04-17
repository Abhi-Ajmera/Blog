import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

const page = () => {
	return (
		<div>
			<h1 className="bg-green-600 text-center font-bold tracking-wide text-lg py-1">Style Blog</h1>
			<div className="gap-12 mt-6 lg:flex">
				<CardList />
				<Menu />
			</div>
		</div>
	);
};
export default page;

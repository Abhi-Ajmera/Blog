import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import { searchParamsType } from "@/types/types";

const page = ({ searchParams }: { searchParams: searchParamsType }) => {
	const page = parseInt(searchParams.page) || 1;
	const { cat } = searchParams;

	return (
		<div>
			<h1 className="bg-green-600 text-center font-bold tracking-wide text-lg py-1 capitalize">{cat} Blog</h1>
			<div className="gap-12 mt-6 lg:flex">
				<CardList
					page={page}
					cat={cat}
				/>
				<Menu />
			</div>
		</div>
	);
};
export default page;

import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import { searchParamsType } from "@/types/types";
import dynamic from "next/dynamic";
const CardList = dynamic(() => import("@/components/CardList"));
const Menu = dynamic(() => import("@/components/Menu"));

export default function Home({ searchParams }: { searchParams: searchParamsType }) {
	const page = parseInt(searchParams.page) || 1;

	return (
		<div className="max-w-[100vw] overflow-x-hidden">
			<Featured />
			<CategoryList home={true} />

			<div className="gap-12 mt-12 lg:flex">
				<CardList
					page={page}
					cat=""
				/>
				<Menu />
			</div>
		</div>
	);
}

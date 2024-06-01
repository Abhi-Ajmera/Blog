import CardList from "@/components/CardList";
import Menu from "@/components/Menu";
import { searchParamsType } from "@/types/types";
import { twMerge } from "tailwind-merge";

const page = ({ searchParams }: { searchParams: searchParamsType }) => {
	const page = parseInt(searchParams.page) || 1;
	const { cat } = searchParams;

	return (
		<div>
			<h1
				className={twMerge(
					"text-center font-bold tracking-wide text-lg py-1 capitalize text-softText",
					cat === "fashion" && "bg-pink-200",
					cat === "travel" && "bg-green-200",
					cat === "workout" && "bg-yellow-200",
					cat === "coding" && "bg-cyan-200"
				)}
			>
				{cat} Blog
			</h1>
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

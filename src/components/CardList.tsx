import dynamic from "next/dynamic";
import Pagination from "./Pagination";
import { postType } from "@/types/types";
const Card = dynamic(() => import("./Card"), { ssr: false });

const getData = async (page: number, cat: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?page=${page}&cat=${cat}`, {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed");
	}
	return res.json();
};

const CardList = async ({ page, cat }: { page: number; cat: string }) => {
	const { posts, count, POST_PER_PAGE } = await getData(page, cat);

	return (
		<div className="flex-[5]">
			<h1 className="mb-6 text-3xl">Recent Posts</h1>
			{posts?.map((item: postType) => (
				<Card
					key={item.id}
					item={item}
				/>
			))}
			<Pagination
				page={page}
				count={count}
				POST_PER_PAGE={POST_PER_PAGE}
			/>
		</div>
	);
};
export default CardList;

import Image from "next/image";
import Pagination from "./Pagination";
import Card from "./Card";

const getData = async ({ page }) => {
	const res = await fetch(`${process.env.baseURL}/api/posts?page=${page}`, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed");
	}
	return res.json();
};

const CardList = async ({ page }) => {
	const data = await getData(page);
	return (
		<div className="flex-[5]">
			<h1 className="mb-6 text-3xl">Recent Posts</h1>
			<div>
				{data.map((item) => (
					<Card
						key={item._id}
						item={item}
					/>
				))}
				{/* <Card />
				<Card />
				<Card />
				<Card /> */}
			</div>
			<Pagination />
		</div>
	);
};
export default CardList;

import Image from "next/image";
import Pagination from "./Pagination";
import Card from "./Card";

const CardList = () => {
	return (
		<div className="flex-[5]">
			<h1 className="mb-6 text-3xl">Recent Posts</h1>
			<div>
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Pagination />
		</div>
	);
};
export default CardList;

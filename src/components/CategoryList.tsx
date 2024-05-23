import { CategoryTypes } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const getData = async () => {
	const res = await fetch(`${process.env.baseURL}/api/categories`, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed");
	}

	return res.json();
};

const CategoryList = async () => {
	const data = await getData();
	return (
		<div className="mt-10">
			<h1 className="mb-6 text-3xl">Popular Caregories</h1>
			<div className="flex flex-wrap justify-between gap-5">
				{data.map((item: CategoryTypes) => (
					<Link
						key={item.id}
						href={`/blog?cat=${item.slug}`}
						className={twMerge(
							"flex items-center gap-3 capitalize h-20 justify-center rounded-lg text-softBgDark  w-[105%] sm:w-[45%] md:w-[30%] lg:w-[14%]",
							item.title === "style" && "bg-blue-200",
							item.title === "fashion" && "bg-pink-200",
							item.title === "food" && "bg-green-200",
							item.title === "travel" && "bg-red-200",
							item.title === "culture" && "bg-yellow-200",
							item.title === "coding" && "bg-purple-200"
						)}
					>
						{item.img && (
							<Image
								src={item.img}
								alt={item.title}
								width={32}
								height={32}
								className="rounded-[50%] h-8"
							/>
						)}
						<span>{item.title}</span>
					</Link>
				))}
			</div>
		</div>
	);
};
export default CategoryList;

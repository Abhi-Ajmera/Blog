import { CategoryTypes } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const getData = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed");
	}

	return res.json();
};

const CategoryList = async ({ home }: { home: boolean }) => {
	const data = await getData();

	return (
		<div className="mt-10">
			{home && <h1 className="mb-6 text-3xl">Popular Caregories</h1>}
			<div className={twMerge(home && "flex flex-wrap justify-between gap-4", !home && "my-6 flex flex-wrap gap-3")}>
				{data.map((item: CategoryTypes) => (
					<Link
						key={item.id}
						href={`/blog?cat=${item.slug}`}
						className={twMerge(
							"text-softBgDark",
							item.title === "fashion" && "bg-pink-200",
							item.title === "travel" && "bg-green-200",
							item.title === "workout" && "bg-yellow-200",
							item.title === "coding" && "bg-cyan-200",
							home &&
								"flex items-center gap-2 capitalize h-20 justify-center rounded-lg  w-[105%] sm:w-[45%] lg:w-[20%]",
							!home && "px-2 py-1 rounded-xl capitalize text-sm"
						)}
					>
						<span>{item.title}</span>
					</Link>
				))}
			</div>
		</div>
	);
};
export default CategoryList;

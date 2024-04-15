import Image from "next/image";
import Link from "next/link";

const CategoryList = () => {
	return (
		<div>
			<h1 className="my-12">Popular Caregories</h1>
			<div className="flex flex-wrap justify-between gap-5">
				<Link
					href={"/blog?cat=style"}
					className="flex items-center gap-3 capitalize h-20 justify-center rounded-lg text-softBgDark bg-blue-100 w-[105%] sm:w-[45%] md:w-[30%] lg:w-[14%]"
				>
					<Image
						src="/style.png"
						alt=""
						width={32}
						height={32}
						className="rounded-[50%] h-8"
					/>
					<span>style</span>
				</Link>
				<Link
					href={"/blog?cat=fashion"}
					className="flex items-center gap-3 capitalize h-20 justify-center rounded-lg text-softBgDark bg-pink-100 w-[105%] sm:w-[45%] md:w-[30%] lg:w-[14%]"
				>
					<Image
						src="/fashion.png"
						alt=""
						width={32}
						height={32}
						className="rounded-[50%] h-8"
					/>
					<span>fashion</span>
				</Link>
				<Link
					href={"/blog?cat=food"}
					className="flex items-center gap-3 capitalize h-20 justify-center rounded-lg text-softBgDark bg-green-100 w-[105%] sm:w-[45%] md:w-[30%] lg:w-[14%]"
				>
					<Image
						src="/food.png"
						alt=""
						width={32}
						height={32}
						className="rounded-[50%] h-8"
					/>
					<span>food</span>
				</Link>
				<Link
					href={"/blog?cat=travel"}
					className="flex items-center gap-3 capitalize h-20 justify-center rounded-lg text-softBgDark bg-red-100 w-[105%] sm:w-[45%] md:w-[30%] lg:w-[14%]"
				>
					<Image
						src="/travel.png"
						alt=""
						width={32}
						height={32}
						className="rounded-[50%] h-8"
					/>
					<span>travel</span>
				</Link>
				<Link
					href={"/blog?cat=culture"}
					className="flex items-center gap-3 capitalize h-20 justify-center rounded-lg text-softBgDark bg-yellow-100 w-[105%] sm:w-[45%] md:w-[30%] lg:w-[14%]"
				>
					<Image
						src="/culture.png"
						alt=""
						width={32}
						height={32}
						className="rounded-[50%] h-8"
					/>
					<span>culture</span>
				</Link>
				<Link
					href={"/blog?cat=coding"}
					className="flex items-center gap-3 capitalize h-20 justify-center rounded-lg text-softBgDark bg-purple-100 w-[105%] sm:w-[45%] md:w-[30%] lg:w-[14%]"
				>
					<Image
						src="/coding.png"
						alt=""
						width={32}
						height={32}
						className="rounded-[50%] h-8"
					/>
					<span>coding</span>
				</Link>
			</div>
		</div>
	);
};
export default CategoryList;

import Link from "next/link";

const MenuCategories = () => {
	return (
		<div className="my-6 flex flex-wrap gap-3">
			<Link
				href={"/blog?cat=fashion"}
				className="px-2 py-1 rounded-xl capitalize text-sm text-softBgDark bg-blue-200 "
			>
				style
			</Link>
			<Link
				href={"/blog?cat=fashion"}
				className="px-2 py-1 rounded-xl capitalize text-sm text-softBgDark bg-pink-200 "
			>
				fashion
			</Link>
			<Link
				href={"/blog?cat=fashion"}
				className="px-2 py-1 rounded-xl capitalize text-sm text-softBgDark bg-green-200 "
			>
				food
			</Link>
			<Link
				href={"/blog?cat=fashion"}
				className="px-2 py-1 rounded-xl capitalize text-sm text-softBgDark bg-red-200 "
			>
				travel
			</Link>
			<Link
				href={"/blog?cat=fashion"}
				className="px-2 py-1 rounded-xl capitalize text-sm text-softBgDark bg-yellow-200 "
			>
				culture
			</Link>
			<Link
				href={"/blog?cat=fashion"}
				className="px-2 py-1 rounded-xl capitalize text-sm text-softBgDark bg-purple-200 "
			>
				coding
			</Link>
		</div>
	);
};
export default MenuCategories;

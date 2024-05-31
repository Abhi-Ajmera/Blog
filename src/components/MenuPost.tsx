import { postType } from "@/types/types";
import reverseString from "@/utils/reverse";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed");
	}
	return res.json();
};

const MenuPost = async () => {
	const { popular } = await getData("/");

	return (
		<>
			<h2 className="text-softText dark:text-softTextDark text-sm font-normal mt-12">Most</h2>
			<h3 className="text-2xl">Popular</h3>
			{popular.map((popular: postType) => (
				<div
					key={popular.id}
					className="flex flex-col gap-8 my-3"
				>
					<Link
						href={"/posts/" + popular.slug}
						className="flex items-center gap-5"
					>
						<div className="flex-1 relative aspect-square">
							{popular.img && (
								<Image
									src={popular.img}
									alt={popular.title}
									fill
									className="rounded-[50%] object-cover border-2 border-gray-500"
								/>
							)}
						</div>
						<div className="flex-[4] flex flex-col gap-[3px]">
							<span className="text-xs font-normal px-2 text-black bg-red-200 w-max rounded-xl capitalize">
								{popular.catSlug}
							</span>
							<h3 className="text-sm font-medium text-softText dark:text-softTextDark">{popular.title}</h3>
							<div className="text-xs font-normal">
								<span className="">{popular?.user?.name.split(" ")[0]}</span>
								<span className="text-gray-500"> - {reverseString(popular?.createdAt?.substring(0, 10))}</span>
							</div>
						</div>
					</Link>
				</div>
			))}
		</>
	);
};
export default MenuPost;

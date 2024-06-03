import { postType } from "@/types/types";
import reverseString from "@/utils/reverse";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const Card = ({ item }: { item: postType }) => {
	let markup;
	if (item !== null) {
		markup = { __html: item.desc.substring(0, 160) };
	}
	return (
		<div className="mb-12 flex flex-col md:flex-row items-center gap-12">
			{item.img && (
				<div className="md:flex-1 w-96 h-96 relative">
					<Image
						src={item.img}
						alt={item.title}
						fill
						className="object-contain"
					/>
				</div>
			)}
			<div className="flex-1 flex flex-col gap-7 justify-center">
				<div>
					<span className="text-gray-500">{reverseString(item.createdAt.substring(0, 10))} - </span>
					<span
						className={twMerge(
							"font-medium",
							item.catSlug === "fashion" && "text-pink-200",
							item.catSlug === "travel" && "text-green-200",
							item.catSlug === "workout" && "text-yellow-200",
							item.catSlug === "coding" && "text-cyan-200"
						)}
					>
						{item.catSlug.toUpperCase()}
					</span>
				</div>
				<Link href={`/posts/${item.slug}`}>
					<h1 className="text-2xl font-semibold capitalize">{item.title}</h1>
				</Link>
				<div
					className="text-lg font-light md:text-softText text-softTextDark text-justify"
					dangerouslySetInnerHTML={markup}
				/>
				<Link
					href={`/posts/${item.slug}`}
					className="dark:text-textColorDark text-textColor border-b hover:pr-4 transition-all py-2 w-max"
				>
					Read More
				</Link>
			</div>
		</div>
	);
};
export default Card;

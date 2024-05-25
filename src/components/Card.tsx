import { postType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Card = ({ item }: { item: postType }) => {
	return (
		<div className="mb-12 flex flex-col md:flex-row items-center gap-12">
			{item.img && (
				<div className="md:flex-1 w-96 h-96 relative">
					<Image
						src={item.img}
						alt=""
						fill
						className="object-cover"
					/>
				</div>
			)}
			<div className="flex-1 flex flex-col gap-7 justify-center">
				<div>
					<span className="text-gray-500">{item.createdAt.substring(0, 10)} - </span>
					<span className="text-green-600 font-medium">{item.catSlug.toUpperCase()}</span>
				</div>
				<Link href={`/posts/${item.slug}`}>
					<h1 className="text-2xl font-semibold capitalize">{item.title}</h1>
				</Link>
				<p className="text-lg font-light md:text-softText text-softTextDark text-justify">
					{item.desc.substring(0, 160)}
				</p>
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

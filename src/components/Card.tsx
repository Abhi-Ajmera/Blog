import Image from "next/image";
import Link from "next/link";

const Card = () => {
	return (
		<div className="mb-12 flex flex-col md:flex-row items-center gap-12">
			<div className="md:flex-1 w-96 h-96 relative">
				<Image
					src={"/p1.jpeg"}
					alt=""
					layout="fill"
					className="object-cover"
				/>
			</div>
			<div className="flex-1 flex flex-col gap-7 justify-center">
				<div>
					<span className="text-gray-500">11.02.2024 - </span>
					<span className="text-green-600 font-medium">CULTURE</span>
				</div>
				<Link href={"/"}>
					<h1 className="text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
				</Link>
				<p className="text-lg font-light md:text-softText text-softTextDark">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, fugiat ad laboriosam repellendus pariatur
					molestias?
				</p>
				<Link
					href={"/"}
					className="dark:text-textColorDark text-textColor border-b hover:pr-4 transition-all py-2 w-max"
				>
					Read More
				</Link>
			</div>
		</div>
	);
};
export default Card;

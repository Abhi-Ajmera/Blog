import Image from "next/image";
import Link from "next/link";

interface Props {
	WithImg: Boolean;
}

const MenuPost: React.FC<Props> = ({ WithImg }) => {
	return (
		<>
			<h2 className="text-softText dark:text-softTextDark text-sm font-normal mt-12">Chosen by Editor</h2>
			<h1 className="text-2xl">Editors Pick</h1>
			<div className="flex flex-col gap-8 my-3">
				<Link
					href={"/"}
					className="flex items-center gap-5"
				>
					{WithImg && (
						<div className="flex-1 relative aspect-square">
							<Image
								src={"/p1.jpeg"}
								alt=""
								fill
								className="rounded-[50%] object-cover border-2 border-gray-500"
							/>
						</div>
					)}
					<div className="flex-[4] flex flex-col gap-[3px]">
						<span className="text-xs font-normal px-2 text-black bg-red-200 w-max rounded-xl">Travel</span>
						<h3 className="text-sm font-medium text-softText dark:text-softTextDark">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h3>
						<div className="text-xs font-normal">
							<span className="">John Doe</span>
							<span className="text-gray-500"> - 10.03.2024</span>
						</div>
					</div>
				</Link>
				<Link
					href={"/"}
					className="flex items-center gap-5"
				>
					{WithImg && (
						<div className="flex-1 relative aspect-square">
							<Image
								src={"/p1.jpeg"}
								alt=""
								fill
								className="rounded-[50%] object-cover border-2 border-gray-500"
							/>
						</div>
					)}
					<div className="flex-[4] flex flex-col gap-[3px]">
						<span className="text-xs font-normal px-2 text-black bg-yellow-200 w-max rounded-xl">Culture</span>
						<h3 className="text-sm font-medium text-softText dark:text-softTextDark">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h3>
						<div className="text-xs font-normal">
							<span className="">John Doe</span>
							<span className="text-gray-500"> - 10.03.2024</span>
						</div>
					</div>
				</Link>
				<Link
					href={"/"}
					className="flex items-center gap-5"
				>
					{WithImg && (
						<div className="flex-1 relative aspect-square">
							<Image
								src={"/p1.jpeg"}
								alt=""
								fill
								className="rounded-[50%] object-cover border-2 border-gray-500"
							/>
						</div>
					)}
					<div className="flex-[4] flex flex-col gap-[3px]">
						<span className="text-xs font-normal px-2 text-black bg-green-200 w-max rounded-xl">Food</span>
						<h3 className="text-sm font-medium text-softText dark:text-softTextDark">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h3>
						<div className="text-xs font-normal">
							<span className="">John Doe</span>
							<span className="text-gray-500"> - 10.03.2024</span>
						</div>
					</div>
				</Link>
				<Link
					href={"/"}
					className="flex items-center gap-5"
				>
					{WithImg && (
						<div className="flex-1 relative aspect-square">
							<Image
								src={"/p1.jpeg"}
								alt=""
								fill
								className="rounded-[50%] object-cover border-2 border-gray-500"
							/>
						</div>
					)}
					<div className="flex-[4] flex flex-col gap-[3px]">
						<span className="text-xs font-normal px-2 text-black bg-pink-200 w-max rounded-xl">Fashion</span>
						<h3 className="text-sm font-medium text-softText dark:text-softTextDark">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</h3>
						<div className="text-xs font-normal">
							<span className="">John Doe</span>
							<span className="text-gray-500"> - 10.03.2024</span>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};
export default MenuPost;

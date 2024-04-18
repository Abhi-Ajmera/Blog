import Image from "next/image";
import Link from "next/link";

const Comments = () => {
	const status = "authenticated";

	return (
		<div className="mt-8">
			<h2 className="text-2xl text-softText dark:text-softTextDark mb-5 ">Comments</h2>
			{status === "authenticated" ? (
				<div className="flex flex-col gap-4">
					<textarea
						placeholder="Write your comment..."
						className="mx-1 p-1 text-black"
					/>
					<button className="bg-green-600 py-1 mx-1 font-bold hover:bg-green-700">Send</button>
				</div>
			) : (
				<Link href={"/"}>Login to write a comment</Link>
			)}
			<div className="mt-8 flex flex-col gap-8">
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-5">
						<Image
							src={"/p1.jpeg"}
							alt=""
							width={48}
							height={50}
							className="object-cover rounded-[50%] h-12"
						/>
						<div className="flex flex-col text-softText dark:text-softTextDark gap-[2px]">
							<span className="font-bold">John Doe</span>
							<span className="text-xs">01.01.2024</span>
						</div>
					</div>
					<p className="text-sm font-light">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolores eaque rem officia sed, possimus
						aliquam, ipsum !
					</p>
				</div>
				<div className="flex flex-col gap-3">
					<div className="flex items-center gap-5">
						<Image
							src={"/p1.jpeg"}
							alt=""
							width={48}
							height={50}
							className="object-cover rounded-[50%] h-12"
						/>
						<div className="flex flex-col text-softText dark:text-softTextDark gap-[2px]">
							<span className="font-bold">John Doe</span>
							<span className="text-xs">01.01.2024</span>
						</div>
					</div>
					<p className="text-sm font-light">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto dolores eaque rem officia sed, possimus
						aliquam, ipsum !
					</p>
				</div>
			</div>
		</div>
	);
};
export default Comments;

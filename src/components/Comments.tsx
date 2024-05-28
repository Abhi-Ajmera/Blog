"use client";
import { commentsType } from "@/types/types";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useSWR from "swr";

const commentFetch = async (url: string | URL | Request) => {
	const res = await fetch(url);
	const data = await res.json();

	if (!res.ok) {
		const err = new Error(data.message);
		throw err;
	}
	return data;
};

const Comments = ({ postSlug }: { postSlug: string }) => {
	const { status } = useSession();
	const { data, mutate, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, commentFetch);
	const comments = data?.comments;

	const [desc, setDesc] = useState<string>("");
	const handleSubmit = async () => {
		await fetch("/api/comments", {
			method: "POST",
			body: JSON.stringify({ desc, postSlug }),
		});
		mutate("/api/comments");
	};

	return (
		<div className="mt-8">
			<h2 className="text-2xl text-softText dark:text-softTextDark mb-5 ">Comments</h2>
			{status === "authenticated" ? (
				<div className="flex flex-col gap-4">
					<textarea
						placeholder="Write your comment..."
						className="mx-1 p-1 text-black"
						onChange={(e) => setDesc(e.target.value)}
					/>
					<button
						className="bg-green-600 py-1 mx-1 font-bold hover:bg-green-700"
						onClick={handleSubmit}
					>
						Send
					</button>
				</div>
			) : (
				<Link href={"/login"}>Login to write a comment</Link>
			)}
			<div className="mt-8 flex flex-col gap-8">
				{isLoading
					? "loading..."
					: comments?.map((item: commentsType) => (
							<div
								key={item?.id}
								className="flex flex-col gap-3"
							>
								<div className="flex items-center gap-5">
									<Image
										src={item.user.image}
										alt={item.user.name}
										width={48}
										height={50}
										className="object-cover rounded-[50%] h-12"
									/>
									<div className="flex flex-col text-softText dark:text-softTextDark gap-[2px]">
										<span className="font-bold">{item.user.name}</span>
										<span className="text-xs">{item.createdAt}</span>
									</div>
								</div>
								<p className="text-sm font-light">{item.desc}</p>
							</div>
					  ))}
			</div>
		</div>
	);
};
export default Comments;

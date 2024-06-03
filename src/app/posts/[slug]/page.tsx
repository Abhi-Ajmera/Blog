import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import { paramsType } from "@/types/types";
import reverseString from "@/utils/reverse";
import Image from "next/image";

const getData = async (slug: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed");
	}
	return res.json();
};

const page = async ({ params }: { params: paramsType }) => {
	const { slug } = params;
	const { post } = await getData(slug);
	let markup;
	if (post !== null) {
		markup = { __html: post?.desc };
	}
	return (
		<div>
			<div className="md:flex items-center gap-12">
				<div className="flex-1 flex flex-col gap-8 justify-center">
					<h1 className="text-justify text-3xl md:text-4xl">{post?.title}</h1>
					<div className="flex items-center gap-4">
						{post?.user && (
							<div className="w-12 h-12 relative">
								<Image
									src={post?.user?.image}
									alt={post?.user?.name}
									fill
									className="object-cover rounded-[50%]"
								/>
							</div>
						)}
						<div className="flex flex-col text-softText dark:text-softTextDark">
							<span className="font-bold md:text-lg">{post?.user?.name}</span>
							<span className="text-sm">{reverseString(post?.createdAt?.substring(0, 10))}</span>
						</div>
					</div>
				</div>
				{post?.img && (
					<div className="hidden md:block flex-1 h-80 w-80 relative">
						<Image
							src={post?.img}
							alt={post?.title}
							fill
							className="object-contain"
						/>
					</div>
				)}
			</div>
			{/* description and menus */}
			<div className="flex lg:gap-12">
				<div className="lg:flex-[5] mt-8 lg:mt-12">
					<div
						className="flex flex-col gap-2"
						dangerouslySetInnerHTML={markup}
					/>
					<Comments postSlug={slug} />
				</div>
				<Menu />
			</div>
		</div>
	);
};
export default page;

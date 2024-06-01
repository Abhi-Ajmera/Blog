import { postType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const getData = async (slug: string) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/posts/${slug}`, { cache: "no-store" });

	if (!res.ok) {
		throw new Error("Failed");
	}
	return res.json();
};

const Featured = async () => {
	const { popular } = await getData("/");
	const random = Math.floor(Math.random() * 3);
	const featured: postType = popular[random];

	return (
		<div className="mt-3">
			<h1 className="text-4xl lg:text-5xl text-center">Hey, Discover stories and creative ideas.</h1>
			<div className="mt-10 md:mt-11 flex items-center gap-12">
				<div className="hidden md:block flex-1 relative h-[500px]">
					{featured.img && (
						<Image
							src={featured.img}
							alt={featured.title}
							fill
							className=" object-cover"
						/>
					)}
				</div>
				<div className="flex-1 flex flex-col gap-8">
					<h1 className="text-2xl md:text-3xl">{featured.title}</h1>
					<div
						className="text-lg font-light text-softText dark:text-softTextDark"
						dangerouslySetInnerHTML={{ __html: featured.desc.substring(0, 180) }}
					/>
					<Link
						href={"/posts/" + featured.slug}
						className="dark:bg-white dark:text-textColor bg-softBgDark hover:bg-black dark:hover:bg-softBg text-white border-none rounded-md px-10 py-3 w-max"
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Featured;

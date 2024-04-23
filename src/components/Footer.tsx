import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="mt-12 flex px-2 md:px-8 lg:px-14 py-0 items-center justify-between text-softText dark:text-softTextDark">
			<div className="flex-1 flex flex-col gap-3">
				<div className="flex items-center gap-2">
					<Image
						src={"/Blog.png"}
						alt=""
						width={32}
						height={32}
						className="h-6 max-sm:w-6 sm:h-8 "
					/>
					<h1 className="text-lg sm:text-xl font-semibold">Bloggit !</h1>
				</div>
				<p className="text-xs sm:text-sm">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quam reprehenderit quisquam, officia{" "}
				</p>
				<div className="flex items-center gap-2">
					<Image
						src="/linkedin.png"
						alt="linkedin"
						width={18}
						height={18}
					/>
					<Image
						src="/website.png"
						alt="website"
						width={18}
						height={18}
					/>
					<Image
						src="/github.png"
						alt="github"
						width={18}
						height={18}
					/>
				</div>
			</div>
			<div className="flex-1 flex justify-evenly">
				<div className="flex flex-col gap-2 max-sm:text-xs max-sm:gap-1">
					<span className=" font-bold text-sm sm:text-base">Links</span>
					<Link
						href={"/"}
						className="text-sm hover:underline"
					>
						Home
					</Link>
					<Link
						href={"/"}
						className="text-sm hover:underline"
					>
						Blog
					</Link>
					<Link
						href={"/"}
						className="text-sm hover:underline"
					>
						About
					</Link>
					<Link
						href={"/"}
						className="text-sm hover:underline"
					>
						Contact
					</Link>
				</div>
				<div className="flex flex-col gap-2 max-sm:text-xs max-sm:gap-1">
					<span className="font-bold text-sm sm:text-base">Tags</span>
					<Link
						href={"/"}
						className="text-sm hover:underline"
					>
						Style
					</Link>
					<Link
						href={"/"}
						className="text-sm hover:underline"
					>
						Fashion
					</Link>
					<Link
						href={"/"}
						className="text-sm hover:underline"
					>
						Coding
					</Link>
					<Link
						href={"/"}
						className="text-sm hover:underline"
					>
						Travel
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Footer;

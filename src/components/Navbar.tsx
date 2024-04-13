import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";

const Navbar = () => {
	return (
		<div className="flex items-center justify-between h-24">
			{/* social */}
			<div className="lg:flex-1 items-center gap-3 hidden lg:flex">
				<Image
					src="/linkedin.png"
					alt="linkedin"
					width={26}
					height={26}
				/>
				<Image
					src="/website.png"
					alt="website"
					width={26}
					height={26}
				/>
				<Image
					src="/github.png"
					alt="github"
					width={26}
					height={26}
				/>
			</div>
			{/* logo */}
			<div className="flex-1 lg:text-center font-bold text-left text-xl lg:text-2xl xl:text-4xl">Bloggit !</div>
			{/* Links */}
			<div className="flex-1 flex gap-5 items-center lg:text-lg lg:gap-4 xl:text-xl justify-end">
				<ThemeToggle />
				<Link
					className="hidden sm:block"
					href={"/"}
				>
					Home
				</Link>
				<Link
					className="hidden sm:block"
					href={"/"}
				>
					Contact
				</Link>
				<Link
					className="hidden sm:block"
					href={"/"}
				>
					About
				</Link>
				<AuthLinks />
			</div>
		</div>
	);
};
export default Navbar;

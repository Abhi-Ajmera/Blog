"use client";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
	const theme = useContext(ThemeContext);

	const [open, setOpen] = useState<Boolean>(false);

	return (
		<div className="flex items-center justify-between h-24">
			{/* social */}
			<div className="lg:flex-1 items-center gap-3 hidden lg:flex">
				<Link
					href={"https://www.linkedin.com/in/abhishek-ajmeraa/"}
					target="_blank"
				>
					<Image
						src="/linkedin.png"
						alt="linkedin"
						width={26}
						height={26}
					/>
				</Link>
				<Link
					href={"https://www.abhishekajmera.site/"}
					target="_blank"
				>
					<Image
						src="/website.png"
						alt="website"
						width={26}
						height={26}
					/>
				</Link>
				<Link
					href={"https://github.com/Abhi-Ajmera"}
					target="_blank"
				>
					<Image
						src="/github.png"
						alt="github"
						width={26}
						height={26}
					/>
				</Link>
			</div>
			{/* logo */}
			<div className="flex-1 lg:text-center font-bold text-left text-2xl lg:text-3xl xl:text-4xl bg-gradient-to-t from-[#2926FC] to-[#9998FD] text-transparent bg-clip-text">
				<Link href={"/"}>Bloggit !</Link>
			</div>
			{/* Links */}
			<div className="flex-1 flex gap-6 items-center lg:text-md lg:gap-4 xl:text-lg justify-end">
				<ThemeToggle />
				<Image
					src={theme.darkMode === "dark" ? "/hamburger-menu-white.svg" : "/hamburger-menu.svg"}
					alt=""
					className="cursor-pointer sm:hidden"
					width={24}
					height={24}
					onClick={() => setOpen(!open)}
				/>
				<Link
					className="hidden sm:block"
					href={"/contact"}
				>
					Contact
				</Link>
				<div className="max-sm:hidden flex gap-6 items-center">
					<AuthLinks />
				</div>
				{open && (
					<div className="fixed top-0 left-0 bg-bgColor dark:bg-bgColorDark h-screen gap-12 text-3xl w-screen flex flex-col items-center justify-center sm:hidden">
						<Image
							src={theme.darkMode === "dark" ? "/close-white.svg" : "/close.svg"}
							alt=""
							className="cursor-pointer sm:hidden text-end"
							width={24}
							height={24}
							onClick={() => setOpen(!open)}
						/>
						<Link href="/">Home</Link>
						<Link href={"/contact"}>Contact</Link>
						<AuthLinks />
					</div>
				)}
			</div>
		</div>
	);
};
export default Navbar;

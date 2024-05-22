"use client";
import { ThemeContext } from "@/context/ThemeContext";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";

const AuthLinks = () => {
	const theme = useContext(ThemeContext);
	const [open, setOpen] = useState(false);

	const { status } = useSession();
	return (
		<>
			{status === "unauthenticated" ? (
				<Link
					href={"/login"}
					className="max-sm:hidden"
				>
					Login
				</Link>
			) : (
				<>
					<Link
						href={"/write"}
						className="max-sm:hidden"
					>
						Write
					</Link>
					<span
						className="max-sm:hidden cursor-pointer"
						onClick={() => signOut()}
					>
						Logout
					</span>
				</>
			)}
			<div>
				<Image
					src={
						open
							? theme.darkMode === "dark"
								? "/close-white.svg"
								: "/close.svg"
							: theme.darkMode === "dark"
							? "/hamburger-menu-white.svg"
							: "/hamburger-menu.svg"
					}
					alt=""
					className="cursor-pointer sm:hidden"
					width={24}
					height={24}
					onClick={() => setOpen(!open)}
				/>
			</div>
			{open && (
				<div className="absolute top-24 left-0 bg-bgColor dark:bg-bgColorDark h-[calc(100vh-96px)] gap-12 text-3xl w-screen flex flex-col items-center justify-center sm:hidden">
					<Link href="/">Home</Link>
					<Link href="/">Contact</Link>
					<Link href="/">About</Link>
				</div>
			)}
		</>
	);
};
export default AuthLinks;

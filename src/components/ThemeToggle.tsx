"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

const ThemeToggle = () => {
	const theme = useContext(ThemeContext);

	return (
		<div
			className="flex items-center justify-between sm:w-10 sm:h-5 w-8 h-4 rounded-full cursor-pointer bg-bgColorDark relative px-[2px] dark:bg-bgColor"
			onClick={theme?.toggle}
		>
			<Image
				src={"/moon.png"}
				alt=""
				width={14}
				height={14}
			/>
			{/* ball */}
			<div className="sm:w-5 sm:h-5 w-4 h-4 right-0 bg-bgColor rounded-full absolute dark:left-0 dark:bg-bgColorDark"></div>
			<Image
				src={"/sun.png"}
				alt=""
				width={14}
				height={14}
			/>
		</div>
	);
};
export default ThemeToggle;

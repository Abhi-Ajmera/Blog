"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ page }) => {
	const router = useRouter();
	
	return (
		<div className="flex justify-between">
			<button
				className="w-20 dark:bg-white dark:text-textColor bg-softBgDark hover:bg-black dark:hover:bg-softBg text-white border-none rounded-md py-1"
				onClick={() => router.push(`?page=${page - 1}`)}
			>
				Previous
			</button>
			<button
				className="w-20 dark:bg-white dark:text-textColor bg-softBgDark hover:bg-black dark:hover:bg-softBg text-white border-none rounded-md py-1"
				onClick={() => router.push(`?page=${page + 1}`)}
			>
				Next
			</button>
		</div>
	);
};
export default Pagination;

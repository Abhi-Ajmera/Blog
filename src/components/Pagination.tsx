"use client";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count, POST_PER_PAGE }) => {
	const router = useRouter();

	const hasPrev = POST_PER_PAGE * (page - 1) > 0;
	const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

	return (
		<div className="flex justify-between">
			<button
				className="w-20 dark:bg-white dark:text-textColor bg-softBgDark hover:bg-black dark:hover:bg-softBg text-white border-none rounded-md py-1  disabled:cursor-not-allowed"
				disabled={!hasPrev}
				onClick={() => router.push(`?page=${page - 1}`)}
			>
				Previous
			</button>
			<button
				className="w-20 dark:bg-white dark:text-textColor bg-softBgDark hover:bg-black dark:hover:bg-softBg text-white border-none rounded-md py-1 disabled:cursor-not-allowed"
				disabled={!hasNext}
				onClick={() => router.push(`?page=${page + 1}`)}
			>
				Next
			</button>
		</div>
	);
};
export default Pagination;

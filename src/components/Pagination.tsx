const Pagination = () => {
	return (
		<div className="flex justify-between">
			<button className="dark:bg-white dark:text-textColor bg-softBgDark hover:bg-black dark:hover:bg-softBg text-white border-none rounded-md px-6 py-1">
				Previous
			</button>
			<button className="dark:bg-white dark:text-textColor bg-softBgDark hover:bg-black dark:hover:bg-softBg text-white border-none rounded-md px-6 py-1">
				Next
			</button>
		</div>
	);
};
export default Pagination;

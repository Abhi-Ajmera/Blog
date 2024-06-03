import Link from "next/link";

const notFound = () => {
	return (
		<div className="flex flex-col min-h-[50vh] justify-center items-center gap-4">
			<h2>Could not find requested resource</h2>
			<Link
				className="hover:underline"
				href="/"
			>
				{" "}
				Click to Return Home
			</Link>
		</div>
	);
};
export default notFound;

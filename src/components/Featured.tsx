import Image from "next/image";

const Featured = () => {
	return (
		<div className="mt-3">
			{/*title  */}
			<h1 className="text-4xl lg:text-5xl text-center">Hey, Discover my stories and creative ideas.</h1>
			{/* post */}
			<div className="mt-10 md:mt-11 flex items-center gap-12">
				<div className="hidden md:block flex-1 relative h-[500px]">
					<Image
						src={"/p1.jpeg"}
						alt=""
						fill
						className=" object-cover"
					/>
				</div>
				<div className="flex-1 flex flex-col gap-5">
					<h1 className="text-2xl md:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
					<p className="text-lg font-light text-softText dark:text-softTextDark">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam porro tempora facilis laborum voluptates
						ex nulla, recusandae ullam deleniti, voluptate sed voluptatum
					</p>
					<button className="dark:bg-white dark:text-textColor bg-softBgDark hover:bg-black dark:hover:bg-softBg text-white border-none rounded-md px-10 py-3 w-max">
						Read More
					</button>
				</div>
			</div>
		</div>
	);
};
export default Featured;

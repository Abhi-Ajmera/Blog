import Comments from "@/components/Comments";
import Menu from "@/components/Menu";
import Image from "next/image";

const page = () => {
	return (
		<div>
			<div className="md:flex items-center gap-12">
				<div className="flex-1 flex flex-col gap-8 justify-center">
					<h1 className="text-justify text-3xl md:text-4xl">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit
					</h1>
					<div className="flex items-center gap-4">
						<div className="w-12 h-12 relative">
							<Image
								src={"/p1.jpeg"}
								alt=""
								layout="fill"
								className="object-cover rounded-[50%]"
							/>
						</div>
						<div className="flex flex-col text-softText dark:text-softTextDark">
							<span className="font-bold md:text-lg">John Doe</span>
							<span className="text-sm">01.01.2024</span>
						</div>
					</div>
				</div>
				<div className="hidden md:block flex-1 h-80 w-80 relative">
					<Image
						src={"/p1.jpeg"}
						alt=""
						layout="fill"
						className="object-cover"
					/>
				</div>
			</div>
			{/* description and menus */}
			<div className="flex lg:gap-12">
				<div className="lg:flex-[5] mt-8 lg:mt-12">
					<div className="flex flex-col gap-2">
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dignissimos esse illo eius quidem,
							excepturi assumenda hic pariatur consectetur numquam eum autem dolorem ipsum nostrum! Nihil aperiam
							reprehenderit numquam cum?
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ad labore totam! Voluptas magnam
							corrupti, repellendus eligendi nemo consequuntur ducimus officiis sunt ut dolorum natus temporibus?
							Voluptate officia beatae earum.
						</p>
					</div>
					<Comments />
				</div>
				<Menu />
			</div>
		</div>
	);
};
export default page;

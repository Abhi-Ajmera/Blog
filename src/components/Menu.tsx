import Link from "next/link";
import MenuPost from "./MenuPost";
import MenuCategories from "./MenuCategories";

const Menu = () => {
	return (
		<div className="flex-[2]">
			<MenuPost WithImg={false} />

			<h2 className="text-softText dark:text-softTextDark text-sm font-normal mt-12">Discover By Topic</h2>
			<h1 className="text-2xl">Categories</h1>
			<MenuCategories />

			<MenuPost WithImg={true} />
		</div>
	);
};
export default Menu;

import MenuPost from "./MenuPost";
import CategoryList from "./CategoryList";

const Menu = () => {
	return (
		<div className="flex-[2] hidden lg:block">
			<MenuPost />
			<h3 className="text-softText dark:text-softTextDark text-sm font-normal mt-12">Discover By Topic</h3>
			<h3 className="text-2xl">Categories</h3>
			<CategoryList home={false} />
		</div>
	);
};
export default Menu;

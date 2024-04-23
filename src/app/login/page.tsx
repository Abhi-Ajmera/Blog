const Login = () => {
	return (
		<div className="flex items-center justify-center mt-8">
			<div className=" bg-softBg dark:bg-softBgDark px-16 sm:px-36 py-24 flex flex-col gap-8 text-center justify-center ">
				<div className="w-56 py-2 rounded-md border-none text-white hover:font-semibold cursor-pointer bg-red-600">
					Sign in with Google
				</div>
				<div className="py-2 rounded-md border-none text-white hover:font-semibold cursor-pointer bg-blue-700">
					Sign in with Facebook
				</div>
				<div className="py-2 rounded-md border-none text-white hover:font-semibold cursor-pointer bg-black">
					Sign in with Github
				</div>
			</div>
		</div>
	);
};
export default Login;
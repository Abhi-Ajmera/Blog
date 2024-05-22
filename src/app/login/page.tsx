"use client";

import { signIn, useSession } from "next-auth/react";

const Login = () => {
	const { status } = useSession();
	if (status === "loading") {
		return <div>Loading ...</div>;
	}
	return (
		<div className="flex items-center justify-center mt-8">
			<div className=" bg-softBg dark:bg-softBgDark px-16 sm:px-36 py-24 flex flex-col gap-8 text-center justify-center ">
				<div
					className="w-56 py-2 rounded-md border-none text-white hover:font-semibold cursor-pointer bg-red-600"
					onClick={() => signIn("google", { callbackUrl: "/" })}
				>
					Sign in with Google
				</div>
				<div
					className="py-2 rounded-md border-none text-white hover:font-semibold cursor-pointer bg-black"
					onClick={() => signIn("github", { callbackUrl: "/" })}
				>
					Sign in with Github
				</div>
			</div>
		</div>
	);
};
export default Login;

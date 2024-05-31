import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthLinks = () => {
	const { status } = useSession();

	return (
		<>
			{status === "unauthenticated" ? (
				<Link
					href={"/login"}
					className="bg-gradient-to-t from-[#2926FC] to-[#9998FD] text-white px-2 rounded-md hover:text-[#9998FD] hover:bg-clip-text"
				>
					Login
				</Link>
			) : (
				<>
					<Link href={"/write"}>Write</Link>
					<span
						className="cursor-pointer bg-gradient-to-t from-[#2926FC] to-[#9998FD] text-white px-2 rounded-md hover:text-[#9998FD] hover:bg-clip-text"
						onClick={() => signOut()}
					>
						Logout
					</span>
				</>
			)}
		</>
	);
};
export default AuthLinks;

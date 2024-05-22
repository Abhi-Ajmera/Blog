import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";
import AuthProvider from "@/provider/AuthProvider";

const roboto = Roboto({ weight: ["100", "300", "500", "400", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Blog",
	description: "",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/Blog.ico"
					sizes="any"
				/>
			</head>
			<body className={roboto.className}>
				<AuthProvider>
					<ThemeContextProvider>
						<ThemeProvider>
							<main className="bg-bgColor text-textColor dark:bg-bgColorDark dark:text-textColorDark">
								<div className="max-w-[475px] mx-auto max-sm:px-10 sm:px-16 sm:max-w-screen-sm md:max-w-screen-sm lg:max-w-[920px] xl:max-w-screen-lg 2xl:max-w-[1366px] flex flex-col min-h-screen">
									<Navbar />
									{children}
									<div className="mt-auto">
										<Footer />
									</div>
								</div>
							</main>
						</ThemeProvider>
					</ThemeContextProvider>
				</AuthProvider>
			</body>
		</html>
	);
}

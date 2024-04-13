import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/provider/ThemeProvider";

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
			<body className={roboto.className}>
				<ThemeContextProvider>
					<ThemeProvider>
						<main className="bg-bgColor text-textColor min-h-screen dark:bg-bgColorDark dark:text-textColorDark">
							<div className="max-w-[475px] mx-auto px-20 sm:max-w-screen-sm md:max-w-screen-sm md:px-[40px] lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-[1366px] ">
								<Navbar />
								{children}
								<Footer />
							</div>
						</main>
					</ThemeProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}

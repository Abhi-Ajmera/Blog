"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const theme  = useContext(ThemeContext);

	return <div className={`${theme?.darkMode}`}>{children}</div>;
};
export default ThemeProvider;

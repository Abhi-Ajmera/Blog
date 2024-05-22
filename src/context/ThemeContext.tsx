"use client";
import { ThemeContextType } from "@/types/types";
import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext<ThemeContextType>({
	darkMode: "dark",
	toggle: () => {},
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [darkMode, setDarkMode] = useState("dark");

	const toggle = () => {
		setDarkMode(darkMode === "dark" ? "light" : "dark");
	};

	return <ThemeContext.Provider value={{ darkMode, toggle }}>{children}</ThemeContext.Provider>;
};

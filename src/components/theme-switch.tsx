"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { PiMoon, PiSpinner, PiSun } from "react-icons/pi";

export const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	const handleToggle = () => {
		if (resolvedTheme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	const icon = () => {
		if (!mounted) return <PiSpinner className="size-5" />;

		if (resolvedTheme === "dark") {
			return <PiSun className="size-5" />;
		}

		if (resolvedTheme === "light") {
			return <PiMoon className="size-5" />;
		}
	};

	return (
		<div className="flex w-full justify-end mx-auto max-w-2xl mt-8">
			<button
				type="button"
				className={`text-secondary flex w-fit px-4 hover:cursor-pointer hover:text-primary transition-colors duration-300 ${!mounted ? "animate-spin" : ""}`}
				onClick={handleToggle}
			>
				{icon()}
			</button>
		</div>
	);
};

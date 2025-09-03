"use client";

import { MoonStar, SunDim } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle("dark");
        setTheme(dark ? "dark" : "light");
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: "ease-out",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  if (!mounted) return null;

  return (
    <button
      type="button"
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(
        "relative flex items-center justify-center size-6",
        className,
      )}
      aria-label="Toggle theme"
    >
      {/**
       * This is a trick to achieve a minimum of 48x48px touch target on mobile, meeting accessibility guidelines.
       * https://youtu.be/soFSSkf4oVY
       */}
      <span className="absolute size-12 [@media(pointer:fine)]:hidden" />
      {isDarkMode ? (
        <SunDim className="size-5" />
      ) : (
        <MoonStar className="size-4" />
      )}
    </button>
  );
};

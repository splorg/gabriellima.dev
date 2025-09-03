"use client";
import { AnimatedThemeToggler } from "./animated-theme-toggler";
import { ExternalLink } from "./external-link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-muted-foreground font-serif text-sm border-t border-muted mx-auto max-w-2xl p-4 sm:px-8">
      <div className="flex items-center justify-between">
        <p>© {currentYear} Gabriel Lima.</p>
        <AnimatedThemeToggler className="hover:cursor-pointer hover:text-foreground transition-colors ease-out duration-200" />
      </div>
      <ExternalLink
        href="https://github.com/splorg/gabriellima.dev"
        label="Source"
      />
    </footer>
  );
};

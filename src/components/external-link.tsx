import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  className?: string;
};

export const ExternalLink = ({ label, href, className }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative w-fit group flex items-center gap-1 underline-offset-2 underline text-sm text-secondary-foreground font-serif focus:text-muted-foreground hover:text-muted-foreground transition-colors ease-out duration-200",
        className,
      )}
    >
      {/**
       * This is a trick to achieve a minimum of 48x48px touch target on mobile, meeting accessibility guidelines.
       * https://youtu.be/soFSSkf4oVY
       */}
      <span className="absolute h-12 w-full top-1/2 left-1/2 -translate-1/2 [@media(pointer:fine)]:hidden" />
      {label}
      <ArrowRight className="size-4 group-focus:transform-gpu group-focus:-rotate-45 group-hover:transform-gpu group-hover:-rotate-45 transition-transform ease-out duration-200" />
    </Link>
  );
};

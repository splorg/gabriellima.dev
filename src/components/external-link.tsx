import { ArrowRight } from "lucide-react";
import Link from "next/link";

type Props = {
  href: string;
  label: string;
};

export const ExternalLink = ({ label, href }: Props) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative w-fit group flex items-center gap-1 underline-offset-2 underline text-sm text-foreground font-serif hover:text-muted-foreground transition-colors ease-out duration-200"
    >
      {/**
       * This is a trick to achieve a minimum of 48x48px touch target on mobile, meeting accessibility guidelines.
       * https://youtu.be/soFSSkf4oVY
       */}
      <span className="absolute h-12 w-full top-1/2 left-1/2 -translate-1/2 [@media(pointer:fine)]:hidden" />
      {label}
      <ArrowRight className="size-4 group-hover:transform-gpu group-hover:-rotate-45 transition-transform ease-out duration-200" />
    </Link>
  );
};

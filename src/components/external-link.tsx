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
      className="group flex items-center gap-1 underline-offset-2 underline text-sm text-foreground font-serif hover:text-muted-foreground transition-colors ease-out duration-200"
    >
      {label}
      <ArrowRight className="size-4 group-hover:transform-gpu group-hover:-rotate-45 transition-transform ease-out duration-200" />
    </Link>
  );
};

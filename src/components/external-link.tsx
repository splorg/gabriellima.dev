import { cn } from "@/lib/utils";
import type { LinkHTMLAttributes } from "react";
import { PiArrowUpRight } from "react-icons/pi";

type Props = LinkHTMLAttributes<HTMLAnchorElement> & {
	label: string;
};

export const ExternalLink = ({ label, className, ...props }: Props) => {
	return (
		<a
			className={cn(
				"flex items-center gap-1 underline-offset-[3px] underline text-secondary hover:text-primary hover: transition-all duration-300",
				className,
			)}
			target="_blank"
			rel="noopener noreferrer"
			{...props}
		>
			<span>{label}</span>
			<span className="size-3">
				<PiArrowUpRight />
			</span>
		</a>
	);
};

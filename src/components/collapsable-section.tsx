import type { ReactNode } from "react";

import { PiArrowsVertical } from "react-icons/pi";

type Props = {
	title: string;
	children: ReactNode;
};

export const CollapsableSection = ({ title, children }: Props) => {
	return (
		<details className="px-4 mb-4">
			<summary className="cursor-pointer flex gap-2 items-center list-none text-lg text-tertiary font-medium hover:text-primary transition-colors duration-300 group-open:pb-4">
				<span>{title}</span>
				<PiArrowsVertical />
				<hr className="flex-grow border-black/60 dark:border-white/60" />
			</summary>
			<section className="flex flex-col gap-4 text-secondary mt-4">
				{children}
			</section>
		</details>
	);
};

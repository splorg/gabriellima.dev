import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

export const Section = ({ children }: Props) => {
	return (
		<section className="flex flex-col gap-4 px-4 mb-4 text-secondary">
			{children}
		</section>
	);
};

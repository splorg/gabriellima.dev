import type { Project } from "@/lib/definitions";

import { Badge } from "./badge";
import { ExternalLink } from "./external-link";

export const ProjectCard = ({
	title,
	description,
	imageSrc,
	technologies,
	link,
	linkLabel,
}: Project) => {
	return (
		<div className="py-4 flex flex-col gap-4 items-center lg:flex-row lg:items-start">
			{imageSrc ? (
				// eslint-disable-next-line @next/next/no-img-element
				<img src={imageSrc} alt={title} className="w-36 h-36 rounded-lg" />
			) : null}
			<div className="space-y-2 text-justify">
				<div>
					<p className="font-medium text-tertiary">{title}</p>
					<span>
						<ExternalLink label={linkLabel} href={link} className="text-sm" />
					</span>
				</div>
				<p className="text-secondary">{description}</p>
				<div className="flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<Badge key={tech} label={tech} />
					))}
				</div>
			</div>
		</div>
	);
};

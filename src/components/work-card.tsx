import type { WorkExperience } from "@/lib/definitions";
import { Badge } from "./badge";

type Props = {
	work: WorkExperience;
};

export const WorkCard = ({ work }: Props) => {
	const {
		companyName,
		location,
		period,
		companyDescription,
		workDescription,
		technologies,
	} = work;

	return (
		<div className="mb-8">
			<div className="flex justify-between mb-1">
				<div>
					<p className="font-bold">{companyName}</p>
					<p className="text-xs text-tertiary">{location}</p>
				</div>
				<p className="text-sm text-tertiary">{period}</p>
			</div>
			<hr className="border-black/60 dark:border-white/60 border-dotted mb-2" />
			<div className="space-y-2 text-justify">
				<p>{companyDescription}</p>
				<p>{workDescription}</p>
				<div className="flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<Badge key={tech} label={tech} />
					))}
				</div>
			</div>
		</div>
	);
};

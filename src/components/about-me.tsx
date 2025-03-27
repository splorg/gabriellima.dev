import { ABOUT_ME } from "@/lib/data";

import { Section } from "./section";
import { SectionTitle } from "./section-title";

export const AboutMe = () => {
	return (
		<Section>
			<SectionTitle title="About me" />
			<div className="space-y-2 text-justify">
				{ABOUT_ME.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</Section>
	);
};

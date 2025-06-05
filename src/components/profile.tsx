/* eslint-disable @next/next/no-img-element */
import {
	PiEnvelopeFill,
	PiGithubLogoFill,
	PiLinkedinLogoFill,
} from "react-icons/pi";

import { ExternalLink } from "./external-link";

export const Profile = () => {
	return (
		<section className="mx-auto p-4">
			<div className="my-4">
				<h1 className="text-xl font-medium">Gabriel Lima</h1>
				<h2 className="text-lg font-medium text-secondary">
					Full Stack Software Engineer
				</h2>
			</div>
			<ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-secondary">
				<li className="flex items-center gap-1">
					<PiLinkedinLogoFill />
					<ExternalLink
						label="Linkedin"
						href="https://www.linkedin.com/in/limabs002/"
					/>
				</li>
				<li className="flex items-center gap-1">
					<PiGithubLogoFill />
					<ExternalLink href="https://github.com/splorg" label="Github" />
				</li>
				<li className="flex items-center gap-1">
					<PiEnvelopeFill />
					<ExternalLink
						href="mailto:gabriel.lbs002@gmail.com"
						label="gabriel.lbs002@gmail.com"
					/>
				</li>
			</ul>
		</section>
	);
};

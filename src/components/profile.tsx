/* eslint-disable @next/next/no-img-element */
import {
	PiEnvelopeFill,
	PiGithubLogoFill,
	PiLinkedinLogoFill,
} from "react-icons/pi";

import { ExternalLink } from "./external-link";

export const Profile = () => {
	return (
		<section className="mx-auto py-8 lg:pt-0 lg:min-w-fit lg:pl-8">
			<div>
				<div className="size-60 rounded-full overflow-hidden mx-auto">
					<img
						src="https://github.com/splorg.png"
						alt="Gabriel Lima's Github avatar."
						className="object-cover"
					/>
				</div>
				<div className="mx-auto my-5 w-fit">
					<h1 className="text-xl font-medium">Gabriel Lima</h1>
					<h2 className="text-lg font-medium text-secondary">
						Full Stack Software Engineer
					</h2>
				</div>
			</div>
			<div className="px-8 pb-8 lg:px-0">
				<ul className="flex flex-grow flex-wrap gap-4 lg:gap-3 text-secondary lg:flex-col">
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
			</div>
		</section>
	);
};

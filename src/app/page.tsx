import { AboutMe } from "@/components/about-me";
import { Profile } from "@/components/profile";
import { Projects } from "@/components/projects";
import { Work } from "@/components/work";

const Home = () => {
	return (
		<main className="mx-auto mb-8 max-w-2xl">
			<Profile />
			<div>
				<AboutMe />
				<Work />
				<Projects />
			</div>
		</main>
	);
};

export default Home;

import type { Project, WorkExperience } from "./definitions";

export const PROJECTS: Project[] = [
	{
		title: "Imobify",
		description:
			"Graduation project - a multiplatform mobile app for real estate search and listings based on geolocation. Features include Google Maps integration, user authentication, Material Design UI, image uploads, nested navigation, and comprehensive form validation.",
		technologies: [
			"TypeScript",
			"React Native",
			"Node.js",
			"NestJS",
			"Prisma",
			"PostgreSQL",
			"Cloudinary",
			"Jest",
			"Docker",
		],
		imageSrc: "/imobify.webp",
		link: "https://github.com/imobify",
		linkLabel: "github.com/imobify",
	},
	{
		title: "Kuroki-chan",
		description:
			"An anime-themed website for browsing 4chan boards. Built with responsive, mobile-first design principles and SEO optimization while leveraging Next.js App Router and React Server Components.",
		technologies: [
			"TypeScript",
			"Next.js 14",
			"React",
			"Tailwind CSS",
			"Zustand",
		],
		imageSrc: "/kurokichan.webp",
		link: "https://kurokichan.com/?p=true",
		linkLabel: "kurokichan.com",
	},
	{
		title: "Password Generator",
		description: "A minimalist password generator with an intuitive interface.",
		technologies: ["TypeScript", "Bun", "React", "Tailwind CSS", "shadcn/ui"],
		link: "https://password-generator.gabriellima.dev",
		linkLabel: "password-generator.gabriellima.dev",
	},
	{
		title: "PokéMapa",
		description:
			"College project - a Pokémon GO companion app that allows users to share and discover PokéStop locations in their community.",
		technologies: [
			"JavaScript",
			"React Native",
			"Node.js",
			"Express.js",
			"Mongoose",
			"MongoDB",
		],
		imageSrc: "/pokemapa.webp",
		link: "https://github.com/splorg/pokemapa",
		linkLabel: "github.com/splorg/pokemapa",
	},
	{
		title: "NadaGostoso",
		description:
			"College project - a recipe-sharing mobile app with authentication where users can create, edit, and manage their personal recipe collection.",
		technologies: [
			"JavaScript",
			"React Native",
			"Node.js",
			"Express.js",
			"Mongoose",
			"MongoDB",
		],
		imageSrc: "/nadagostoso.webp",
		link: "https://github.com/splorg/nadagostoso-app",
		linkLabel: "github.com/splorg/nadagostoso-app",
	},
];

export const WORK: WorkExperience[] = [
	{
		companyName: "Natoora",
		location: "London, United Kingdom - Remote",
		period: "February 2025 - Present",
		companyDescription:
			"A premium greengrocer supplier providing a platform for restaurants to manage orders and deliveries, as well as a home-delivery app for consumers.",
		workDescription:
			"At Natoora, I am currently working in an international team as a full stack developer, developing internal systems and contributing to the company's code modernization initiative.",
		technologies: [
			"TypeScript",
			"JavaScript",
			"React",
			"React Native",
			"Material UI",
			"Jest",
			"React Testing Library",
			"Python",
			"Django",
			"Docker",
		],
	},
	{
		companyName: "Gandaya",
		location: "São Paulo, Brazil - Remote",
		period: "November 2024 - February 2025",
		companyDescription:
			"A comprehensive ticketing platform that enables event organizers to manage events and ticket sales efficiently.",
		workDescription:
			"Developed core features across the platform including payment gateway integrations with Mercado Pago, Stripe, and Pagar.me; the ticket resales marketplace; and optimized the admin dashboard performance, reducing initial page loading times by 10x.",
		technologies: [
			"TypeScript",
			"React",
			"Tailwind CSS",
			"shadcn/ui",
			"Framer Motion",
			"Zustand",
			"SWR",
			"Node.js",
			"Express.js",
			"Prisma ORM",
			"MySQL",
			"Docker",
		],
	},
	{
		companyName: "DevelopsToday",
		location: "Kyiv, Ukraine - Remote",
		period: "August 2024 - November 2024",
		companyDescription:
			"An outsourcing company specializing in software development services for clients worldwide.",
		workDescription:
			"Worked as a full stack contractor in an international team, developing the MVP for a community-driven platform focused on household item rentals.",
		technologies: [
			"TypeScript",
			"React",
			"Next.js",
			"Tailwind CSS",
			"shadcn/ui",
			"Storyblok CMS",
			"Tanstack Query",
			"Node.js",
			"NestJS",
			"Mongoose",
			"MongoDB",
			"Docker",
		],
	},
	{
		companyName: "Arbo | Superlógica Imobi",
		location: "Londrina, Brazil - Remote",
		period: "November 2022 - November 2024",
		companyDescription:
			"A proptech company providing technological solutions to streamline operations for real estate companies.",
		workDescription:
			"Developed core features for a CRM system serving thousands of users and a real estate marketplace. Created integrations with external ERPs and a partner bank's real estate financing system.",
		technologies: [
			"TypeScript",
			"JavaScript",
			"React",
			"Next.js",
			"Material UI",
			"Node.js",
			"Express.js",
			"SQL",
			"Serverless Framework",
			"AWS",
			"Jest",
			"React Testing Library",
			"Docker",
		],
	},
];

export const ABOUT_ME: string[] = [
	"Full stack software engineer focused on web and mobile applications. I enjoy solving problems and building reliable, efficient solutions. Always looking to learn new technologies and connect with fellow developers.",
	"Graduated with an A.S. in Systems Analysis and Development from FATEC, a public university in Brazil, in December 2023.",
	"When not coding, I spend time gaming, working on side projects, and exploring my interests in cinema and literature.",
];

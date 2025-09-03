export type WorkExperience = {
  companyName: string;
  period: string;
  description: string;
  technologies: string[];
  location: string;
  companyLinks?: {
    label: string;
    href: string;
  }[];
};

export const WORK: WorkExperience[] = [
  {
    companyName: "Natoora",
    location: "London, United Kingdom (remote)",
    period: "February 2025 - Present",
    description:
      "At Natoora, I am mostly working in front-end and mobile app development, and I'm responsible for maintaining the home delivery and wholesale (NatooraPro) apps as well as contributing to the company's code modernization initiative.",
    technologies: [
      "TypeScript",
      "Expo",
      "React Native",
      "React",
      "Redux",
      "Redux Saga",
      "Tanstack Query",
    ],
  },
  {
    companyName: "Gandaya",
    location: "São Paulo, Brazil (remote)",
    period: "November 2024 - February 2025",
    description:
      "Developed core features across a ticketing platform, including payment gateway integrations with Mercado Pago, Stripe, and Pagar.me; the ticket resales marketplace; and optimized the admin dashboard performance, reducing initial page loading times by 10x.",
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
    location: "Kyiv, Ukraine (remote)",
    period: "August 2024 - November 2024",
    description:
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
      "MongoDB",
      "Docker",
    ],
  },
  {
    companyName: "Superlógica Imobi (Arbo)",
    location: "Londrina, Brazil (remote)",
    period: "November 2022 - November 2024",
    description:
      "Developed core features for a CRM system serving thousands of users and a real estate marketplace. Created integrations with external ERPs and a partner bank's real estate financing system.",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "AWS",
      "Docker",
    ],
  },
];

import { Project, WorkExperience } from './definitions'

export const PROJECTS: Project[] = [
  {
    title: 'Imobify',
    description: 'College graduation project - a mobile, multiplatform app for searching and announcing real estate based on user geolocation, featuring Map view powered by Google Maps API, authentication, Material Design interface, image upload, nested navigation, form validation, etc.',
    technologies: ['TypeScript', 'React Native', 'Node.js', 'NestJS', 'Prisma', 'PostgreSQL', 'Cloudinary', 'Jest', 'Docker'],
    imageSrc: '/imobify.webp',
    link: 'https://github.com/imobify',
    linkLabel: 'github.com/imobify'
  },
  {
    title: 'Kuroki-chan',
    description: 'Fully-featured anime-themed website for browsing 4chan boards. Utilizing responsive and mobile-first design, SEO and optimization best practices, and the most recent paradigms of the App Router and React Server Components (RSCs).',
    technologies: ['TypeScript', 'Next.js 14', 'React', 'Tailwind CSS', 'Zustand'],
    imageSrc: '/kurokichan.webp',
    link: 'https://kurokichan.com/?p=true',
    linkLabel: 'kurokichan.com'
  },
  {
    title: 'Password Generator',
    description: 'A simple strong password generator with a clean interface.',
    technologies: ['TypeScript', 'Bun', 'React', 'Tailwind CSS', 'shadcn/ui'],
    link: 'https://password-generator.gabriellima.dev',
    linkLabel: 'password-generator.gabriellima.dev'
  },
  {
    title: 'PokéMapa',
    description: 'College project - a mobile Pokémon GO-themed app, where users can share the location of the PokéStops they find in-game.',
    technologies: ['JavaScript', 'React Native', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB'],
    imageSrc: '/pokemapa.webp',
    link: 'https://github.com/splorg/pokemapa',
    linkLabel: 'github.com/splorg/pokemapa'
  },
  {
    title: 'NadaGostoso',
    description: 'College project - a mobile recipes app, featuring authentication, where users can post, edit and delete their recipes.',
    technologies: ['JavaScript', 'React Native', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB'],
    imageSrc: '/nadagostoso.webp',
    link: 'https://github.com/splorg/nadagostoso-app',
    linkLabel: 'github.com/splorg/nadagostoso-app'
  },
]

export const WORK: WorkExperience[] = [
  {
    companyName: 'Natoora',
    period: 'February 2025 - Present',
    companyDescription: 'Natoora is a high-end greengrocer supplier for restaurants, providing a platform for restaurants to manage their orders and deliveries and a home-delivery app for consumers.',
    workDescription: 'In Natoora, I am currently working in an international team as a full stack developer, developing internal systems to support the company\'s operations and taking part in a code modernization initiative.',
    technologies: ['TypeScript', 'JavaScript', 'React', 'Material UI', 'Jest', 'React Testing Library', 'Docker']
  },
  {
    companyName: 'Gandaya',
    period: 'November 2024 - February 2025',
    companyDescription: 'Gandaya is a ticketing system for events, providing a platform for event organizers to manage their events and tickets.',
    workDescription: 'I\'ve developed core features across the whole platform, from the customer-facing app to the admin dashboard - payment gateway integrations with Mercado Pago, Stripe and Pagar.me; the ticket resales marketplace; and greatly optimized the performance of the admin dashboard, resulting in 10x lower initial page loading times.',
    technologies: ['TypeScript', 'React', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Zustand', 'SWR', 'Node.js', 'Express.js', 'Prisma ORM', 'MySQL', 'Docker']
  },
  {
    companyName: 'DevelopsToday',
    period: 'August 2024 - November 2024',
    companyDescription: 'DevelopsToday is an outsourcing company that provides software development services to clients.',
    workDescription: 'As a contractor, I\'ve worked as a full stack developer with an international team, developing the MVP of a client\'s startup - a community-driven platform for renting household items.',
    technologies: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'Storyblok CMS', 'Tanstack Query', 'Node.js', 'NestJS', 'Mongoose', 'MongoDB', 'Docker']
  },
  {
    companyName: 'Arbo | Superlógica Imobi',
    period: 'November 2022 - November 2024',
    companyDescription: 'Arbo is a startup that aims to make the work of real estate companies easier, providing the technology to aid them in every step of the journey.',
    workDescription: 'I\'ve worked developing core features for a CRM system that supports thousands of users and a real estate marketplace, as well as creating integrations with external ERPs and a partner bank\'s real estate financing system, among other things.',
    technologies: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Material UI', 'Node.js', 'Express.js', 'SQL', 'Serverless Framework', 'AWS', 'Jest', 'React Testing Library', 'Docker']
  },
]

export const ABOUT_ME: string[] = [
  'I\'m a full stack software engineer with experience in web and mobile applications. With a passion for problem-solving and a commitment to delivering value, I thrive on crafting efficient solutions and maintaining code quality. Feel free to connect with me!',
  'Graduated with an A.S. in Systems Analysis and Development in December 2023, at FATEC, a public university in my country.',
  'In my free time, I enjoy gaming, working on personal projects, and exploring interests like cinema, anime, manga, chess, history, literature, as well as fueling my enthusiasm for e-sports and competitive games.'
]

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
    title: 'Card Generator API',
    description: 'REST API for creating and querying cards based on the game Inscryption.',
    technologies: ['TypeScript', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB', 'Docker'],
    link: 'https://github.com/splorg/card-generator-api',
    linkLabel: 'github.com/splorg/card-generator-api'
  },
  {
    title: 'NadaGostoso',
    description: 'College project - a mobile recipes app, featuring authentication, where users can post, edit and delete their recipes.',
    technologies: ['JavaScript', 'React Native', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB'],
    imageSrc: '/nadagostoso.webp',
    link: 'https://github.com/splorg/nadagostoso-app',
    linkLabel: 'github.com/splorg/nadagostoso-app'
  },
  {
    title: 'PokéMapa',
    description: 'College project - a mobile Pokémon GO-themed app, where users can share the location of the PokéStops they find in-game.',
    technologies: ['JavaScript', 'React Native', 'Node.js', 'Express.js', 'Mongoose', 'MongoDB'],
    imageSrc: '/pokemapa.webp',
    link: 'https://github.com/splorg/pokemapa',
    linkLabel: 'github.com/splorg/pokemapa'
  },
]

export const WORK: WorkExperience[] = [
  {
    companyName: 'Arbo',
    period: 'November 2022 - Present',
    companyDescription: 'Arbo is a startup that aims to make the work of real estate companies easier, providing the technology to aid them in every step of the journey.',
    workDescription: 'I\'ve worked developing core features for a CRM system that supports thousands of users and a real estate marketplace, as well as creating integrations with external ERPs and a partner bank\'s real estate financing system, among other things.'
  }
]

export const ABOUT_ME: string[] = [
  'I\'m a full stack software engineer with experience in web and mobile applications. With a passion for problem-solving and a commitment to delivering value, I thrive on crafting efficient solutions and maintaining code quality. Feel free to connect with me!',
  'Graduated with an A.S. in Systems Analysis and Development in December 2023, at FATEC, a public university in my country.',
  'In my free time, I enjoy gaming, working on personal projects, and exploring interests like cinema, anime, manga, chess, history, literature, as well as fueling my enthusiasm for e-sports and competitive games.'
]

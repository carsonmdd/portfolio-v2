export type Project = {
	thumbnail: string;
	alt: string;
	name: string;
	description: string;
	repoLink?: string;
	devpostLink?: string;
	demoLink?: string;
};

export const projects: Project[] = [
	{
		thumbnail: '/images/midi-air-thumbnail.svg',
		alt: 'Screenshot of Midi-Air home page',
		name: 'Midi-Air',
		description:
			'ASL multiplayer rhythm game powered by computer vision, built with Mediapipe, Next.js, and TypeScript',
		repoLink: 'https://github.com/pragyajhunjhunwala04/midi-air',
		devpostLink: 'https://devpost.com/software/midi-air',
	},
	{
		thumbnail: '/images/evalai-thumbnail.svg',
		alt: 'Screenshot of EvalAI chat page',
		name: 'EvalAI',
		description:
			'AI interview simulator built with Next.js, TypeScript, Google Gemini, and PostgreSQL',
		repoLink: 'https://github.com/carsonmdd/evalai',
		demoLink: 'https://evalai-gamma.vercel.app',
	},
	{
		thumbnail: '/images/dionysus-thumbnail.svg',
		alt: 'Screenshot of Dionysus dashboard',
		name: 'Dionysus',
		description:
			'AI GitHub assistant web app built with Next.js, Google Gemini, AssemblyAI, and Stripe',
		repoLink: 'https://github.com/carsonmdd/dionysus',
		demoLink: 'https://dionysus-kappa.vercel.app',
	},
	{
		thumbnail: '/images/shelterfy-thumbnail.svg',
		alt: 'Screenshot of Shelterfy Find Shelter page',
		name: 'Shelterfy',
		description:
			'Wildfire and shelter locator web app built with Next.js and Tailwind CSS',
		repoLink: 'https://github.com/carsonmdd/shelterfy',
		devpostLink: 'https://devpost.com/software/shelterfy',
	},
	{
		thumbnail: '/images/aora-thumbnail.svg',
		alt: 'Screenshot of Aora home page',
		name: 'Aora',
		description:
			'Full-stack video sharing mobile app built with React Native and Appwrite',
		repoLink: 'https://github.com/carsonmdd/aora',
	},
	{
		thumbnail: '/images/instalog-thumbnail.svg',
		alt: 'Screenshot of InstaLog interface',
		name: 'InstaLog',
		description:
			'Offline data logging application with CSV, GPS, and Shapefile integration built with Tkinter and Pandas',
		repoLink: 'https://github.com/carsonmdd/InstaLog',
	},
];

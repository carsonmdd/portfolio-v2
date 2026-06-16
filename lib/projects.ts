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
		thumbnail: '/images/thumbnails/newgame-thumbnail.png',
		alt: 'Screenshot of NewGame catalog page',
		name: 'NewGame',
		description:
			'Management dashboard for a curated library of educational game development resources',
		repoLink: 'https://github.com/carsonmdd/NewGame',
	},
	{
		thumbnail: '/images/thumbnails/midi-air-thumbnail.png',
		alt: 'Screenshot of Midi-Air home page',
		name: 'Midi-Air',
		description:
			'ASL multiplayer rhythm game powered by computer vision, built with Mediapipe, Next.js, and TypeScript',
		repoLink: 'https://github.com/pragyajhunjhunwala04/midi-air',
		devpostLink: 'https://devpost.com/software/midi-air',
	},
	{
		thumbnail: '/images/thumbnails/evalai-thumbnail.png',
		alt: 'Screenshot of EvalAI chat page',
		name: 'EvalAI',
		description:
			'AI interview simulator built with Next.js, TypeScript, Google Gemini, and PostgreSQL',
		repoLink: 'https://github.com/carsonmdd/evalai',
	},
	{
		thumbnail: '/images/thumbnails/dionysus-thumbnail.png',
		alt: 'Screenshot of Dionysus dashboard',
		name: 'Dionysus',
		description:
			'AI GitHub assistant web app built with Next.js, Google Gemini, AssemblyAI, and Stripe',
		repoLink: 'https://github.com/carsonmdd/dionysus',
	},
	{
		thumbnail: '/images/thumbnails/shelterfy-thumbnail.png',
		alt: 'Screenshot of Shelterfy Find Shelter page',
		name: 'Shelterfy',
		description:
			'Wildfire and shelter locator web app built with Next.js and Tailwind CSS',
		repoLink: 'https://github.com/carsonmdd/shelterfy',
		devpostLink: 'https://devpost.com/software/shelterfy',
	},
	{
		thumbnail: '/images/thumbnails/aora-thumbnail.png',
		alt: 'Screenshot of Aora home page',
		name: 'Aora',
		description:
			'Full-stack video sharing mobile app built with React Native and Appwrite',
		repoLink: 'https://github.com/carsonmdd/aora',
	},
	{
		thumbnail: '/images/thumbnails/InstaLog-thumbnail.png',
		alt: 'Screenshot of InstaLog interface',
		name: 'InstaLog',
		description:
			'Offline data logging application with CSV, GPS, and Shapefile integration built with Tkinter and Pandas',
		repoLink: 'https://github.com/carsonmdd/InstaLog',
	},
];

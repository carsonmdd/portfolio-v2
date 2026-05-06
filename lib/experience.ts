export type Experience = {
	role: string;
	company: string;
	type?: string;
	dates: string;
	location?: string;
	description: string;
};

export const experience: Experience[] = [
	{
		role: 'Full-stack Developer',
		company: 'Commit the Change, UCI',
		type: 'Part-time',
		dates: 'Oct 2025 — Present',
		location: 'Irvine, California',
		description:
			'Collaborating with a cross-functional team to build a full-stack web application for nonprofit partners, contributing to front-end and back-end development while supporting agile, team-driven workflows.',
	},
	{
		role: 'Web Developer',
		company:
			'UVSA — Union of Vietnamese Student Associations of Southern California',
		dates: 'Aug 2025 — Present',
		description:
			'Building a large-scale community platform with Next.js and TypeScript, delivering responsive, accessible, and high-performance web experiences for thousands of users.',
	},
	{
		role: 'Learning Assistant',
		company:
			'UC Irvine Donald Bren School of Information and Computer Sciences',
		type: 'Part-time',
		dates: 'Jun 2025 — Dec 2025',
		location: 'Irvine, California',
		description:
			'Supported 300+ students in Python by facilitating active learning labs and collaborating on curriculum improvements.',
	},
];

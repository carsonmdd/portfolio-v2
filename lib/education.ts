export type Education = {
	institution: string;
	degree: string;
	honors?: string;
	dates: string;
	logo?: string;
};

export const education: Education[] = [
	{
		institution: 'University of California, Irvine',
		degree: "Bachelor's in Software Engineering",
		honors: 'Campuswide Honors Collegium',
		dates: 'Sep 2022 – Jun 2026',
		logo: '/images/icons/uci.png',
	},
];

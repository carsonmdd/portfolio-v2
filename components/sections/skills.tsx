import { skills } from '@/lib/skills';
import { Section } from './section';

export function Skills() {
	return (
		<Section number="01" label="Skills" id="skills">
			<ul className="flex flex-wrap gap-3">
				{skills.map((skill) => (
					<li
						key={skill.name}
						className="rounded-full border border-white/20 px-6 py-2.5 text-base font-light text-white/80 dark:border-slate-300/60 dark:text-slate-700"
					>
						{skill.name}
					</li>
				))}
			</ul>
		</Section>
	);
}

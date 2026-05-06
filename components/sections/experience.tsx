import { experience } from '@/lib/experience';
import { Section } from './section';

export function Experience() {
	return (
		<Section number="03" label="Experience" id="experience">
			<ul className="divide-y divide-white/10 dark:divide-slate-900/10">
				{experience.map((exp) => (
					<li
						key={exp.role + exp.company}
						className="grid gap-4 py-10 first:pt-0 md:grid-cols-12 md:gap-12"
					>
						<div className="md:col-span-4">
							<p className="text-sm uppercase tracking-[0.3em] text-white/60 dark:text-slate-600">
								{exp.dates}
							</p>
							{exp.location && (
								<p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/30 dark:text-slate-400">
									{exp.location}
								</p>
							)}
						</div>
						<div className="md:col-span-8">
							<h3 className="text-2xl font-light tracking-tight md:text-3xl">
								{exp.role}
							</h3>
							<p className="mt-2 text-base text-white/60 dark:text-slate-500">
								{exp.company}
								{exp.type && ` · ${exp.type}`}
							</p>
							<p className="mt-4 max-w-2xl text-lg font-light leading-relaxed text-white/75 dark:text-slate-600">
								{exp.description}
							</p>
						</div>
					</li>
				))}
			</ul>
		</Section>
	);
}

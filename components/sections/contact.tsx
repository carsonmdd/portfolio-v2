import { site } from '@/lib/site';
import { Section } from './section';

export function Contact() {
	return (
		<Section number="02" label="Contact" id="contact">
			<div className="flex flex-col gap-10">
				<p className="max-w-2xl text-xl font-light leading-relaxed text-white/70 dark:text-slate-600">
					Always open to connecting — for collaborations, internships,
					or to swap project ideas.
				</p>
				<a
					href={`mailto:${site.email}`}
					className="block w-fit text-4xl font-light tracking-tight text-white transition-colors hover:text-white/70 md:text-6xl dark:text-slate-900 dark:hover:text-slate-600"
				>
					{site.email}
				</a>
				<div className="flex flex-wrap gap-8 text-sm uppercase tracking-[0.3em] text-white/50 dark:text-slate-500">
					<a
						href={site.socials.github}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
					>
						GitHub →
					</a>
					<a
						href={site.socials.linkedin}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
					>
						LinkedIn →
					</a>
					<a
						href={site.socials.instagram}
						target="_blank"
						rel="noreferrer"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
					>
						Instagram →
					</a>
				</div>
			</div>
		</Section>
	);
}

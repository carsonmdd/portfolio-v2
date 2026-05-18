import { projects } from '@/lib/projects';
import { Section } from './section';

export function Projects() {
	return (
		<Section number="02" label="Works" id="works">
			<div className="space-y-28">
				{projects.map((project, i) => (
					<article
						key={project.name}
						className="grid gap-8 md:grid-cols-12 md:gap-12"
					>
						<div className="md:col-span-7">
							<div className="aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-white/5">
								<img
									src={project.thumbnail}
									alt={project.alt}
									className="h-full w-full object-cover"
								/>
							</div>
						</div>
						<div className="flex flex-col gap-5 md:col-span-5">
							<span className="text-sm tracking-[0.3em] text-white/40">
								{String(i + 1).padStart(2, '0')}
							</span>
							<h3 className="text-4xl font-light tracking-tight md:text-5xl">
								{project.name}
							</h3>
							<p className="text-lg font-light leading-relaxed text-white/70">
								{project.description}
							</p>
							<div className="mt-2 flex flex-wrap gap-6 text-sm uppercase tracking-[0.3em]">
								{project.repoLink && (
									<a
										href={project.repoLink}
										target="_blank"
										rel="noreferrer"
										className="border-b border-white/30 pb-1 text-white/70 transition-colors hover:border-white hover:text-white"
									>
										GitHub
									</a>
								)}
								{project.demoLink && (
									<a
										href={project.demoLink}
										target="_blank"
										rel="noreferrer"
										className="border-b border-white/30 pb-1 text-white/70 transition-colors hover:border-white hover:text-white"
									>
										Live Demo
									</a>
								)}
								{project.devpostLink && (
									<a
										href={project.devpostLink}
										target="_blank"
										rel="noreferrer"
										className="border-b border-white/30 pb-1 text-white/70 transition-colors hover:border-white hover:text-white"
									>
										Devpost
									</a>
								)}
							</div>
						</div>
					</article>
				))}
			</div>
		</Section>
	);
}

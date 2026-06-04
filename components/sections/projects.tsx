'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects, type Project } from '@/lib/projects';
import { Section } from './section';

const EASE = [0.2, 0.65, 0.3, 0.9] as const;
const VIEWPORT = { once: true, margin: '-80px' } as const;

function ProjectCard({ project, index }: { project: Project; index: number }) {
	return (
		<article className="grid gap-8 md:grid-cols-12 md:gap-12">
			{/* Thumbnail */}
			<div className="md:col-span-7">
				<div className="aspect-16/10 relative overflow-hidden rounded-sm border border-white/10 bg-white/5">
					<motion.div
						className="absolute inset-0"
						initial={{ opacity: 0, scale: 1.04 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={VIEWPORT}
						transition={{ duration: 1, ease: EASE }}
					>
						<Image
							src={project.thumbnail}
							alt={project.alt}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, 58vw"
						/>
					</motion.div>
				</div>
			</div>

			{/* Text column */}
			<motion.div
				className="flex flex-col gap-5 md:col-span-5"
				initial="hidden"
				whileInView="visible"
				viewport={VIEWPORT}
				variants={{
					hidden: {},
					visible: {
						transition: {
							staggerChildren: 0.18,
							delayChildren: 0.1,
						},
					},
				}}
			>
				<motion.span
					className="text-sm tracking-[0.3em] text-white/40"
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1, transition: { duration: 0.6 } },
					}}
				>
					{String(index + 1).padStart(2, '0')}
				</motion.span>

				{/* Title — character stagger */}
				<motion.h3
					className="text-4xl font-light tracking-tight md:text-5xl"
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.04 } },
					}}
				>
					{project.name.split('').map((char, i) => (
						<motion.span
							key={i}
							className="inline-block"
							variants={{
								hidden: { opacity: 0, y: 14 },
								visible: {
									opacity: 1,
									y: 0,
									transition: { duration: 0.8, ease: EASE },
								},
							}}
						>
							{char === ' ' ? ' ' : char}
						</motion.span>
					))}
				</motion.h3>

				{/* Description + links fade up together */}
				<motion.div
					className="flex flex-col gap-5"
					variants={{
						hidden: { opacity: 0, y: 12 },
						visible: {
							opacity: 1,
							y: 0,
							transition: {
								duration: 1.5,
								ease: EASE,
								delay: 0.6,
							},
						},
					}}
				>
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
				</motion.div>
			</motion.div>
		</article>
	);
}

export function Projects() {
	return (
		<Section number="01" label="Works" id="works">
			<div className="space-y-28">
				{projects.map((project, i) => (
					<ProjectCard
						key={project.name}
						project={project}
						index={i}
					/>
				))}
			</div>
		</Section>
	);
}

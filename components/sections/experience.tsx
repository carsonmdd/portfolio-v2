'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { experience, type Experience } from '@/lib/experience';
import { Section } from './section';

const EASE = [0.2, 0.65, 0.3, 0.9] as const;
const ACCENT_GLOW =
	'0 0 6px 1px rgba(129,140,248,0.2), 0 0 14px 3px rgba(129,140,248,0.05)';
const BEAD_GLOW =
	'0 0 6px 2px rgba(129,140,248,0.25), 0 0 14px 4px rgba(129,140,248,0.1)';

function Meta({ exp }: { exp: Experience }) {
	return (
		<>
			<p className="text-sm uppercase tracking-[0.3em] text-white/50">
				{exp.dates}
			</p>
			<h3 className="mt-3 text-2xl font-light tracking-tight">
				{exp.role}
			</h3>
			<p className="mt-1 text-base text-accent">{exp.company}</p>
			{exp.logo && (
				<div className="mt-3 h-12 w-12 overflow-hidden rounded-full">
					<img
						src={exp.logo}
						alt=""
						className="h-full w-full object-contain"
					/>
				</div>
			)}
		</>
	);
}

function Desc({ exp }: { exp: Experience }) {
	return (
		<p className="text-xl font-light leading-relaxed text-white/75">
			{exp.description}
		</p>
	);
}

export function Experience() {
	const fillRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);
	const beadRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => {
			const tl = timelineRef.current;
			const fill = fillRef.current;
			const bead = beadRef.current;
			if (!tl || !fill) return;

			const { top, height } = tl.getBoundingClientRect();
			const progress = Math.max(
				0,
				Math.min(1, (window.innerHeight * 0.65 - top) / height),
			);

			fill.style.transform = `scaleY(${progress})`;

			if (bead) {
				// Line extends 32px above and below container (-inset-y-8)
				const lineHeight = height + 64;
				bead.style.top = `${progress * lineHeight - 32}px`;
				bead.style.opacity = progress > 0.01 ? '1' : '0';
			}
		};

		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<Section number="02" label="Experience" id="experience">
			{/* Mobile: left-border stacked list */}
			<ul className="space-y-10 md:hidden">
				{experience.map((exp) => (
					<li
						key={exp.role}
						className="border-l border-white/20 pl-6"
					>
						<p className="text-xs uppercase tracking-[0.3em] text-white/50">
							{exp.dates}
						</p>
						<h3 className="mt-2 text-xl font-light">{exp.role}</h3>
						<p className="mt-1 text-sm text-accent">
							{exp.company}
						</p>
						<p className="mt-3 text-base font-light leading-relaxed text-white/75">
							{exp.description}
						</p>
					</li>
				))}
			</ul>

			{/* Desktop: center timeline */}
			<div ref={timelineRef} className="relative hidden md:block">
				{/* Dim track */}
				<div className="absolute -inset-y-8 left-1/2 w-px -translate-x-1/2 bg-white/10" />
				{/* Glowing fill */}
				<div
					ref={fillRef}
					style={{
						transform: 'scaleY(0)',
						transformOrigin: 'top',
						boxShadow: ACCENT_GLOW,
					}}
					className="absolute -inset-y-8 left-1/2 w-0.5 -translate-x-1/2 bg-accent"
				/>
				{/* Traveling bead */}
				<div
					ref={beadRef}
					style={{ top: '-32px', opacity: 0, boxShadow: BEAD_GLOW }}
					className="absolute left-1/2 z-20 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
				/>

				<ul>
					{experience.map((exp, i) => {
						const metaLeft = i % 2 === 0;
						return (
							<li
								key={exp.role}
								className="grid grid-cols-2 py-16 first:pt-0 last:pb-0"
							>
								<motion.div
									initial={{ opacity: 0, x: -40 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: '-100px' }}
									transition={{
										duration: 1.6,
										ease: EASE,
										delay: 0.15,
									}}
									className="flex flex-col items-end pr-10 text-right"
								>
									{metaLeft ? (
										<Meta exp={exp} />
									) : (
										<Desc exp={exp} />
									)}
								</motion.div>

								<motion.div
									initial={{ opacity: 0, x: 40 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true, margin: '-100px' }}
									transition={{
										duration: 1.6,
										ease: EASE,
										delay: 0.3,
									}}
									className="flex flex-col items-start pl-10 text-left"
								>
									{metaLeft ? (
										<Desc exp={exp} />
									) : (
										<Meta exp={exp} />
									)}
								</motion.div>
							</li>
						);
					})}
				</ul>
			</div>
		</Section>
	);
}

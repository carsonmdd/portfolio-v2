'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { experience, type Experience } from '@/lib/experience';
import { Section } from './section';

function Meta({ exp }: { exp: Experience }) {
	return (
		<>
			<p className="text-sm uppercase tracking-[0.3em] text-white/50 dark:text-slate-500">
				{exp.dates}
			</p>
			<h3 className="mt-3 text-2xl font-light tracking-tight">
				{exp.role}
			</h3>
			<p className="mt-1 text-base text-accent">{exp.company}</p>
			{exp.type && (
				<p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50 dark:text-slate-500">
					{exp.type}
				</p>
			)}
			{exp.logo && (
				<div className="mt-5 h-12 w-12 overflow-hidden rounded-full">
					<Image
						src={exp.logo}
						alt=""
						width={28}
						height={28}
						className="h-full w-full object-contain"
					/>
				</div>
			)}
		</>
	);
}

function Desc({ exp }: { exp: Experience }) {
	return (
		<p className="text-xl font-light leading-relaxed text-white/75 dark:text-slate-600">
			{exp.description}
		</p>
	);
}

export function Experience() {
	const fillRef = useRef<HTMLDivElement>(null);
	const timelineRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const onScroll = () => {
			const tl = timelineRef.current;
			const fill = fillRef.current;
			if (!tl || !fill) return;
			const { top, height } = tl.getBoundingClientRect();
			const progress = Math.max(
				0,
				Math.min(1, (window.innerHeight * 0.65 - top) / height),
			);
			fill.style.transform = `scaleY(${progress})`;
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
						className="border-l border-white/20 pl-6 dark:border-slate-900/20"
					>
						<p className="text-xs uppercase tracking-[0.3em] text-white/50 dark:text-slate-500">
							{exp.dates}
						</p>
						<h3 className="mt-2 text-xl font-light">{exp.role}</h3>
						<p className="mt-1 text-sm text-white/70 dark:text-slate-600">
							{exp.company}
						</p>
						<p className="mt-3 text-base font-light leading-relaxed text-white/75 dark:text-slate-600">
							{exp.description}
						</p>
					</li>
				))}
			</ul>

			{/* Desktop: center timeline */}
			<div ref={timelineRef} className="relative hidden md:block">
				{/* Dim track */}
				<div className="absolute -inset-y-8 left-1/2 w-px -translate-x-1/2 bg-white/10 dark:bg-slate-900/10" />
				{/* Growing fill */}
				<div
					ref={fillRef}
					style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
					className="absolute -inset-y-8 left-1/2 w-0.5 -translate-x-1/2 bg-accent"
				/>
				<ul>
					{experience.map((exp, i) => {
						const metaLeft = i % 2 === 0;
						return (
							<li
								key={exp.role}
								className="grid grid-cols-[1fr_4rem_1fr] py-16 first:pt-0 last:pb-0"
							>
								<div className="flex flex-col items-end pr-10 text-right">
									{metaLeft ? (
										<Meta exp={exp} />
									) : (
										<Desc exp={exp} />
									)}
								</div>
								<div className="flex justify-center">
									<div className="z-10 h-4 w-4 rounded-full bg-accent shadow-[0_0_8px_4px] shadow-accent/60" />
								</div>
								<div className="flex flex-col items-start pl-10 text-left">
									{metaLeft ? (
										<Desc exp={exp} />
									) : (
										<Meta exp={exp} />
									)}
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</Section>
	);
}

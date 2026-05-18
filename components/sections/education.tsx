import Image from 'next/image';
import { education } from '@/lib/education';
import { Section } from './section';

export function Education() {
	return (
		<Section number="03" label="Education" id="education">
			<ul className="space-y-16">
				{education.map((entry) => (
					<li
						key={entry.institution}
						className="grid gap-8 md:grid-cols-12 md:gap-12"
					>
						<div className="flex items-start gap-6 md:col-span-4">
							{entry.logo && (
								<div className="mt-1 h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white/10 p-1.5">
									<Image
										src={entry.logo}
										alt=""
										width={48}
										height={48}
										className="h-full w-full object-contain"
									/>
								</div>
							)}
							<div>
								<p className="text-xl font-light">
									{entry.institution}
								</p>
								<p className="mt-1 text-sm uppercase tracking-[0.25em] text-white/50 ">
									{entry.dates}
								</p>
							</div>
						</div>
						<div className="md:col-span-8">
							<p className="text-2xl font-light leading-snug tracking-tight text-white/90 ">
								{entry.degree}
							</p>
							{entry.honors && (
								<p className="mt-4 text-sm uppercase tracking-[0.3em] text-accent">
									{entry.honors}
								</p>
							)}
						</div>
					</li>
				))}
			</ul>
		</Section>
	);
}

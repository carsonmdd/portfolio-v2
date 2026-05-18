import type { ReactNode } from 'react';

type SectionProps = {
	number: string;
	label: string;
	children: ReactNode;
	id?: string;
};

export function Section({ number, label, children, id }: SectionProps) {
	return (
		<section
			id={id}
			className="px-6 py-24 md:pl-56 md:pr-12 lg:pl-64 lg:pr-20"
		>
			<header className="mb-16 flex items-baseline gap-6 border-b border-white/10 pb-4">
				<span className="text-sm tracking-[0.3em] text-white/40">
					{number}
				</span>
				<h2 className="text-lg font-light uppercase tracking-[0.35em] text-white/80">
					{label}
				</h2>
			</header>
			{children}
		</section>
	);
}

import Image from 'next/image';
import { Marquee } from '@/components/marquee';
import { skills } from '@/lib/skills';

export function Skills() {
	return (
		<div className="px-6 py-4 md:pl-56 md:pr-12 lg:pl-64 lg:pr-20">
			<Marquee duration={32} direction="right">
				{skills.map((skill) => (
					<Image
						key={skill.name}
						src={skill.image}
						alt={skill.name}
						width={60}
						height={60}
						className="mx-8 object-contain"
					/>
				))}
			</Marquee>
		</div>
	);
}

import Image from 'next/image';
import { Marquee } from '@/components/marquee';
import { skills } from '@/lib/skills';

export function Skills() {
	return (
		<div className="px-6 md:pl-56 md:pr-12 lg:pl-64 lg:pr-20">
			<Marquee duration={30} direction="right">
				{skills.map((skill, i) => (
					<Image
						key={skill.name}
						src={skill.image}
						alt={skill.name}
						width={60}
						height={60}
						priority={i === 0}
						className="mx-6 object-contain w-auto h-auto"
					/>
				))}
			</Marquee>
		</div>
	);
}

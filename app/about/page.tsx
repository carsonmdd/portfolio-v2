import Image from 'next/image';
import { Education } from '@/components/sections/education';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Section } from '@/components/sections/section';
import { site } from '@/lib/site';

const About = () => {
	return (
		<>
			<Section number="01" label="About" id="about">
				<div className="flex items-center justify-center flex-col px-32 gap-12 md:flex-row md:gap-20">
					<div className="flex flex-col gap-8">
						<p className="text-sm uppercase tracking-[0.3em] text-white/40">
							{site.role}
						</p>
						<p className="text-xl font-light leading-relaxed text-white/85">
							{site.bio}
						</p>
					</div>
					<div className="w-full shrink-0 md:w-96">
						<div className="relative aspect-3/4 overflow-hidden rounded-md border border-white/10">
							<Image
								src="/images/profile.jpeg"
								alt="Carson Davis"
								fill
								priority
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 24rem"
							/>
						</div>
					</div>
				</div>
			</Section>
			<Skills />
			<Experience />
			<Education />
		</>
	);
};

export default About;

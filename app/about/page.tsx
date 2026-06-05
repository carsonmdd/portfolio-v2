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
				<div className="flex flex-col items-center justify-center gap-12 lg:flex-row md:gap-20 xl:px-32">
					<div className="mx-auto w-64 shrink-0 md:mx-0 md:w-80">
						<div className="relative aspect-3/4 overflow-hidden rounded-md border border-white/10">
							<Image
								src="/images/profile.jpeg"
								alt="Carson Davis"
								fill
								priority
								quality={100}
								className="object-cover"
								sizes="(max-width: 768px) 16rem, 40rem"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-8 md:flex-1">
						<p className="text-sm uppercase tracking-[0.3em] text-white/40">
							{site.role}
						</p>
						<p className="text-xl font-light leading-relaxed text-white/85">
							{site.bio}
						</p>
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

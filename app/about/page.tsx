import { Contact } from '@/components/sections/contact';
import { Section } from '@/components/sections/section';
import { site } from '@/lib/site';

const About = () => {
	return (
		<>
			<Section number="01" label="About" id="about">
				<div className="grid gap-12 md:grid-cols-12">
					<div className="md:col-span-3">
						<p className="text-sm uppercase tracking-[0.3em] text-white/40 dark:text-slate-500">
							{site.role}
						</p>
					</div>
					<p className="max-w-3xl text-xl font-light leading-relaxed text-white/85 md:col-span-9 md:text-2xl dark:text-slate-700">
						{site.bio}
					</p>
				</div>
			</Section>
			<Contact />
		</>
	);
};

export default About;

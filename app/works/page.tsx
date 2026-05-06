import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';

export default function WorksPage() {
	return (
		<main className="pt-24">
			<Skills />
			<Projects />
			<Experience />
		</main>
	);
}

import fs from 'fs';
import path from 'path';
import { Section } from '@/components/sections/section';
import { GalleryGrid } from '@/components/sections/gallery-grid';

const PICTURES_DIR = path.join(process.cwd(), 'public/images/pictures');
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

function getPictures() {
	return fs
		.readdirSync(PICTURES_DIR)
		.filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
		.map((file) => ({ src: `/images/pictures/${file}`, alt: '' }));
}

export default function GalleryPage() {
	const photos = getPictures();

	return (
		<Section number="01" label="Gallery" id="gallery">
			<div className="mb-12 flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/40">
				<span>Photography</span>
				<span>Personal Archive</span>
			</div>
			<GalleryGrid photos={photos} />
		</Section>
	);
}

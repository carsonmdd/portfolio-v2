import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { Section } from '@/components/sections/section';
import { GalleryGrid } from '@/components/sections/gallery-grid';

const PICTURES_DIR = path.join(process.cwd(), 'public/images/pictures');
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

async function getPictures() {
	const files = fs
		.readdirSync(PICTURES_DIR)
		.filter((file) =>
			IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()),
		);

	return Promise.all(
		files.map(async (file) => {
			const filePath = path.join(PICTURES_DIR, file);
			const {
				width = 1,
				height = 1,
				orientation = 1,
			} = await sharp(filePath).metadata();

			const swapped = orientation >= 5;
			const displayWidth = swapped ? height : width;
			const displayHeight = swapped ? width : height;

			return {
				src: `/images/pictures/${file}`,
				alt: '',
				aspectRatio: displayHeight / displayWidth,
			};
		}),
	);
}

export default async function GalleryPage() {
	const photos = await getPictures();

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

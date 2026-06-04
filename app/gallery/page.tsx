'use client';

import Image from 'next/image';
import { gallery } from '@/lib/gallery';
import MasonryGrid from '@/components/masonry-grid';
import { Section } from '@/components/sections/section';

export default function GalleryPage() {
	return (
		<Section number="01" label="Gallery" id="gallery">
			<div className="mb-12 flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/40">
				<span>Photography</span>
				<span>Personal Archive</span>
			</div>
			<MasonryGrid
				items={gallery}
				className="columns-1 sm:columns-2 lg:columns-3"
				gap="1.5rem"
				staggerDelay={0.07}
				renderItem={(photo) => (
					<figure className="overflow-hidden rounded-sm bg-white/5">
						<div className="overflow-hidden">
							<Image
								src={photo.src}
								alt={photo.alt}
								width={0}
								height={0}
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
								className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
							/>
						</div>
					</figure>
				)}
			/>
		</Section>
	);
}

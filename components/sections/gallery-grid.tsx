'use client';

import MasonryGrid from '@/components/masonry-grid';

type Photo = { src: string; alt: string; aspectRatio: number };

export function GalleryGrid({ photos }: { photos: Photo[] }) {
	return (
		<MasonryGrid
			items={photos}
			columns={3}
			gap={24}
			renderItem={(photo) => (
				<figure
					className="overflow-hidden rounded-sm"
					style={{ aspectRatio: `1 / ${photo.aspectRatio}` }}
				>
					<img
						src={photo.src}
						alt={photo.alt}
						className="w-full h-full object-cover"
					/>
				</figure>
			)}
		/>
	);
}

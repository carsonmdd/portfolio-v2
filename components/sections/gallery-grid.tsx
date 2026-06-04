'use client';

import Image from 'next/image';
import MasonryGrid from '@/components/masonry-grid';

type Photo = { src: string; alt: string; aspectRatio: number };

export function GalleryGrid({ photos }: { photos: Photo[] }) {
	return (
		<MasonryGrid
			items={photos}
			columns={3}
			gap={24}
			renderItem={(photo) => (
				<figure className="overflow-hidden rounded-sm">
					<Image
						src={photo.src}
						alt={photo.alt}
						width={0}
						height={0}
						sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className="w-full h-auto object-cover"
					/>
				</figure>
			)}
		/>
	);
}

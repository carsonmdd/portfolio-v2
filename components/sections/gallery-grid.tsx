import { gallery } from '@/lib/gallery';
import { Section } from './section';

export function GalleryGrid() {
	return (
		<Section number="01" label="Gallery" id="gallery">
			<div className="mb-12 flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/40">
				<span>Photography</span>
				<span>Personal Archive</span>
			</div>
			<div className="grid gap-x-12 gap-y-20 md:grid-cols-2">
				{gallery.map((photo) => (
					<figure key={photo.src}>
						<div className="aspect-square overflow-hidden bg-white/5">
							<img
								src={photo.src}
								alt={photo.alt}
								className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
							/>
						</div>
						<figcaption className="mt-6">
							<h3 className="text-2xl font-light tracking-tight">
								{photo.title}
							</h3>
							<dl className="mt-4 divide-y divide-white/10 text-base font-light">
								{photo.location && (
									<div className="flex justify-between py-3">
										<dt className="text-white/40">
											Location
										</dt>
										<dd className="text-white/80">
											{photo.location}
										</dd>
									</div>
								)}
								{photo.camera && (
									<div className="flex justify-between py-3">
										<dt className="text-white/40">
											Camera
										</dt>
										<dd className="text-white/80">
											{photo.camera}
										</dd>
									</div>
								)}
							</dl>
						</figcaption>
					</figure>
				))}
			</div>
		</Section>
	);
}

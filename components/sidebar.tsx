'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';

const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Works', href: '/works' },
	{ label: 'Gallery', href: '/gallery' },
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="fixed left-0 top-0 z-40 hidden h-screen w-28 flex-col justify-between px-7 py-8 md:flex">
			<div className="flex flex-col gap-14">
				<Link href="/" aria-label="Home" className="block">
					<span className="block h-7 w-7 rounded-full border border-white/40 transition-colors hover:border-white dark:border-slate-800/60 dark:hover:border-slate-800" />
				</Link>

				<nav>
					<ul className="space-y-3">
						{navLinks.map(({ label, href }) => {
							const active = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										className={`inline-block pb-1 text-xs uppercase tracking-[0.25em] transition-colors ${
											active
												? 'border-b border-white/70 text-white dark:border-slate-900/70 dark:text-slate-900'
												: 'text-white/40 hover:text-white dark:text-slate-500 dark:hover:text-slate-900'
										}`}
									>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				<div className="flex flex-col gap-5 text-white/50 dark:text-slate-500">
					<a
						href={site.socials.linkedin}
						aria-label="LinkedIn"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
						target="_blank"
						rel="noreferrer"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
							<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.26 2.37 4.26 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
						</svg>
					</a>
					<a
						href={site.socials.instagram}
						aria-label="Instagram"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
						target="_blank"
						rel="noreferrer"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
						</svg>
					</a>
					<a
						href={site.socials.github}
						aria-label="GitHub"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
						target="_blank"
						rel="noreferrer"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
						</svg>
					</a>
					<a
						href={`mailto:${site.email}`}
						aria-label="Email"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
					>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
					</a>
				</div>
			</div>

			<div className="text-xs tracking-wider text-white/30 dark:text-slate-500">
				© {site.name}
			</div>
		</aside>
	);
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import {
	AiOutlineMail,
	AiOutlineLinkedin,
	AiOutlineGithub,
	AiFillLinkedin,
} from 'react-icons/ai';

const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Works', href: '/works' },
	{ label: 'Gallery', href: '/gallery' },
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="fixed left-0 top-0 z-40 hidden h-screen w-28 flex-col justify-between pl-12 pr-7 pt-60 pb-8 md:flex">
			<div className="flex flex-col gap-14">
				<nav>
					<ul className="space-y-3">
						{navLinks.map(({ label, href }) => {
							const active = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										className={`inline-block pb-1 text-xl uppercase tracking-[0.25em] transition-colors ${
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
						<AiFillLinkedin size={34} />
					</a>
					<a
						href={`mailto:${site.socials.email}`}
						aria-label="Email"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineMail size={34} />
					</a>
					<a
						href={site.socials.github}
						aria-label="GitHub"
						className="transition-colors hover:text-white dark:hover:text-slate-900"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineGithub size={34} />
					</a>
				</div>
			</div>
		</aside>
	);
}

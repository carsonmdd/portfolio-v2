'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';

const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Works', href: '/works' },
	{ label: 'Gallery', href: '/gallery' },
];

export function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className="fixed left-0 top-0 z-40 hidden h-screen w-28 flex-col justify-between pl-12 pr-7 pt-60 pb-8 md:flex">
			<div className="flex flex-col gap-20">
				<nav>
					<ul className="space-y-4">
						{navLinks.map(({ label, href }) => {
							const active = pathname === href;
							return (
								<li key={href}>
									<Link
										href={href}
										className={`relative inline-block pb-1 text-xl uppercase tracking-[0.25em] transition-colors after:absolute after:left-0 after:-right-4 after:bottom-0 after:h-px after:origin-left after:bg-current after:transition-transform after:duration-400 ${
											active
												? 'text-white after:scale-x-100'
												: 'text-white/40 after:scale-x-0 hover:text-white hover:after:scale-x-100'
										}`}
									>
										{label}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>

				<div className="flex flex-col gap-5 text-white/50">
					<a
						href={site.socials.linkedin}
						aria-label="LinkedIn"
						className="transition-colors hover:text-white"
						target="_blank"
						rel="noreferrer"
					>
						<AiFillLinkedin size={34} />
					</a>
					<a
						href={`mailto:${site.socials.email}`}
						aria-label="Email"
						className="transition-colors hover:text-white"
						target="_blank"
						rel="noreferrer"
					>
						<AiOutlineMail size={34} />
					</a>
					<a
						href={site.socials.github}
						aria-label="GitHub"
						className="transition-colors hover:text-white"
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

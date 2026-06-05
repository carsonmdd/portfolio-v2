'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '@/lib/site';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { useEffect, useState } from 'react';

const navLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'About', href: '/about' },
	{ label: 'Works', href: '/works' },
	{ label: 'Gallery', href: '/gallery' },
];

export function Sidebar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		setOpen(false);
	}, [pathname]);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<>
			{/* Desktop sidebar */}
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

			{/* Mobile top bar */}
			<header className="fixed left-0 right-0 top-0 z-60 flex items-center justify-between px-6 pt-5 pb-10 backdrop-blur-sm mask-[linear-gradient(to_bottom,black_50%,transparent)] md:hidden">
				<span className="text-sm tracking-[0.3em] text-white/40 uppercase">
					CD
				</span>
				<button
					onClick={() => setOpen((o) => !o)}
					aria-label={open ? 'Close menu' : 'Open menu'}
					className="flex h-8 w-8 flex-col items-center justify-center gap-1.5"
				>
					<motion.span
						className="block h-px w-6 bg-white origin-center"
						animate={
							open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }
						}
						transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
					/>
					<motion.span
						className="block h-px w-6 bg-white"
						animate={
							open
								? { opacity: 0, scaleX: 0 }
								: { opacity: 1, scaleX: 1 }
						}
						transition={{ duration: 0.2 }}
					/>
					<motion.span
						className="block h-px w-6 bg-white origin-center"
						animate={
							open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }
						}
						transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
					/>
				</button>
			</header>

			{/* Mobile drawer */}
			<AnimatePresence>
				{open && (
					<>
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 z-40 bg-black/60 md:hidden"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.25 }}
							onClick={() => setOpen(false)}
						/>

						{/* Panel */}
						<motion.div
							className="fixed right-0 top-0 z-50 flex h-full w-64 flex-col justify-between bg-[#0a0a0a] px-10 pb-12 pt-24 md:hidden"
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{
								duration: 0.4,
								ease: [0.16, 1, 0.3, 1],
							}}
						>
							<nav>
								<ul className="space-y-6">
									{navLinks.map(({ label, href }, i) => {
										const active = pathname === href;
										return (
											<motion.li
												key={href}
												initial={{ opacity: 0, x: 16 }}
												animate={{ opacity: 1, x: 0 }}
												transition={{
													duration: 0.4,
													delay: i * 0.06,
													ease: [0.16, 1, 0.3, 1],
												}}
											>
												<Link
													href={href}
													className={`text-xl uppercase tracking-[0.25em] transition-colors ${
														active
															? 'text-white'
															: 'text-white/40 hover:text-white'
													}`}
												>
													{label}
												</Link>
											</motion.li>
										);
									})}
								</ul>
							</nav>

							<motion.div
								className="flex gap-6 text-white/50"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.4, delay: 0.28 }}
							>
								<a
									href={site.socials.linkedin}
									aria-label="LinkedIn"
									className="transition-colors hover:text-white"
									target="_blank"
									rel="noreferrer"
								>
									<AiFillLinkedin size={26} />
								</a>
								<a
									href={`mailto:${site.socials.email}`}
									aria-label="Email"
									className="transition-colors hover:text-white"
									target="_blank"
									rel="noreferrer"
								>
									<AiOutlineMail size={26} />
								</a>
								<a
									href={site.socials.github}
									aria-label="GitHub"
									className="transition-colors hover:text-white"
									target="_blank"
									rel="noreferrer"
								>
									<AiOutlineGithub size={26} />
								</a>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
}

'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
	const [isLight, setIsLight] = useState(false);

	useEffect(() => {
		setIsLight(document.documentElement.classList.contains('dark'));
	}, []);

	const toggle = () => {
		const next = !isLight;
		document.documentElement.classList.toggle('dark', next);
		localStorage.setItem('theme', next ? 'dark' : 'light');
		setIsLight(next);
	};

	return (
		<button
			onClick={toggle}
			aria-label="Toggle theme"
			className="fixed top-6 right-6 z-50 flex h-7 w-12 items-center rounded-full border border-white/30 bg-white/5 px-0.5 backdrop-blur-sm transition-colors dark:border-slate-800/30 dark:bg-slate-800/5"
		>
			<span
				className={`block h-5 w-5 rounded-full bg-white transition-transform dark:bg-slate-800 ${
					isLight ? 'translate-x-5' : 'translate-x-0'
				}`}
			/>
		</button>
	);
}

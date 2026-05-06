import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sidebar } from '@/components/sidebar';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Carson Davis — Software Engineer',
	description:
		'Portfolio of Carson Davis, a software engineering student at UC Irvine focused on full-stack web development and AI.',
};

const themeInitScript = `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
			suppressHydrationWarning
		>
			<body className="min-h-full flex flex-col bg-black text-white dark:bg-white dark:text-slate-900">
				<Script
					id="theme-init"
					strategy="beforeInteractive"
				>
					{themeInitScript}
				</Script>
				<Sidebar />
				<ThemeToggle />
				{children}
			</body>
		</html>
	);
}

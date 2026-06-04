'use client';

import * as React from 'react';
import {
	motion,
	useInView,
	useMotionValue,
	useTransform,
	useSpring,
} from 'framer-motion';

interface MasonryGridProps<T extends { aspectRatio?: number }> {
	items: T[];
	renderItem: (item: T, index: number) => React.ReactNode;
	columns?: number;
	gap?: number;
	staggerDelay?: number;
}

function useResponsiveColumns(max: number): number {
	const [cols, setCols] = React.useState(1);

	React.useEffect(() => {
		const update = () => {
			if (window.innerWidth >= 1024) setCols(max);
			else if (window.innerWidth >= 640) setCols(Math.min(2, max));
			else setCols(1);
		};
		update();
		window.addEventListener('resize', update);
		return () => window.removeEventListener('resize', update);
	}, [max]);

	return cols;
}

const GridItem = ({ children }: { children: React.ReactNode }) => {
	const ref = React.useRef<HTMLDivElement>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
	const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

	const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
	const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!ref.current) return;
		const { left, top, width, height } =
			ref.current.getBoundingClientRect();
		x.set((e.clientX - left) / width - 0.5);
		y.set((e.clientY - top) / height - 0.5);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			ref={ref}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
			className="relative"
		>
			<motion.div
				style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
				whileTap={{ scale: 0.98 }}
				className="w-full h-full"
			>
				{children}
			</motion.div>
		</motion.div>
	);
};

const MasonryGrid = <T extends { aspectRatio?: number }>({
	items,
	renderItem,
	columns = 3,
	gap = 24,
	staggerDelay = 0.08,
}: MasonryGridProps<T>) => {
	const containerRef = React.useRef(null);
	const isInView = useInView(containerRef, { once: true, amount: 0.1 });
	const numCols = useResponsiveColumns(columns);

	// Distribute items into shortest column first
	const cols: { item: T; originalIndex: number }[][] = Array.from(
		{ length: numCols },
		() => [],
	);
	const colHeights = new Array(numCols).fill(0);
	items.forEach((item, i) => {
		const shortest = colHeights.indexOf(Math.min(...colHeights));
		cols[shortest].push({ item, originalIndex: i });
		colHeights[shortest] += item.aspectRatio ?? 1;
	});

	return (
		<div ref={containerRef} className="flex w-full" style={{ gap }}>
			{cols.map((col, colIndex) => (
				<div
					key={colIndex}
					className="flex flex-1 flex-col"
					style={{ gap }}
				>
					{col.map(({ item, originalIndex }, rowIndex) => (
						<motion.div
							key={originalIndex}
							initial={{ opacity: 0, y: 72 }}
							animate={
								isInView
									? { opacity: 1, y: 0 }
									: { opacity: 0, y: 72 }
							}
							transition={{
								y: {
									duration: 1.6,
									ease: [0.16, 1, 0.3, 1],
									delay: (colIndex + rowIndex) * staggerDelay,
								},
								opacity: {
									duration: 0.6,
									ease: 'linear',
									delay: (colIndex + rowIndex) * staggerDelay,
								},
							}}
						>
							<GridItem>
								{renderItem(item, originalIndex)}
							</GridItem>
						</motion.div>
					))}
				</div>
			))}
		</div>
	);
};

export default MasonryGrid;

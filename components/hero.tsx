'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';
import { site } from '@/lib/site';

export const Hero = () => {
	const textControls = useAnimation();
	const buttonControls = useAnimation();

	useEffect(() => {
		const link = document.createElement('link');
		link.href =
			'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400&display=swap';
		link.rel = 'stylesheet';
		document.head.appendChild(link);

		textControls.start((i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.07 + 1.2,
				duration: 1.2,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		}));
		buttonControls.start({
			opacity: 1,
			transition: { delay: 2.2, duration: 1 },
		});

		return () => {
			document.head.removeChild(link);
		};
	}, [textControls, buttonControls]);

	const headline = site.name;

	return (
		<section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black dark:bg-white">
			<WovenCanvas />
			<div className="relative z-10 px-4 text-center">
				<h1
					className="text-6xl text-white md:text-8xl dark:text-slate-900"
					style={{
						fontFamily: "'Playfair Display', serif",
						textShadow: '0 0 50px rgba(255, 255, 255, 0.3)',
					}}
				>
					{headline.split(' ').map((word, i) => (
						<span key={i} className="inline-block">
							{word.split('').map((char, j) => (
								<motion.span
									key={j}
									custom={i * 6 + j}
									initial={{ opacity: 0, y: 50 }}
									animate={textControls}
									style={{ display: 'inline-block' }}
								>
									{char}
								</motion.span>
							))}
							{i < headline.split(' ').length - 1 && (
								<span>&nbsp;</span>
							)}
						</span>
					))}
				</h1>
				<motion.p
					custom={headline.length + 1}
					initial={{ opacity: 0, y: 30 }}
					animate={textControls}
					className="mx-auto mt-6 max-w-xl text-base uppercase tracking-[0.4em] text-slate-300 dark:text-slate-600"
					style={{ fontFamily: "'Inter', sans-serif" }}
				>
					{site.role}
				</motion.p>
				<motion.div
					initial={{ opacity: 0 }}
					animate={buttonControls}
					className="mt-10"
				>
					<Link
						href="/works"
						className="rounded-full border-2 border-white/20 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 dark:border-slate-800/20 dark:bg-slate-800/5 dark:text-slate-800 dark:hover:bg-slate-800/10"
						style={{ fontFamily: "'Inter', sans-serif" }}
					>
						View Work
					</Link>
				</motion.div>
			</div>
		</section>
	);
};

// --- Three.js Canvas Component ---
const WovenCanvas = () => {
	const mountRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const mount = mountRef.current;
		if (!mount) return;

		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);
		camera.position.z = 5;
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
			alpha: true,
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setPixelRatio(window.devicePixelRatio);
		mount.appendChild(renderer.domElement);

		const mouse = new THREE.Vector2(0, 0);
		const clock = new THREE.Clock();

		const isDarkMode =
			window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: dark)').matches;

		// --- Woven Silk ---
		const particleCount = 50000;
		const positions = new Float32Array(particleCount * 3);
		const originalPositions = new Float32Array(particleCount * 3);
		const colors = new Float32Array(particleCount * 3);
		const velocities = new Float32Array(particleCount * 3);

		const geometry = new THREE.BufferGeometry();
		const torusKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);

		for (let i = 0; i < particleCount; i++) {
			const vertexIndex = i % torusKnot.attributes.position.count;
			const x = torusKnot.attributes.position.getX(vertexIndex);
			const y = torusKnot.attributes.position.getY(vertexIndex);
			const z = torusKnot.attributes.position.getZ(vertexIndex);

			positions[i * 3] = x;
			positions[i * 3 + 1] = y;
			positions[i * 3 + 2] = z;
			originalPositions[i * 3] = x;
			originalPositions[i * 3 + 1] = y;
			originalPositions[i * 3 + 2] = z;

			const color = new THREE.Color();
			color.setHSL(0.63 + Math.random() * 0.1, 0.9, 0.6);

			colors[i * 3] = color.r;
			colors[i * 3 + 1] = color.g;
			colors[i * 3 + 2] = color.b;

			velocities[i * 3] = 0;
			velocities[i * 3 + 1] = 0;
			velocities[i * 3 + 2] = 0;
		}

		geometry.setAttribute(
			'position',
			new THREE.BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		const material = new THREE.PointsMaterial({
			size: 0.02,
			vertexColors: true,
			blending: isDarkMode
				? THREE.NormalBlending
				: THREE.AdditiveBlending,
			transparent: true,
			opacity: isDarkMode ? 1.0 : 0.8,
		});

		const points = new THREE.Points(geometry, material);
		scene.add(points);

		const handleMouseMove = (event: MouseEvent) => {
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
		};
		window.addEventListener('mousemove', handleMouseMove);

		let animationId = 0;
		const animate = () => {
			animationId = requestAnimationFrame(animate);
			const elapsedTime = clock.getElapsedTime();

			const mouseWorld = new THREE.Vector3(mouse.x * 3, mouse.y * 3, 0);

			for (let i = 0; i < particleCount; i++) {
				const ix = i * 3;
				const iy = i * 3 + 1;
				const iz = i * 3 + 2;

				const currentPos = new THREE.Vector3(
					positions[ix],
					positions[iy],
					positions[iz],
				);
				const originalPos = new THREE.Vector3(
					originalPositions[ix],
					originalPositions[iy],
					originalPositions[iz],
				);
				const velocity = new THREE.Vector3(
					velocities[ix],
					velocities[iy],
					velocities[iz],
				);

				const dist = currentPos.distanceTo(mouseWorld);
				if (dist < 1.5) {
					const force = (1.5 - dist) * 0.01;
					const direction = new THREE.Vector3()
						.subVectors(currentPos, mouseWorld)
						.normalize();
					velocity.add(direction.multiplyScalar(force));
				}

				// Return to original position
				const returnForce = new THREE.Vector3()
					.subVectors(originalPos, currentPos)
					.multiplyScalar(0.001);
				velocity.add(returnForce);

				// Damping
				velocity.multiplyScalar(0.95);

				positions[ix] += velocity.x;
				positions[iy] += velocity.y;
				positions[iz] += velocity.z;

				velocities[ix] = velocity.x;
				velocities[iy] = velocity.y;
				velocities[iz] = velocity.z;
			}
			geometry.attributes.position.needsUpdate = true;

			points.rotation.y = elapsedTime * 0.05;
			renderer.render(scene, camera);
		};
		animate();

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener('resize', handleResize);

		return () => {
			cancelAnimationFrame(animationId);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
			if (renderer.domElement.parentNode === mount) {
				mount.removeChild(renderer.domElement);
			}
			geometry.dispose();
			torusKnot.dispose();
			material.dispose();
			renderer.dispose();
		};
	}, []);

	return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

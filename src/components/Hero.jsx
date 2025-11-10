import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90svh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-10">
          <p className="inline-flex items-center gap-2 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Available for freelance
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Building delightful web experiences
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            I’m a frontend-focused developer crafting modern, accessible interfaces with React, TypeScript, and great design. Explore my work and let’s build something great.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white px-4 py-2 text-sm font-medium hover:bg-neutral-800 transition">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-neutral-300 dark:border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-white dark:to-neutral-950" />
    </section>
  );
}

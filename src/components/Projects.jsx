import { ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A playful hero built with Spline and React, featuring smooth interactions and responsive design.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: 'https://example.com',
  },
  {
    title: 'SaaS Dashboard',
    description:
      'Data-rich dashboard with charts, auth, and role-based access designed for clarity and speed.',
    tags: ['TypeScript', 'Next.js', 'Charts'],
    link: 'https://example.com',
  },
  {
    title: 'Design System Kit',
    description:
      'A reusable set of components and tokens aligned to accessibility and brand tone.',
    tags: ['Storybook', 'Radix', 'A11y'],
    link: 'https://example.com',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Selected Projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A snapshot of things I’ve built recently. Clean code, thoughtful UX, strong visuals.
            </p>
          </div>
          <div className="hidden sm:block text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#contact" className="underline underline-offset-4 hover:text-neutral-900 dark:hover:text-white">Work with me</a>
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p) => (
            <motion.article
              key={p.title}
              variants={item}
              className="group rounded-xl border border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-5 transition shadow-sm hover:shadow-xl hover:shadow-black/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{p.title}</h3>
                <Code2 className="h-4 w-4 text-neutral-500" />
              </div>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] rounded-full bg-black/5 dark:bg-white/10 px-2 py-1 text-neutral-700 dark:text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-1 text-sm text-neutral-900 dark:text-white hover:underline underline-offset-4"
              >
                Visit <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white text-lg">My Portfolio</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-700 dark:text-neutral-300">
          <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Github className="h-5 w-5" />
          </a>
          <a aria-label="LinkedIn" href="https://linkedin.com/" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <a aria-label="Email" href="#contact" className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}

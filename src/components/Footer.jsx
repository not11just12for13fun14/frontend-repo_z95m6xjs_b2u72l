export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/5 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-300">
          <p>© {year} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:underline underline-offset-4">Home</a>
            <a href="#projects" className="hover:underline underline-offset-4">Projects</a>
            <a href="#contact" className="hover:underline underline-offset-4">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

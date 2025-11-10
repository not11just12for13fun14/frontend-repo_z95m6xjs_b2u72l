import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get('name');
    setStatus(`Thanks ${name}! I’ll get back to you shortly.`);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-emerald-500" />
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Let’s connect</h2>
        </div>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300">
          Have a project in mind or just want to say hi? Drop a message and I’ll respond soon.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              required
              name="name"
              placeholder="Your name"
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/60"
            />
            <input
              required
              type="email"
              name="email"
              placeholder="Your email"
              className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/60"
            />
          </div>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Tell me a bit about your project..."
            className="w-full rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/60"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-500 transition"
          >
            Send message <Send className="h-4 w-4" />
          </button>
          {status && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

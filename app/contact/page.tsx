'use client';

export default function Contact() {
  return (
    <main className="flex-1 bg-white dark:bg-zinc-950">
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">Get In Touch</h2>

        <div className="max-w-2xl">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            Interested in collaborating or want to learn more about our work? We'd love to hear from you.
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-900"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-900"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded bg-white dark:bg-zinc-900 h-32"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20 py-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>&copy; 2024 Aburanem. All rights reserved    |   info@alexandergad.art</p>
      </footer>
    </main>
  );
}

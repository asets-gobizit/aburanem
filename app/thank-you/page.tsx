'use client';

import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="flex-1 bg-white dark:bg-zinc-950">
      <section className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-light tracking-tight mb-6">Thank You</h1>
        <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-12">
          Thank you for getting in touch. Your message has been sent.
        </p>
        <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-8">
          We&apos;ll be in touch soon.
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
        >
          Return Home
        </Link>
      </section>

    </main>
  );
}

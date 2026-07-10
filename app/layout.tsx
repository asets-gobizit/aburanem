import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aburanem - Art Portfolio",
  description: "Professional art and animation portfolio featuring vibrant abstract art and digital creations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950">
        <header className="border-b border-zinc-200 dark:border-zinc-800">
          <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-light tracking-wider hover:text-zinc-600 dark:hover:text-zinc-300">ALEXANDER GAD</Link>
            <div className="flex gap-8 text-sm font-medium">
              <Link href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300">Home</Link>
              <Link href="/#portfolio" className="hover:text-zinc-600 dark:hover:text-zinc-300">Portfolio</Link>
              <Link href="/selected-works" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300">Selected Works</Link>
              <Link href="/about" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300">About</Link>
              <Link href="/contact" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20 py-12 px-8 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <span>
              Built By{" "}
              <a
                href="https://www.gobizit.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-zinc-800 underline underline-offset-4 transition hover:text-black dark:text-zinc-200 dark:hover:text-white"
              >
                GoBizit.ai
              </a>
            </span>
            <span aria-hidden="true">|</span>
            <span>&copy; 2024 Aburanem. All rights reserved</span>
            <span aria-hidden="true">|</span>
            <a
              href="mailto:info@alexandergad.art"
              className="transition hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              info@alexandergad.art
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}

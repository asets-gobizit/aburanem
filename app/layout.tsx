import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
            <a href="/" className="text-2xl font-light tracking-wider hover:text-zinc-600 dark:hover:text-zinc-300">ALEXANDER GAD</a>
            <div className="flex gap-8 text-sm font-medium">
              <a href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300">Home</a>
              <a href="/#portfolio" className="hover:text-zinc-600 dark:hover:text-zinc-300">Portfolio</a>
              <a href="/selected-works" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300">Selected Works</a>
              <a href="/about" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300">About</a>
              <a href="/contact" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300">Contact</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

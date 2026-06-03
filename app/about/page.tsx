'use client';

import Image from "next/image";

export default function About() {
  return (
    <main className="flex-1 bg-white dark:bg-zinc-950">
      <section className="w-full py-20">
        <div className="max-w-7xl mx-auto px-8">
          {/* Featured Image */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-2xl h-96">
              <Image
                src="/graphics/4ffbba_1c5e3868b8db4f8c8a846253fe346163f000.jpg"
                alt="The Intuitive Tectonics of Alexander Gad"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              THE INTUITIVE TECTONICS OF ALEXANDER GAD (B. 1973)
            </h2>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed text-center">
              Exploring the boundaries between art, architecture, and human perception through bold visual compositions and dynamic spatial relationships.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

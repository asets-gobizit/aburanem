'use client';

import Image from "next/image";
import { useState } from "react";

const artistStatement = `My practice is a process of emotional excavation. I am a digger. I enter a theme or a material with total intensity and stay with it until it resists me, until it refuses further manipulation. Only then do I surface and begin again. My practice functions as a ritual of ontological fixation; a deliberate attempt to reach the Kern, the irreducible core of a moment, a state, or a self, and crystallize it into form.

I don't want to hold to a particular narrative; I only enjoy the process of diving. Heavy oils, burned plastic on metal, found wood, mirrors, cloth-materials are chosen for their capacity to endure confrontation. The surface must survive pressure, abrasion, insistence. There is a necessary aggression in this collision a controlled violence required to break through the surface and reach the core.

What interests me is the endurance of a sudden idea while the material continues to respond in a way that is aesthetically attractive to me.

I work primarily on a large scale in order to bypass control. Scale forces the body to participate. In that state, the painting stops being obedient and begins to assert itself. It pushes back. It dictates its own evolution.

I have zero loyalty to any fixed language. For me, it is more crucial to remain in a permanent state of search than to claim something fixed. The work is not a conclusion. It is evidence of that refusal.`;

const fabricWorks = [
  { image: '/graphics/selected-works/fabric-01.jpg', dimensions: '150×200 cm', medium: 'Fabric' },
  { image: '/graphics/selected-works/fabric-02.jpg', dimensions: '200×150 cm (2 works)', medium: 'Fabric' },
  { image: '/graphics/selected-works/fabric-03.jpg', dimensions: '225×300 cm', medium: 'Fabric' },
  { image: '/graphics/selected-works/fabric-04.jpg', dimensions: '200×225 cm / 150×200 cm (2 works)', medium: 'Fabric' },
];

const metalWorks = [
  { image: '/graphics/selected-works/metal-00.jpg', dimensions: '100×215 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/metal-01.jpg', dimensions: '150×200 cm (2 works)', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/metal-02.jpg', dimensions: '200×300 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/metal-03.jpg', dimensions: '150×150 cm (2 works)', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/metal-04.jpg', dimensions: '150×300 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/metal-05.jpg', dimensions: '75×215 cm', medium: 'Oil on aluminum' },
  { image: '/graphics/selected-works/metal-06.jpg', dimensions: '150×300 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/metal-07.jpg', dimensions: '150×200 cm', medium: 'Mixed media on aluminum' },
];

export default function SelectedWorks() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allWorks = [...fabricWorks, ...metalWorks];
  const selected = allWorks[selectedIndex];

  function handlePrev() {
    setSelectedIndex(i => (i === 0 ? allWorks.length - 1 : i - 1));
  }

  function handleNext() {
    setSelectedIndex(i => (i === allWorks.length - 1 ? 0 : i + 1));
  }

  return (
    <main className="flex-1 bg-white dark:bg-zinc-950">
      <section className="max-w-7xl mx-auto px-8 py-12">
        {/* Artist Statement */}
        <div className="mb-16 pb-12">
          <h3 className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">Artist Statement</h3>

          {/* Statement Image - Full Width */}
          <div className="relative w-full h-40 md:h-64 mb-8 flex items-center justify-center">
            <Image
              src="/graphics/selected-works/artist-statement.png"
              alt="Artist Statement Visual"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div className="space-y-4 max-w-4xl">
            {artistStatement.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Main Gallery Area - Full Width */}
        <div className="w-full mb-8">
            <div className="relative w-full h-64 md:h-80 overflow-hidden bg-white flex items-center justify-center">
              <Image
                src={selected.image}
                alt={`Untitled — ${selected.medium}`}
                fill
                className="object-contain"
                priority
              />
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 transition text-5xl font-light z-10 drop-shadow-lg"
                aria-label="Previous"
              >
                ‹
              </button>
              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white hover:text-zinc-300 transition text-5xl font-light z-10 drop-shadow-lg"
                aria-label="Next"
              >
                ›
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-[5px] mt-4 overflow-x-auto">
              {allWorks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`relative flex-shrink-0 w-24 h-16 overflow-hidden transition-opacity ${
                    selectedIndex === index ? 'ring-2 ring-black dark:ring-white' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`Artwork ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20 py-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>&copy; 2024 Aburanem. All rights reserved    |   info@alexandergad.art</p>
      </footer>
    </main>
  );
}

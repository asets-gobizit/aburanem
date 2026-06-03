'use client';

import Image from "next/image";
import { useState } from "react";

const artistStatement = `My practice is a process of emotional excavation. I am a digger. I enter a theme or a material with total intensity and stay with it until it resists me, until it refuses further manipulation. Only then do I surface and begin again. My practice functions as a ritual of ontological fixation; a deliberate attempt to reach the Kern, the irreducible core of a moment, a state, or a self, and crystallize it into form.

I don't want to hold to a particular narrative; I only enjoy the process of diving. Heavy oils, burned plastic on metal, found wood, mirrors, cloth-materials are chosen for their capacity to endure confrontation. The surface must survive pressure, abrasion, insistence. There is a necessary aggression in this collision a controlled violence required to break through the surface and reach the core.

What interests me is the endurance of a sudden idea while the material continues to respond in a way that is aesthetically attractive to me.

I work primarily on a large scale in order to bypass control. Scale forces the body to participate. In that state, the painting stops being obedient and begins to assert itself. It pushes back. It dictates its own evolution.

I have zero loyalty to any fixed language. For me, it is more crucial to remain in a permanent state of search than to claim something fixed. The work is not a conclusion. It is evidence of that refusal.`;

const fabricWorks = [
  { image: '/graphics/selected-works/Fabric-1- 150x200.png', dimensions: '150×200 cm', medium: 'Fabric' },
  { image: '/graphics/selected-works/Fabric-2- 150x200.png', dimensions: '150×200 cm', medium: 'Fabric' },
  { image: '/graphics/selected-works/Fabric-3- 225x300.png', dimensions: '225×300 cm', medium: 'Fabric' },
  { image: '/graphics/selected-works/Fabric-4- 200x225 & 150X200.png', dimensions: '200×225 & 150×200 cm', medium: 'Fabric' },
];

const metalWorks = [
  { image: '/graphics/selected-works/Metal-1- 100X215.png', dimensions: '100×215 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/Metal-2- 150X200.png', dimensions: '150×200 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/Metal-3- 200X300.png', dimensions: '200×300 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/Metal-4- 200X300.png', dimensions: '200×300 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/Metal-5- 150X150.png', dimensions: '150×150 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/Metal-6- 150X300.png', dimensions: '150×300 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/Metal-7- 75X215.png', dimensions: '75×215 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/Metal-8- 150X300.png', dimensions: '150×300 cm', medium: 'Mixed media on aluminum' },
  { image: '/graphics/selected-works/Metal-9- 150X200.png', dimensions: '150×200 cm', medium: 'Mixed media on aluminum' },
];

export default function SelectedWorks() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('fabric');
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const currentWorks = activeTab === 'fabric' ? fabricWorks : metalWorks;
  const selected = currentWorks[selectedIndex];

  function handlePrev() {
    setSelectedIndex(i => (i === 0 ? currentWorks.length - 1 : i - 1));
  }

  function handleNext() {
    setSelectedIndex(i => (i === currentWorks.length - 1 ? 0 : i + 1));
  }

  function switchTab(tab: string) {
    setActiveTab(tab);
    setSelectedIndex(0);
  }

  function openLightbox() {
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
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

        {/* Tabs */}
        <div className="max-w-7xl mx-auto px-8 mb-8 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex gap-8">
            <button
              onClick={() => switchTab('fabric')}
              className={`pb-4 text-sm font-medium tracking-wide transition ${
                activeTab === 'fabric'
                  ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
            >
              FABRIC WORKS
            </button>
            <button
              onClick={() => switchTab('metal')}
              className={`pb-4 text-sm font-medium tracking-wide transition ${
                activeTab === 'metal'
                  ? 'text-black dark:text-white border-b-2 border-black dark:border-white'
                  : 'text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300'
              }`}
            >
              METAL WORKS
            </button>
          </div>
        </div>

        {/* Main Gallery Area - Full Width */}
        <div className="w-full mb-8">
            <div className="relative w-full h-64 md:h-80 overflow-hidden bg-white flex items-center justify-center cursor-pointer hover:opacity-90 transition" onClick={openLightbox}>
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

            {/* Dimensions and Medium */}
            <div className="max-w-7xl mx-auto px-8 mt-4">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Untitled · {selected.medium} · {selected.dimensions}
              </p>
            </div>

            {/* Thumbnails */}
            <div className="max-w-7xl mx-auto px-8 mt-6">
              <div className="flex gap-[5px] overflow-x-auto">
                {currentWorks.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedIndex(index);
                      openLightbox();
                    }}
                    className={`relative flex-shrink-0 w-24 h-16 overflow-hidden transition-opacity cursor-pointer ${
                      selectedIndex === index ? 'ring-2 ring-black dark:ring-white' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={`Artwork ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs px-1 py-0.5 text-center">
                      {item.dimensions}
                    </div>
                  </button>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20 py-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>&copy; 2024 Aburanem. All rights reserved    |   info@alexandergad.art</p>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition text-3xl z-50 font-light"
              aria-label="Close"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
              <Image
                src={selected.image}
                alt={`Untitled — ${selected.medium}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-5xl font-light z-40"
              aria-label="Previous"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition text-5xl font-light z-40"
              aria-label="Next"
            >
              ›
            </button>

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white text-sm">
              <p>Untitled · {selected.medium} · {selected.dimensions}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

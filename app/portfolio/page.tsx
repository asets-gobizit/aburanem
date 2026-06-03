'use client';

import Image from "next/image";
import { useState } from "react";

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(portfolioItems[0]);

  return (
    <main className="flex-1 bg-white dark:bg-zinc-950">
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12">Portfolio</h2>

        {/* Large Featured Image */}
        <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden bg-gray-900 mb-8">
          <Image
            src={selectedImage.image}
            alt={selectedImage.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[5px]">
          {portfolioItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(item)}
              className={`relative h-40 overflow-hidden rounded-sm cursor-pointer transition-opacity ${
                selectedImage.image === item.image ? 'ring-2 ring-black dark:ring-white' : 'opacity-80 hover:opacity-100'
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>

        {/* Image Title */}
        <div className="mt-8">
          <h3 className="text-2xl font-medium">{selectedImage.title}</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mt-2">{selectedImage.description}</p>
        </div>
      </section>
    </main>
  );
}

const portfolioItems = [
  {
    title: "Abstract Composition I",
    description: "Digital illustration with flowing abstract forms",
    image: "/graphics/4ffbba_9c36338b531f442a8539ed77a0dec57c~mv2.jpg",
  },
  {
    title: "Abstract Composition II",
    description: "Experimental color and texture exploration",
    image: "/graphics/4ffbba_8ac531f19d4443d1aba97e2282837453~mv2.jpg",
  },
  {
    title: "Abstract Composition III",
    description: "Dynamic digital artwork with vibrant palette",
    image: "/graphics/4ffbba_3335b75d90a64bae993af4d8e8b7b1da~mv2.jpg",
  },
  {
    title: "Abstract Composition IV",
    description: "Mixed media digital creation",
    image: "/graphics/4ffbba_fc82e879f3944692aa3b9adf540ed5d8~mv2 (1).jpg",
  },
  {
    title: "Abstract Composition V",
    description: "Layered abstract digital art",
    image: "/graphics/4ffbba_bd6a8bdf5678466a82b2370274e71d6c~mv2.jpg",
  },
  {
    title: "Abstract Composition VI",
    description: "Contemporary abstract illustration",
    image: "/graphics/4ffbba_b0f63d66fdf146b2b08b145e1fb30ec3~mv2 (1).jpg",
  },
];

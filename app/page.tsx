'use client';

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1 bg-white dark:bg-zinc-950">
      {/* Hero Section with Video Background */}
      <section className="relative w-full py-20 flex items-center justify-center bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="flex flex-col gap-4">
              <h2 className="text-5xl md:text-6xl font-light tracking-tight">
                Vibrant Abstract Art
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A collection of artwork featuring abstract illustrations and colors in vibrant tones. Each piece explores the intersection of digital artistry and creative expression through bold compositions and dynamic color palettes.
              </p>
            </div>

            {/* Right Video */}
            <div className="relative w-full h-96 rounded-lg overflow-hidden bg-black">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/graphics/Home Avganim 1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h3 className="text-3xl font-light mb-12">Featured Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative w-full h-64 overflow-hidden rounded-lg mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-xl font-medium">{item.title}</h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-20 py-12 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <p>&copy; 2024 Aburanem. All rights reserved.</p>
      </footer>
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

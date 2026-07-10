'use client';

import Image from "next/image";

export default function About() {
  return (
    <main className="flex-1 bg-white dark:bg-zinc-950">
      <section className="w-full py-20">
        <div className="max-w-4xl mx-auto px-8">
          {/* Featured Triangle Image */}
          <div className="flex justify-center mb-12">
            <div
              className="relative w-[461px] h-[461px] md:w-[553px] md:h-[553px]"
              style={{
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)',
              }}
            >
              <Image
                src="/graphics/triangle-about.avif"
                alt="The Intuitive Tectonics of Alexander Gad"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide uppercase">
              THE INTUITIVE TECTONICS OF ALEXANDER GAD (B. 1973)
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
            <p>
              THE CREATIVE OUTPUT OF GAD AVGANIM (B. 1973) IS INSPIRING BY AN INTUITIVE IMPULSE—A VIBRATION THAT DEMANDS EXPRESSION. GAD HONED HIS CRAFT OVER DECADES OF INTENSIVE STUDIO WORK, CREATING A SAFE SPACE TO EXPLORE MATERIALS, TEXTURES, COLOR, SIZE AND THEIR INTERCONNECTIONS.
            </p>

            <p>
              A CENTRAL ASPECT OF HIS ART IS A PROFOUND CONNECTION TO FOUND MATERIALS. INSTEAD OF USING CONVENTIONAL CANVAS ALONE, HE FINDS SUBSTITUTES TO PAINT ON, SUCH AS META SHEETS AND WOOD COLLECTED FROM DISCARDED INDUSTRIAL WASTE AND ROADSIDES. THIS PRACTICE ALLOWS HIM TO UTILIZE SURFACES THAT CARRY THE HISTORY OF THEIR PREVIOUS LIFE, WHILE ALSO PROVIDING A RIGID GROUND THAT CAN WITHSTAND HIS PHYSICALLY AGGRESSIVE EXPRESSION. THIS CHOICE OF MATERIAL IS DEEPLY PERSONAL, ROOTED IN HIS CHILDHOOD WORK AT A METAL FABRICATING FACTORY, LINKING HIS ART DIRECTLY TO HIS HISTORY, AND GIVING IT A PLATFORM TO REWRITE HIS STORY.
            </p>

            <p>
              GAD WORKS WITH A WIDE MATERIAL PALETTE, INCLUDING PIGMENTS, SAND, OIL, AND ANYTHING HE CAN GRAB. HE FUSES THESE UNCONVENTIONAL ELEMENTS TO BUILD COMPOSITIONS THAT ARE BOTH VISUALLY BALANCED AND SUBTLY CONVEY A DIMENSION OF UNEASE.
            </p>

            <p>
              HIS ART REFLECTS AN INNER TENSION BETWEEN SURRENDER AND CONTROL, LOVING AND HATING, BUILDING AND DESTROYING, MEANINGFUL AND MEANINGLESS, COMMITMENT AND FREEDOM. THROUGH HIS WORK HE TRIES TO ACCEPT THE TENSION THAT EXISTS BETWEEN HIS INNER WORLD AND THE OUTSIDE WORLD, AND THE DIFFICULTY HE FINDS IN THE INTEGRATION BETWEEN THEM. WHILE THRIVING FOR AUTHENTICITY, ON ONE HAND, HIS ABSTRACT WORKS EXPRESS A DESIRE FOR TOTAL ABSORPTION INTO THE MATERIAL. ON THE OTHER, HIS FORMALISTIC WORKS IMPOSE CLEAR RULES AND BOUNDARIES. THIS CONFLICT RESOLVES IN THE THREE-DIMENSIONAL, TECTONIC NATURE OF HIS PIECES. THROUGH A PERSISTENT STUDIO EFFORT, HE PUSHES THE MATERIALS UNTIL THEY DETACH FROM THE SURFACE, ALLOWING &quot;FIGURES FROM THE DEPTHS&quot; TO EMERGE, BORN FROM THE COMPLEX LAYERING OF MATTER, MEMORY, AND IMPULSE.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

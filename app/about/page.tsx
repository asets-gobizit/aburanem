'use client';

export default function About() {
  return (
    <main className="flex-1 bg-white dark:bg-zinc-950">
      <section className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">About Aburanem</h2>
        <div className="prose prose-invert max-w-3xl">
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Aburanem is a creative platform dedicated to exploring the boundaries of digital art and animation.
            Our work focuses on vibrant abstract compositions that celebrate color, movement, and contemporary visual expression.
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
            Each piece is crafted with intention, blending traditional artistic principles with cutting-edge digital techniques.
            We believe in the power of bold color palettes and dynamic compositions to evoke emotion and inspire creativity.
          </p>
        </div>
      </section>
    </main>
  );
}

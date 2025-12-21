import type { Route } from "./+types/about";
import { Link } from "react-router";

const bioParagraphs = [
  "Mike Holm never set out to be a chameleon, but music kept reshaping him. He first found his voice behind a microphone, chasing hooks and harmonies as a singer before rhythm took over and he moved behind the drum kit. That shift unlocked a new obsession with groove, dynamic, and feel, grounding his songwriting in pulse as much as melody.",
  "Today, he writes like a multi-genre cartographer, sketching bridges between indie rock energy, soulful pop flourishes, and cinematic textures. The drummer in him keeps every chorus honest, while the vocalist in him still chases lines that stick. It’s a toolkit built from miles on the road, late-night studio experiments, and a curiosity that refuses to stay in one lane.",
  "Armed with guitars, synths, drums, and whatever else a song needs, Mike now produces from the inside out—crafting arrangements that balance grit and gloss, storytelling and motion. It’s the sound of a singer-turned-drummer-turned-multi-instrumentalist who learned that the most interesting destinations come from following the detours.",
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About | MIKE HOLM MUSIC" },
    {
      name: "description",
      content:
        "Meet Mike Holm: singer-turned-drummer-turned multi-genre songwriter and multi-instrumentalist crafting rhythmic, melodic stories.",
    },
  ];
}

export default function About() {
  return (
    <main className="min-h-screen pt-12 pb-16 px-4 flex justify-center">
      <div className="max-w-3xl w-full flex flex-col gap-8">
        <header className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-400">About</p>
          <h1 className="text-4xl md:text-5xl font-semibold">Mike Holm</h1>
          <p className="text-lg text-gray-200">
            Singer turned drummer turned multi-genre songwriter and multi-instrumentalist.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              to="/"
              className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white hover:bg-white/5 transition"
            >
              Home
            </Link>
            <a
              href="https://linktr.ee/sandcastles"
              className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-white hover:bg-white/5 transition"
              rel="noreferrer"
            >
              Listen
            </a>
          </div>
        </header>

        <section className="flex flex-col gap-6 text-lg leading-relaxed text-gray-100">
          {bioParagraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </section>
      </div>
    </main>
  );
}

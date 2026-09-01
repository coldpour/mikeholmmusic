import { useEffect } from "react";
import { Link } from "react-router";
import type { Route } from "./+types/drummers";

const youtubeVideos = [
  {
    drummer: "Larnell Lewis",
    title: "Snarky Puppy — What About Me? (We Like It Here)",
    videoId: "fuhHU_BZXSk",
  },
  {
    drummer: "Benny Greb",
    title: "Grebfruit",
    videoId: "2DdrwLk3pW8",
  },
  {
    drummer: "Carter Beauford",
    title: "Dave Matthews Band — Grey Street (Live)",
    videoId: "u8aswqBTZx4",
  },
  {
    drummer: "John Blackwell",
    title: "Everlasting Now",
    videoId: "X6pLio3ulF8",
  },
  {
      drummer: "Paul Seow",
      title: "Asian Guy Plays Drums On A Keyboard",
      videoId: "Ofn2A1p13Sg",
  },    
] as const;

const instagramPermalink = "https://www.instagram.com/reel/Dctt7CaOxJA/";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Favorite Drummers | Mike Holm Music" },
    {
      name: "description",
      content: "Drum performances and videos that inspire Mike Holm.",
    },
  ];
}

export default function DrummersPage() {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );
    if (existingScript) {
      existingScript.addEventListener("load", () => window.instgrm?.Embeds.process(), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="flex justify-center px-4 pb-12 pt-8 md:pt-16">
      <div className="flex w-full max-w-3xl flex-col gap-8 md:gap-12">
        <Link to="/" className="w-fit text-sm underline underline-offset-4">
          Back to home
        </Link>

        <header className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
            Inspiration
          </p>
          <h1 className="text-5xl font-thin md:text-7xl">Favorite drummers</h1>
          <p className="max-w-2xl text-sm leading-6 text-gray-300 md:text-base">
            Performances I keep coming back to. 
          </p>
        </header>

        <section aria-label="YouTube drum videos">
          <ul className="flex flex-col gap-10 md:gap-14">
            {youtubeVideos.map(({ drummer, title, videoId }) => (
              <li key={videoId} className="flex flex-col gap-3">
                <div>
                  <h2 className="text-2xl font-light md:text-3xl">{drummer}</h2>
                  <p className="mt-1 text-sm text-gray-400">{title}</p>
                </div>
                <div className="aspect-video overflow-hidden rounded-xl border border-gray-700 bg-black shadow-2xl">
                  <iframe
                    className="h-full w-full"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`${drummer}: ${title}`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3" aria-labelledby="eric-moore">
          <div>
            <h2 id="eric-moore" className="text-2xl font-light md:text-3xl">
              Eric Moore II
            </h2>
            <p className="mt-1 text-sm text-gray-400">
		Get Ur Freak On - Missy Elliot
            </p>
          </div>
          <div className="flex min-h-[480px] justify-center overflow-hidden rounded-xl border border-gray-700 bg-white py-2 shadow-2xl">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned=""
              data-instgrm-permalink={instagramPermalink}
              data-instgrm-version="14"
              style={{ margin: 0, maxWidth: 540, minWidth: 326, width: "99.375%" }}
            >
              <a href={instagramPermalink} target="_blank" rel="noreferrer">
                View Patrick Abdo’s post featuring Eric Moore II on Instagram
              </a>
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  );
}

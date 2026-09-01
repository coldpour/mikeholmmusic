import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/drummers";

type YouTubeItem = {
  type: "youtube";
  id: string;
  drummer: string;
  title: string;
  videoId: string;
  startSeconds?: number;
};

type InstagramItem = {
  type: "instagram";
  id: string;
  drummer: string;
  title: string;
  permalink: string;
};

type MediaItem = YouTubeItem | InstagramItem;

const mediaItems: readonly MediaItem[] = [
  {
    type: "youtube",
    id: "larnell-lewis-what-about-me",
    drummer: "Larnell Lewis",
    title: "Snarky Puppy — What About Me? (We Like It Here)",
    videoId: "fuhHU_BZXSk",
  },
  {
    type: "youtube",
    id: "benny-greb-grebfruit",
    drummer: "Benny Greb",
    title: "Grebfruit",
    videoId: "2DdrwLk3pW8",
  },
  {
    type: "youtube",
    id: "carter-beauford-grey-street",
    drummer: "Carter Beauford",
    title: "Dave Matthews Band — Grey Street (Live)",
    videoId: "u8aswqBTZx4",
  },
  {
    type: "youtube",
    id: "john-blackwell-everlasting-now",
    drummer: "John Blackwell",
    title: "Everlasting Now",
    videoId: "X6pLio3ulF8",
  },
  {
    type: "youtube",
    id: "paul-seow-keyboard-drums",
    drummer: "Paul Seow",
    title: "Asian Guy Plays Drums On A Keyboard",
    videoId: "Ofn2A1p13Sg",
  },
  {
    type: "youtube",
    id: "aaron-spears-caught-up",
    drummer: "Aaron Spears",
    title: "Usher — Caught Up",
    videoId: "YIX5rkirdl8",
    startSeconds: 90,
  },
  {
    type: "youtube",
    id: "nate-smith-zildjian-underground",
    drummer: "Nate Smith",
    title: "Zildjian Underground",
    videoId: "ak410L2Z5d8",
  },
  {
    type: "youtube",
    id: "david-garibaldi-squib-cakes",
    drummer: "David Garibaldi",
    title: "Tower of Power — Squib Cakes",
    videoId: "zKoZeCH-TAk",
  },
  {
    type: "youtube",
    id: "chad-smith-cant-stop",
    drummer: "Chad Smith",
    title: "Red Hot Chili Peppers — Can’t Stop",
    videoId: "P28wZDVvPO0",
  },
  {
    type: "youtube",
    id: "travis-barker-first-date",
    drummer: "Travis Barker",
    title: "Blink-182 — First Date",
    videoId: "Rv01oxx1ZyU",
  },
  {
    type: "instagram",
    id: "eric-moore-get-ur-freak-on",
    drummer: "Eric Moore II",
    title: "Missy Elliott — Get Ur Freak On",
    permalink: "https://www.instagram.com/reel/Dctt7CaOxJA/",
  },
];

function shuffled<T>(items: readonly T[]) {
  const result = [...items];

  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }

  return result;
}

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

export function loader() {
  return { mediaItems: shuffled(mediaItems) };
}

export default function DrummersPage() {
  const { mediaItems } = useLoaderData<typeof loader>();

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

        <section aria-label="Favorite drummer videos">
          <ul className="flex flex-col gap-10 md:gap-14">
            {mediaItems.map((item) => (
              <li key={item.id}>
                {item.type === "youtube" ? (
                  <YouTubeVideo item={item} />
                ) : (
                  <InstagramVideo item={item} />
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}

function YouTubeVideo({ item }: { item: YouTubeItem }) {
  const startQuery = item.startSeconds ? `?start=${item.startSeconds}` : "";

  return (
    <article className="flex flex-col gap-3">
      <div>
        <h2 className="text-2xl font-light md:text-3xl">{item.drummer}</h2>
        <p className="mt-1 text-sm text-gray-400">{item.title}</p>
      </div>
      <div className="aspect-video overflow-hidden rounded-xl border border-gray-700 bg-black shadow-2xl">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${item.videoId}${startQuery}`}
          title={`${item.drummer}: ${item.title}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </article>
  );
}

function InstagramVideo({ item }: { item: InstagramItem }) {
  return (
    <article className="flex flex-col gap-3">
      <div>
        <h2 className="text-2xl font-light md:text-3xl">{item.drummer}</h2>
        <p className="mt-1 text-sm text-gray-400">{item.title}</p>
      </div>
      <div className="flex min-h-[480px] justify-center overflow-hidden rounded-xl border border-gray-700 bg-white py-2 shadow-2xl">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned=""
          data-instgrm-permalink={item.permalink}
          data-instgrm-version="14"
          style={{ margin: 0, maxWidth: 540, minWidth: 326, width: "99.375%" }}
        >
          <a href={item.permalink} target="_blank" rel="noreferrer">
            View Patrick Abdo’s post featuring {item.drummer} on Instagram
          </a>
        </blockquote>
      </div>
    </article>
  );
}

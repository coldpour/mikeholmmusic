import { useEffect } from "react";
import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/drummers";

type YouTubeItem = {
  type: "youtube";
  id: string;
  drummer: string;
  title: string;
  annotation: readonly string[];
  links?: readonly DrummerLink[];
  videoId: string;
  startSeconds?: number;
};

type InstagramItem = {
  type: "instagram";
  id: string;
  drummer: string;
  title: string;
  annotation: readonly string[];
  links?: readonly DrummerLink[];
  permalink: string;
  sharedBy?: string;
};

type DrummerLink = {
  label: string;
  href: string;
};

type MediaItem = YouTubeItem | InstagramItem;

const mediaItems: readonly MediaItem[] = [
  {
    type: "youtube",
    id: "larnell-lewis-what-about-me",
    drummer: "Larnell Lewis",
    title: "Snarky Puppy — What About Me? (We Like It Here)",
    annotation: [
      "When I first saw this performance, I was floored. Larnell is one of the most innovative players working today. The way he bends time in his solos—and the way his crashes land somewhere other than where I expect, yet still fit and support the music—is endlessly fun to hear. The performance is even more astonishing knowing that he learned most of the set on the flight to the recording in the Netherlands.",
      "In other performances, he uses a hi-hat technique that almost feels like a reverse snare effect: sliding a stick along the edge while opening the cymbals to create a rising swish, then ending it with a perfectly placed snare crack. It has become a signature bit of vocabulary in his solos, and it has been fun to hear other drummers pick it up too.",
    ],
    links: [
      { label: "Larnell Lewis Music", href: "https://www.larnelllewismusic.com/" },
    ],
    videoId: "fuhHU_BZXSk",
  },
  {
    type: "youtube",
    id: "benny-greb-grebfruit",
    drummer: "Benny Greb",
    title: "Grebfruit",
    annotation: [
      "I love Benny’s laid-back feel—similar to what first grabbed me about Jordan Rose—but Benny has been developing that language for a long time. He gets a remarkable amount of vocabulary from a compact kit: just a handful of drums and cymbals, all made to feel surprising and unpredictable in exactly the right way.",
      "His course The Art & Science of Groove is also worth seeking out. It gets beneath the notes and into the feel, time, and awareness that make a groove convincing in the first place.",
    ],
    links: [
      { label: "Benny Greb", href: "https://bennygreb.de/" },
      {
        label: "The Art & Science of Groove",
        href: "https://bennygreb.de/products/?v=7c6d99660c8a",
      },
    ],
    videoId: "2DdrwLk3pW8",
  },
  {
    type: "youtube",
    id: "carter-beauford-grey-street",
    drummer: "Carter Beauford",
    title: "Dave Matthews Band — Grey Street (Live)",
    annotation: [
      "Carter was one of my earliest inspirations to pick up the drums. “Grey Street” still throws me for a loop; I have never learned it, partly because I enjoy keeping the mystery alive. Even after hundreds of listens, the part can still surprise me.",
      "The huge kit, cymbals in every color, effortless movement around the toms, double kick, side snare, and ambidextrous open-handed approach would already be enough—but he brings power, dynamics, orchestration, and backing vocals at the same time. He is far and away one of the most creative and inspiring drummers I have encountered.",
    ],
    links: [
      {
        label: "Carter Beauford interview",
        href: "https://davematthewsband.com/news/modern-drummer-interview-carter-beauford/",
      },
    ],
    videoId: "u8aswqBTZx4",
  },
  {
    type: "youtube",
    id: "john-blackwell-everlasting-now",
    drummer: "John Blackwell",
    title: "Everlasting Now",
    annotation: [
      "I have watched this video well over a hundred times, and it inspired me to learn the drum part. Somehow I did not realize “The Everlasting Now” was a Prince song until years later, when I stumbled across it on the album—which I really should have guessed, given how long John played with Prince.",
      "The china cymbal behind him, the stick flips, the groove: the playing and the showmanship were hugely inspiring to me. His four-hour Technique, Grooving and Showmanship program is also worth watching; he treats presentation as part of the craft without ever losing sight of time and feel.",
    ],
    links: [
      {
        label: "Technique, Grooving and Showmanship",
        href: "https://www.halleonard.com/product/320349/john-blackwell-technique-grooving-and-showmanship",
      },
    ],
    videoId: "X6pLio3ulF8",
  },
  {
    type: "youtube",
    id: "paul-seow-keyboard-drums",
    drummer: "Paul Seow",
    title: "Asian Guy Plays Drums On A Keyboard",
    annotation: [
      "Paul is not playing a traditional drum kit here—and I have not dug deeply into his background—but I stumbled across this while researching a Prodigy keyboard and found the performance extraordinary. The drumming is simply too good not to include. It is a useful reminder that the musical idea matters more than the surface you use to play it.",
    ],
    videoId: "Ofn2A1p13Sg",
  },
  {
    type: "youtube",
    id: "aaron-spears-caught-up",
    drummer: "Aaron Spears",
    title: "Usher — Caught Up",
    annotation: [
      "This “Caught Up” performance was one of the first drum videos I remember watching, and it absolutely helped inspire me to take up the instrument. It is still on my list of solos and parts to transcribe so I can work some of this vocabulary into my own playing.",
      "It is a mind-blowing performance over a relatively simple loop, and a perfect example of the flair, drive, and creativity a drummer can add to a song. Aaron was always clear that chops still have to serve the music; this festival setting simply gave him room to show how far that idea could stretch. A must-watch.",
    ],
    links: [
      {
        label: "Aaron Spears lessons and tribute",
        href: "https://www.drumeo.com/beat/?p=33712",
      },
    ],
    videoId: "YIX5rkirdl8",
    startSeconds: 90,
  },
  {
    type: "youtube",
    id: "nate-smith-zildjian-underground",
    drummer: "Nate Smith",
    title: "Zildjian Underground",
    annotation: [
      "I discovered Nate through Vulfpeck’s Madison Square Garden concert and then the Fearless Flyers. His playing can begin simple and understated, but there is a depth underneath it that comes from years spent across jazz, funk, R&B, and plenty more. He lets a pattern grow in complexity and tension until it is pushing into rhythmic territory I have not heard or felt anywhere else.",
      "He does all of that on a small, simple kit, which makes him one of my favorite examples of creativity under constraint. His solo Pocket Change projects take that idea even further: just drums, feel, and an enormous rhythmic imagination.",
    ],
    links: [
      { label: "Nate Smith Music", href: "https://www.natesmithdrums.com/" },
    ],
    videoId: "ak410L2Z5d8",
  },
  {
    type: "youtube",
    id: "david-garibaldi-squib-cakes",
    drummer: "David Garibaldi",
    title: "Tower of Power — Squib Cakes",
    annotation: [
      "“Squib Cakes” is one of my favorite Tower of Power songs, though it is hard to pass up “Soul Vaccination,” “Diggin’ on James Brown,” or any number of grooves from David’s deep catalog. What I appreciate most is that he is never content to merely sit in the pocket and hit two and four.",
      "He is always bringing in something fresh—absorbing rhythms from around the world, layering and recombining them, and creating a language of his own that still holds the whole band together. Complex, disciplined, surprising, and delightful.",
    ],
    links: [
      {
        label: "David Garibaldi at Tower of Power",
        href: "https://www.towerofpower.com/bio/david-garibaldi/",
      },
    ],
    videoId: "zKoZeCH-TAk",
  },
  {
    type: "youtube",
    id: "chad-smith-cant-stop",
    drummer: "Chad Smith",
    title: "Red Hot Chili Peppers — Can’t Stop",
    annotation: [
      "Red Hot Chili Peppers are one of the most-listened-to bands of my life, and Chad’s drumming is a huge part of that. I appreciate not only the way he plays, but the philosophy behind it: every time he starts a song, he leaves enough room for the part to come out a little differently.",
      "He has talked about how that improvisational instinct could make studio work tricky when a producer wanted the exact same take again and again. Some of his parts are simple; others are full of perfectly judged detail. In either case, they are what the song needs—and his flair, humor, and attitude make the whole thing feel alive.",
    ],
    links: [
      {
        label: "Chad Smith on Instagram",
        href: "https://www.instagram.com/chadsmithofficial/",
      },
    ],
    videoId: "P28wZDVvPO0",
  },
  {
    type: "youtube",
    id: "travis-barker-first-date",
    drummer: "Travis Barker",
    title: "Blink-182 — First Date",
    annotation: [
      "Travis is hands-down one of my favorite drummers of all time: the power, angst, strength, and endurance, all on a relatively small kit. It is creativity under constraint at its finest. Where a lot of bands might put a basic beat under a pop-punk song, he brings marching rudiments and orchestration around the whole kit, giving nearly every song its own identity.",
      "Listen for the ride bell and splashing hi-hats woven into verse grooves, or the occasional temple block and melodic tom part. He is rarely content to sit on a stock groove; he is always searching for the point where tension, invention, and support for the song balance each other.",
    ],
    links: [
      { label: "Travis Barker", href: "https://linktr.ee/travisbarker" },
    ],
    videoId: "Rv01oxx1ZyU",
  },
  {
    type: "youtube",
    id: "aron-mellergaardh-sayonara-love",
    drummer: "Aron Mellergårdh",
    title: "Dirty Loops — Sayonara Love",
    annotation: [
      "“Sayonara Love” was one of the first Dirty Loops videos I saw, and Loopified opened up the rest of the band for me. Aron can go completely wild with chops in a way that seems uniquely his. Odd meters and convention never appear to constrain him, and the speed is remarkable.",
      "Pay special attention to the outro groove at the very end. On paper it seems simple; at that tempo, reproducing it with the same feel is anything but.",
    ],
    links: [
      { label: "Dirty Loops", href: "https://www.dirty-loops.com/" },
    ],
    videoId: "Fnl6DMR7Jaw",
  },
  {
    type: "youtube",
    id: "petar-janjic-cory-wong",
    drummer: "Petar Janjic",
    title: "Live with Cory Wong",
    annotation: [
      "Petar has been especially fun to follow because he plays with Cory Wong, one of my favorite contemporary guitarists. His individual groove posts are a delight too—there was one involving a coffee cup one morning that still sticks with me.",
      "His playing is fast, playful, hard-hitting, and driving, but he is always listening to the dynamics. I also love the practical experimentation in his setup, including the yarn streamers draped over cymbals as instant mutes. And, for the people who keep track of these things: he is a lefty.",
    ],
    links: [
      {
        label: "Petar Janjic on Instagram",
        href: "https://www.instagram.com/petarjdrums/",
      },
    ],
    videoId: "VfcNhAEAhGQ",
  },
  {
    type: "youtube",
    id: "jordan-rose-funky-duck",
    drummer: "Jordan Rose",
    title: "Vulfpeck — Funky Duck",
    annotation: [
      "I first encountered Jordan at a Theo Katzman show and was immediately struck by a feel that is somehow laid-back and driving at the same time. His fills were never complicated for complexity’s sake; they were tasteful, supportive, and exactly what the song needed. I had a lot of fun watching him that night.",
      "Later, seeing Maggie Rogers from basically the back wall of Climate Pledge Arena, I was surprised and delighted that I could tell from that far away it was Jordan behind the kit. He absolutely killed the performance. More recently, it has been fun to follow the buildout of Rose Garden, his recording studio, and see him lean further into remote sessions. I am excited to see where his career takes him.",
    ],
    links: [
      { label: "Jordan Rose", href: "https://www.jordanrosedrums.com/" },
      {
        label: "Inside the Rose Garden studio",
        href: "https://www.discussionsinpercussion.com/home/2025/7/1/443-jordan-rose-drummer-for-maggie-rogers-boop-theo-katzman-and-more",
      },
    ],
    videoId: "-2hGq6xOSJw",
  },
  {
    type: "youtube",
    id: "louis-cole-thinking",
    drummer: "Louis Cole",
    title: "Thinking (Live Sesh)",
    annotation: [
      "This is one of my favorite Louis Cole songs. “Thinking” is incredibly catchy, but it also breaks into a full orchestral section—and somehow he fit the orchestra into “some guy’s house,” as the original video describes it. The arrangement, musicianship, camera work, and sheer ambition are all a joy. Keep an eye out for the videographers in beekeeper suits.",
      "And then there is the drumming: absurdly fast, deeply funky, and still light on its feet. Louis is simply one of the fastest and funkiest drummers I have ever seen.",
    ],
    links: [
      {
        label: "Louis Cole on YouTube",
        href: "https://www.youtube.com/@louiscolemusic",
      },
    ],
    videoId: "ZMI1iU7VgyI",
  },
  {
    type: "youtube",
    id: "jas-kayser-bring-backs",
    drummer: "Jas Kayser",
    title: "Alfa Mist — Bring Backs (Live at Metropolis)",
    annotation: [
      "I had not researched Jas much when I found this performance; I was simply impressed. Her playing surprised and delighted me, which is reason enough to highlight it here.",
      "There is plenty more to explore: she studied at Berklee with mentors including Terri Lyne Carrington, Ralph Peterson, and Danilo Pérez, leads her own projects, and has worked with artists ranging from Alfa Mist and Jorja Smith to Lenny Kravitz. This video is a very good doorway in.",
    ],
    links: [
      { label: "Jas Kayser", href: "https://www.jaskayserdrums.com/" },
    ],
    videoId: "15Nqbic6HZs",
    startSeconds: 622,
  },
  {
    type: "youtube",
    id: "anderson-paak-come-down",
    drummer: "Anderson .Paak",
    title: "Come Down",
    annotation: [
      "The first time I heard Anderson .Paak, “Come Down” came on the radio and the bass line and drums grabbed me immediately. I did not even know he was a drummer yet. Of course, I eventually learned that he is an extraordinary drummer as well as an incredible singer, rapper, songwriter, and producer.",
      "What strikes me about this track is how little it needs: there is no conventional snare backbeat driving it, just that kick-and-hi-hat engine pushing the song forward. Other live videos make his chops, fills, and taste much more visible, but this performance shows how funky restraint can be.",
    ],
    links: [
      { label: "Anderson .Paak", href: "https://www.andersonpaak.com/" },
    ],
    videoId: "-OqrcUvrbRY",
    startSeconds: 88,
  },
  {
    type: "instagram",
    id: "eric-moore-get-ur-freak-on",
    drummer: "Eric Moore II",
    title: "Missy Elliott — Get Ur Freak On",
    annotation: [
      "I have followed Eric for a long time, but this recent solo became an immediate favorite. He is playing extremely fast over a simple groove, yet it never feels like a random stream of chops. He spotlights different parts of the kit and different techniques as the solo unfolds, giving the whole performance a larger arc. I love the storytelling in this version.",
      "The other half of the fun is Patrick Abdo, a drum teacher whose energetic play-along videos are always worth watching. Here, he does not lead a single thing—he just stands there, completely mind-blown by Eric’s performance. Check out more from both of them.",
    ],
    links: [
      {
        label: "Eric Moore II on YouTube",
        href: "https://www.youtube.com/@EricMooreIIOfficial",
      },
      {
        label: "Patrick Abdo on Instagram",
        href: "https://www.instagram.com/patrickjabdo/",
      },
    ],
    permalink: "https://www.instagram.com/reel/Dctt7CaOxJA/",
    sharedBy: "Patrick Abdo",
  },
  {
    type: "instagram",
    id: "the-pocket-queen-instagram-reel",
    drummer: "The Pocket Queen",
    title: "Instagram reel",
    annotation: [
      "I stumbled across The Pocket Queen’s videos on Instagram or TikTok, and so many of her loops are surprising and delightful. She fits a huge amount of interesting drum language into a tiny space, and the feel is exquisite.",
      "There is a seemingly endless archive of these compact groove studies, and they are all worth watching. Each one is a reminder that “pocket” is not the absence of complexity—it is the art of making every detail land in exactly the right place.",
    ],
    links: [
      { label: "The Pocket Queen", href: "https://www.thepocketqueen.com/" },
    ],
    permalink: "https://www.instagram.com/reel/DMYk7emhSEc/",
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
      <DrummerAnnotation paragraphs={item.annotation} links={item.links} />
    </article>
  );
}

function InstagramVideo({ item }: { item: InstagramItem }) {
  const fallbackText = item.sharedBy
    ? `View ${item.sharedBy}’s post featuring ${item.drummer} on Instagram`
    : `View ${item.drummer} on Instagram`;

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
            {fallbackText}
          </a>
        </blockquote>
      </div>
      <DrummerAnnotation paragraphs={item.annotation} links={item.links} />
    </article>
  );
}

function DrummerAnnotation({
  paragraphs,
  links,
}: {
  paragraphs: readonly string[];
  links?: readonly DrummerLink[];
}) {
  return (
    <div className="mt-2 border-l border-gray-600 pl-4 md:pl-6">
      <div className="flex flex-col gap-3 text-sm leading-7 text-gray-300 md:text-base">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {links?.length ? (
        <ul aria-label="Keep exploring" className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          {links.map((link) => (
            <li key={link.href}>
              <a
                className="text-sm text-gray-300 underline decoration-gray-600 underline-offset-4 transition-colors hover:text-white hover:decoration-gray-300"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

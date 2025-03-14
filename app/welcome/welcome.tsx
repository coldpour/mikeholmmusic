export function Welcome() {
  const [head, ...rest] = promo;
  return (
    <main className="flex items-center justify-center pt-8 md:pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-4 md:gap-8 min-h-0 max-w-xl px-4">
        <header className="flex flex-1 flex-col items-start gap-5 md:gap-9">
          <h1 className="md:text-8xl text-6xl font-thin">Mike Holm</h1>
          <ul className="flex gap-4 items-center">
            {socials.map(({ href, label, logo: Logo }) => (
              <li key={href}>
                <a
                  className="group flex items-center gap-3 self-stretch leading-normal text-blue-700 hover:underline dark:text-blue-500"
                  href={href}
                  rel="noreferrer"
                >
                  <Logo width="20" />
                </a>
              </li>
            ))}
          </ul>
          <Album {...head} />
        </header>
        <section className="grid grid-cols-2 gap-4">{rest.map(Album)}</section>
        <div className="max-w-[300px] w-full px-12">
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
            <ul>
              {socials.map(({ href, label, logo: Logo }) => (
                <li key={href}>
                  <a
                    className="group flex items-center gap-3 self-stretch p-3 leading-normal  hover:underline"
                    href={href}
                    rel="noreferrer"
                  >
                    <Logo width="20" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p>
          Copyright &copy;{" "}
          <a href="#" className="underline">
            Mike Holm
          </a>{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}

function Album({ href, label, image }: Promo) {
  return (
    <a
      key={href}
      className="flex flex-col items-start gap-4 self-stretch leading-normal transition pb-4 hover:scale-105"
      href={href}
      rel="noreferrer"
    >
      <img src={image} alt={label} className="rounded-md" />
      <h4 className="text-xs md:text-lg">{label}</h4>
    </a>
  );
}

export const InstagramLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="17 17 96 96" {...props}>
    <path d="M65.003 17c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C17.06 50.327 17 51.964 17 65s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97a5.76 5.76 0 105.76 5.758c0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C78.616 89.645 89.65 78.613 89.65 65S78.615 40.35 65.002 40.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z" />
  </svg>
);

export const TikTokLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="50 20 142 163" {...props}>
    <path d="M153.012 74.405c10.947 7.819 24.353 12.42 38.832 12.42V64.902c-8.082-1.72-15.237-5.942-20.617-11.814-9.208-5.743-15.843-15.218-17.788-26.308H133.14v111.239c-.046 12.968-10.576 23.468-23.561 23.468-7.652 0-14.45-3.645-18.755-9.292-7.688-3.878-12.96-11.84-12.96-21.035 0-13.005 10.547-23.548 23.56-23.548 2.493 0 4.896.388 7.15 1.103V86.553c-27.945.577-50.42 23.399-50.42 51.467 0 14.011 5.597 26.713 14.68 35.993 8.195 5.5 18.06 8.707 28.673 8.707 28.445 0 51.505-23.048 51.505-51.479z" />
    <path d="M191.844 64.902v-5.928a38.84 38.84 0 01-20.617-5.887 38.948 38.948 0 0020.617 11.815zM153.439 26.78a39.524 39.524 0 01-.427-3.198V20h-28.028v111.24c-.045 12.967-10.574 23.467-23.56 23.467-3.813 0-7.412-.904-10.6-2.512 4.305 5.647 11.103 9.292 18.755 9.292 12.984 0 23.515-10.5 23.561-23.468V26.78zm-44.864 59.773v-6.311a51.97 51.97 0 00-7.067-.479C73.06 79.763 50 102.811 50 131.24c0 17.824 9.063 33.532 22.835 42.772-9.083-9.28-14.68-21.982-14.68-35.993 0-28.067 22.474-50.889 50.42-51.466z" />
  </svg>
);

export const YouTubeLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 122 85" {...props}>
    <path
      fillRule="evenodd"
      d="M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3zM48.6 24.3v36.4l31.6-18.2z"
    />
  </svg>
);

export const SoundCloudLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32.5 14.13" {...props}>
    <path d="M0.2,8.5l-0.2,1.8l0.2,1.8c0,0.1 0.1,0.1 0.1,0.1c0.1,0 0.1,-0.1 0.1,-0.1l0.3,-1.8l-0.3,-1.8c0,-0.1 -0.1,-0.1 -0.1,-0.1s-0.1,0 -0.1,0.1m1.2,-1.1l-0.3,2.9l0.3,2.9c0,0.1 0.1,0.1 0.1,0.1c0.1,0 0.1,-0.1 0.1,-0.1l0.4,-2.9l-0.4,-2.9c0,-0.1 -0.1,-0.1 -0.1,-0.1l-0.1,0.1m3.8,-0.4l-0.2,3.3l0.2,3.5c0,0.1 0.1,0.2 0.2,0.2s0.2,-0.1 0.2,-0.2l0.4,-3.5l-0.3,-3.3c0,-0.1 -0.1,-0.2 -0.2,-0.2c-0.2,0 -0.3,0.1 -0.3,0.2m-2.5,-0.2l-0.3,3.5l0.3,3.3c0,0.1 0.1,0.2 0.2,0.2c0,0 0.1,-0.1 0.1,-0.2l0.3,-3.3l-0.3,-3.5c0,-0.1 -0.1,-0.2 -0.2,-0.2c0,0.1 -0.1,0.1 -0.1,0.2m1.2,-0.1l-0.3,3.6l0.3,3.4c0,0.1 0.1,0.2 0.2,0.2s0.2,-0.1 0.2,-0.2l0.3,-3.4l-0.3,-3.6c0,-0.1 -0.1,-0.2 -0.2,-0.2s-0.1,0.1 -0.2,0.2m2.6,-1.8l-0.3,5.4l0.3,3.5c0,0.1 0.1,0.2 0.2,0.2c0.2,0 0.3,-0.1 0.3,-0.2l0.3,-3.5l-0.3,-5.4c0,-0.1 -0.1,-0.2 -0.2,-0.2c-0.2,0 -0.3,0.1 -0.3,0.2m1.3,-1.2l-0.2,6.6l0.2,3.5c0,0.2 0.1,0.3 0.3,0.3c0.1,0 0.3,-0.1 0.3,-0.3l0.3,-3.5l-0.3,-6.6c0,-0.2 -0.1,-0.3 -0.3,-0.3c-0.2,0 -0.3,0.1 -0.3,0.3m5.3,-0.3l-0.2,6.9l0.2,3.3c0,0.2 0.2,0.4 0.4,0.4s0.4,-0.2 0.4,-0.4l0.2,-3.3l-0.2,-7c0,-0.2 -0.2,-0.4 -0.4,-0.4c-0.3,0.1 -0.4,0.2 -0.4,0.5m-4,-0.3l-0.2,7.2l0.2,3.4c0,0.2 0.1,0.3 0.3,0.3c0.2,0 0.3,-0.1 0.3,-0.3l0.2,-3.4l-0.2,-7.2c0,-0.2 -0.1,-0.3 -0.3,-0.3c-0.2,0 -0.3,0.2 -0.3,0.3m2.6,0l-0.2,7.2l0.2,3.4c0,0.2 0.2,0.4 0.4,0.4s0.4,-0.2 0.4,-0.4l0.2,-3.4l-0.2,-7.2c0,-0.2 -0.2,-0.4 -0.4,-0.4s-0.4,0.2 -0.4,0.4m-1.3,-0.2l-0.2,7.4l0.2,3.4c0,0.2 0.1,0.3 0.3,0.3c0.2,0 0.3,-0.1 0.3,-0.3l0.2,-3.4l-0.2,-7.4c0,-0.2 -0.2,-0.3 -0.3,-0.3c-0.1,0 -0.3,0.1 -0.3,0.3m4,-0.9l-0.2,8.3l0.2,3.3c0,0.2 0.2,0.4 0.4,0.4s0.4,-0.2 0.4,-0.4l0.2,-3.3l-0.2,-8.3c0,-0.2 -0.2,-0.4 -0.4,-0.4s-0.4,0.2 -0.4,0.4m1.4,-0.7l-0.2,9l0.2,3.3c0,0.2 0.2,0.4 0.4,0.4s0.4,-0.2 0.4,-0.4l0.2,-3.3l-0.2,-9c0,-0.2 -0.2,-0.4 -0.4,-0.4l-0.1,0c-0.2,0 -0.3,0.2 -0.3,0.4m1.6,-0.9c-0.3,0.1 -0.4,0.2 -0.4,0.5l0,12.7c0,0.2 0.2,0.4 0.4,0.5l11.1,0c2.2,0 4,-1.8 4,-4s-1.8,-4 -4,-4c-0.5,0 -1.1,0.1 -1.5,0.3c-0.3,-3.6 -3.3,-6.4 -7,-6.4l-0.5,0c-0.7,0 -1.4,0.2 -2.1,0.4" />
  </svg>
);

export const VenmoLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-10 -10 120.5 127" {...props}>
    <path d="M94.823 0c3.895 6.433 5.651 13.059 5.651 21.429 0 26.696-22.789 61.376-41.285 85.728H16.943L0 5.845l36.991-3.512 8.958 72.09c8.37-13.636 18.699-35.065 18.699-49.675 0-7.997-1.37-13.444-3.511-17.929z" />
  </svg>
);

export const CashAppLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="-7 -5 44 54" {...props}>
    <path d="M25.51,13.79a1.27,1.27,0,0,0,1.8,0l2.5-2.6a1.36,1.36,0,0,0-.06-1.94A19.75,19.75,0,0,0,23,5.41l.79-3.8A1.33,1.33,0,0,0,22.54,0H17.7a1.32,1.32,0,0,0-1.28,1.06l-.7,3.38C9.28,4.77,3.82,8,3.82,14.74c0,5.8,4.51,8.29,9.28,10,4.51,1.72,6.9,2.36,6.9,4.78s-2.38,3.95-5.9,3.95a12.76,12.76,0,0,1-9.16-3.68,1.3,1.3,0,0,0-1.84,0h0L.4,32.49a1.36,1.36,0,0,0,0,1.92,17.64,17.64,0,0,0,7.79,4.4l-.74,3.57A1.33,1.33,0,0,0,8.72,44l4.85,0A1.33,1.33,0,0,0,14.87,43l.7-3.39c7.75-.52,12.47-4.79,12.47-11,0-5.74-4.7-8.16-10.4-10.13-3.26-1.21-6.08-2-6.08-4.53s2.63-3.38,5.27-3.38a13.39,13.39,0,0,1,8.7,3.29Z"></path>
  </svg>
);

export const FacebookLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 310 310" {...props}>
    <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
  </svg>
);

export const Venmo = {
  logo: VenmoLogo,
  alt: "venmo logo",
  href: "https://venmo.com/themikeholm",
  label: "Venmo",
};

export const TikTok = {
  logo: TikTokLogo,
  alt: "tiktok logo",
  href: "https://www.tiktok.com/@themikeholm",
  label: "TikTok",
};

export const Instagram = {
  logo: InstagramLogo,
  alt: "instagram logo",
  href: "https://www.instagram.com/themikeholm/",
  label: "Instagram",
};

export const YouTube = {
  logo: YouTubeLogo,
  alt: "youtube logo",
  href: "https://www.youtube.com/channel/UCSRAICuM9exsw09Qw1WTKKw",
  label: "YouTube",
};

export const SoundCloud = {
  logo: SoundCloudLogo,
  alt: "soundcloud logo",
  href: "https://soundcloud.com/themikeholm",
  label: "SoundCloud",
};

export const CashApp = {
  logo: CashAppLogo,
  alt: "cash app logo",
  href: "https://cash.app/$themikeholm",
  label: "Cash App",
};

export const Facebook = {
  logo: FacebookLogo,
  alt: "facebook logo",
  label: "Facebook",
  href: "https://www.facebook.com/themikeholm",
};

export const TrashPandas = {
  label: "The Trash Pandas",
  href: "https://thetrashpandas.com",
};

interface Promo {
  label: string;
  href: string;
  image: string;
}

export const Sandcastles = {
  label: "Straight Lines Bright Colors",
  href: "https://linktr.ee/sandcastles",
  image:
    "http://lh3.googleusercontent.com/kbGM2wOVRuBFzSj8L2nlze8ADUOFD5DjoEu1jZwLzMfoBcCLe6vdZK_CnYHLcPJ_SahN285HuFgARiPWMA=w544-h544-l90-rj",
};

export const Bandcamp = {
  label: "Bandcamp",
  href: "https://mikeholm.bandcamp.com/",
};

export const NakedCharades = {
  label: "Naked Charades",
  href: "https://distrokid.com/hyperfollow/mikeholm/naked-charades",
  image:
    "http://lh3.googleusercontent.com/7OxNCAgC47Cf9J5gHCuhZcRdqIDkXpyBqa12ahE4ZWikHJS-AewHIXAhSBzS6ttNXSgstJeN_IO-rWi-iQ=w544-h544-l90-rj",
};

export const HeartOfFireBrainOfIce = {
  label: "Heart of Fire, Brain of Ice",
  href: "https://distrokid.com/hyperfollow/mikeholm/hearth-of-fire-brain-of-ice",
  image:
    "http://lh3.googleusercontent.com/9uxLQYbOc65uF-EIa8cpg_hUI5Gh3tbSi_H27qhWCqZwI9qLmF4M0ESqHfVcO-1t7AMOGuB-nWzh4kM=w544-h544-l90-rj",
};

export const Possibility = {
  label: "Possibility",
  href: "https://distrokid.com/hyperfollow/mikeholm/possibility",
  image:
    "http://lh3.googleusercontent.com/GL48m80uorQ9QlTX2k4wQp3t_Gda8HNV54FUR_gLcRtRVbpnM1LUa3-0nOBsd1ezvEwhXEK6gynbVn0D=w544-h544-l90-rj",
};

export const JustComeOn = {
  label: "Just Come On",
  href: "https://distrokid.com/hyperfollow/mikeholm/just-come-on",
  image:
    "http://lh3.googleusercontent.com/IMtAIAQ1GeH1pyVC9xe4p1N4ymB9G2Bba2vs92uD1jMvUqZFRJpz0Nafjk8xii_iJG22_sAnWVx2_r24Eg=w544-h544-l90-rj",
};

export const Impediments = {
  label: "Impediments",
  href: "https://distrokid.com/hyperfollow/mikeholm/impediments",
  image:
    "http://lh3.googleusercontent.com/3SMPbNC1HyvpR12i4Tf73zTFylM0PRMOAOOfuHeEVAgbAIzL3nHe9zojqY0tRUzNvrD_PnzAxAlfF3VsCA=w544-h544-l90-rj",
};

export const RiseUp = {
  label: "Rise Up ft. Jamaal Coleman",
  href: "https://distrokid.com/hyperfollow/mikeholm/rise-up-feat-jamaal-coleman",
  image:
    "http://lh3.googleusercontent.com/u0iJ_yQo0MOuBqJVbHkCMAooS0PVtYeC9rygOZzYi5bX6rNBiBXGSQ6o_OZyuKdcuFFeABsb6dJu7EnlGg=w544-h544-l90-rj",
};

export const AllWeGotIsTime = {
  label: "All We Got Is Time",
  href: "https://distrokid.com/hyperfollow/mikeholm/all-we-got-is-time-2",
  image:
    "http://lh3.googleusercontent.com/ekDMV3T0Scid196x0pb68h6OnlSjwA1uuNWHwy5F1vA_a4mcL9KAzVFZji6XcV-FgpO0wT2k7VshOvKo=w544-h544-l90-rj",
};

export const Squat = {
  label: "Squat!",
  href: "https://distrokid.com/hyperfollow/mikeholm/squat",
  image:
    "http://lh3.googleusercontent.com/yYi2eIbsoV4VR57b-B73itT46AC1slWe9WII-t2psJ2pvvUULzDxtyUEdbPa7_MhNS_v2d4VpknaHhFp=w544-h544-l90-rj",
};

export const RedKarma = {
  label: "Red Karma, a Taylor Swift Tribute",
  href: "https://www.redkarma13.com/",
};

export const DM = [TikTok, Instagram, Facebook];

export const Tip = [Venmo, CashApp];

export const Listen = [YouTube, SoundCloud];

const socials = [...DM, ...Listen, ...Tip];

const promo = [
  Squat,
  AllWeGotIsTime,
  RiseUp,
  Impediments,
  JustComeOn,
  Possibility,
  HeartOfFireBrainOfIce,
  NakedCharades,
  Sandcastles,
];

import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/releases.$slug";
import { filterServices } from "../lib/serviceSelection";
import {
  getReleaseBySlug,
  serviceLabels,
  servicesOrder,
  type Release,
  type ServiceKey,
} from "../data/releases";
import { useServiceSelection } from "../hooks/useServiceSelection";

export function loader({ params }: Route.LoaderArgs) {
  const release = getReleaseBySlug(params.slug ?? "");
  if (!release) {
    throw new Response("Not Found", { status: 404 });
  }
  return { release };
}

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `${data?.release.title ?? "Release"} | Mike Holm Music` },
    {
      name: "description",
      content: `Listen to ${data?.release.title ?? "the release"}.`,
    },
  ];
}

export default function ReleasePage() {
  const { release } = useLoaderData<typeof loader>() as { release: Release };
  const { selected, setSelected, resetSelected } = useServiceSelection();
  const visibleServices = filterServices(servicesOrder, selected);

  return (
    <main className="flex items-center justify-center pt-8 md:pt-16 pb-8">
      <div className="flex-1 flex flex-col items-start gap-6 md:gap-10 min-h-0 max-w-2xl px-4">
        <Link to="/" className="text-sm underline">
          Back to home
        </Link>

        <header className="flex flex-col gap-4">
          <div>
            <h1 className="md:text-6xl text-4xl font-thin">{release.title}</h1>
            <p className="text-sm text-gray-300">{release.artist}</p>
          </div>
          <img
            src={release.coverImage}
            alt={release.title}
            className="rounded-md w-full max-w-md"
          />
        </header>

        <section className="flex flex-col gap-2 w-full">
          <div className="flex items-center justify-between">
            <h2 className="text-lg">Listen now</h2>
            {selected && (
              <button
                type="button"
                onClick={resetSelected}
                className="text-xs underline"
              >
                Show all services
              </button>
            )}
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {visibleServices.map((service) => {
              const href = release.links[service] ?? "#";
              const iconSlug = serviceIconSlugs[service];
              const LocalIcon = serviceIconComponents[service];
              return (
                <li key={service}>
                  <a
                    className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition hover:border-white ${
                      selected === service ? "border-white" : "border-gray-700"
                    }`}
                    href={href}
                    rel="noreferrer"
                    target="_blank"
                    onClick={() => setSelected(service as ServiceKey)}
                  >
                    <span className="flex h-8 w-8 items-center justify-center">
                      {LocalIcon ? (
                        <LocalIcon className="h-4 w-4" aria-hidden />
                      ) : (
                        <img
                          src={`https://cdn.simpleicons.org/${iconSlug}/ffffff`}
                          alt=""
                          className="h-4 w-4"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      )}
                    </span>
                    <span className="text-sm">{serviceLabels[service]}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        {release.description ? (
          <section className="flex flex-col gap-3">
            <h2 className="text-lg">About this release</h2>
            <p className="text-sm text-gray-200">{release.description}</p>
          </section>
        ) : null}

        {release.type === "single" && release.lyrics && (
          <section className="flex flex-col gap-3 w-full">
            <h2 className="text-lg">Lyrics</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-200">
              {release.lyrics}
            </pre>
          </section>
        )}

        {release.type === "album" && release.tracks && (
          <section className="flex flex-col gap-4 w-full">
            <h2 className="text-lg">Tracklist</h2>
            <div className="grid gap-4">
              {release.tracks.map((track) => (
                <div key={track.title} className="flex flex-col gap-2">
                  <h3 className="text-base">{track.title}</h3>
                  <ul className="grid gap-2">
                    {visibleServices.map((service) => {
                      const href = track.links?.[service] ?? "#";
                      return (
                        <li key={`${track.title}-${service}`}>
                          <a
                            className="group flex items-center justify-between rounded-xl border border-gray-700 px-4 py-3 hover:border-white"
                            href={href}
                            rel="noreferrer"
                            target="_blank"
                          >
                            <span>{serviceLabels[service]}</span>
                            <span className="text-xs text-gray-400">Open</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

const serviceIconSlugs: Record<ServiceKey, string> = {
  bandcamp: "bandcamp",
  spotify: "spotify",
  apple: "applemusic",
  youtube: "youtubemusic",
  amazon: "amazon",
  tidal: "tidal",
  deezer: "deezer",
  soundcloud: "soundcloud",
};

const serviceIconComponents: Partial<
  Record<ServiceKey, (props: React.SVGProps<SVGSVGElement>) => React.ReactElement>
> = {
  amazon: (props) => (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M203.2 190.2c-19.6 16.1-47.9 24.6-72.4 24.6-34.2 0-65-12.6-88.3-33.6-1.8-1.6-.2-3.8 2-2.5 25.2 14.7 56.2 23.5 88.3 23.5 21.7 0 45.6-4.5 67.6-13.8 3.3-1.4 6.1 2.2 2.8 4.8z"
      />
      <path
        fill="currentColor"
        d="M211.8 180.4c-2.5-3.2-16.5-1.5-22.8-.8-1.9.2-2.2-1.4-.5-2.5 11.1-7.8 29.4-5.5 31.5-2.9 2.1 2.6-.6 20.9-11 29.6-1.6 1.4-3.2.6-2.5-1.2 2.2-5.6 7.1-18.1 5.3-22.2z"
      />
      <path
        fill="currentColor"
        d="M177.5 152.1c-3.2 4-7.9 7.2-12.9 7.2-6.5 0-11.3-4.1-11.3-11 0-12.4 12.3-14.9 24.2-14.9v-3.1c0-4.8.3-10.5-5.5-10.5-4.2 0-6.3 3-7.2 6.4-.4 1.5-1.6 3.1-3.4 3.1l-7.3-.8c-1.6-.3-2.7-1.6-2.3-3.6 1.7-9.1 9.9-11.9 17.2-11.9 4 0 9.2.9 12.4 4.2 4.1 4.1 3.7 9.6 3.7 15.5v14c0 4.2 1.8 6 3.5 8.3.6.8.7 1.9 0 2.6-1.5 1.3-4.1 3.5-5.6 4.8-.7.6-1.9.6-2.6-.1-1.2-1.5-2.1-3-3.1-4.2zm-1.3-13.4c0 3.1.1 5.7-1.5 8.6-1.3 2.4-3.5 4-5.9 4-3.3 0-5.2-2.5-5.2-6.2 0-7.3 6.5-8.6 12.6-8.6z"
      />
      <path
        fill="currentColor"
        d="M48.6 160.5H39c-1.5 0-2.7-1.2-2.7-2.7V98.2c0-1.5 1.3-2.7 2.7-2.7h9.2c1.5 0 2.7 1.2 2.7 2.7v7.8h.2c2.4-6.3 7-12.7 14.2-12.7 7.4 0 12 3.6 14.4 12.7 2.4-6.3 7.8-12.7 15.1-12.7 4.6 0 9.6 1.9 12.6 6.2 3.4 4.7 2.7 11.6 2.7 17.6v40.9c0 1.5-1.2 2.7-2.7 2.7h-9.6c-1.5 0-2.7-1.2-2.7-2.7v-34.4c0-2.7.2-9.5-0.4-12-1-4.2-3.8-5.4-7.5-5.4-3.1 0-6.4 2.1-7.7 5.4-1.3 3.3-1.2 8.7-1.2 12v34.4c0 1.5-1.2 2.7-2.7 2.7h-9.6c-1.5 0-2.7-1.2-2.7-2.7v-34.4c0-7.2 1.2-17.8-7.9-17.8-9.2 0-8.9 10.5-8.9 17.8v34.4c0 1.5-1.2 2.7-2.7 2.7z"
      />
    </svg>
  ),
  deezer: (props) => (
    <svg viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M28 64h52v20H28V64zm0 36h52v20H28v-20zm0 36h52v20H28v-20zm68-72h52v20H96V64zm0 36h52v20H96v-20zm0 36h52v20H96v-20zm68-36h52v20h-52v-20zm0 36h52v20h-52v-20z"
      />
    </svg>
  ),
};

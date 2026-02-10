import { Link, useLoaderData } from "react-router";
import type { Route } from "./+types/song.$slug";
import { filterServices } from "../lib/serviceSelection";
import {
  getSongBySlug,
  serviceLabels,
  servicesOrder,
  type ServiceKey,
  type SongRelease,
} from "../data/releases";
import { useServiceSelection } from "../hooks/useServiceSelection";
import { serviceIconComponents, serviceIconSlugs } from "../lib/serviceIcons";

export function loader({ params }: Route.LoaderArgs) {
  const release = getSongBySlug(params.slug ?? "");
  if (!release) {
    throw new Response("Not Found", { status: 404 });
  }
  return { release };
}

export function meta({ data }: Route.MetaArgs) {
  return [
    { title: `${data?.release.title ?? "Song"} | Mike Holm Music` },
    {
      name: "description",
      content: `Listen to ${data?.release.title ?? "the song"}.`,
    },
  ];
}

export default function SongPage() {
  const { release } = useLoaderData<typeof loader>() as {
    release: SongRelease;
  };
  const { selected, setSelected, resetSelected } = useServiceSelection();
  const availableServices = servicesOrder.filter((service) => release.links[service]);
  const visibleServices = filterServices(
    availableServices,
    selected && availableServices.includes(selected) ? selected : null
  );

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
            {release.album && (
              <p className="text-xs text-gray-400">
                From the album{" "}
                <Link to={`/album/${release.album.slug}`} className="underline">
                  {release.album.title}
                </Link>
              </p>
            )}
          </div>
          <img
            src={release.coverImage}
            alt={release.title}
            className="rounded-md w-full max-w-md"
          />
        </header>

        {availableServices.length > 0 && (
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
                const href = release.links[service] as string;
                const iconSlug = serviceIconSlugs[service];
                const LocalIcon = serviceIconComponents[service];
                return (
                  <li key={service}>
                    <a
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 transition hover:border-white ${
                        selected === service
                          ? "border-white"
                          : "border-gray-700"
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
        )}

        {release.description ? (
          <section className="flex flex-col gap-3">
            <h2 className="text-lg">About this release</h2>
            <p className="text-sm text-gray-200">{release.description}</p>
          </section>
        ) : null}

        {release.lyrics && (
          <section className="flex flex-col gap-3 w-full">
            <h2 className="text-lg">Lyrics</h2>
            <pre className="whitespace-pre-wrap text-sm text-gray-200">
              {release.lyrics}
            </pre>
          </section>
        )}
      </div>
    </main>
  );
}

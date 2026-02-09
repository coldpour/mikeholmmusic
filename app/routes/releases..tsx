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

        <section className="flex flex-col gap-3 w-full">
          <h2 className="text-lg">Choose your streaming service</h2>
          <div className="flex flex-wrap gap-2">
            {servicesOrder.map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => setSelected(service)}
                className={`rounded-full border px-3 py-1 text-sm transition ${
                  selected === service
                    ? "border-white bg-white text-gray-900"
                    : "border-gray-500 text-white"
                }`}
              >
                {serviceLabels[service]}
              </button>
            ))}
            {selected && (
              <button
                type="button"
                onClick={resetSelected}
                className="rounded-full border border-gray-500 px-3 py-1 text-sm"
              >
                Show all services
              </button>
            )}
          </div>
        </section>

        <section className="flex flex-col gap-2 w-full">
          <h2 className="text-lg">Listen now</h2>
          <ul className="grid gap-2">
            {visibleServices.map((service) => {
              const href = release.links[service] ?? "#";
              return (
                <li key={service}>
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
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg">About this release</h2>
          <p className="text-sm text-gray-200">{release.description}</p>
        </section>

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

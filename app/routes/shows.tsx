import { useLoaderData } from "react-router";

import type { Route } from "./+types/shows";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/ical/83c974b9154e94c01dad499b64e8a76f35ac37d9561fc8ac62c75caf0cd50661%40group.calendar.google.com/public/basic.ics";

interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end?: Date;
  location?: string;
  ticketUrl?: string;
}

export async function loader() {
  const response = await fetch(CALENDAR_URL);

  if (!response.ok) {
    throw new Response("Unable to load shows", { status: response.status });
  }

  const ics = await response.text();
  const events = parseIcs(ics)
    .filter((event) => event.start.getTime() >= Date.now())
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return events;
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Shows | Mike Holm" },
    {
      name: "description",
      content: "See upcoming shows pulled directly from Mike Holm's calendar.",
    },
  ];
}

export default function ShowsPage() {
  const events = useLoaderData<typeof loader>();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-12">
        <header className="flex flex-col gap-3">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-300">
            Shows
          </p>
          <h1 className="text-4xl font-semibold md:text-5xl">Catch Mike Live</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Upcoming dates pulled directly from Mike's public Google Calendar.
          </p>
        </header>

        {events.length === 0 ? (
          <p className="rounded-xl border border-dashed border-slate-300 bg-white/60 p-6 text-slate-500 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
            No shows are currently scheduled. Check back soon!
          </p>
        ) : (
          <ul className="grid gap-4">
            {events.map((event) => (
              <li
                key={event.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-800"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-wide text-blue-700 dark:text-blue-300">
                    <time dateTime={event.start.toISOString()}>
                      {formatDate(event.start)}
                    </time>
                    {event.end && (
                      <span className="text-slate-400 dark:text-slate-500">
                        &bull;
                      </span>
                    )}
                    {event.end && (
                      <time dateTime={event.end.toISOString()}>
                        {formatTime(event.start)} - {formatTime(event.end)}
                      </time>
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold">{event.title}</h2>
                  {event.location && (
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      {event.location}
                    </p>
                  )}
                  {event.description && (
                    <p className="whitespace-pre-line text-slate-700 dark:text-slate-200">
                      {event.description}
                    </p>
                  )}
                  {event.ticketUrl && (
                    <div>
                      <a
                        href={event.ticketUrl}
                        className="inline-flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
                        rel="noreferrer"
                      >
                        Buy Tickets
                        <span aria-hidden>→</span>
                      </a>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}

function parseIcs(ics: string): CalendarEvent[] {
  const lines = unfoldLines(ics.split(/\r?\n/));
  const events: CalendarEvent[] = [];
  let current: Partial<CalendarEvent> | null = null;

  for (const line of lines) {
    if (line === "BEGIN:VEVENT") {
      current = {};
      continue;
    }

    if (line === "END:VEVENT" && current) {
      if (current.start && current.title) {
        events.push({
          id: `${current.start.getTime()}-${current.title}`,
          title: current.title,
          description: current.description,
          start: current.start,
          end: current.end,
          location: current.location,
          ticketUrl: current.ticketUrl,
        });
      }

      current = null;
      continue;
    }

    if (!current) continue;

    const [rawKey, ...rest] = line.split(":");
    const key = rawKey.split(";")[0];
    const value = rest.join(":");

    switch (key) {
      case "SUMMARY":
        current.title = value;
        break;
      case "DESCRIPTION": {
        const description = value.replace(/\\n/g, "\n");
        current.description = description;
        const ticketLink = extractFirstLink(description);
        if (ticketLink) current.ticketUrl = ticketLink;
        break;
      }
      case "LOCATION":
        current.location = value;
        break;
      case "DTSTART":
      case "DTSTART;VALUE=DATE":
      case "DTSTART;TZID=America/New_York":
        current.start = parseDate(value);
        break;
      case "DTEND":
      case "DTEND;VALUE=DATE":
      case "DTEND;TZID=America/New_York":
        current.end = parseDate(value);
        break;
      default:
        break;
    }
  }

  return events;
}

function unfoldLines(lines: string[]): string[] {
  const unfolded: string[] = [];

  for (const line of lines) {
    if (/^[ \t]/.test(line) && unfolded.length > 0) {
      unfolded[unfolded.length - 1] += line.slice(1);
    } else {
      unfolded.push(line);
    }
  }

  return unfolded;
}

function parseDate(value: string): Date {
  // Handles formats like YYYYMMDD, YYYYMMDDTHHmmssZ, and YYYYMMDDTHHmmss
  if (/^\d{8}$/.test(value)) {
    return new Date(`${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}T00:00:00`);
  }

  if (/Z$/.test(value)) {
    return new Date(value);
  }

  // Assume local time if no timezone suffix
  const withSeparators = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}T${value.slice(9, 11)}:${value.slice(11, 13)}:${value.slice(13, 15)}`;
  return new Date(withSeparators);
}

function extractFirstLink(description?: string) {
  if (!description) return undefined;
  const match = description.match(/https?:\/\/\S+/i);
  return match ? match[0].replace(/\\n/g, "") : undefined;
}

function formatDate(date: Date) {
  return date.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(date: Date) {
  return date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
}

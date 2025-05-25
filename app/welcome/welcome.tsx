import { useState, createContext, useContext, type ProviderProps } from "react";

const hourHeight = 30;
interface MyEvent {
  start: number;
  duration: number;
  description: string;
}
type Events = Record<number, MyEvent>;

interface Value {
  events: Events;
  setEvents: React.Dispatch<React.SetStateAction<Events>>;
  eventIdBeingEdited: number | null;
  setEventIdBeingEdited: React.Dispatch<React.SetStateAction<number | null>>;
  delta: number | null;
  setDelta: React.Dispatch<React.SetStateAction<number | null>>;
}
const EventContext = createContext<Value | null>(null);
const useEvents = () => useContext(EventContext);
function EventProvider(props: { children: React.ReactNode | undefined }) {
  const [events, setEvents] = useState<Events>({
    1: {
      start: 3,
      duration: 2,
      description: "plan party",
    },
  });
  const [eventIdBeingEdited, setEventIdBeingEdited] = useState<null | number>(
    null,
  );
  const [delta, setDelta] = useState<number | null>(null);

  return (
    <EventContext.Provider
      value={{
        events,
        setEvents,
        eventIdBeingEdited,
        setEventIdBeingEdited,
        delta,
        setDelta,
      }}
      {...props}
    />
  );
}

export function Welcome() {
  return (
    <EventProvider>
      <main style={{ padding: "3rem", userSelect: "none" }}>
        <Container>
          <Hours />
          <Events />
        </Container>
      </main>
    </EventProvider>
  );
}

function Hours() {
  const context = useEvents();
  if (context === null) return null;
  const { setEvents } = context;
  return (
    <>
      {Array.from({ length: 24 }).map((_, i) => {
        const hour = i;
        return (
          <div
            style={{ height: hourHeight }}
            onClick={() => {
              setEvents((prev) => ({
                ...prev,
                [Object.keys(prev).length + 1]: {
                  start: hour,
                  duration: 1,
                  description: "busy",
                },
              }));
            }}
          >
            <hr />
            {hour}
          </div>
        );
      })}
      <hr />
    </>
  );
}

function Container(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  const context = useEvents();
  if (!context) return null;

  const { setDelta, setEvents, eventIdBeingEdited, setEventIdBeingEdited } =
    context;

  return (
    <div
      style={{ position: "relative", zIndex: 0 }}
      onMouseMove={(e) => {
        if (eventIdBeingEdited != null) {
          setDelta((e.target as HTMLDivElement).offsetTop / hourHeight);
        }
      }}
      onMouseUp={(e) => {
        if (eventIdBeingEdited != null) {
          const start = (e.target as HTMLDivElement).offsetTop / hourHeight;
          setEvents((prev) => ({
            ...prev,
            [eventIdBeingEdited]: {
              ...prev[eventIdBeingEdited],
              start,
            },
          }));
          setEventIdBeingEdited(null);
          setDelta(null);
        }
      }}
      {...props}
    />
  );
}

function Events() {
  const context = useEvents();
  if (context === null) return null;

  const { setDelta, events, delta, setEventIdBeingEdited, eventIdBeingEdited } =
    context;
  return (
    <>
      {Object.keys(events).map((id) => {
        const myId = Number(id);
        const event = events[myId];
        const isDragging = eventIdBeingEdited === myId;
        return (
          <div
            style={{
              position: "absolute",
              height: event.duration * hourHeight,
              background: "green",
              top:
                (isDragging && delta != null ? delta : event.start) *
                hourHeight,
              width: "93%",
              right: "0.5rem",
              borderRadius: "0.5rem",
              padding: "0.5rem",
              opacity: isDragging ? "0.5" : 1,
              zIndex: isDragging ? -1 : 0,
            }}
            onMouseDown={() => {
              setEventIdBeingEdited(myId);
              setDelta(event.start);
            }}
          >
            <div>
              {event.description} from {event.start} til{" "}
              {event.duration + event.start}
            </div>
          </div>
        );
      })}
    </>
  );
}

import { useState } from "react";

const hourHeight = 30;
export function Welcome() {
  const [isDragging, setIsDragging] = useState(false);
  const [delta, setDelta] = useState<number | null>(null);
  const [event, setEvent] = useState({
    start: 3,
    duration: 2,
    description: "plan party",
  });
  return (
    <main style={{ padding: "3rem", userSelect: "none" }}>
      <div
        style={{ position: "relative", zIndex: 0 }}
        onMouseMove={(e) => {
          if (isDragging) {
            setDelta((e.target as HTMLDivElement).offsetTop / hourHeight);
          }
        }}
        onMouseUp={(e) => {
          if (isDragging) {
            const start = (e.target as HTMLDivElement).offsetTop / hourHeight;
            setEvent((prev) => ({
              ...prev,
              start,
            }));
            setIsDragging(false);
            setDelta(start);
          }
        }}
      >
        {Array.from({ length: 24 }).map((_, i) => {
          const hour = i;
          return (
            <div style={{ height: hourHeight }}>
              <hr />
              {hour}
            </div>
          );
        })}
        <hr />
        <div
          style={{
            position: "absolute",
            height: event.duration * hourHeight,
            background: "green",
            top:
              (isDragging && delta != null ? delta : event.start) * hourHeight,
            width: "93%",
            right: "0.5rem",
            borderRadius: "0.5rem",
            padding: "0.5rem",
            opacity: isDragging ? "0.5" : 1,
            zIndex: isDragging ? -1 : 0,
          }}
          onMouseDown={(e) => {
            setIsDragging(true);
          }}
        >
          <div>
            {event.description} from {event.start} til{" "}
            {event.duration + event.start}
          </div>
        </div>
      </div>
    </main>
  );
}

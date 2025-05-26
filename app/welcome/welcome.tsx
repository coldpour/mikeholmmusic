import { useState } from "react";
const size = 200;
type Color = "red" | "yellow" | "blue";

const init: [string, string, string] = ["yellow", "red", "blue"];
export function Welcome() {
  const [finger, setFinger] = useState<Color | null>(null);
  const [dots, setDots] = useState<[string, string, string]>(init);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <div>Are you ready to Mix It Up?</div>
      <div
        style={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            background: dots[0],
            margin: "1rem",
            width: size,
            height: size,
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setFinger((prev) => (prev === null ? "yellow" : prev));
            setDots((prev) => [
              finger === "blue"
                ? "green"
                : finger === "red"
                ? "orange"
                : "yellow",
              prev[1],
              prev[2],
            ]);
          }}
        >
          {dots[0]}
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              background: dots[1],
              margin: "1rem",
              width: size,
              height: size,
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              setFinger((prev) => (prev === null ? "red" : prev));
              setDots((prev) => [
                prev[0],
                finger === "yellow"
                  ? "orange"
                  : finger === "blue"
                  ? "purple"
                  : "red",
                prev[2],
              ]);
            }}
          >
            {dots[1]}
          </div>
          <div
            style={{
              display: "flex",
              background: dots[2],
              margin: "1rem",
              width: size,
              height: size,
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              setFinger((prev) => (prev === null ? "blue" : prev));
              setDots((prev) => [
                prev[0],
                prev[1],
                finger === "yellow"
                  ? "green"
                  : finger === "red"
                  ? "purple"
                  : "blue",
              ]);
            }}
          >
            {dots[2]}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            background: finger ?? undefined,
            margin: "1rem",
            width: size,
            height: size,
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            setDots(init);
            setFinger(null);
          }}
        >
          finger
        </div>
      </div>
    </div>
  );
}

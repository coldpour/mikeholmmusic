import chroma from "chroma-js";
import { useState } from "react";
const size = 200;
type Color = "red" | "yellow" | "blue";

const palette: [Color, Color, Color] = ["yellow", "red", "blue"];
export function Welcome() {
  const [finger, setFinger] = useState<string | null>(null);
  function mix(c: string) {
    setFinger((prev) => (prev ? chroma.mix(c, prev, 0.5, "hsl") : c));
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        userSelect: "none",
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
            background: palette[0],
            margin: "1rem",
            width: size,
            height: size,
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            mix(palette[0]);
          }}
        >
          {palette[0]}
        </div>
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              background: palette[1],
              margin: "1rem",
              width: size,
              height: size,
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              mix(palette[1]);
            }}
          >
            {palette[1]}
          </div>
          <div
            style={{
              display: "flex",
              background: palette[2],
              margin: "1rem",
              width: size,
              height: size,
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => {
              mix(palette[2]);
            }}
          >
            {palette[2]}
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
            setFinger(null);
          }}
        >
          {finger ? chroma(finger).name() : "finger"}
        </div>
      </div>
    </div>
  );
}

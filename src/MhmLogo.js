/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import mhm from "./mhm.png";

const width = 94;
const height = 190;
const indent = 53;
const spacing = 6;
const deletableOffsetX = 4;
const startX = (letterIndex) =>
  deletableOffsetX + letterIndex * (width + spacing);
const endX = (letterIndex) => startX(letterIndex) + width;

const letters = [
  [
    [startX(0), 0],
    [startX(0), height],
    [endX(0), height],
    [endX(0), indent],
  ],
  [
    [startX(1), indent],
    [startX(1), height],
    [endX(1), height],
    [endX(1), 0],
  ],
  [
    [startX(2), 0],
    [startX(2), height],
    [endX(2), height],
    [endX(2), 0],
  ],
  [
    [startX(3), 0],
    [startX(3), height],
    [endX(3), height],
    [endX(3), 0],
  ],
  [
    [startX(4), 0],
    [startX(4), height],
    [endX(4), height],
    [endX(4), indent],
  ],
  [
    [startX(5), indent],
    [startX(5), height],
    [endX(5), height],
    [endX(5), 0],
  ],
];

const pathString = `M${letters
  .map((letter) => letter.map((point) => point.join(" ")).join("L"))
  .join("zM")}z`;

const MhmLogo = () => {
  return (
    <div>
      <div
        css={css`
          position: relative;
          height: 35vw;
          overflow: hidden;
        `}
      >
        <img
          css={css`
            border: 1px solid blue;
            width: 100%;
          `}
          src={mhm}
          alt="logo"
        />
        <svg
          css={css`
            position: absolute;
            fill: yellow;
            left: 0;
            top: 0;
            border: 1px solid red;
          `}
          viewBox={`0 0 ${endX(5)} ${height}`}
        >
          <path d={pathString} />
        </svg>
      </div>
      <pre>{JSON.stringify(pathString.split("z"), null, 2)}</pre>
    </div>
  );
};

export default MhmLogo;

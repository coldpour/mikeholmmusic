/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const cerulean = "#007ba7";
const width = 94;
const height = 190;
const indent = 53;
const spacing = 6;
const startX = (letterIndex) => letterIndex * (width + spacing);
const endX = (letterIndex) => startX(letterIndex) + width;
const strokeWidth = 0;
const fill = cerulean;
const stroke = "none";

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

const MhmLogo = (props) => {
  return (
    <div {...props}>
      <svg
        css={css`
          fill: ${fill};
          stroke: ${stroke};
          stroke-width: ${strokeWidth};
        `}
        viewBox={`-${strokeWidth / 2} -${strokeWidth} ${
          endX(5) + strokeWidth
        } ${height + 2 * strokeWidth}`}
      >
        <path d={pathString} />
      </svg>
      <div
        css={css`
          text-align: center;
          display: flex;
          justify-content: space-around;
        `}
      >
        <div>Mike</div>
        <div>Holm</div>
        <div>Music</div>
      </div>
    </div>
  );
};

export default MhmLogo;

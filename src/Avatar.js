/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import blue from "./blue.jpg";

const defaultSize = 150;
const size = (n) => `
width: ${n};
height: ${n};
`;

const Avatar = (props) => {
  return (
    <div
      css={css`
        ${size(`${defaultSize}px`)}
        border-radius: ${defaultSize / 2}px;
        overflow: hidden;
        position: relative;
      `}
      {...props}
    >
      <img
        css={css`
          position: absolute;
          height: 130%;
          top: -15%;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `}
        src={blue}
        alt="mike holm blue avatar"
      />
    </div>
  );
};

export default Avatar;

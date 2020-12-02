/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const TreeLink = ({ src, alt, label, ...rest }) => (
  <a
    css={css`
      border: 1px solid black;
      display: flex;
      padding: 0.5em;
      text-decoration: none;
      color: black;
      border-radius: 5px;
      align-items: center;
      justify-content: center;
      background: white;
    `}
    {...rest}
  >
    <div
      alt={alt}
      css={css`
        width: 46px;
        height: 46px;
        background-image: url("${src}");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      `}
    />
    <div
      css={css`
        flex: 1;
        text-align: center;
      `}
    >
      {label}
    </div>
  </a>
);

export default TreeLink;

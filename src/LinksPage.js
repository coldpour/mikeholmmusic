/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import links from "./links";
import TreeLink from "./Link";
import Header from "./Header";
import Title from "./Title";

const LinksPage = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
      position: fixed;
      width: 100%;
    `}
  >
    <Header>
      <Link
        css={css`
          text-decoration: none;
          color: black;
        `}
        to="/"
      >
        <Title />
      </Link>
    </Header>
    <div
      css={css`
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 300px;
          > * {
            margin: 0.5em;
          }
        `}
      >
        {links.map(({ href, ...rest }) => (
          <TreeLink key={href} {...rest} />
        ))}
      </div>
    </div>
  </div>
);

export default LinksPage;

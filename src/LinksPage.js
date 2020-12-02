/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import linkData from "./linkData";
import TreeLink from "./TreeLink";
import Header from "./Header";
import Title from "./Title";
import Avatar from "./Avatar";

const LinksPage = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      align-items: center;
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
    <Avatar
      css={css`
        margin-top: 1em;
      `}
    />
    <div
      css={css`
        margin-top: 2em;
        flex-grow: 1;
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          max-width: 680px;
          min-width: 300px;
          > * {
            margin: 0.5em;
          }
        `}
      >
        {linkData.map(({ href, ...rest }) => (
          <TreeLink key={href} {...rest} />
        ))}
      </div>
    </div>
  </div>
);

export default LinksPage;

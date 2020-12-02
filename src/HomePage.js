/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import fallDrums from "./fall drums.png";
import Header from "./Header";
import Title from "./Title";
import SocialLinks from "./SocialLinks";

const breakpoint = "620px";

const HomePage = () => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      height: 100%;
      position: fixed;
      width: 100%;
    `}
  >
    <Header
      css={css`
        justify-content: center;
        @media (min-width: ${breakpoint}) {
          justify-content: space-between;
        }
      `}
    >
      <Title
        css={css`
          margin-left: 0;
          @media (min-width: ${breakpoint}) {
            margin-left: 0.5em;
          }
        `}
      />
      <div
        css={css`
          display: flex;
          > * {
            margin-left: 1em;
          }
        `}
      ></div>
      <SocialLinks
        css={css`
          display: none;
          @media (min-width: ${breakpoint}) {
            display: flex;
          }
        `}
      />
    </Header>
    <div
      css={css`
        flex: 1 0 1px;
        background-image: url("${fallDrums}");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      `}
    ></div>
    <SocialLinks
      css={css`
        padding: 1em;
        display: flex;
        @media (min-width: ${breakpoint}) {
          display: none;
        }
      `}
    />
  </div>
);

export default HomePage;

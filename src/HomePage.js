/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import fallDrums from "./fall drums.png";
import Header from "./Header";
import Title from "./Title";
import SocialLinks from "./SocialLinks";
import LinksSection from "./LinksSection";

const breakpoint = "620px";

const HomePage = () => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      background: #ddd;
    `}
  >
    <div
      css={css`
        max-width: 1024px;
        background: #fff;
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
      <LinksSection />
      <img
        src={fallDrums}
        alt="mike at the kit in front of fall color trees"
        css={css`
          width: 100%;
        `}
      />
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
  </div>
);

export default HomePage;

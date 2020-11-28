/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import fallDrums from "./fall drums.png";
import Header from "./Header";
import Title from "./Title";
import SocialLinks from "./SocialLinks";

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
    <Header>
      <Title />
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
          @media (min-width: 1000px) {
            display: block;
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
        display: flex;
        @media (min-width: 1000px) {
          display: none;
        }
      `}
    />
  </div>
);

export default HomePage;

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import linkData from "./linkData";
import TreeLink from "./TreeLink";
import Avatar from "./Avatar";
import MhmLogo from "./MhmLogo";

const LinksSection = (props) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 900px) {
          flex-direction: row;
          padding: 4em;
        }
      `}
      {...props}
    >
      <div
        css={css`
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border: 1px solid red;
        `}
      >
        <Avatar
          css={css`
            margin-top: 1em;
          `}
        />
        <MhmLogo
          css={css`
            margin-top: 2em;
            width: 50%;
            max-width: 400px;
          `}
        />
      </div>
      <div
        css={css`
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
};

export default LinksSection;

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
        width: 100%;
        align-items: center;
      `}
      {...props}
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
};

export default LinksSection;

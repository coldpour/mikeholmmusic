/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import links from "./links";
import SocialLink from "./SocialLink";

const SocialLinks = (props) => (
  <div
    css={css`
      padding: 1em;
      display: flex;
      justify-content: center;
      > * {
        margin: 0 0.5em;
      }
    `}
    {...props}
  >
    {links.map((props) => (
      <SocialLink key={props.href} {...props} />
    ))}
  </div>
);

export default SocialLinks;

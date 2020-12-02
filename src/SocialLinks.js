/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import linkData from "./linkData";
import SocialLink from "./SocialLink";

const SocialLinks = (props) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
      > * {
        margin: 0 0.5em;
      }
    `}
    {...props}
  >
    {linkData.map((props) => (
      <SocialLink key={props.href} {...props} />
    ))}
  </div>
);

export default SocialLinks;

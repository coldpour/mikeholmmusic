/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import linkData from "./linkData";
import SocialLink from "./SocialLink";

const SocialLinks = (props) => (
  <div
    css={css`
      display: flex;
      justify-content: center;
    `}
    {...props}
  >
    {linkData.map((props) => (
      <SocialLink
        key={props.href}
        css={css`
          margin-left: 1em;
        `}
        {...props}
      />
    ))}
  </div>
);

export default SocialLinks;

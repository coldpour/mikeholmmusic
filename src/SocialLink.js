/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SocialLink = ({ src, alt, label, ...rest }) => (
  <a
    css={css`
      text-decoration: none;
      background: white;
    `}
    {...rest}
  >
    <div
      alt={alt}
      css={css`
        width: 46px;
        height: 46px;
        background-image: url("${src}");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
      `}
    />
  </a>
);

export default SocialLink;

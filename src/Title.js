/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Title = (props) => {
  return (
    <h1
      css={css`
        text-transform: uppercase;
        white-space: nowrap;
        font-weight: 100;
        letter-spacing: 2px;
        font-size: 36px;
        margin: 0;
      `}
      {...props}
    >
      Mike Holm Music
    </h1>
  );
};

export default Title;

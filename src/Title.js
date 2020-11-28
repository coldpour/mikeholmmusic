/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Title = () => {
  return (
    <h1
      css={css`
        text-transform: uppercase;
        white-space: nowrap;
        font-weight: 200;
        margin: 0;
      `}
    >
      Mike Holm Music
    </h1>
  );
};

export default Title;

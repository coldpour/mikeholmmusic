/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Title = (props) => {
  return (
    <h1
      css={css`
        text-transform: uppercase;
        white-space: nowrap;
        font-weight: 200;
        font-size: 2.5em;
        margin: 0;
      `}
      {...props}
    >
      Mike Holm Music
    </h1>
  );
};

export default Title;

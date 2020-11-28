/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Header = (props) => {
  return (
    <header
      css={css`
        padding: 1em 2em;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
      {...props}
    />
  );
};

export default Header;

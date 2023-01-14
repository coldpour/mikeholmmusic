/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Avatar from "./Avatar";
import Links from "./Links";
import Title from "./Title";

const Root = styled.div`
  background: white;
  text-align: center;
  padding: 50px 0 70px;
`;

const AvatarSection = (props) => {
  return (
    <Root {...props}>
      <Avatar
        css={css`
          margin: auto;
        `}
      />
      <Title
        css={css`
          margin-top: 1em;
        `}
      />
      <Links
        css={css`
          margin: auto;
          margin-top: 2em;
          max-width: 500px;
        `}
      />
    </Root>
  );
};

export default AvatarSection;

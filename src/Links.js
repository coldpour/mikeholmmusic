/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import linkData from "./linkData";

const Root = styled.div``;

const Link = styled.a`
  border-radius: 4px;
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  height: 58px;
  box-sizing: border-box;
  background: ${(props) => props.theme.colors.primary};
  box-shadow: ${(props) => props.theme.shadow[3]};
`;

const Label = styled.div`
  flex: 1;
  text-align: center;
  color: white;
  padding: 0 40px;
`;

const Links = (props) => {
  return (
    <Root {...props}>
      {linkData.map(({ logo: Logo, label, href }) => (
        <Link
          css={css`
            margin-top: 12px;
          `}
          key={href}
          href={href}
        >
          <Logo />
          <Label>{label}</Label>
        </Link>
      ))}
    </Root>
  );
};

export default Links;

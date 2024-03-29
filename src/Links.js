/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { promo } from "./linkData";

const Root = styled.div``;

const Link = styled.a`
  border-radius: 8px;
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
  padding: 0;
`;

const Links = (props) => {
  return (
    <Root {...props}>
      {promo.map(({ label, href }) => (
        <Link
          css={css`
            margin-top: 12px;
          `}
          key={href}
          href={href}
        >
          <Label>{label}</Label>
        </Link>
      ))}
    </Root>
  );
};

export default Links;

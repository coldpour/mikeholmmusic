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

const HeroBlueLink = styled(Link)`
  flex: 1;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3px 0 0 3px;
`;

const HeroWhiteLink = styled(HeroBlueLink)`
  border-radius: 0 3px 3px 0;
`;

const HeroLabel = styled.div`
  text-align: center;
  color: white;
`;
const WhiteLabel = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;

const Hero = styled.div`
  border: ${(props) => `1px solid ${props.theme.colors.primary}`};
  border-radius: 4px;
  display: flex;
`;
const Links = (props) => {
  return (
    <Root {...props}>
      <Hero>
        <HeroBlueLink href="https://sessionslive.com/waxbandit">
          <HeroLabel>Livestream</HeroLabel>
          <HeroLabel>4/10 @ 2pm MT</HeroLabel>
        </HeroBlueLink>
        <HeroWhiteLink
          href="https://calendar.google.com/calendar/u/0/r/eventedit/copy/NmoycTM2NjgyaGppZDI2azBqZjFmM2g4cnIgdGhlbWlrZWhvbG1AbQ"
          css={css`
            background: white;
          `}
        >
          <WhiteLabel
            css={css`
              color: ${(props) => props.theme.colors.primary};
            `}
          >
            add to google calendar
          </WhiteLabel>
        </HeroWhiteLink>
      </Hero>
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

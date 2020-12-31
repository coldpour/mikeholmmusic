/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import linkData from "./linkData";

const Root = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 50px;
  display: flex;
  justify-content: center;
`;

const Link = styled.a`
  margin: 0 6px;
`;

const LogoSection = () => {
  return (
    <Root>
      {linkData.map(({ logo: Logo, label, href }) => (
        <Link key={href} href={href} title={label}>
          <Logo />
        </Link>
      ))}
    </Root>
  );
};

export default LogoSection;

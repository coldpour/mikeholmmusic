/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Root = styled.div`
  background: white;
  padding: 8px;
  ${(props) => props.theme.square("300px")}
  box-shadow: ${(props) => props.theme.shadow[3]};
  padding-bottom: 20px;
  @media (min-width: 600px) {
    padding-bottom: 60px;
  }
`;

const Polaroid = ({ children, title, ...rest }) => (
  <Root {...rest}>{children}</Root>
);
export default Polaroid;

/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Root = styled.div`
  background: white;
  display: inline-flex;
  padding: 8px;
  box-shadow: ${(props) => props.theme.shadow[3]};
  flex-direction: column;
`;

const Img = styled.div`
  ${(props) => props.theme.square("300px")}
`;

const Bottom = styled.div`
  position: relative;
  height: 60px;
  @media (min-width: 600px) {
    height: 60px;
  }
`;

const Text = styled.div`
  position: absolute;
  right: 3%;
  bottom: 20%;
  font-size: 24px;
  font-weight: 200;
  transform: rotate(-5deg);
`;

const Polaroid = ({ children, title, ...rest }) => (
  <Root {...rest}>
    <Img>{children}</Img>
    <Bottom>
      <Text>{title}</Text>
    </Bottom>
  </Root>
);
export default Polaroid;

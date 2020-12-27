/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Polaroid = styled.div`
  background: white;
  padding: 0.5em 0.5em 3em;
  ${(props) => props.theme.square("300px")}
  box-shadow: ${(props) => props.theme.shadow[3]}
`;

export default Polaroid;

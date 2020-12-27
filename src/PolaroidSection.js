/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Polaroid from "./Polaroid";
import FallPhoto from "./FallPhoto";

const Root = styled.div`
  background: ${(props) => props.theme.colors.primary};
  min-height: 400px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PolaroidSection = () => {
  return (
    <Root>
      <Polaroid>
        <FallPhoto />
      </Polaroid>
    </Root>
  );
};

export default PolaroidSection;

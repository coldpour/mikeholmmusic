/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Polaroid from "./Polaroid";
import FallPhoto from "./FallPhoto";

const Root = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  padding: 70px 50px;
`;

const PolaroidSection = () => {
  return (
    <Root>
      <Polaroid title="Sept 2020">
        <FallPhoto />
      </Polaroid>
    </Root>
  );
};

export default PolaroidSection;

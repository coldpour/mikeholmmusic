/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Video from "./Video";

const Root = styled.div`
  background: white;
`;

const Constraint = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const VideoSection = () => {
  return (
    <Root>
      <Constraint>
        <Video v="videoseries?list=PLEzUwo0F4pKoOIHqOF55-zQN0xuSfSFyl" />
      </Constraint>
    </Root>
  );
};

export default VideoSection;

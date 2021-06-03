/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import Video from "./Video";

const Root = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  padding: 70px 50px;
`;

const VideoSection = () => {
  return (
    <Root>
      <Video v="videoseries?list=PLEzUwo0F4pKoOIHqOF55-zQN0xuSfSFyl" />
    </Root>
  );
};

export default VideoSection;

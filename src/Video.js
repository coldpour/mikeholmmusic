import styled from "@emotion/styled";

const Root = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  width: 100%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Video = ({ v }) => (
  <Root>
    <Iframe
      src={`https://www.youtube.com/embed/${v}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </Root>
);

export default Video;

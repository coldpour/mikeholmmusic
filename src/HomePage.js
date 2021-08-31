/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import VideoSection from "./VideoSection";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";
import AvatarSection from "./AvatarSection";

const BottomLogoSection = styled(LogoSection)`
  padding: 50px;
`;

const HomePage = () => (
  <div>
    <LogoSection />
    <AvatarSection />
    <VideoSection />
    <MenuSection id="menu" />
    <BottomLogoSection />
  </div>
);

export default HomePage;

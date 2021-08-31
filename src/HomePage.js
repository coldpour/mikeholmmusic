/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import VideoSection from "./VideoSection";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";
import AvatarSection from "./AvatarSection";

const TopLogoSection = styled(LogoSection)`
  padding: 15px;
  @media (min-width: 700px) {
    padding: 25px;
  }
`;

const HomePage = () => (
  <div>
    <TopLogoSection />
    <AvatarSection />
    <VideoSection />
    <MenuSection id="menu" />
    <LogoSection />
  </div>
);

export default HomePage;

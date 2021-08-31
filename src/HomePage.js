/** @jsxImportSource @emotion/react */
import VideoSection from "./VideoSection";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";
import AvatarSection from "./AvatarSection";

const HomePage = () => (
  <div>
    <LogoSection />
    <AvatarSection />
    <VideoSection />
    <MenuSection id="menu" />
    <LogoSection />
  </div>
);

export default HomePage;

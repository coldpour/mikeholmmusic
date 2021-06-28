/** @jsxImportSource @emotion/react */
import VideoSection from "./VideoSection";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";
import AvatarSection from "./AvatarSection";
import Bio from "./Bio";

const HomePage = () => (
  <div>
    <AvatarSection />
    <VideoSection />
    <Bio />
    <MenuSection id="menu" />
    <LogoSection />
  </div>
);

export default HomePage;

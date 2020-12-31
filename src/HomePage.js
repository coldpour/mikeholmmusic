/** @jsxImportSource @emotion/react */
import PolaroidSection from "./PolaroidSection";
import LogoSection from "./LogoSection";
import MenuSection from "./MenuSection";
import AvatarSection from "./AvatarSection";

const HomePage = () => (
  <div>
    <AvatarSection />
    <PolaroidSection />
    <MenuSection id="menu" />
    <LogoSection />
  </div>
);

export default HomePage;

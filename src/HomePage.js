/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import VideoSection from "./VideoSection";
import LogoSection from "./LogoSection";
import AvatarSection from "./AvatarSection";
import BioSection from "./BioSection";
import MerchSection from "./MerchSection";

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
    <MerchSection />
    <VideoSection />
    <BioSection />
    <LogoSection />
  </div>
);

export default HomePage;

import ig from "./ig.png";
import yt from "./yt.png";
import tiktok from "./tiktok.png";
import soundcloud from "./soundcloud.png";
import venmoLogo from "./venmo.png";
import * as Logos from "./Logos";

export const Venmo = {
  logo: Logos.VenmoLogo,
  src: venmoLogo,
  alt: "venmo logo",
  href: "https://venmo.com/themikeholm",
  label: "Venmo",
};

const linkData = [
  {
    logo: Logos.TikTokLogo,
    src: tiktok,
    alt: "tiktok logo",
    href: "https://www.tiktok.com/@themikeholm",
    label: "TikTok",
  },
  {
    logo: Logos.InstagramLogo,
    src: ig,
    alt: "instagram logo",
    href: "https://www.instagram.com/themikeholm/",
    label: "Instagram",
  },
  {
    logo: Logos.YouTubeLogo,
    src: yt,
    alt: "youtube logo",
    href: "https://www.youtube.com/channel/UCSRAICuM9exsw09Qw1WTKKw",
    label: "YouTube",
  },
  {
    logo: Logos.SoundCloudLogo,
    src: soundcloud,
    alt: "soundcloud logo",
    href: "https://soundcloud.com/mike-holm-173325201",
    label: "SoundCloud",
  },
  Venmo,
  {
    logo: Logos.CashAppLogo,
    src: "",
    alt: "cash app logo",
    href: "https://cash.app/$themikeholm",
    label: "Cash App",
  },
];

export default linkData;

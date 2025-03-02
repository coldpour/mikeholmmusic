import { JSX } from "react";
import * as Logos from "./Logos";
import { SvgIconProps } from "@mui/material";

export interface Social {
  logo: (props: SvgIconProps) => JSX.Element;
  alt: string;
  href: string;
  label: string;
}

export const Venmo = {
  logo: Logos.VenmoLogo,
  alt: "venmo logo",
  href: "https://venmo.com/themikeholm",
  label: "Venmo",
};

export const TikTok = {
  logo: Logos.TikTokLogo,
  alt: "tiktok logo",
  href: "https://www.tiktok.com/@themikeholm",
  label: "TikTok",
};

export const Instagram = {
  logo: Logos.InstagramLogo,
  alt: "instagram logo",
  href: "https://www.instagram.com/themikeholm/",
  label: "Instagram",
};

export const YouTube = {
  logo: Logos.YouTubeLogo,
  alt: "youtube logo",
  href: "https://www.youtube.com/channel/UCSRAICuM9exsw09Qw1WTKKw",
  label: "YouTube",
};

export const SoundCloud = {
  logo: Logos.SoundCloudLogo,
  alt: "soundcloud logo",
  href: "https://soundcloud.com/themikeholm",
  label: "SoundCloud",
};

export const CashApp = {
  logo: Logos.CashAppLogo,
  alt: "cash app logo",
  href: "https://cash.app/$themikeholm",
  label: "Cash App",
};

export const Facebook = {
  logo: Logos.FacebookLogo,
  alt: "facebook logo",
  label: "Facebook",
  href: "https://www.facebook.com/themikeholm",
};

export const TrashPandas = {
  label: "The Trash Pandas",
  href: "https://thetrashpandas.com",
};

export const Sandcastles = {
  label: "Straight Lines Bright Colors",
  href: "https://linktr.ee/sandcastles",
  image:
    "http://lh3.googleusercontent.com/kbGM2wOVRuBFzSj8L2nlze8ADUOFD5DjoEu1jZwLzMfoBcCLe6vdZK_CnYHLcPJ_SahN285HuFgARiPWMA=w544-h544-l90-rj",
};

export const Bandcamp = {
  label: "Bandcamp",
  href: "https://mikeholm.bandcamp.com/",
};

export const NakedCharades = {
  label: "Naked Charades",
  href: "https://distrokid.com/hyperfollow/mikeholm/naked-charades",
  image:
    "http://lh3.googleusercontent.com/7OxNCAgC47Cf9J5gHCuhZcRdqIDkXpyBqa12ahE4ZWikHJS-AewHIXAhSBzS6ttNXSgstJeN_IO-rWi-iQ=w544-h544-l90-rj",
};

export const HeartOfFireBrainOfIce = {
  label: "Heart of Fire, Brain of Ice",
  href: "https://distrokid.com/hyperfollow/mikeholm/hearth-of-fire-brain-of-ice",
  image:
    "http://lh3.googleusercontent.com/9uxLQYbOc65uF-EIa8cpg_hUI5Gh3tbSi_H27qhWCqZwI9qLmF4M0ESqHfVcO-1t7AMOGuB-nWzh4kM=w544-h544-l90-rj",
};

export const Possibility = {
  label: "Possibility",
  href: "https://distrokid.com/hyperfollow/mikeholm/possibility",
  image:
    "http://lh3.googleusercontent.com/GL48m80uorQ9QlTX2k4wQp3t_Gda8HNV54FUR_gLcRtRVbpnM1LUa3-0nOBsd1ezvEwhXEK6gynbVn0D=w544-h544-l90-rj",
};

export const JustComeOn = {
  label: "Just Come On",
  href: "https://distrokid.com/hyperfollow/mikeholm/just-come-on",
  image:
    "http://lh3.googleusercontent.com/IMtAIAQ1GeH1pyVC9xe4p1N4ymB9G2Bba2vs92uD1jMvUqZFRJpz0Nafjk8xii_iJG22_sAnWVx2_r24Eg=w544-h544-l90-rj",
};

export const Impediments = {
  label: "Impediments",
  href: "https://distrokid.com/hyperfollow/mikeholm/impediments",
  image:
    "http://lh3.googleusercontent.com/3SMPbNC1HyvpR12i4Tf73zTFylM0PRMOAOOfuHeEVAgbAIzL3nHe9zojqY0tRUzNvrD_PnzAxAlfF3VsCA=w544-h544-l90-rj",
};

export const RiseUp = {
  label: "Rise Up ft. Jamaal Coleman",
  href: "https://distrokid.com/hyperfollow/mikeholm/rise-up-feat-jamaal-coleman",
  image:
    "http://lh3.googleusercontent.com/u0iJ_yQo0MOuBqJVbHkCMAooS0PVtYeC9rygOZzYi5bX6rNBiBXGSQ6o_OZyuKdcuFFeABsb6dJu7EnlGg=w544-h544-l90-rj",
};

export const AllWeGotIsTime = {
  label: "All We Got Is Time",
  href: "https://distrokid.com/hyperfollow/mikeholm/all-we-got-is-time-2",
  image:
    "http://lh3.googleusercontent.com/ekDMV3T0Scid196x0pb68h6OnlSjwA1uuNWHwy5F1vA_a4mcL9KAzVFZji6XcV-FgpO0wT2k7VshOvKo=w544-h544-l90-rj",
};

export const Squat = {
  label: "Squat!",
  href: "",
  image:
    "http://lh3.googleusercontent.com/yYi2eIbsoV4VR57b-B73itT46AC1slWe9WII-t2psJ2pvvUULzDxtyUEdbPa7_MhNS_v2d4VpknaHhFp=w544-h544-l90-rj",
};

export const RedKarma = {
  label: "Red Karma, a Taylor Swift Tribute",
  href: "https://www.redkarma13.com/",
};

export const DM = [TikTok, Instagram, Facebook];

export const Tip = [Venmo, CashApp];

export const Listen = [YouTube, SoundCloud];

const socials = [...DM, ...Listen, ...Tip];

export interface Promo {
  label: string;
  href: string;
  image?: string;
}

export const promo: Promo[] = [
  Squat,
  AllWeGotIsTime,
  RiseUp,
  Impediments,
  JustComeOn,
  Possibility,
  HeartOfFireBrainOfIce,
  NakedCharades,
  Sandcastles,
];

export default socials;

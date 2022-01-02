import * as Logos from "./Logos";

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
  href: "https://soundcloud.com/mike-holm-173325201",
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
  href: "https://www.facebook.com/mholm815",
};

export const TrashPandas = {
  label: "The Trash Pandas",
  href: "https://thetrashpandas.com",
};

export const PatternsOfSaturn = {
  label: "Patterns of Saturn",
  href: "https://www.facebook.com/patternsofsaturn",
};

export const BuriedBlonde = {
  label: "Buried Blonde",
  href: "https://www.laurenflynnwastaken.com/",
};

export const Sandcastles = {
  label: "Straight Lines Bright Colors",
  href: "https://linktr.ee/sandcastles",
};

export const LikeAScar = {
  label: "Like A Scar - Burried Blonde",
  href: "https://www.youtube.com/watch?v=UmsyI0ib23I",
};

export const DM = [TikTok, Instagram, Facebook];

export const Tip = [Venmo, CashApp];

export const Listen = [YouTube, SoundCloud];

const socials = [...DM, ...Listen, ...Tip];

export const promo = [
  LikeAScar,
  Sandcastles,
  BuriedBlonde,
  PatternsOfSaturn,
  TrashPandas,
];

export default socials;

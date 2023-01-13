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

export const Sandcastles = {
  label: "Straight Lines Bright Colors",
  href: "https://linktr.ee/sandcastles",
};

export const MarzielloSetlist = {
  label: "Marziello #setlist",
  href:
    "https://music.youtube.com/playlist?list=PLEzUwo0F4pKoZCD772U7ZACLOf_l1ASHY&feature=share",
};

export const Bandcamp = {
  label: "Bandcamp",
  href: "https://mikeholm.bandcamp.com/",
};

export const NakedCharades = {
  label: "Naked Charades",
  href: "https://distrokid.com/hyperfollow/mikeholm/naked-charades",
};

export const WaxBandit = {
  label: "1/22 Denver with Wax Bandit",
  href:
    "https://www.etix.com/ticket/p/8471278/dazmin-dleon-wditch-the-egowax-bandit-sage-suede-denver-globe-hall?partner_id=240&_ga=2.70651732.532282880.1673647837-603187296.1671836758",
};

export const DM = [TikTok, Instagram, Facebook];

export const Tip = [Venmo, CashApp];

export const Listen = [YouTube, SoundCloud];

const socials = [...DM, ...Listen, ...Tip];

export const promo = [WaxBandit, NakedCharades, Sandcastles];

export default socials;

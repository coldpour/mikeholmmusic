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
  href: "https://music.youtube.com/playlist?list=PLEzUwo0F4pKoZCD772U7ZACLOf_l1ASHY&feature=share",
};

export const Bandcamp = {
  label: "Bandcamp",
  href: "https://mikeholm.bandcamp.com/",
};

export const NakedCharades = {
  label: "Naked Charades",
  href: "https://distrokid.com/hyperfollow/mikeholm/naked-charades",
};

export const HeartOfFireBrainOfIce = {
  label: "Heart of Fire, Brain of Ice",
  href: "https://distrokid.com/hyperfollow/mikeholm/hearth-of-fire-brain-of-ice",
};

export const Possibility = {
  label: "Possibility",
  href: "https://distrokid.com/hyperfollow/mikeholm/possibility",
};

export const JustComeOn = {
  label: "Just Come On",
  href: "https://distrokid.com/hyperfollow/mikeholm/just-come-on",
};

export const Impediments = {
  label: "Impediments",
  href: "https://distrokid.com/hyperfollow/mikeholm/impediments",
};

export const RedKarma = {
  label: "Red Karma, a Taylor Swift Tribute",
  href: "https://www.redkarma13.com/",
};

export const Highsteppers = {
  label: "The Highsteppers",
  href: "https://thehighsteppers.com/",
};

export const DM = [TikTok, Instagram, Facebook];

export const Tip = [Venmo, CashApp];

export const Listen = [YouTube, SoundCloud];

const socials = [...DM, ...Listen, ...Tip];

export const promo = [Impediments, JustComeOn, Possibility, HeartOfFireBrainOfIce, NakedCharades, Sandcastles, RedKarma, Highsteppers];

export default socials;

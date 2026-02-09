export type ServiceKey =
  | "bandcamp"
  | "spotify"
  | "apple"
  | "youtube"
  | "amazon"
  | "tidal"
  | "deezer"
  | "soundcloud";

export const servicesOrder: ServiceKey[] = [
  "bandcamp",
  "spotify",
  "apple",
  "youtube",
  "amazon",
  "tidal",
  "deezer",
  "soundcloud",
];

export const serviceLabels: Record<ServiceKey, string> = {
  bandcamp: "Bandcamp",
  spotify: "Spotify",
  apple: "Apple Music",
  youtube: "YouTube Music",
  amazon: "Amazon Music",
  tidal: "Tidal",
  deezer: "Deezer",
  soundcloud: "SoundCloud",
};

export interface ServiceLinks {
  [key: string]: string | undefined;
}

export interface Track {
  title: string;
  links?: ServiceLinks;
}

export interface Release {
  slug: string;
  title: string;
  artist: string;
  type: "single" | "album";
  coverImage: string;
  description: string;
  links: ServiceLinks;
  lyrics?: string;
  tracks?: Track[];
}


const spotifySearch = (query: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(query)}`;
const appleSearch = (query: string) =>
  `https://music.apple.com/us/search?term=${encodeURIComponent(query)}`;
const youtubeSearch = (query: string) =>
  `https://music.youtube.com/search?q=${encodeURIComponent(query)}`;
const amazonSearch = (query: string) =>
  `https://music.amazon.com/search/${encodeURIComponent(query)}`;
const tidalSearch = (query: string) =>
  `https://listen.tidal.com/search?q=${encodeURIComponent(query)}`;
const deezerSearch = (query: string) =>
  `https://www.deezer.com/search/${encodeURIComponent(query)}`;
const soundcloudSearch = (query: string) =>
  `https://soundcloud.com/search?q=${encodeURIComponent(query)}`;
const bandcampSearch = (query: string) =>
  `https://bandcamp.com/search?q=${encodeURIComponent(query)}`;

const buildSearchLinks = (query: string): ServiceLinks => ({
  bandcamp: bandcampSearch(query),
  spotify: spotifySearch(query),
  apple: appleSearch(query),
  youtube: youtubeSearch(query),
  amazon: amazonSearch(query),
  tidal: tidalSearch(query),
  deezer: deezerSearch(query),
  soundcloud: soundcloudSearch(query),
});

const mergeLinks = (base: ServiceLinks, fallbackQuery: string): ServiceLinks => {
  const fallback = buildSearchLinks(fallbackQuery);
  const merged: ServiceLinks = {};
  for (const service of servicesOrder) {
    merged[service] = base[service] ?? fallback[service];
  }
  return merged;
};

export const releases: Release[] = [
  {
    slug: "squat",
    title: "Squat!",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/yYi2eIbsoV4VR57b-B73itT46AC1slWe9WII-t2psJ2pvvUULzDxtyUEdbPa7_MhNS_v2d4VpknaHhFp=w544-h544-l90-rj",
    description:
      "This song started with the chorus. It showed up fully formed before I really started writing, and I knew I wanted that synth-heavy dance pull from Daft Punk and LMFAO. I grew up playing soccer and then switched to ultimate frisbee in college. After college I took athletics more seriously but still wasn’t spending much time in the weight room. Then I met a girl who is now my wife, who went to the gym every morning, and that became my life for five years. I was working out harder and eating healthier than I ever had in my life. It was a community that pushed me in the best way—competitive and supportive at the same time. People were happy to be there, to work hard, and to hang out after. I barely work out these days, but when I do, I put this song on and it helps me push for that last rep I might not otherwise go for.",
    links: mergeLinks(
      {
        bandcamp: "https://mikeholm.bandcamp.com/track/squat",
        spotify: "https://open.spotify.com/album/1AmJ1bcklPvwvw9zxoAA99",
        apple: "https://music.apple.com/us/album/squat-single/1787851471",
        youtube: "https://music.youtube.com/watch?v=_LgDSgZ7Mv4&si=-tzBzg4vDI86LQ6-",
        amazon:
          "https://amazon.com/music/player/albums/B0DRNNG729?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_KzsaX0b6lM0gfsnLFnenajZQr",
        deezer: "https://www.deezer.com/album/689886011",
        soundcloud: "https://soundcloud.com/themikeholm/squat",
      },
      "Squat! Mike Holm"
    ),
    lyrics: `Yo there's this girl next door\nYea she's got fitness for sure\nAnd when she plays the field\nThat honey's running up the score\n\nI said babe, how you do it\nTell me your secret ways\nThen she laughed when she saw\nMy scrawny little chicken legs\n\nShe said don't worry, but\nIt's time for bed young man\nI got a plan for you\nThat starts at 5am\n\nThat girl's got fitness\nAnd she's on my wishlist\n\nShe said you gotta do\nSquats\nI said how many she said a\nLot\nDown to the bottom back to the\nTop\nYou can rest tomorrow when you can't\nWalk\nWe're doing squats doing squats\n\nStart slow and light\nTil you Get your form right\nThen as you add the weight\nKeep that back and booty tight\n\nGet that snatch, get that clean\nI know those thrusters are mean\nThrow those adductors away\nWith that silly smith machine\n\nAlright now crunches and curls\nThat shit ain't even for girls\nSo get back in the gym and\nPick up something knurled\n\nGo get a coach\nFast track your growth\n\nShe said you gotta do\nSquats\nI said how many she said a\nLot\nDown to the bottom back to the\nTop\nYou can rest tomorrow when you can't\nWalk\nWe're doing squats doing squats\n\nThought I had fitness\nShe's on my wishlist\n\nOh my god it's so heavy\n\nSquats\nI said how many she said a\nLot\nDown to the bottom back to the\nTop\nYou can rest tomorrow when you can't\nWalk\nWe're doing squats doing\nSquats\nI said how many she said a\nLot\nDown to the bottom back to the\nTop\nYou can rest tomorrow when you can't\nWalk\nWe're doing squats doing squats`,
  },
  {
    slug: "all-we-got-is-time",
    title: "All We Got Is Time",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/ekDMV3T0Scid196x0pb68h6OnlSjwA1uuNWHwy5F1vA_a4mcL9KAzVFZji6XcV-FgpO0wT2k7VshOvKo=w544-h544-l90-rj",
    description:
      "This song is about the people we look up to and the way they shape us. You think mentors will have all the answers, and they do have a lot of them, but the hardest part is still finding balance for yourself. The song really started with my father-in-law. He was a traveling salesman, driving long hours to support his family, and in hotel rooms he filled notebooks with lyrics he never published. He gave me one of those books, and as I read through it the chorus came to me. It’s about all the time we spend apart for the promise of being together later, the irony of working so hard for a future we assume we’ll reach. Musically, I leaned into the storytelling warmth of Dave Matthews Band, John Hiatt, Jackson Browne, and Tim McGraw. I once had a boss tell me I was working too slowly and doing a bad job, and when I asked how to improve all he could say was, “It’s all about balance.” That idea kept circling back as I wrote. I also kept thinking about the warmth of family memories—weekends where someone handled the food so everyone else could play, the small adventures, the feeling of being together. Those people contribute to you, and then one day they are gone, often unexpectedly. While I was writing this song, my friend’s dad died suddenly of a heart attack, and that loss sharpened the stakes. The line “I know one day I’ll trade your company for your memory” says it plainly. The rest of the song is a reminder to make the most of the time we have, because it goes faster than we want it to.",
    links: mergeLinks(
      {
        bandcamp: "https://mikeholm.bandcamp.com/track/all-we-got-is-time",
        spotify: "https://open.spotify.com/album/3eoe0f86HphtzXUx4gpL7I",
        apple: "https://music.apple.com/us/album/all-we-got-is-time-single/1782193738",
        youtube: "https://music.youtube.com/watch?v=cWyAF1YZoSc&si=P9HK_e3acldwvydP",
        amazon:
          "https://music.amazon.com/albums/B0DP2M5Q3G?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_QcSsZTwRmNDQpoI1hmK5WCAIF&trackAsin=B0DP2LLZ52",
        deezer: "https://www.deezer.com/album/676735051",
      },
      "All We Got Is Time Mike Holm"
    ),
    lyrics: `Hello dear, it's good to see you\nTell me everything you've been through\nI'm sure it's been a crazy week\n\nLunch is already in the oven\nYou ain't gotta want for nothing\nSo go ahead sit down and kick up your feet\n\nMan, your boss sounds like quite a piece of work\nPressing your nose down to the grind\nMountains of laundry and a of sea of unread mail\nThe tide is rising, it's never been so high\n\nTime always seems to fly\nMakes you feel behind\nNo matter how you try\n\nBut I know\nThat what matters most\nIs what you chose\nKnowing you just can't have it all\n\nSo before we get to goodbye\nRemember we're alive\nAnd that we set the\nValues in our mind\nCause all we got is time\n\nTake a sip straight from the hose\nDon't worry if you soak your clothes\nSome things simply can not be controlled\n\nTime wasted or invested\nIs just a matter of perspective\nOr the way that you define the goal\n\nMan you seem so stressed and overwhelmed\nHave you planned your next holiday\nDoing nothing will bring balance to your life\nIt doesn't matter how long you stay\n\nTime always seems to fly\nMakes you feel behind\nNo matter how you try\n\nBut I know\nThat what matters most\nIs what you chose\nKnowing you just can't have it all\n\nSo before we get to goodbye\nRemember we're alive\nAnd that we set the\nValues in our mind\nCause all we got is time\n\nYou say it's all about balance\nWell I'm looking for the recipe\n\nYou know I'm trying to live my life\nTo the maximum capacity\n\nAnd I know one day\nI'll trade your company for your memory\n\nBut I need to find that piece of mind\nWon't you please\nTell me\nHow I oughta be\nHow I ought to be\nWon't you tell me how to be\nDon't you see I'm begging please\n\nCause time always seems to fly\nMakes you feel behind\nNo matter how you try\n\nBut I know\nThat what matters most\nIs what you chose\nKnowing you just can't have it all\n\nSo before we get to goodbye\nRemember we're alive\nAnd that we set the\nValues in our mind\nCause all we got is time\n\nAll we got is time`,
  },
  {
    slug: "rise-up",
    title: "Rise Up ft. Jamaal Coleman",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/u0iJ_yQo0MOuBqJVbHkCMAooS0PVtYeC9rygOZzYi5bX6rNBiBXGSQ6o_OZyuKdcuFFeABsb6dJu7EnlGg=w544-h544-l90-rj",
    description: "",
    links: mergeLinks(
      {
        bandcamp: "https://mikeholm.bandcamp.com/track/rise-up-ft-jamaal-coleman",
        spotify: "https://open.spotify.com/album/5pyaeaVC2OmGHcfAYrYldG",
        apple:
          "https://music.apple.com/us/album/rise-up-feat-jamaal-coleman-single/1772653764",
        youtube: "https://music.youtube.com/watch?v=AMTELRlxF_U&si=hshfwC9zzVqe-YDP",
        deezer: "https://www.deezer.com/album/653545521",
        soundcloud: "https://soundcloud.com/themikeholm/rise-up",
      },
      "Rise Up Jamaal Coleman Mike Holm"
    ),
    lyrics: `Nah it aint no nick nack patty whack\nSit down fool, grab a snack\nYou keep on tryin to doubt me\nBut I keep on bouncing back\n\nYou thought I wasn’t shit but\nI realize that I’m all that\nAnd if you keep talking\nBitch you better get AFLAC\n\nWhoa, you got another thing coming\nYea I know\nCan’t push me down cause\nI’m standing tall\n\nWon’t hold back\nAnd I won’t fall\nI’m ready to rise up and\nI’m gonna give my all\n\nStrumming on your pain\nWith my fingers Like roberta flack\nbreathing elevated\nquit your talking I’m on attack\n\nMy attitude is different\nNo more doubting I’mma state the facts\nI’m a survivor Yeah\nYou you You better believe that\nTell em now\n\nWhoa, you got another thing coming\nYea I know\nCan’t push me down cause\nI’m standing tall\n\nWon’t hold back\nAnd I won’t fall\nI’m ready to rise up and\nI’m gonna give my all\n\nWhoa, you got another thing coming\nYea I know\nCan’t push me down cause\nI’m standing tall\n\nWon’t hold back\nAnd I won’t fall\nI’m ready to rise up and\nI’m gonna give my all`,
  },
  {
    slug: "impediments",
    title: "Impediments",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/3SMPbNC1HyvpR12i4Tf73zTFylM0PRMOAOOfuHeEVAgbAIzL3nHe9zojqY0tRUzNvrD_PnzAxAlfF3VsCA=w544-h544-l90-rj",
    description: "",
    links: mergeLinks(
      {
        bandcamp: "https://mikeholm.bandcamp.com/track/impediments",
        spotify: "https://open.spotify.com/album/0cu5s08LQdrVIovMth0VYx",
        apple: "https://music.apple.com/us/album/impediments-single/1766665913",
        youtube: "https://music.youtube.com/watch?v=3_Fez0eiaoU&si=7Z3Q462iXZ5ef23m",
        deezer: "https://www.deezer.com/album/638869431",
        soundcloud: "https://soundcloud.com/themikeholm/impediments",
      },
      "Impediments Mike Holm"
    ),
    lyrics: `Girl I want your body\nNot just any body\nNo you are special and so fine\n\nGirl you drive me crazy\nBeen thinkin' about you daily\nTell me can I get some of your time?\n\nPermission, should I ask your mother?\nTell me if there's any other\nImpediments weighing on your mind\n\n'Cause with you I feel alive\n\nTell me that you want me\n'Cause I got what you need\nTo start a chain reaction\nThunderstorms are guaranteed\n\nI’m gonna take you higher\nYeah I’m gonna love you right\nStoke your pretty fire\nOn and on into the night\n\nOoh you’re such a hottie\nYou could have anybody\nPick the winner from the rest\n\nWell grab a ruler baby\nMake your spreadsheet lady\nI promise I’m gonna pas your test\n\nPermission, should I ask your mother?\nTell me if theres any other\nImpediments weighing on your mind\n\n'Cause with you I feel alive\n\nTell me that you want me\n'Cause I got what you need\nTo start a chain reaction\nThunderstorms are guaranteed\n\nI’m gonna take you higher\nYeah I’m gonna love you right\nStoke your pretty fire\nOn and on into the night\n\nBaby we can take it slow\nNeither of us has to know the future\nBut does it feel good to ya?\n\nOoh you know I can’t resist\nWhen you brush your fingers cross my wrist\nI’m losing, my confusion\n\nAnd with you I feel alive\n\nTell me that you want me\n'Cause I got what you need\nTo start a chain reaction\nThunderstorms are guaranteed\n\nI’m gonna take you higher\nYeah I’m gonna love you right\nStoke your pretty fire\nOn and on into the night\n\nTell me that you want me\nHey hey hey\nTo start a chain reaction\nWe gonna start a chain reaction\n\nI’m gonna take you higher\nI can take you up\nStoke your pretty fire\nOn and on into the night`,
  },
  {
    slug: "just-come-on",
    title: "Just Come On",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/IMtAIAQ1GeH1pyVC9xe4p1N4ymB9G2Bba2vs92uD1jMvUqZFRJpz0Nafjk8xii_iJG22_sAnWVx2_r24Eg=w544-h544-l90-rj",
    description: "",
    links: mergeLinks(
      {
        bandcamp: "https://mikeholm.bandcamp.com/track/just-come-on",
        spotify: "https://open.spotify.com/album/3MCUMJpEj2Nx0MOlz3eynq",
        apple: "https://music.apple.com/us/album/just-come-on-single/1756289227",
        youtube: "https://music.youtube.com/watch?v=Z755S-QUzHg&si=yhEmqf0TzeZq-hMC",
        amazon: "https://www.amazon.com/gp/product/B0D91W46VK",
        deezer: "https://www.deezer.com/album/612355042",
        soundcloud: "https://soundcloud.com/themikeholm/just-come-on",
      },
      "Just Come On Mike Holm"
    ),
    lyrics: `I know if I can’t find you\nI’ll chase you down\nYou see, you can stop hiding\nAnd mess around\n\nCause you know I keep it tender\nEvery time you call\nBut it seems I can’t remember, no no\nYou’re no fun at all\n\nCause I’m giving you a chance\nGet off the couch let’s dance\nGonna shake you from your trance\nJust take my hand\nNow come on\n\nI know you think that you’re no fun\nBaby stop the game it’s done\nLet’s get you in the sun\nDon’t try to run\nJust come on\n\nYou don’t like it here\nBitchin’ all the time\nI just wanna see you\nDancing through the night\n\nThe club\nThe beach\nOut in\nThe street\nBut I see\nYou’re not listening\nYou never listen to me do ya baby\n\nCause I’m giving you a chance\nGet off the couch let’s dance\nGonna shake you from your trance\nJust take my hand\nNow come on\n\nI know you think that you’re no fun\nBaby stop the game it’s done\nLet’s get you in the sun\nDon’t try to run\nJust come on\n\nMove your hips, let’s dance\nJust come on\nLet’s get you in the sun\nJust come on\n\nCause I’m giving you a chance\nGet off the couch let’s dance\nGonna shake you from your trance\nJust take my hand\nNow come on\n\nI know you think that you’re no fun\nBaby stop the game it’s done\nLet’s get you in the sun\nDon’t try to run\nJust come on\n\nCause I’m giving you a chance\nGet off the couch let’s dance\nGonna shake you from your trance\nJust take my hand\nNow come on\n\nI know you think that you’re no fun\nBaby stop the game it’s done\nLet’s get you in the sun\nDon’t try to run\nJust come on`,
  },
  {
    slug: "possibility",
    title: "Possibility",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/GL48m80uorQ9QlTX2k4wQp3t_Gda8HNV54FUR_gLcRtRVbpnM1LUa3-0nOBsd1ezvEwhXEK6gynbVn0D=w544-h544-l90-rj",
    description: "",
    links: mergeLinks(
      {
        bandcamp: "https://mikeholm.bandcamp.com/track/possibility",
        spotify: "https://open.spotify.com/album/7fn8DZAbRCVXhXT5ddIuQF",
        apple: "https://music.apple.com/us/album/possibility-single/1717746017",
        youtube:
          "https://music.youtube.com/playlist?list=OLAK5uy_m20hRdN6gTAOFaDBuztdPmAzDg54xqiKI",
        amazon: "https://music.amazon.com/albums/B0CNSD2TQ4",
        deezer: "https://www.deezer.com/album/515969232",
        soundcloud: "https://soundcloud.com/themikeholm/sets/possibility",
      },
      "Possibility Mike Holm"
    ),
    lyrics: `The fire's burning low tonight\nThe sky is almost out of light\nThe sun will rest it's weary head\nAs you snuggle in your bed\n\nAnd when you wake, you will see\nA brand new day full of possibility\nTo shape the world how you want it to be\nClose your eyes, you can fly into your dream\n\nMeet a genie make a wish\nBreathe underwater with the fish\nEat all the candy you can find\nIts all right there inside your mind\n\nAnd when you wake, you will see\nA brand new day full of possibility\nTo shape the world how you want it to be\nClose your eyes, you can fly into your dream\n\nAnd if you wake a dinosaur\nWith big sharp scary teeth\nJust rub his nose between the eyes\nAnd he'll go back to sleep\n\nAnd when you wake, you will see\nA brand new day full of possibility\nTo shape the world how you want it to be\nClose your eyes, you can fly\nAcross the sky\nThe bugs wont bite when you\nTurn out the light\nSleep tight\nGoodnight, my angel, goodnight`,
  },
  {
    slug: "heart-of-fire-brain-of-ice",
    title: "Heart of Fire, Brain of Ice",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/9uxLQYbOc65uF-EIa8cpg_hUI5Gh3tbSi_H27qhWCqZwI9qLmF4M0ESqHfVcO-1t7AMOGuB-nWzh4kM=w544-h544-l90-rj",
    description: "",
    links: mergeLinks(
      {
        bandcamp:
          "https://mikeholm.bandcamp.com/track/heart-of-fire-brain-of-ice",
        spotify: "https://open.spotify.com/album/5MNOnu8t9mfO79HtGYXkzo",
        apple:
          "https://music.apple.com/us/album/hearth-of-fire-brain-of-ice-single/1668520183",
        youtube:
          "https://music.youtube.com/playlist?list=OLAK5uy_kSMen318je3pAykLHnFisesEHXj2XMTJs&feature=share",
        amazon:
          "https://music.amazon.com/albums/B0BT98THQ1?marketplaceId=ART4WZ8MWBX2Y&musicTerritory=CA&ref=dm_sh_YDqVoRUY7lj6Wf2oQpii2sAkn",
        deezer: "https://www.deezer.com/album/401473017",
        soundcloud: "https://soundcloud.com/themikeholm/heart-of-fire-brain-of-ice",
      },
      "Heart of Fire Brain of Ice Mike Holm"
    ),
    lyrics: `Stiff boots twin tips top of the run\nWe got a blue bird sky kiss under the sun\nI'm ripping corduroy as far as the eye can see\nSlipping off the piste to slide through these trees\n\nEdges slicing through the snow\nYou know we ride as fast as the wax will go\nOpen the throttle baby cut a line\nThere's ice on my face and I'm feeling alive\n\nStiff boots on twin tips\nI'm dreaming bout your lips\nI shift from a drift to a glide\n\nHeart of fire and a brain of ice\nSharpen your mind and ski through life\nCast all your fear aside\n\nI said a heart of fire and a brain of ice\nSharpen your mind and ski through life\nJump when the timing is right\n\nRide your line, chase through the snow\nI love how you pick out the perfect flow\nKeep pumping through my legs on fire\nYou know my need for speed just wont retire\n\nKick step into a solid DIN\nCarving calms the storm within\nPick up a kicker baby you can fly\nI'm landing in fresh powder it feels divine\n\nFlat brim, sun glasses\nWe flash season passes\nThe sunlight in your soft green eyes\n\nHeart of fire and a brain of ice\nSharpen your mind and ski through life\nCast all your fear aside\n\nI said a heart of fire and a brain of ice\nSharpen your mind and ski through life\nJump when the timing is right\n\nStiff boots on twin tips\nI'm dreaming bout your lips\nI shift from a drift to a glide\n\nHeart of fire and a brain of ice\nSharpen your mind and ski through life\nCast all your fear aside\n\nI said a heart of fire and a brain of ice\nSharpen your mind and ski through life\nJump when the timing is right`,
  },
  {
    slug: "naked-charades",
    title: "Naked Charades",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/7OxNCAgC47Cf9J5gHCuhZcRdqIDkXpyBqa12ahE4ZWikHJS-AewHIXAhSBzS6ttNXSgstJeN_IO-rWi-iQ=w544-h544-l90-rj",
    description: "",
    links: mergeLinks(
      {
        bandcamp: "https://mikeholm.bandcamp.com/track/naked-charades",
        spotify: "https://open.spotify.com/album/2GZTcds32C6bPMOEPDjWZb",
        apple: "https://music.apple.com/us/album/naked-charades-single/1657045375",
        youtube:
          "https://music.youtube.com/playlist?list=OLAK5uy_nXVWF-g15UOpmRfwNBOVxu9HBeBHOsKYU",
        amazon:
          "https://music.amazon.com/albums/B0BNLXLCT9?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_EBtbB0UN7NwVXLoiXsIJVIm80&trackAsin=B0BNLVG3RR",
        deezer: "https://www.deezer.com/album/381871557",
        soundcloud: "https://soundcloud.com/themikeholm/naked-charades",
      },
      "Naked Charades Mike Holm"
    ),
    lyrics: `She ran away for someone new\nI'm left in the morning feeling used\nI guess I missed some kind of clue\nWell never mind, I'll spend my time on you\n\nYou sent your picture to my phone\nYou tell me that you're all alone\nYou say you want this chromosome\nAnd that you're drippin' like honeycomb\n\nAnd I want to play naked charades tonight\nCan you tell by the way the fuzz on my face moves, I feel alright\nDon't say a word, I'm guessing\nYou're a panther crouching for the kill\nWell go on, let me see you pounce, rawr\n\nI'm in my bed but I can't sleep\nThe thought of you is just too sweet\nI know I should be counting sheep\nBut your body's playing on repeat\n\nAnd I want to play naked charades tonight\nCan you tell by the way the fuzz on my face moves, I feel alright\nDon't say a word I'm guessing\nYou're serving cocktails on a long long flight\nLet's join that mile high club\n\nThe secrets on your mind\nWill tear you up inside\nIf you cannot find\nSomeone to confide\n\nThe secrets on your mind\nWill tear you up inside\nBut you don't have to hide\nYour deepest desire\n\n'Cause I wanna play naked charades tonight\nCan you tell by the way the fuzz on my face moves, I feel alright\nAlright it's your turn baby\nI'm a doctor tending to your wounds\nGo on show and me where it hurts, yeah\n\nI want to play\nNaked charades\nCome on baby\nWhat's your game?\n\nYou got my sugar lady\nI want your sugar baby\n\nI want to play\nNaked charades\nCome on baby\n\nYou got my sugar lady\nI want your sugar baby`,
  },
  {
    slug: "sandcastles",
    title: "Sandcastles",
    artist: "Straight Lines Bright Colors",
    type: "album",
    coverImage:
      "https://lh3.googleusercontent.com/kbGM2wOVRuBFzSj8L2nlze8ADUOFD5DjoEu1jZwLzMfoBcCLe6vdZK_CnYHLcPJ_SahN285HuFgARiPWMA=w544-h544-l90-rj",
    description: "",
    links: mergeLinks(
      {
        spotify: "https://open.spotify.com/album/0Ztug7GFBG0synKAqug5SN",
        youtube:
          "https://music.youtube.com/playlist?list=OLAK5uy_m0-qfDpHgzNlhUzU5tlRZp_7RrIPdFM3k",
        apple: "https://music.apple.com/us/album/_/1582380515",
        soundcloud:
          "https://soundcloud.com/user-371660148-936269429/sets/sandcastles-ep",
        tidal: "https://listen.tidal.com/album/194970001",
      },
      "Sandcastles Straight Lines Bright Colors"
    ),
    tracks: [
      { title: "Improv for No One" },
      { title: "Anymore" },
      { title: "Sandcastles" },
      { title: "Broken" },
    ].map((track) => ({
      ...track,
      links: mergeLinks({}, `${track.title} Straight Lines Bright Colors`),
    })),
  },
];

export const getReleaseBySlug = (slug: string): Release | undefined =>
  releases.find((release) => release.slug === slug);

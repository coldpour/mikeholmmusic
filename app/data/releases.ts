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

export interface AlbumRef {
  slug: string;
  title: string;
}

export interface TrackRef {
  slug: string;
  title: string;
}

export interface ReleaseBase {
  slug: string;
  title: string;
  artist: string;
  coverImage: string;
  description: string;
  links: ServiceLinks;
  lyrics?: string;
}

export interface AlbumRelease extends ReleaseBase {
  type: "album";
  tracks: TrackRef[];
}

export interface SongRelease extends ReleaseBase {
  type: "single" | "track";
  album?: AlbumRef;
}

export type Release = AlbumRelease | SongRelease;

export const songs: SongRelease[] = [
  {
    slug: "squat",
    title: "Squat!",
    artist: "Mike Holm",
    type: "single",
    coverImage:
      "https://lh3.googleusercontent.com/yYi2eIbsoV4VR57b-B73itT46AC1slWe9WII-t2psJ2pvvUULzDxtyUEdbPa7_MhNS_v2d4VpknaHhFp=w544-h544-l90-rj",
    description:
      "This song started with the chorus. It showed up fully formed before I really started writing, and I knew I wanted that synth-heavy dance pull from Daft Punk and LMFAO. I grew up playing soccer and then switched to ultimate frisbee in college. After college I took athletics more seriously but still wasn’t spending much time in the weight room. Then I met a girl who is now my wife, who went to the gym every morning, and that became my life for five years. I was working out harder and eating healthier than I ever had in my life. It was a community that pushed me in the best way—competitive and supportive at the same time. People were happy to be there, to work hard, and to hang out after. I barely work out these days, but when I do, I put this song on and it helps me push for that last rep I might not otherwise go for.",
    links: {
      bandcamp: "https://mikeholm.bandcamp.com/track/squat",
      spotify: "https://open.spotify.com/album/1AmJ1bcklPvwvw9zxoAA99",
      apple: "https://music.apple.com/us/album/squat-single/1787851471",
      youtube: "https://music.youtube.com/watch?v=_LgDSgZ7Mv4&si=-tzBzg4vDI86LQ6-",
      amazon:
        "https://amazon.com/music/player/albums/B0DRNNG729?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_KzsaX0b6lM0gfsnLFnenajZQr",
      deezer: "https://www.deezer.com/album/689886011",
      soundcloud: "https://soundcloud.com/themikeholm/squat",
    },
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
    links: {
      bandcamp: "https://mikeholm.bandcamp.com/track/all-we-got-is-time",
      spotify: "https://open.spotify.com/album/3eoe0f86HphtzXUx4gpL7I",
      apple: "https://music.apple.com/us/album/all-we-got-is-time-single/1782193738",
      youtube: "https://music.youtube.com/watch?v=cWyAF1YZoSc&si=P9HK_e3acldwvydP",
      amazon:
        "https://music.amazon.com/albums/B0DP2M5Q3G?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_QcSsZTwRmNDQpoI1hmK5WCAIF&trackAsin=B0DP2LLZ52",
      deezer: "https://www.deezer.com/album/676735051",
    },
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
    links: {
      bandcamp: "https://mikeholm.bandcamp.com/track/rise-up-ft-jamaal-coleman",
      spotify: "https://open.spotify.com/album/5pyaeaVC2OmGHcfAYrYldG",
      apple:
        "https://music.apple.com/us/album/rise-up-feat-jamaal-coleman-single/1772653764",
      youtube: "https://music.youtube.com/watch?v=AMTELRlxF_U&si=hshfwC9zzVqe-YDP",
      deezer: "https://www.deezer.com/album/653545521",
      soundcloud: "https://soundcloud.com/themikeholm/rise-up",
    },
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
    links: {
      bandcamp: "https://mikeholm.bandcamp.com/track/impediments",
      spotify: "https://open.spotify.com/album/0cu5s08LQdrVIovMth0VYx",
      apple: "https://music.apple.com/us/album/impediments-single/1766665913",
      youtube: "https://music.youtube.com/watch?v=3_Fez0eiaoU&si=7Z3Q462iXZ5ef23m",
      deezer: "https://www.deezer.com/album/638869431",
      soundcloud: "https://soundcloud.com/themikeholm/impediments",
    },
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
    links: {
      bandcamp: "https://mikeholm.bandcamp.com/track/just-come-on",
      spotify: "https://open.spotify.com/album/3MCUMJpEj2Nx0MOlz3eynq",
      apple: "https://music.apple.com/us/album/just-come-on-single/1756289227",
      youtube: "https://music.youtube.com/watch?v=Z755S-QUzHg&si=yhEmqf0TzeZq-hMC",
      amazon: "https://www.amazon.com/gp/product/B0D91W46VK",
      deezer: "https://www.deezer.com/album/612355042",
      soundcloud: "https://soundcloud.com/themikeholm/just-come-on",
    },
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
    links: {
      bandcamp: "https://mikeholm.bandcamp.com/track/possibility",
      spotify: "https://open.spotify.com/album/7fn8DZAbRCVXhXT5ddIuQF",
      apple: "https://music.apple.com/us/album/possibility-single/1717746017",
      youtube:
        "https://music.youtube.com/playlist?list=OLAK5uy_m20hRdN6gTAOFaDBuztdPmAzDg54xqiKI",
      amazon: "https://music.amazon.com/albums/B0CNSD2TQ4",
      deezer: "https://www.deezer.com/album/515969232",
      soundcloud: "https://soundcloud.com/themikeholm/sets/possibility",
    },
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
    links: {
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
    links: {
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
    lyrics: `She ran away for someone new
I'm left in the morning feeling used
I guess I missed some kind of clue
Well never mind, I'll spend my time on you

You sent your picture to my phone
You tell me that you're all alone
You say you want this chromosome
And that you're drippin' like honeycomb

And I want to play naked charades tonight
Can you tell by the way the fuzz on my face moves, I feel alright
Don't say a word, I'm guessing
You're a panther crouching for the kill
Well go on, let me see you pounce, rawr

I'm in my bed but I can't sleep
The thought of you is just too sweet
I know I should be counting sheep
But your body's playing on repeat

And I want to play naked charades tonight
Can you tell by the way the fuzz on my face moves, I feel alright
Don't say a word I'm guessing
You're serving cocktails on a long long flight
Let's join that mile high club

The secrets on your mind
Will tear you up inside
If you cannot find
Someone to confide

The secrets on your mind
Will tear you up inside
But you don't have to hide
Your deepest desire

'Cause I wanna play naked charades tonight
Can you tell by the way the fuzz on my face moves, I feel alright
Alright it's your turn baby
I'm a doctor tending to your wounds
Go on show and me where it hurts, yeah

I want to play
Naked charades
Come on baby
What's your game?

You got my sugar lady
I want your sugar baby

I want to play
Naked charades
Come on baby

You got my sugar lady
I want your sugar baby`,
  },
  {
    slug: "improv-for-no-one",
    title: "Improv for No One",
    artist: "Straight Lines Bright Colors",
    type: "track",
    album: { slug: "sandcastles", title: "Sandcastles" },
    coverImage:
      "https://lh3.googleusercontent.com/kbGM2wOVRuBFzSj8L2nlze8ADUOFD5DjoEu1jZwLzMfoBcCLe6vdZK_CnYHLcPJ_SahN285HuFgARiPWMA=w544-h544-l90-rj",
    description: "",
    links: {
      spotify:
        "https://open.spotify.com/track/31XncZutPoQLUrrJdjbJJ7?si=4d691cf0a6b74d94",
      apple: "https://music.apple.com/us/song/improv-for-no-one/1582380696",
      youtube: "https://music.youtube.com/watch?v=r0yfU8aG8KQ&si=ySMZk2l7_-f59lwz",
      amazon:
        "https://music.amazon.com/albums/B09DBTXS2N?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_EQJf5UdWX7DY3bu7xnNs5R6ay&trackAsin=B09DBVJ7BV",
      tidal: "https://tidal.com/track/194970002/u",
      deezer: "https://www.deezer.com/us/track/1472916722",
      soundcloud:
        "https://soundcloud.com/user-371660148-936269429/improv-for-no-one",
    },
    lyrics: `I’ve got figured out he said to me as his coffee spilled to the floor
if we just met at 10 each morning, we won’t feel anger anymore
yes that’s a thought. Sure, I guess why not
but I really just came over so you’d help me fix my car

“I’ve got it figured out,” she seemed to say with her Instagram workout routine
just spend three hours on your ads each day and you can also be an Internet queen
while we laugh all right judging her shallow life
yes she wears makeup while she’s lifting, but at least she’s at the gym.

We’re faking and making everything up as we go along
They’re faking and taking every chance they can to sell us on
groundbreaking breathtaking strategies to fix what’s all gone wrong
I’m trying But finding I can’t shake this feeling that we’re all
doing improv for no one
Yes and it’s true the points don’t matter at all

“I’ve got it figured out,” he said to me as we were heating up a frozen dinner.
This politician’s new platform means they’re sure to be the winner.
Well, it’s all said and done. I’ve guess we found the one,
but I really wish you’d wait until they say they’re going to run.

I’ve got it figured out she said to me as we’re pulling weeds out of the yard
just tell each person how you really feel it can’t be all that hard.
Well that’s a thought to try, but I’m wondering why
last time I asked about your life you told me not to fucking cry.

We’re faking and making everything up as we go along
They’re faking and taking every chance they can to sell us on
groundbreaking breathtaking strategies to fix what’s all gone wrong
I’m trying But finding I can’t shake this feeling that we’re all
doing improv for no one
Yes and it’s true the points don’t matter at all

Just be calm
Just be calm
Just calm and thoughtful and emotionally open
with mindfulness to practice so you don't drown in the ocean
a politician screaming
the kids oh they’re just dreaming
here take a sip of kava
it eases away all of the fog
and don't forget you should jog
and did you read on that blog
how CBD might cure the cancer we all get from the smog
and how the food we eat might something something everyone just wait
and listen

I've got it figured out he said through tears, though the phrase just felt like a crutch
Maybe we have to look for answers or else the world just hurts too much`,
  },
  {
    slug: "anymore",
    title: "Anymore",
    artist: "Straight Lines Bright Colors",
    type: "track",
    album: { slug: "sandcastles", title: "Sandcastles" },
    coverImage:
      "https://lh3.googleusercontent.com/kbGM2wOVRuBFzSj8L2nlze8ADUOFD5DjoEu1jZwLzMfoBcCLe6vdZK_CnYHLcPJ_SahN285HuFgARiPWMA=w544-h544-l90-rj",
    description: "",
    links: {
      spotify:
        "https://open.spotify.com/track/0R4NxmJlVLnccTc7u8waKf?si=a79a7b182aa04d2c",
      apple: "https://music.apple.com/us/song/anymore/1582380697",
      youtube: "https://music.youtube.com/watch?v=vDDJzzVEMCQ&si=SFOBErLtrQ-YWh2Q",
      amazon:
        "https://music.amazon.com/albums/B09DBTXS2N?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_Eu8ek625O2G93DVAUMND9EbJ8&trackAsin=B09DBVTN2R",
      tidal: "https://tidal.com/track/194970003/u",
      deezer: "https://www.deezer.com/us/track/1472916732",
      soundcloud: "https://soundcloud.com/user-371660148-936269429/five-years",
    },
    lyrics: `You said come on by for dinner
I knew it should've sounded nice
Four years of dinners and they've always gone just fine
Maybe I’m just too tired to talk on this tonight

Don't make me say
Why I'm just staring at my plate
let's just fold it away.
Save it for another day
Watch a cooking show or something till it's late.

And do we go on like it's all the same
Cause that's what's easy
because no one’s to blame
Do we go on our own?
Can we make it alone?
When we're too scared to say that we don't feel the way that we've known
Not anymore

Summer morning on the river
Laughs when I flipped our canoe
To pack with all our food is floating out of you
We'll just fly and ride the current like we always do

Don't look away
You'll miss the chance to swim ashore
If it's safe and fine
Is it all a lie?
Or are we naive for always wanting more?

So do we go on like it's all the same?
Cause that's what's easy
Because no one’s to blame
Do we go on our own?
Can we make it alone?
When we're too scared to say that we don't feel the way that we've known
Not anymore

So do we go on like it's all the same?
Cause that's what's easy
Because no one’s to blame
Do we go on our own?
Can we make it alone?
When we're too scared to say that we don't feel the way that we've known
Not anymore
Not anymore`,
  },
  {
    slug: "sandcastles",
    title: "Sandcastles",
    artist: "Straight Lines Bright Colors",
    type: "track",
    album: { slug: "sandcastles", title: "Sandcastles" },
    coverImage:
      "https://lh3.googleusercontent.com/kbGM2wOVRuBFzSj8L2nlze8ADUOFD5DjoEu1jZwLzMfoBcCLe6vdZK_CnYHLcPJ_SahN285HuFgARiPWMA=w544-h544-l90-rj",
    description: "",
    links: {
      spotify:
        "https://open.spotify.com/track/0SOj4E56yLKIdQbHFJ5mBx?si=d3b5c62243db41a8",
      apple: "https://music.apple.com/us/song/sandcastles/1582380698",
      youtube: "https://music.youtube.com/watch?v=N0qdC0W5L6Q&si=YlHoegY_RNMlYFPv",
      amazon:
        "https://music.amazon.com/albums/B09DBTXS2N?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_9vJqTJlhFykpFHvXkpOJRi7vS&trackAsin=B09DBXJ5MP",
      tidal: "https://tidal.com/track/194970004/u",
      deezer: "https://www.deezer.com/us/track/1472916742",
      soundcloud: "https://soundcloud.com/user-371660148-936269429/sandcastles",
    },
    lyrics: `Maybe you'll never learn to dance
But the way you move, brings smiles to the strangers that you meet
Maybe you'll never learn to love yourself
But you love the crunch of freshly fallen leaves under your feet

You say you'll never get it
But I think you get it more than me

Two guitars and a campfire made you feel
Like you'd finally found your place
Yeah, we were drunk and didn't hit the notes
But all our friends swear to this day
That it was like Bowie) came back for one night only
Just to keep the trees awake

The moment fades
In comes the tide and out goes what we made
And not a sign of all that happened today
But take a breath and how it moved you remains
It won't wash away

The bouquet that he made didn't last a week,
but the comfort sits with you still
And we say one day we're gonna publish all your thoughts
But I'm not sure we will
That's OK you were here to think them
And I was here to drink them up
Until we had our Phil

Even though it's gone
It can still be true
That everything was worth it
Even though they won't remember
It can still be true
That everything was perfect

The moment fades
In comes the tide and out goes what we made
And not a sign of all that happened today
But take a breath and how it moved you remains

Time runs thin
Soon it'll be gone away, so burn it in
Might not be a chance again till who knows when
So let's not worry on what might have been
Oh now can last
Days steadily slipping to a fading past
And formed the music of our winding path
Forget to listen and it's gone so fast
So unplug my ears and tie me to the mast
And wash me away`,
  },
  {
    slug: "broken",
    title: "Broken",
    artist: "Straight Lines Bright Colors",
    type: "track",
    album: { slug: "sandcastles", title: "Sandcastles" },
    coverImage:
      "https://lh3.googleusercontent.com/kbGM2wOVRuBFzSj8L2nlze8ADUOFD5DjoEu1jZwLzMfoBcCLe6vdZK_CnYHLcPJ_SahN285HuFgARiPWMA=w544-h544-l90-rj",
    description: "",
    links: {
      spotify:
        "https://open.spotify.com/track/6vpx7XHZLgeZPaldPWzdV0?si=3de60513afbd4d8a",
      apple: "https://music.apple.com/us/song/broken/1582380700",
      youtube: "https://music.youtube.com/watch?v=I4FJTm4SIYY&si=94UnWwBWi7CdX9lW",
      amazon:
        "https://music.amazon.com/albums/B09DBTXS2N?marketplaceId=ATVPDKIKX0DER&musicTerritory=US&ref=dm_sh_tDXIqFps2ri4lq6AzAacQP4Tj&trackAsin=B09DBWQDTG",
      tidal: "https://tidal.com/track/194970005/u",
      deezer: "https://www.deezer.com/us/track/1472916752",
      soundcloud: "https://soundcloud.com/user-371660148-936269429/broken",
    },
    lyrics: `A stranger’s face
somehow sits now
on the body of my friend

Speaking slow
dead words, unheard thoughts blurred
is this the end?

Grasping tight for any holds in sight
despite the sense you'll never be all right
no matter what you try

Muffled sounds and shifting ground breakdown
and you think you finally found a place you won't drown
But the waves come crashing by

No, none of this is real
I think I must've died.
It seems like I can't feel.
I don't know why I'm crying.
I'm broken.

Too tired to sleep,
devoid of noise,
but voices howl inside my head

Choking down a sleeping pill to stay still
only till I spit it up again

Maybe it's a stroke
somehow that's a hope
Feeling lost feeling burned
As the last loose length of rope
slips through my shaking hands

Yes, everything's the same as it was when I came
But my brain can't tame the sudden searing shame
Beating down on empty sands

I think my mind has shattered
Loose fragments on the ground
The parts of me that mattered
Are nowhere to be found
I'm broken

Just waiting for an end
It must be almost done
You laugh along pretending
You understand the fun
Your heartbeat feels like thunder
Your arms are going
The lightning chills ripped through you
And your mind begins to
Caught swirling in this
No, Brett feels like enough
You think you must be dream
Oh, please fucking just wake up
Don't think about the pleasure
Don't think about the pain
Don't try to change the weather
There's nothing there to gain
Oh, if everything must end
This time must end as well
But for now you're captured in the storm
Here comes another swell`,
  },
];

export const albums: AlbumRelease[] = [
  {
    slug: "sandcastles",
    title: "Sandcastles",
    artist: "Straight Lines Bright Colors",
    type: "album",
    coverImage:
      "https://lh3.googleusercontent.com/kbGM2wOVRuBFzSj8L2nlze8ADUOFD5DjoEu1jZwLzMfoBcCLe6vdZK_CnYHLcPJ_SahN285HuFgARiPWMA=w544-h544-l90-rj",
    description: "",
    links: {
      spotify: "https://open.spotify.com/album/0Ztug7GFBG0synKAqug5SN",
      youtube:
        "https://music.youtube.com/playlist?list=OLAK5uy_m0-qfDpHgzNlhUzU5tlRZp_7RrIPdFM3k",
      apple: "https://music.apple.com/us/album/_/1582380515",
      deezer: "https://www.deezer.com/us/album/253715462",
      soundcloud:
        "https://soundcloud.com/user-371660148-936269429/sets/sandcastles-ep",
      tidal: "https://listen.tidal.com/album/194970001",
    },
    tracks: [
      { slug: "improv-for-no-one", title: "Improv for No One" },
      { slug: "anymore", title: "Anymore" },
      { slug: "sandcastles", title: "Sandcastles" },
      { slug: "broken", title: "Broken" },
    ],
  },
];

export const getReleaseBySlug = (slug: string): Release | undefined =>
  songs.find((release) => release.slug === slug) ||
  albums.find((release) => release.slug === slug);

export const getAlbumBySlug = (slug: string): AlbumRelease | undefined =>
  albums.find((album) => album.slug === slug);

export const getSongBySlug = (slug: string): SongRelease | undefined =>
  songs.find((song) => song.slug === slug);

export const homeReleases: Release[] = [...songs, ...albums].filter(
  (release) => release.type === "single" || release.type === "album"
);

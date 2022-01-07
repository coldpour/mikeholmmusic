/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as Links from "./linkData";

const Root = styled.div`
  background: white;
  padding: 50px 0 70px;
`;

const Constraint = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 0 1em;

  @media (min-width: 600px) {
    padding: 0;
  }
`;

const Link = styled.a``;

const Heading = styled.h2`
  text-transform: uppercase;
  font-size: 2em;
  font-style: italic;
  font-weight: 200;
  margin-bottom: 12px;
`;

const BioSection = () => {
  return (
    <Root>
      <Constraint>
        <Heading>Biography</Heading>
        <p>
          Mike Holm started his musical journey in 1999 singing alto in{" "}
          <Link href="https://americanboychoir.org/">
            The American Boychoir
          </Link>{" "}
          where his job was to listen and blend the color of his voice to the
          sonic picture being produced by the 30 other boys on stage. Touring
          nationally and to Japan and performing the works of legendary
          composers like Beethoven, Brahms, Mahler, Rachmaninoff and Rudder in
          breathtaking venues like Carnegie Hall, Avery Fisher Hall, Mike
          learned to respond and adjust his performance to deliver the emotion
          of each song in a vast repertoire as interpreted by great conductors
          such as{" "}
          <Link href="https://en.wikipedia.org/wiki/James_Litton">
            James Litton
          </Link>
          ,{" "}
          <Link href="https://www.bach-cantatas.com/Bio/Metallo-Vincent.htm">
            Vincent Metallo
          </Link>
          ,{" "}
          <Link href="https://www.facebook.com/malvarru">
            Fernando Malvar-Ruiz
          </Link>{" "}
          and{" "}
          <Link href="https://www.facebook.com/nyphilharmonic/videos/10154127028752293/">
            Kurt Mazur
          </Link>
          . The performances Mike most enjoyed during those formative years were
          the songs with drums in them that got people out of their pews,
          inspiring them to dance in the aisles. When Mike first sat on the
          throne of his sister’s drum set on Christmas, 2004, a resonant passion
          erupted. Like a shock of electricity, that energy awoke a tiny drummer
          in Mike’s brain, relentlessly tapping on his skull.
        </p>
        <p>
          While the accolades of his singing career were mostly handed to him,
          his drumming career has been marked by struggle, sacrifice and
          rejection. Learning the instrument by ear and playing along to his
          favorite rock, funk and r&b records provided no foundation whatsoever
          to study jazz in college, where{" "}
          <Link href="https://www.facebook.com/dave.hagedorn.10">
            Dave Haggedorn
          </Link>{" "}
          and <Link href="https://www.philhey.com/">Phil Hey</Link> reluctantly
          took him on since he majored in Computer Science instead of music.
          Insisting that he needed to vent the incessant rhythms in his head,
          Mike convinced the department to tutor him however with low-priority
          access to the shared practice room. Desperate to practice, Mike
          carried his drums from dorm storage to anywhere on campus that
          wouldn’t evict him. By graduation, Mike had gained a reputation for
          his musicianship. "I was just delighted when I realized that I could
          actually hear the melody in your solo! That's so rare and I loved it."
          - <Link href="https://www.lauracaviani.com/">Laura Caviani</Link>.
          After college, Mike auditioned for countless Minneapolis bands, but
          only got picked up by a few that fizzled out quickly.
        </p>
        <p>
          Upon moving to Boulder, fed up with the constant packing and unpacking
          of auditions, Mike started his own cover band,{" "}
          <Link href="https://thetrashpandas.com">The Trash Pandas</Link>, with
          his neighbor playing pop rock songs at bars, weddings and corporate
          events. Realizing that it took more to build a band than just playing
          drums, running rehearsals and posting a website, Mike learned to run
          sound, do marketing, and quickly built a rambunctious loyal fanbase.
          While the pandemic killed the Trash Pandas, it also gave birth to the
          indie-rock duo,{" "}
          <Link href={Links.Sandcastles.href}>
            Straight Lines Bright Colors
          </Link>
          . Moving to Seattle in 2021, the search for kindred spirits led Mike
          to the Hidden Door blues jam, where{" "}
          <Link href={Links.BuriedBlonde.href}>Buried Blonde</Link> noticed
          Mike’s passionate dexterity and calm professionalism, and Lauren’s
          drive to carve out her musical niche resonated with Mike’s.
        </p>
        <p>
          Mike has built a home studio where he can blend his tasteful tapping
          with artists across the globe. From quiet indie rock with{" "}
          <Link href={Links.Sandcastles.href}>
            Straight Lines Bright Colors
          </Link>
          , and the highly syncopated funk-rap fusion of{" "}
          <Link href={Links.PatternsOfSaturn}>Patterns of Saturn</Link>, to the
          raucous pounding hard rock of{" "}
          <Link href={Links.BuriedBlonde.href}>Buried Blonde</Link>, Mike is
          always able to pull something from his deep bag of grooves and
          masterfully blend it to fit the time and place.
        </p>
      </Constraint>
    </Root>
  );
};

export default BioSection;

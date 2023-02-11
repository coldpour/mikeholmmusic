/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import * as Links from "./linkData";

const Root = styled.div`
  background: white;
  padding: 1em 0 70px;
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
          Mike Holm is a session drummer with experience in funk, pop, and rock,
          skilled at matching his playing style, drum tuning and dynamics to a
          range of musical contexts.
        </p>
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
          Upon moving to Boulder in 2014, Mike started his own pop rock cover
          band, <Link href="https://thetrashpandas.com">The Trash Pandas</Link>,
          where he not only played drums, but also ran rehearsals and live
          sound, in addition to the marketing and booking. The Trash Pandas
          quickly built a rambunctious loyal fanbase to patronize the local
          bars, which led to several weddings and corporate events. When the
          pandemic killed the Trash Pandas, Mike and the band's guitar player,
          Tristan Weber, began writing and publishing indie-rock songs under the
          name{" "}
          <Link href={Links.Sandcastles.href}>
            Straight Lines Bright Colors
          </Link>
          .
        </p>
        <p>
          Mike has built a home studio where he records live drums with artists
          across the globe. From dance pop with{" "}
          <Link href="https://thetrashpandas.com">The Trash Pandas</Link>, indie
          rock with{" "}
          <Link href={Links.Sandcastles.href}>
            Straight Lines Bright Colors
          </Link>
          , and the highly syncopated funk-rap fusion of{" "}
          <Link href={Links.PatternsOfSaturn}>Patterns of Saturn</Link>, Mike is
          always able to pull something from his deep bag of grooves and
          masterfully blend it to fit the time and place.
        </p>
      </Constraint>
    </Root>
  );
};

export default BioSection;

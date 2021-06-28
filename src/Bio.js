/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Root = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 70px 50px;
  color: white;
`;

const MaxWidth = styled.div`
  max-width: 600px;
  margin: auto;
`;

const Link = styled.a`
  color: white;
`;

const Bio = () => {
  return (
    <Root>
      <MaxWidth>
        <h2>Bio</h2>
        <p>
          Mike Holm is an American drummer. His musical journey began in the 4th
          grade when he was assigned a trombone by the elementary school band
          teacher. It was heavy to carry to school, and awkward. The case
          scraped up my leg as I lugged it up the hills trying not to step on
          the cracks in the side walk, afraid that I'd be the cause of my mother
          breaking her back. After a year of messing with spit valves, he was
          presented with the opportunity to audition for the American Boychoir
          School. He was thrilled to be accepted and jumped at the extraordinary
          opportunity. 5th grade when he joined the the{" "}
          <Link href="https://americanboychoir.org/">American Boychoir</Link>.
          For 4 years, he sang alto, toured internationally and recorded several
          albums. While most kids were going to soccer practice after school,
          Mike was rehearsing for 3hrs a day. In high school, Mike continued to
          sing in choir while trying a hand at oboe, electric bass, and in
          sophomore year, found the drums. His mom bought his sister a drumset
          for Christmas, and{" "}
        </p>
        <p>
          In college, Mike asked for permission to join the drum studio. Worried
          about where he would continue to practice, and unwilling to give up
          this craft. He insisted that he be let into the studio and Dave
          relented. He asked to learn funk and was told, no. You'll be learning
          jazz here. The music that the drum set was invented for. His first
          semester, he barely practiced anything in his lesson curriculum,
          instead using his rehearsal space to play along with the Red Hot Chili
          Peppers and Blink 182. Mike dreamed of having a cover band that wanted
          to play all his favorite songs. Freshman year, he found a drumset for
          sale on Craigslist. He couldn't drive yet, so his mom drove him to buy
          the Tama Swingstar for $200. I put hard cases on it cause I had to
          store it in the dorm basement. Once a week I was allowed to carry my
          drums to the stage at the student center and set up and play my heart
          out for 3hrs.{" "}
        </p>
        <p>
          In high school, I figured out how to use audacity to slow down Blink
          182 songs to learn them by ear. I felt conflicted about doing this,
          like it would take away the mystery of those legendary drum parts. But
          I still remember how to play Roller Coaster and Shut Up from Take Off
          Your Pants and Jacket.
        </p>
        <p>
          In high school, I had several friends who formed bands and I was
          always so envious. The seniors had a band called Multiverse, that had
          a song called 360, that was so funky and fun I'd listen to it on
          repeat and made it my ringtone on my first cell phone. My friend Colin
          wrote a whole amazong album with a band called the Collectibles, and
          he didn't even ask me, he went with another drummer in my year.
        </p>
        <p>
          In college, I used an elective to take Jazz Improvization from Dave
          Hagedorn. Dave told me that no drummer had ever taken the class and
          that I'd have to pass the same theory tests as everyone else. The
          tests were to write all the note names in all the major 7th chords in
          1 minute. The second test was to write the note names in 10 major and
          minor scales in 2 minutes. In these tests, you don't have time to
          think, you have to write the entire time to get the characters out of
          your hands. They were the hardest memorization tests I've ever had to
          pass. But it was totally worth it for the opportunity to play jazz
          with 12 music majors on all different instruments twice a week. Also
          part of that class was the need to transcribe and learn solos from the
          masters. I choose Spooky Drums by Baby Dodds, and something by Max
          Roach and finally a passage from Take 5 by Joe Morello.
        </p>
        <p>
          In college, some of my classmates made a party band and again I was
          left out of the fun. They were killer though and the drummer, Tom, was
          way better than me. I joined a band with Billy Brasch called Fools on
          the Hill. I was so excited I went and made posters and posted them up
          everywhere. We played some Simon and Garfunkel and some other songs
          I'd never heard of before, but I'm still proud of what came out of my
          hands when we played. It was some patterns that I'd never consiously
          considered, it just fit. It was some complex high hat dancing that
          definitely wasn't on the record, but I heard the rhythms in my head
          and I thought they were perfect. I don't know where those recordings
          are anymore.
        </p>
        <p>
          Drums has never been an easy instrument. It has been an absolute
          struggle every step of the way. From not being chosen for bands, to
          carrying everything around to auditions and practice spaces, fighting
          to be given lessons, begging neighbors for allowable practice hours.
          To starting recording and realizing that it's just way more expensive
          to maintain a drum kit and record it than my rock / funk band peers.
          And yet, the feeling I get when I'm behind the kit locked in with the
          band, and everyone is smiling and the crowd is dancing even as I'm
          switching time signatures on them, feels so incredible. I really feel
          like I'm singing through my kit. It's the ultimate team sport. You
          have to support each other and everyone has their own role and can set
          each other up for success and make each other look good and the result
          is greater than the sum of it's parts.
        </p>
        <p>
          As the leader of{" "}
          <Link href="https://thetrashpandas.com">The Trash Pandas</Link>, Mike
          built a loyal fan base to patronize the bars and breweries around
          Boulder, Colorado at monthly shows. Mike has assembled and rehearsed
          custom wedding bands remotely. Mike Holm tried a number of instruments
          before sitting down behind his sister's drumset. But once he did, it
          was all over. Gone were the days of forced practice. Practicing
          because you should. Playing drums was a transformative experience. The
          wand had chosen it's wizard. Coming home from high school and sitting
          down behind the kit, all the stress of the day would fall away.
        </p>
        <p>
          Mike Holm has been singing for 20 years, drumming for 15, band-leading
          for 7, and writing music for 3
        </p>
      </MaxWidth>
    </Root>
  );
};

export default Bio;

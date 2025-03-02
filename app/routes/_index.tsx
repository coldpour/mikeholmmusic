import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import * as React from "react";
import { Promo, promo } from "~/src/LinkData";
import { Box, CardActionArea, Grid2 as Grid, Stack } from "@mui/material";
import { Socials } from "~/src/Socials";

// https://remix.run/docs/en/main/route/meta
export const meta: MetaFunction = () => [
  { title: "Mike Holm Music" },
  { name: "description", content: "artist.drummer.songwriter" },
];

function Album({ href, label, image }: Promo) {
  return (
    <Card>
      <CardActionArea href={href} LinkComponent={Link}>
        {image ? <CardMedia component="img" image={image} /> : null}
        <CardContent>
          <Typography>{label}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

// https://remix.run/docs/en/main/file-conventions/routes#basic-routes
export default function Index() {
  const [hero, ...rest] = promo;
  return (
    <React.Fragment>
      <Typography variant="h1">Mike Holm</Typography>
      <Stack spacing={2}>
        <Socials justifyContent={"start"} />
        <Album {...hero} />

        <Grid container spacing={2}>
          {rest.map((spec) => (
            <Grid size={6} key={spec.href}>
              <Album {...spec} />
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            paddingTop: "56.25%",
            width: "100%",
          }}
        >
          <Box
            component="iframe"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            src="https://www.youtube.com/embed/videoseries?list=PLEzUwo0F4pKoOIHqOF55-zQN0xuSfSFyl"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </Box>
      </Stack>
    </React.Fragment>
  );
}

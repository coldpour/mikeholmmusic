import { IconButton, Stack, StackProps } from "@mui/material";
import { DM, Listen, Social, Tip } from "./LinkData";

const Hit = ({ logo: Logo, href, label }: Social) => (
  <IconButton href={href} title={label} size="small" key={href}>
    <Logo fontSize="small" />
  </IconButton>
);

export function Socials(props: StackProps) {
  return (
    <Stack direction="row" justifyContent="center" {...props}>
      <Stack direction="row">{DM.map(Hit)}</Stack>
      <Stack direction="row">{Listen.map(Hit)}</Stack>
      <Stack direction="row">{Tip.map(Hit)}</Stack>
    </Stack>
  );
}

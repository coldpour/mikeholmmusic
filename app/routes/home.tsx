import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MIKE HOLM MUSIC" },
    { name: "description", content: "artist.drummer.songwriter" },
  ];
}

export default function Home() {
  return <Welcome />;
}

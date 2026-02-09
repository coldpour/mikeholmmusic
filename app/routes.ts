import { type RouteConfig, index, route } from "@react-router/dev/routes";

export const routes = [
  index("routes/home.tsx"),
  route("album/:slug", "routes/album.$slug.tsx"),
  route("song/:slug", "routes/song.$slug.tsx"),
] satisfies RouteConfig;

export default routes;

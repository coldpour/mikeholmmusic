import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("releases/:slug", "routes/releases.$slug.tsx"),
] satisfies RouteConfig;

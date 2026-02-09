import { describe, expect, it } from "vitest";
import { routes } from "../../routes";

describe("routes", () => {
  it("includes album and song routes", () => {
    const paths = routes.map((route) => route.path);
    expect(paths).toContain("album/:slug");
    expect(paths).toContain("song/:slug");
  });
});

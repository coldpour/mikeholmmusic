import { describe, expect, it } from "vitest";
import { getReleaseBySlug } from "../releases";

describe("getReleaseBySlug", () => {
  it("returns a release by slug", () => {
    const release = getReleaseBySlug("squat");
    expect(release?.title).toBe("Squat!");
  });

  it("includes sandcastles track data", () => {
    const release = getReleaseBySlug("sandcastles");
    expect(release?.tracks?.length).toBeGreaterThan(0);
  });
});

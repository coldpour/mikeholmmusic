import { describe, expect, it } from "vitest";
import { getReleaseBySlug } from "../releases";

describe("getReleaseBySlug", () => {
  it("returns a release by slug", () => {
    const release = getReleaseBySlug("squat");
    expect(release?.title).toBe("Squat!");
  });

  it("exposes sandcastles track releases", () => {
    const track = getReleaseBySlug("improv-for-no-one");
    expect(track?.type).toBe("track");
    expect(track?.album?.slug).toBe("sandcastles");
  });
});

import { describe, expect, it } from "vitest";
import { getReleaseBySlug } from "../releases";

describe("getReleaseBySlug", () => {
  it("returns a release by slug", () => {
    const release = getReleaseBySlug("squat");
    expect(release?.title).toBe("Squat!");
  });
});

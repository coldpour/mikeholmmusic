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

  it("uses the requested homepage artwork for selected songs", () => {
    expect(getReleaseBySlug("impediments")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1770616077/0B8F6E9A-23A0-4F21-B70A-2AC61FABB1AE_1_201_a_dgtxdt.heic"
    );
    expect(getReleaseBySlug("squat")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1770616032/IMG_0386_sxgpwc.jpg"
    );
    expect(getReleaseBySlug("all-we-got-is-time")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1770615831/IMG_3238_sv4fev.jpg"
    );
    expect(getReleaseBySlug("rise-up")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1770616018/15500FA6-CCCD-48AD-BFB6-8D3D465C8BB4_1_105_c_bfhrzs.jpg"
    );
    expect(getReleaseBySlug("possibility")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1770616005/Possibility_Album_Cover_-_Full_5400_p65vo8.jpg"
    );
    expect(getReleaseBySlug("naked-charades")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1770615981/cover5_HD_wp6aai.jpg"
    );
    expect(getReleaseBySlug("just-come-on")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1770615965/cover4HD_lmuk03.jpg"
    );
    expect(getReleaseBySlug("heart-of-fire-brain-of-ice")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1770615932/Heart_of_Fire_Brain_of_Ice_-_Album_Cover_2300px_qzodsu.png"
    );
    expect(getReleaseBySlug("chevy-truck")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1771177090/chevy_truck_cover_kws509.jpg"
    );
    expect(getReleaseBySlug("sandcastles")?.coverImage).toBe(
      "https://res.cloudinary.com/dtyfbjgve/image/upload/f_auto,q_auto,w_800,c_limit/v1771177162/sandcastels_cover_bsjgdx.jpg"
    );
  });
});

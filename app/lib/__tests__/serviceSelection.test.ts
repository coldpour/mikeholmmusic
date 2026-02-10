import { describe, expect, it } from "vitest";
import { filterServices } from "../serviceSelection";

const services = ["bandcamp", "spotify", "apple", "youtube"];

describe("filterServices", () => {
  it("returns all services when none selected", () => {
    expect(filterServices(services, null)).toEqual(services);
  });

  it("returns selected service plus bandcamp when available", () => {
    expect(filterServices(services, "spotify")).toEqual(["bandcamp", "spotify"]);
  });

  it("returns bandcamp only if selected is bandcamp", () => {
    expect(filterServices(services, "bandcamp")).toEqual(["bandcamp"]);
  });

  it("returns only the selected service when bandcamp is missing", () => {
    expect(filterServices(["spotify", "apple"], "spotify")).toEqual(["spotify"]);
  });
});

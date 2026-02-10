import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Welcome } from "../welcome";

describe("home release links", () => {
  it("links release cards to internal pages", () => {
    render(
      <MemoryRouter>
        <Welcome />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /Squat!/i });
    expect(link).toHaveAttribute("href", "/song/squat");
  });
});

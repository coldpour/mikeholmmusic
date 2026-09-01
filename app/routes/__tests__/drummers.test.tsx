import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import DrummersPage from "../drummers";

describe("favorite drummers page", () => {
  it("renders every supplied video embed", () => {
    render(
      <MemoryRouter>
        <DrummersPage />
      </MemoryRouter>
    );

    expect(screen.getAllByTitle(/:/)).toHaveLength(5);
    expect(screen.getByRole("heading", { name: "Larnell Lewis" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Eric Moore II" })).toBeInTheDocument();
    expect(screen.getByText(/View Patrick Abdo’s post/i)).toHaveAttribute(
      "href",
      "https://www.instagram.com/reel/Dctt7CaOxJA/"
    );
  });
});

import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import { describe, expect, it, vi } from "vitest";
import DrummersPage, { loader } from "../drummers";

describe("favorite drummers page", () => {
  it("renders every supplied video embed", async () => {
    const router = createMemoryRouter(
      [
        {
          path: "/drummers",
          loader,
          Component: DrummersPage,
          HydrateFallback: () => null,
        },
      ],
      { initialEntries: ["/drummers"] }
    );
    render(<RouterProvider router={router} />);

    expect(await screen.findByRole("heading", { name: "Aaron Spears" })).toBeInTheDocument();
    expect(screen.getAllByTitle(/:/)).toHaveLength(10);
    expect(screen.getByRole("heading", { name: "Larnell Lewis" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Nate Smith" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "David Garibaldi" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Chad Smith" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Travis Barker" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Eric Moore II" })).toBeInTheDocument();
    expect(screen.getByTitle("Aaron Spears: Usher — Caught Up")).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/YIX5rkirdl8?start=90"
    );
    expect(screen.getByText(/View Patrick Abdo’s post/i)).toHaveAttribute(
      "href",
      "https://www.instagram.com/reel/Dctt7CaOxJA/"
    );
  });

  it("randomizes one mixed list of YouTube and Instagram videos", () => {
    const random = vi.spyOn(Math, "random");
    random.mockReturnValue(0.999);
    const firstOrder = loader().mediaItems.map(({ id }) => id);
    random.mockReturnValue(0);
    const secondOrder = loader().mediaItems.map(({ id }) => id);
    random.mockRestore();

    expect(firstOrder).not.toEqual(secondOrder);
    expect(new Set(firstOrder)).toEqual(new Set(secondOrder));
    expect(secondOrder.indexOf("eric-moore-get-ur-freak-on")).toBeLessThan(
      secondOrder.length - 1
    );
  });
});

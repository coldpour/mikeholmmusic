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
    expect(screen.getAllByTitle(/:/)).toHaveLength(16);
    expect(screen.getByRole("heading", { name: "Larnell Lewis" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Nate Smith" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "David Garibaldi" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Chad Smith" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Travis Barker" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Aron Mellergårdh" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Petar Janjic" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Jordan Rose" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Louis Cole" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Jas Kayser" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Anderson .Paak" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Eric Moore II" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "The Pocket Queen" })).toBeInTheDocument();
    expect(screen.getByTitle("Aaron Spears: Usher — Caught Up")).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/YIX5rkirdl8?start=90"
    );
    expect(
      screen.getByTitle("Jas Kayser: Alfa Mist — Bring Backs (Live at Metropolis)")
    ).toHaveAttribute("src", "https://www.youtube.com/embed/15Nqbic6HZs?start=622");
    expect(screen.getByTitle("Anderson .Paak: Come Down")).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/-OqrcUvrbRY?start=88"
    );
    expect(screen.getByText(/View Patrick Abdo’s post/i)).toHaveAttribute(
      "href",
      "https://www.instagram.com/reel/Dctt7CaOxJA/"
    );
    expect(screen.getByRole("link", { name: /View The Pocket Queen/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/reel/DMYk7emhSEc/"
    );
    expect(screen.queryByText("Why this one stays with me")).not.toBeInTheDocument();
    expect(
      screen.getByText(/I first encountered Jordan at a Theo Katzman show/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/This “Caught Up” performance was one of the first/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Jordan Rose/i })).toHaveAttribute(
      "href",
      "https://www.jordanrosedrums.com/"
    );
    expect(
      screen.getByRole("link", { name: /Patrick Abdo on Instagram/i })
    ).toHaveAttribute("href", "https://www.instagram.com/patrickjabdo/");
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

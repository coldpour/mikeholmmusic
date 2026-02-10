export function filterServices(
  services: string[],
  selected: string | null
): string[] {
  if (!selected) return services;
  if (selected === "bandcamp") return ["bandcamp"];
  if (services.includes("bandcamp")) {
    return ["bandcamp", selected];
  }
  return [selected];
}

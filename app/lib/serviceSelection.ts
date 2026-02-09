export function filterServices(
  services: string[],
  selected: string | null
): string[] {
  if (!selected) return services;
  if (selected === "bandcamp") return ["bandcamp"];
  return ["bandcamp", selected].filter(
    (service, index, arr) => arr.indexOf(service) === index
  );
}

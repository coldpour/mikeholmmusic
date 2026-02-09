import { useEffect, useState } from "react";
import type { ServiceKey } from "../data/releases";

const STORAGE_KEY = "preferredService";

export function useServiceSelection() {
  const [selected, setSelectedState] = useState<ServiceKey | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(STORAGE_KEY) as ServiceKey | null;
    if (stored) {
      setSelectedState(stored);
    }
  }, []);

  const setSelected = (service: ServiceKey | null) => {
    setSelectedState(service);
    if (typeof window === "undefined") return;
    if (!service) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, service);
  };

  const resetSelected = () => setSelected(null);

  return { selected, setSelected, resetSelected };
}

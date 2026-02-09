import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useServiceSelection } from "../useServiceSelection";

const createStorage = () => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] ?? null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
};

beforeEach(() => {
  const storage = createStorage();
  Object.defineProperty(window, "localStorage", {
    value: storage,
    writable: true,
  });
});

describe("useServiceSelection", () => {
  it("persists selection in localStorage", () => {
    const { result } = renderHook(() => useServiceSelection());
    act(() => result.current.setSelected("spotify"));
    expect(window.localStorage.getItem("preferredService")).toBe("spotify");
  });
});

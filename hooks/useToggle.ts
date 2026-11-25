"use client";

import { useState } from "react";

export function useToggle(initialState = false): [boolean, () => void, (value?: boolean) => void] {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = () => setState((prev) => !prev);
  const setToggle = (value?: boolean) => {
    setState((prev) => (typeof value === "boolean" ? value : !prev));
  };

  return [state, toggle, setToggle];
}


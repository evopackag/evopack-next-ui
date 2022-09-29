import { useEffect, useState } from "react";

export default function useStickyStorage(key: string, defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  // useEffect(() => {
  //   const stickyValue = window.localStorage.getItem(key);
  //   return stickyValue ? JSON.parse(stickyValue) : defaultValue;
  // });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export function getInitialState(initialState: any) {
  const storedState = localStorage.getItem("Stored tasks");
  return storedState ? JSON.parse(storedState) : initialState;
}

export function storeState(state: any) {
  localStorage.setItem("Stored tasks", JSON.stringify(state));
}

export function deleteLocalItem(key: any) {
  localStorage.removeItem(key);
}

import { useState, useEffect } from "react";
export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(initial);
  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) setValue(JSON.parse(stored));
    } catch (e) {}
  }, [key]);
  const set = (v) => {
    setValue(v);
    try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {}
  };
  return [value, set];
}

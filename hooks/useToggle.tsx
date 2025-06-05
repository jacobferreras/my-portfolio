"use client";
import { useState, useEffect } from "react";

const useToggle = () => {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme") ?? `{ "theme": "light"  }`)
  );

  useEffect(() => {
    localStorage.setItem("light", JSON.stringify(theme));
  }, [theme]);

  return { theme, setTheme };
};

export default useToggle;

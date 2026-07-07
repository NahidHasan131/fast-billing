"use client";

import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({ dark: true, setDark: () => {} });

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.remove("light-mode");
    } else {
      html.classList.add("light-mode");
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

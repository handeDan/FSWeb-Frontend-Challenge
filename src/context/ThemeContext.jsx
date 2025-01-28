import React, { createContext, useEffect, useState } from "react";

// Context api:
export const ThemeContext = createContext();

// Provider bileşeni:
export const ThemeProvider = ({ children }) => {
  // Varsayılan tema:
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  //theme her değiştiğinde localStorage'e kaydetmek ve className'i ona göre eklemek için:
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

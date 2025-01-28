import React, { createContext, useEffect, useState } from "react";

// Context api:
export const ThemeContext = createContext();

// Provider bileşeni:
export const ThemeProvider = ({ children }) => {
  // Varsayılan tema:
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  // Varsayılan toggle:
  // const [modeToggle, setModeToggle] = useState(
  //   localStorage.getItem("modeToggle") === "dark"
  // );
  //theme her değiştiğinde localStorage'e kaydetmek ve className'i ona göre eklemek için:
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  //tıklayınca theme değiştirme fonksiyonu:
  const handleThemeToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, handleThemeToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

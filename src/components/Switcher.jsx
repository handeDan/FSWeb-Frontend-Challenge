import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

function Switcher() {
  const { getText, toggleLanguage } = useContext(LanguageContext);

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={toggleLanguage}>{getText("language")}</button>
      <button onClick={toggleTheme}>
        {darkMode ? getText("modeLight") : getText("modeDark")}
      </button>
    </div>
  );
}

export default Switcher;

import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";

function Switcher() {
  const { getText, toggleLanguage, language } = useContext(LanguageContext);

  const { darkMode, handleThemeToggle } = useContext(ThemeContext);

  return (
    <div className="switcherContainer flex justify-end container mt-6">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={darkMode} //theme durumu kontrolü
          onChange={handleThemeToggle}
        />
        <div className="relative w-11 h-6 bg-gray-900 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-yellow-300 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-800 dark:peer-checked:bg-indigo-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900  dark:text-white">
          {darkMode ? getText("modeDark") : getText("modeLight")}
        </span>
        <span className="mx-4"> | </span>
      </label>
      <div className="flex justify-center items-center">
        <p>{language === "en" ? getText("language_v2") : ""}</p>
        <button
          onClick={toggleLanguage}
          className="px-2 py-2 text-indigo-800 dark:text-indigo-500 font-bold rounded-md transition-all duration-200"
        >
          {getText("language")}
        </button>
        <p>{language === "tr" ? getText("language_v2") : ""}</p>
      </div>
    </div>
  );
}

export default Switcher;

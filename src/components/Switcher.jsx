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
          checked={!darkMode} //theme durumu kontrolü
          onChange={handleThemeToggle}
        />
        {darkMode ? (
          <div className="relative w-11 h-6 bg-stone-700 rounded-full peer-checked:bg-gray-600 transition-all">
            <div className="absolute top-1 left-1 w-4 h-4 bg-yellow-300 rounded-full peer-checked:translate-x-full transition-all">
              <div className="absolute top-0 left-0 w-4 h-4 bg-stone-700 rounded-full translate-x-1"></div>
            </div>
          </div>
        ) : (
          <div className="relative w-11 h-6 bg-gray-800 rounded-full peer-checked:bg-indigo-800 transition-all">
            <div className="absolute top-1 right-1 w-4 h-4 bg-yellow-300 rounded-full peer-checked:translate-x-full transition-all"></div>
          </div>
        )}
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-stone-300">
          {darkMode ? getText("modeLight") : getText("modeDark")}
        </span>
        <span className="mx-4 dark:text-stone-400"> | </span>
      </label>
      <div className="flex justify-center items-center">
        <p className="dark:text-stone-400">
          {language === "en" ? getText("language_v2") : ""}
        </p>
        <button
          onClick={toggleLanguage}
          className="px-2 py-2 text-indigo-800 dark:text-violet-300 font-bold rounded-md transition-all duration-200"
        >
          {getText("language")}
        </button>
        <p className="dark:text-stone-400">
          {language === "tr" ? getText("language_v2") : ""}
        </p>
      </div>
    </div>
  );
}

export default Switcher;

import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Card({ item }) {
  const { getText, language } = useContext(LanguageContext);

  return (
    <div>
      <img src={getText(item.image)} alt={getText(item.title)} />
      <p className="text-indigo-800 dark:text-indigo-500 text-2xl py-3">
        {getText(item.title)}
      </p>
      <p className="text-xs mb-2">{getText(item.description)}</p>
      <div>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 text-sm dark:text-white font-bold dark:border-white">
          {getText(item.buton_1)}
        </button>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 text-sm dark:text-white font-bold dark:border-white">
          {getText(item.buton_2)}
        </button>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 text-sm dark:text-white font-bold dark:border-white">
          {getText(item.buton_3)}
        </button>
      </div>
      <nav className="flex justify-between text-indigo-800 underline dark:text-indigo-500 mt-5 text-base">
        <a href={getText(item.link_1)} target="_blank">
          Github
        </a>
        <a href={getText(item.link_2)} target="_blank">
          {language === "tr" ? "Siteye git" : "View Site"}
        </a>
      </nav>
    </div>
  );
}

export default Card;

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
      <p className="text-sm">{getText(item.description)}</p>
      <div>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 dark:text-white font-bold dark:border-white">
          {getText(item.buton_1)}
        </button>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 dark:text-white font-bold dark:border-white">
          {getText(item.buton_2)}
        </button>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 dark:text-white font-bold dark:border-white">
          {getText(item.buton_3)}
        </button>
      </div>
      <nav className="flex justify-between text-indigo-800 underline m-3 dark:text-indigo-500">
        <a href={getText(item.link_1)}>Github</a>
        <a href={getText(item.link_2)}>
          {language === "tr" ? "Siteye git" : "View Site"}
        </a>
      </nav>
    </div>
  );
}

export default Card;

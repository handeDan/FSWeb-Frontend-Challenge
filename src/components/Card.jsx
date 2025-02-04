import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Card({ item }) {
  const { getText, language } = useContext(LanguageContext);

  return (
    <div className="cardComponent hover:bg-gray-100 dark:hover:text-black card hover:rounded-md p-3">
      <img src={getText(item.image)} alt={getText(item.title)} />
      <p className="text-indigo-800 dark:text-violet-300 text-2xl py-3">
        {getText(item.title)}
      </p>
      <p className="text-xs mb-2 text-gray-600 dark:text-white">
        {getText(item.description)}
      </p>
      <div>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 text-sm dark:text-violet-400 font-bold dark:border-violet-400 dark:bg-neutral-700">
          {getText(item.buton_1)}
        </button>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 text-sm dark:text-violet-400 font-bold dark:border-violet-400 dark:bg-neutral-700">
          {getText(item.buton_2)}
        </button>
        <button className="border border-indigo-800 px-2 mt-2 mr-2 rounded-md text-indigo-800 text-sm dark:text-violet-400 font-bold dark:border-violet-400 dark:bg-neutral-700">
          {getText(item.buton_3)}
        </button>
      </div>
      <nav className="flex justify-between text-indigo-800 underline dark:text-slate-300 mt-5 text-base">
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

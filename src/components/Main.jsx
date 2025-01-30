import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Main() {
  const { getText } = useContext(LanguageContext);

  return (
    <div className="mt-10 flex container">
      <div>
        <p className="text-indigo-800 dark:text-indigo-500 font-bold text-xl">
          Hande Dan
        </p>
        <br />
        <p className="text-6xl font-bold pb-1">{getText("mainTitle_1")}</p>
        <p className="text-6xl font-bold">{getText("mainTitle_2")}</p>
        <br />
        <p className="pr-16">{getText("mainText")}</p>
        <div className="mt-7 flex gap-5">
          <button className="border border-indigo-800 px-4 py-2 rounded-md bg-indigo-800 text-white dark:text-white font-bold dark:border-white">
            {getText("mainButton1")}
          </button>
          <button className="border border-indigo-800 px-4 py-2 rounded-md text-indigo-800 dark:text-white font-bold dark:border-white">
            {getText("mainButton2")}
          </button>
          <button className="border border-indigo-800 px-4 py-2 rounded-md text-indigo-800 dark:text-white font-bold dark:border-white">
            {getText("mainButton3")}
          </button>
        </div>
      </div>
      <div>
        <img
          src="../../public/images/main.jpg"
          alt=""
          className="rounded-2xl w-screen"
        />
      </div>
    </div>
  );
}

export default Main;

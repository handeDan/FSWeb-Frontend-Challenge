import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { BiLogoGithub } from "react-icons/bi";
import { TfiLinkedin } from "react-icons/tfi";

function Main() {
  const { getText } = useContext(LanguageContext);

  return (
    <div className="mainComponent mt-16 flex container">
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
          <a
            href={getText("mainButton1_link")}
            target="_blank"
            className="border border-indigo-800 px-4 py-2 rounded-md hover:bg-indigo-800 hover:text-white text-indigo-800 dark:text-white font-bold dark:border-white"
          >
            {getText("mainButton1")}
          </a>
          <a
            href={getText("mainButton2_link")}
            target="_blank"
            className="flex gap-2 border border-indigo-800 px-2 py-2 rounded-md hover:bg-indigo-800 hover:text-white text-indigo-800 dark:text-white font-bold dark:border-white"
          >
            <BiLogoGithub className="text-2xl" />
            {getText("mainButton2")}
          </a>
          <a
            href={getText("mainButton3_link")}
            target="_blank"
            className="flex gap-2 border border-indigo-800 px-2 py-2 rounded-md hover:bg-indigo-800 hover:text-white text-indigo-800 dark:text-white font-bold dark:border-white"
          >
            <TfiLinkedin className="text-xl" />
            {getText("mainButton3")}
          </a>
        </div>
      </div>
      <div>
        <img src="/images/main.jpg" alt="" className="rounded-2xl w-screen" />
      </div>
    </div>
  );
}

export default Main;

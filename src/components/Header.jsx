import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Header() {
  const { getText } = useContext(LanguageContext);

  // dile bağlı olarak getText'i her componentte shortcut'la çalıştırıyoruz:
  return (
    <div className="container h-[10vh]">
      <header className="flex justify-between items-end align">
        <div>
          <h1 className="flex justify-center items-center w-10 h-10 bg-indigo-200 text-indigo-800 font-bold rounded-full">
            H
          </h1>
        </div>
        <nav>
          <ul className="flex justify-end items-center gap-12 mt-5">
            <a
              href="#skills"
              className="hover:border hover:border-indigo-800 px-2 py-2 hover:rounded-md hover:text-indigo-800 dark:text-white hover:font-bold dark:border-white"
            >
              {getText("skills")}
            </a>
            <a
              href="#projects"
              className="hover:border hover:border-indigo-800 px-2 py-2 hover:rounded-md hover:text-indigo-800 dark:text-white hover:font-bold dark:border-white"
            >
              {getText("projects")}
            </a>
            <a
              href={getText("mainButton1_link")}
              target="_blank"
              className="hover:border hover:border-indigo-800 px-2 py-2 hover:rounded-md hover:text-indigo-800 dark:text-white hover:font-bold dark:border-white"
            >
              {getText("hireMe")}
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;

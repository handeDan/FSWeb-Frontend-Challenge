import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { FaHandPointRight } from "react-icons/fa6";

function Footer() {
  const { getText } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 dark:bg-transparent">
      <div className="container">
        <p className="text-2xl font-bold py-10 w-72">
          {getText("footerTitle")}
        </p>
        <div className="flex justify-between items-center pb-16">
          <div className="flex ">
            <FaHandPointRight className="mr-3 text-xl text-amber-500 dark:text-white" />
            <a href="" className="text-rose-800 dark:text-indigo-500 underline">
              {getText("email")}
            </a>
          </div>
          <div className="flex gap-5 justify-end">
            <a href={getText("footer_link1")} target="_blank">
              {getText("footer_link1_text")}
            </a>
            <a
              href={getText("footer_link2")}
              target="_blank"
              className=" text-green-600 dark:text-green-300"
            >
              {getText("footer_link2_text")}
            </a>
            <a
              href={getText("footer_link3")}
              target="_blank"
              className=" text-cyan-700 dark:text-cyan-300"
            >
              {getText("footer_link3_text")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

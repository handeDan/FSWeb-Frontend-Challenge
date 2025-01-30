import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { TbHandFingerRight } from "react-icons/tb";

function Footer() {
  const { getText } = useContext(LanguageContext);

  return (
    <div className="bg-gray-100 dark:bg-transparent">
      <div className="container">
        <p className="text-2xl font-bold py-10 w-72">
          {getText("footerTitle")}
        </p>
        <div className="flex justify-between items-end">
          <div className="flex">
            <TbHandFingerRight className="mr-2 text-xl text-indigo-800 dark:text-white" />
            <a
              href=""
              className="text-rose-800 dark:text-indigo-500 underline pb-16"
            >
              {getText("email")}
            </a>
          </div>
          <div className="flex gap-5 justify-end">
            <a href={getText("footer_link1")} className="pb-16">
              {getText("footer_link1_text")}
            </a>
            <a
              href={getText("footer_link2")}
              className="pb-16 text-green-600 dark:text-green-300"
            >
              {getText("footer_link2_text")}
            </a>
            <a
              href={getText("footer_link3")}
              className="pb-16 text-cyan-700 dark:text-cyan-300"
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

import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Skills() {
  const { getText } = useContext(LanguageContext);

  return (
    <div className="skillsComponent container" id="skills">
      <p className="text-3xl font-bold pt-14 text-gray-800 dark:text-slate-300">
        {getText("skills")}
      </p>
      <div className="py-3 flex gap-16">
        <div>
          <p className="text-indigo-800 dark:text-violet-300 text-xl pb-3">
            {getText("skills_1")}
          </p>
          <p className="text-sm text-gray-600 dark:text-white">
            {getText("skills_1_desc")}
          </p>
        </div>
        <div>
          <p className="text-indigo-800 dark:text-violet-300 text-xl pb-3">
            {getText("skills_2")}
          </p>
          <p className="text-sm text-gray-600 dark:text-white">
            {getText("skills_2_desc")}
          </p>
        </div>
        <div>
          <p className="text-indigo-800 dark:text-violet-300 text-xl pb-3">
            {getText("skills_3")}
          </p>
          <p className="text-sm text-gray-600 dark:text-white">
            {getText("skills_3_desc")}
          </p>
        </div>
      </div>
      <br />
      <hr className="dark:border-violet-300" />
      <br />
    </div>
  );
}

export default Skills;

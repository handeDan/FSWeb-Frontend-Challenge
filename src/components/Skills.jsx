import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Skills() {
  const { getText } = useContext(LanguageContext);

  return (
    <div className="container" id="skills">
      <p className="text-3xl font-bold pt-14">{getText("skills")}</p>
      <div className="py-3 flex gap-16">
        <div>
          <p className="text-indigo-800 dark:text-indigo-500  text-xl pb-3">
            {getText("skills_1")}
          </p>
          <p className="text-sm">{getText("skills_1_desc")}</p>
        </div>
        <div>
          <p className="text-indigo-800 dark:text-indigo-500  text-xl pb-3">
            {getText("skills_2")}
          </p>
          <p className="text-sm">{getText("skills_2_desc")}</p>
        </div>
        <div>
          <p className="text-indigo-800 dark:text-indigo-500  text-xl pb-3">
            {getText("skills_3")}
          </p>
          <p className="text-sm">{getText("skills_3_desc")}</p>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
}

export default Skills;

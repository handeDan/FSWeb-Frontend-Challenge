import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Profile() {
  const { getText } = useContext(LanguageContext);

  return (
    <div className="profileComponent container">
      <p className="text-3xl font-bold dark:text-slate-300 text-gray-800">
        {getText("profile")}
      </p>
      <div className="py-3 flex gap-32">
        <div>
          <p className="text-indigo-800 dark:text-violet-300 text-xl pb-3">
            {getText("profileTittle_1")}
          </p>
          <div className="part1 flex gap-10">
            <div className="flex flex-col gap-1 font-bold">
              <p>{getText("birthDate")}</p>
              <p>{getText("birthPlace")}</p>
              <p>{getText("education")}</p>
              <p>{getText("role")}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p>{getText("birthDate_answer")}</p>
              <p>{getText("birthPlace_answer")}</p>
              <p>{getText("education_answer")}</p>
              <p>{getText("role_answer")}</p>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start">
          <p className="text-indigo-800 dark:text-violet-300 text-xl pb-3">
            {getText("profileTittle_2")}
          </p>
          <div className="part2">
            <p className="text-sm text-gray-600 dark:text-white">
              {getText("aboutMe_1")}
            </p>
            <br />
            <p className="text-sm text-gray-600 dark:text-white">
              {getText("aboutMe_2")}
            </p>
          </div>
        </div>
      </div>
      <br />
      <hr className="dark:border-violet-300" />
      <br />
    </div>
  );
}

export default Profile;

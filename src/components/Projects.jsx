import React, { useContext } from "react";
import translations from "../assets/translations.json";
import Card from "./Card";
import { LanguageContext } from "../context/LanguageContext";

function Projects() {
  const { language } = useContext(LanguageContext);
  const contents = translations[language]?.projectsContents;
  if (!contents) return <div>Loading...</div>; // Eğer içerik yoksa, yükleniyor mesajı

  return (
    //contents nesne olduğu için önce Object.values() ile diziye çeviriyoruz
    <div className="mb-10">
      <p className="text-2xl font-bold pb-3">
        {translations[language]?.projects}
      </p>
      <div className="py-3 flex justify-between gap-14">
        {Object.values(contents).map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;

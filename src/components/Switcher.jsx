import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

function Switcher() {
  const { language, setLanguage, getText } = useContext(LanguageContext);

  //butona tıklanınca çalışacak fonksiyon:
  const toggleLanguage = () => {
    //language değişecek ve set edicez:
    const updatedLanguage = language === "en" ? "tr" : "en";
    setLanguage(updatedLanguage);
    //local'e kaydedicez ki her açılışta local'den çekip local'de varsa onu göster yoksa default neyse o dicez:
    localStorage.setItem("language", updatedLanguage);
  };

  return (
    <div>
      <button onClick={toggleLanguage}>{getText("language")}</button>
    </div>
  );
}

export default Switcher;

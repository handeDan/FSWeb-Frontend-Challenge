import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Context api:
export const LanguageContext = createContext();

// Provider bileşeni:
export const LanguageProvider = ({ children }) => {
  // Varsayılan dil:
  const [language, setLanguage] = useState("tr");
  // Varsayılan çeviri:
  //default olarak {} ama içini useEffect'le dolduruyoruz ve getItem fonksiyonuyla gelen veriden istediğimiz bilgiyi çekeceğiz:
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    axios
      .get("/translations.json") //HEM TR HEM EN DATA GELİYOR komple..
      .then((response) => {
        setTranslations(response.data);
      })
      .catch((error) =>
        console.error("Çeviri dosyası yüklenirken hata oluştu:", error)
      );
  }, []);

  //language'e bağlı olarak istenen text'i(shortcut) çekiyoruz(ekranda kullanıcaz):
  const getText = (shortcut) => {
    if (!translations || !translations[language]) return shortcut; // Eğer veriler yüklenmediyse shortcut'ı döndür
    return translations[language][shortcut] || shortcut; // Çeviri yoksa yine shortcut'ı döndür
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations, getText }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

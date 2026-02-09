import { useState } from "react";
import { translations } from "../data/translations.js";
import { LanguageContext } from "./LanguageContext.jsx";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));
  };

  const translation = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        translations,
        translation,
        toggleLanguage,
        language,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

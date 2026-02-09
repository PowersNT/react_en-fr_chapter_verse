import { useContext } from "react";
import { LanguageContext } from "../components/LanguageContext.jsx";

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  console.log("Language context value:", context);
  return context;
};

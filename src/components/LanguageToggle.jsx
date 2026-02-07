const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="lang-toggle"
      aria-label="Toggle language"
    >
      <span className={`lang-flag ${language === "en" ? "active" : ""}`}>
        🇬🇧
      </span>
      <span className={`lang-flag ${language === "fr" ? "active" : ""}`}>
        🇫🇷
      </span>
    </button>
  );
};

import { useLanguage } from "./CustomHook.jsx";
import { LanguageToggle } from "./LanguageToggle.jsx";

export const Navigation = () => {
  const { translation } = useLanguage();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <div className="logo-text">
            <div className="logo-name">Chapter & Verse</div>
            <div className="logo-tagline">Bookshop</div>
          </div>
        </div>
        <div className="nav-links">
          <a href="#home">{translation.nav.home}</a>
          <a href="#catalog">{translation.nav.catalog}</a>
          <a href="#events">{translation.nav.events}</a>
          <a href="#about">{translation.nav.about}</a>
          <a href="#contact">{translation.nav.contact}</a>
        </div>
        <LanguageToggle />
      </div>
    </nav>
  );
};

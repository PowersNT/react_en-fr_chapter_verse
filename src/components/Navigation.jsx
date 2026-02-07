const Navigation = () => {
  const { t } = useLanguage();

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
          <a href="#home">{t.nav.home}</a>
          <a href="#catalog">{t.nav.catalog}</a>
          <a href="#events">{t.nav.events}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#contact">{t.nav.contact}</a>
        </div>
        <LanguageToggle />
      </div>
    </nav>
  );
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <div className="hero-cta">
          <button className="btn btn-primary">{t.hero.cta}</button>
          <button className="btn btn-secondary">{t.hero.secondary}</button>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="book-stack"></div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t.footer.hours}</h4>
          <p>{t.footer.schedule}</p>
        </div>
        <div className="footer-section">
          <h4>{t.footer.location}</h4>
          <p>{t.footer.address}</p>
        </div>
        <div className="footer-section">
          <div className="footer-logo">Chapter & Verse</div>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Chapter & Verse | Chapitre & Verset. {t.footer.rights}</p>
      </div>
    </footer>
  );
};

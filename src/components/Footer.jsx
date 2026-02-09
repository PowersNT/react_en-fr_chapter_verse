import { useLanguage } from "./CustomHook.jsx";

export const Footer = () => {
  const { translation } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{translation.footer.hours}</h4>
          <p>{translation.footer.schedule}</p>
        </div>
        <div className="footer-section">
          <h4>{translation.footer.location}</h4>
          <p>{translation.footer.address}</p>
        </div>
        <div className="footer-section">
          <div className="footer-logo">Chapter & Verse</div>
          <p className="footer-tagline">{translation.footer.tagline}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Chapter & Verse | Chapitre & Verset.{" "}
          {translation.footer.rights}
        </p>
      </div>
    </footer>
  );
};

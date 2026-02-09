import { useLanguage } from "./CustomHook.jsx";

export const Hero = () => {
  const { translation } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{translation.hero.title}</h1>
        <p className="hero-subtitle">{translation.hero.subtitle}</p>
        <div className="hero-cta">
          <button className="btn btn-primary">{translation.hero.cta}</button>
          <button className="btn btn-secondary">
            {translation.hero.secondary}
          </button>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="book-stack"></div>
      </div>
    </section>
  );
};

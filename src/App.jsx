import { LanguageProvider } from "./components/LanguageProvider.jsx";
import { Navigation } from "./components/Navigation.jsx";
import { Hero } from "./components/Hero.jsx";
// import { FeaturedBooks } from "./components/FeaturedBooks.jsx";
// import { Services } from "./components/Services.jsx";
// import { Newsletter } from "./components/Newsletter.jsx";
import { Footer } from "./components/Footer.jsx";
import "./App.css";

const App = () => {
  return (
    <LanguageProvider>
      <div className="app">
        <Navigation />
        <Hero />
        {/* <FeaturedBooks /> */}
        {/* <Services /> */}
        {/* <Newsletter /> */}

        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;

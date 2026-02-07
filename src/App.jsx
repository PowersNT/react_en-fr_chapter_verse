import React, { createContext, useContext, useState } from "react";
import "./App.css";

const App = () => {
  return (
    <LanguageProvider>
      <div className="app">
        <Navigation />
        <Hero />
        <FeaturedBooks />
        <Services />
        <Newsletter />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;

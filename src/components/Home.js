import React from "react";

import Header from "./Header";
import HeroSection from "./HeroSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />

      <main className="flex-grow">
        {/*  Page sections */}
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;

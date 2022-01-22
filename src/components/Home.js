import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import NewsletterIssues from "./NewsletterIssues";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <NewsletterIssues />
      </main>
    </div>
  );
};

export default Home;

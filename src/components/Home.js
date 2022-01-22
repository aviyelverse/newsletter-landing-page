import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import NewsletterIssues from "./NewsletterIssues";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <NewsletterIssues />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

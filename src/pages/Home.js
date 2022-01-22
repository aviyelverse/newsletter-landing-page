import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import NewsletterIssues from "../components/NewsletterIssues";
import Footer from "../components/Footer";

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

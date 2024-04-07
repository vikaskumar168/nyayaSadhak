import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import About from "../Components/About";

const Homepage = () => {
  return (
    <div>
      <main className="w-screen h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Footer />
      </main>
    </div>
  );
};

export default Homepage;

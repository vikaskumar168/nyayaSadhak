import React from "react";
import LawImage from "./../assets/Law-1.jpg";

const Hero = () => {
  return (
    <section className="hero flex items-center justify-center bg-gray-900 text-white min-h-8">
          <div className="hero-image relative w-full">
        <img src={LawImage} alt="Hero" className="w-full h-full object-cover" />
        <div className="hero-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl font-bold">Welcome to NyayaSadhak</h1>
          <div className="mt-6 md:mt-18 lg:mt-12">
            <a
              href="/login"
              className="inline-block bg-green-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg"
            >
              Try NyaySarathi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

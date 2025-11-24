import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-title">Welcome to our Doshop </h2>
          <p className="hero-text">
            Up to 50% off on selected products. Limited time offer!
          </p>

          <div className="hero-buttons">
            <button className="hero-btn-primary">Shop Now</button>
            <button className="hero-btn-outline">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

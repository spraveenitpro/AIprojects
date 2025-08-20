import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">AI Text Summarizer</h1>
        <p className="hero-subtitle">
          Transform lengthy articles into concise summaries with the power of
          artificial intelligence
        </p>
        <div className="hero-actions">
          <button className="cta-button primary">Get Started</button>
          <button className="cta-button secondary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

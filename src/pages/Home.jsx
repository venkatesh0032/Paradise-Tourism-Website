import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to <span>Paradasi Tourism</span></h1>
          <p>
            Explore premium destinations, plan your perfect getaway, and embark
            on unforgettable adventures — all in one place.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Book Now</button>
            <button className="btn-secondary">Explore Places</button>
          </div>
        </div>
      </div>

      <div className="features-section">
        <h2>🌍 Why Choose Paradasi?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Tailored Packages</h3>
            <p>Custom travel plans for families, couples, and solo travelers.</p>
          </div>
          <div className="feature-card">
            <h3>Top Destinations</h3>
            <p>Handpicked resorts and scenic spots across the world.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Dedicated team ready to assist at every stage of your journey.</p>
          </div>
        </div>
      </div>

      <div className="highlight-section">
        <h2>🌴 Ready for Your Dream Vacation?</h2>
        <p>From the Maldives to the Swiss Alps, we’ve got your dream covered.</p>
        <button className="btn-highlight">Start Your Journey</button>
      </div>
    </div>
  );
}

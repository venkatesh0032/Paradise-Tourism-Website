import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Journey to All World's Corners</h1>
          <p>Unlock the wonders of the world with personalized dream trips.</p>
          <button className="book-btn">Book a Trip</button>
        </div>

        {/* Image Cards with Arrows */}
        <div className="slider-cards">
          <div className="slider-card">🌋 Arctic Wonders</div>
          <div className="slider-card">🌿 Amazon Expedition</div>
          <div className="slider-card">🏝️ Bali Retreat</div>
        </div>
      </section>

      {/* Stats & Highlights */}
      <section className="stats-section">
        <div className="stat-box">
          <h2>10</h2>
          <p>Years Experience</p>
        </div>
        <div className="stat-box">
          <h2>5000</h2>
          <p>Happy Travelers</p>
        </div>
        <div className="stat-box">
          <h2>100</h2>
          <p>Countries Covered</p>
        </div>
        <div className="learn-box">
          <p>
            Our tours offer a variety of destinations... <br />
            <a href="#">Learn more →</a>
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-preview">
        <img src="/images/mountain1.jpg" alt="preview1" />
        <img src="/images/island.jpg" alt="preview2" />
        <img src="/images/machu.jpg" alt="preview3" />
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="video-container">
          <iframe
            width="100%"
            height="250"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Travel Video"
            allowFullScreen
          />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Our team of travel experts is passionate about exploring the world and helping
            our clients do the same. From sun-drenched beaches to mountain escapes, we
            provide unforgettable journeys tailored just for you.
          </p>
          <div className="features">
            <span>✅ Safety</span>
            <span>💬 Support</span>
            <span>💰 Value</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

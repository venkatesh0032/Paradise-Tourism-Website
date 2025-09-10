import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const sections = [
    {
      title: 'ABOUT',
      text: 'Enjoy your stay at our elegant and luxurious resort. From world-class amenities to stunning architecture, we offer an unforgettable experience.',
      image: '/images/gallery/about.jpg',
      button: 'BOOK NOW',
    },
    {
      title: 'ROOMS',
      text: 'Our rooms are spacious, modern, and equipped with everything you need for a comfortable stay. Each room offers stunning views and cozy interiors.',
      image: '/images/gallery/rooms.jpg',
      button: 'BOOK ROOM',
    },
    {
      title: 'INTERIOR',
      text: 'Experience world-class interiors crafted with attention to detail. From furnishings to lighting, everything is hand-picked to exude elegance.',
      image: '/images/gallery/interior.jpg',
      button: 'EXPLORE MORE',
    },
    {
      title: 'AMENITIES',
      text: 'We offer everything from infinity pools to yoga decks, spas, fine dining, and concierge services to make your stay remarkable.',
      image: '/images/gallery/amenities.jpg',
      button: 'FIND OUT MORE',
    },
    {
      title: 'EXTERIOR',
      text: 'Lush gardens, tranquil views, and beautiful architecture await you. Perfect for romantic walks or peaceful mornings with nature.',
      image: '/images/gallery/exterior.jpg',
      button: 'SEE GALLERY',
    },
  ];

  return (
    <div className="gallery-page">
      {/* Hero Banner */}
      <div className="hero-banner">
        <img src="/images/gallery/hero.jpg" alt="Resort Exterior" />
        <div className="hero-text">
          <h1>ENJOY YOUR STAY AT CASA BO</h1>
        </div>
      </div>

      {/* Gallery Sections */}
      {sections.map((section, idx) => (
        <div
          className={`gallery-section ${idx % 2 !== 0 ? 'reverse' : ''}`}
          key={idx}
        >
          <div className="gallery-image">
            <img src={section.image} alt={section.title} />
          </div>
          <div className="gallery-content">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
            <button className="gallery-btn">{section.button}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;

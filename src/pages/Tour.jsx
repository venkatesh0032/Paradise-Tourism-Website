import React from 'react';
import './Tour.css'; // Make sure this exists and is updated

const Tour = () => {
  return (
    <div className="tour-page">
      {/* Hero Banner */}
      <div className="tour-hero">
        <h1 className="hero-title">ENJOY YOUR TRIP</h1>
        <p className="hero-subtitle">Like Never Before!</p>
      </div>

      {/* Special Offers */}
      <section className="offers-section">
        <h2>Special Offers</h2>
        <div className="offers-grid">
          <div className="offer-card">
            <img src="/images/beach1.jpg" alt="Winter Beach" />
            <p>WINTER BEACH <span className="discount">25% OFF</span></p>
          </div>
          <div className="offer-card">
            <img src="/images/beach2.jpg" alt="Paris Deal" />
            <p>PARIS NOW FROM <b>$1220</b></p>
          </div>
          <div className="offer-card">
            <img src="/images/beach3.jpg" alt="Weekly Deals" />
            <p>WEEKLY TOP OFFERS</p>
          </div>
        </div>
      </section>

      {/* Top Travel Places */}
      <section className="places-section">
        <h2>Top Travel Places</h2>
        <div className="places-grid">
          {[
            {
              title: 'ARNUS HOTEL',
              price: '$132.00',
              nights: '2 Nights',
              rooms: '2 Rooms Left',
              img: '/images/arnus.jpg'
            },
            {
              title: 'RESORT SERRENTO BEACH',
              price: '$255.00',
              nights: '3 Nights',
              rooms: '5 Rooms Left',
              img: '/images/sorrento.jpg',
              badge: 'Agent Offer'
            },
            {
              title: 'RESORT SERRENTO BEACH',
              price: '$582.00',
              nights: '3 Nights',
              rooms: '5 Rooms Left',
              img: '/images/sorrento2.jpg'
            },
            {
              title: 'PARIS',
              price: '$389.00',
              nights: '289 Hotels',
              rooms: '1 Flight Daily',
              img: '/images/paris.jpg',
              badge: 'Best Price'
            },
            {
              title: 'WEEKEND IN APLLES',
              price: '$132.00',
              nights: '28 Hotels',
              rooms: '1 Flight Daily',
              img: '/images/aples.jpg'
            },
            {
              title: 'PARIS TOUR',
              price: '$982.00',
              nights: '7 Nights',
              rooms: '5 Rooms Left',
              img: '/images/paristour.jpg'
            }
          ].map((place, idx) => (
            <div className="place-card" key={idx}>
              {place.badge && <div className="badge">{place.badge}</div>}
              <img src={place.img} alt={place.title} />
              <h3>{place.title}</h3>
              <p>{place.nights}</p>
              <p>{place.rooms}</p>
              <div className="price-book">
                <span className="price">{place.price}</span>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tour;

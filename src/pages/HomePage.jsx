import React, { useEffect, useState } from 'react';
import './HomePage.css';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const images = [
  '/banner1.jpg',
  '/banner2.jpg',
  '/banner3.jpg'
];

const touristData = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Total Users (K)',
      data: [80, 150, 210, 290, 430],
      borderColor: 'cyan',
      backgroundColor: 'rgba(0,255,255,0.2)',
      tension: 0.4
    },
    {
      label: 'Bookings (K)',
      data: [60, 100, 180, 240, 390],
      borderColor: 'limegreen',
      backgroundColor: 'rgba(50,205,50,0.2)',
      tension: 0.4
    },
    {
      label: 'Feedbacks (K)',
      data: [10, 50, 70, 130, 200],
      borderColor: 'gold',
      backgroundColor: 'rgba(255,215,0,0.2)',
      tension: 0.4
    }
  ]
};

const reviews = [
  {
    name: 'Venkat Jaladanki',
    date: '02/06/2022',
    rating: 5,
    title: 'Pathetic Cab booking experience',
    review: 'There were 2 continuous worst cab booking experiences with MakeMyTrip…'
  },
  {
    name: 'Shameeroasis',
    date: '14/06/2025',
    rating: 4,
    title: 'Highly Disappointing Bus Service – AVOID!',
    review: 'My recent bus booking through MakeMyTrip was extremely frustrating…'
  },
  {
    name: 'kapil101090',
    date: '20/06/2022',
    rating: 2,
    title: 'Worst Services Ever',
    review: 'I have been an MMT user for a long time and had many issues, but…'
  }
];

const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
const ratingCounts = reviews.reduce(
  (acc, r) => ({ ...acc, [r.rating]: (acc[r.rating] || 0) + 1 }),
  { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
);
const totalReviews = reviews.length;
const barPct = (count) => (totalReviews === 0 ? 0 : (count / totalReviews) * 100);

function HomePage() {
  const [bg, setBg] = useState(0);
  const [weather, setWeather] = useState({ temp: '28 °C', condition: 'Sunny' });
  const [city, setCity] = useState('Paris');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const id = setInterval(() => setBg((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="homepage-container">
      <section className="hero-header">
        <div className="hero-slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === bg ? 'active' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
        <div className="overlay" />

        <div className="header-content">
          <h1 className="main-heading">Discover Your Next Adventure</h1>
          <p className="sub-heading">
            Unforgettable journeys start here – find the perfect escape now.
          </p>

          <div className="search-tabs">
            <button>🔥 Trending Trips</button>
            <button>🎥 Virtual Tours</button>
            <button>🧳 Plan My Trip</button>
            <button>🌐 Explore by Map</button>
          </div>

          <div className="search-section">
            <input type="text" placeholder="From (City)" />
            <input
              type="text"
              placeholder="To (City)"
              onChange={(e) => setCity(e.target.value)}
            />
            <input type="date" />
            <input type="date" />
            <input type="number" placeholder="No. of Days" />
            <input type="number" placeholder="Adults" />
            <button
              className="search-btn"
              onClick={() =>
                setMessage(`🔍 Searching trips from ${city || 'your city'}...`)
              }
            >
              Search Now
            </button>
          </div>

          <div className="weather-box">
            <h4>🌤️ Weather in {city}</h4>
            <p>{weather.temp} – {weather.condition}</p>
          </div>

          {message && (
            <div className="search-message">{message}</div>
          )}
        </div>
      </section>

      <section className="stats-section-graph">
        <div className="stats-left">
          <h2>📉 Decline & Growth Trends</h2>
          <p>
            Tourism insights from 2020–24 – users, bookings & feedback. Paradasi Tourism’s recovery after the pandemic.
          </p>
        </div>
        <div className="stats-right">
          <Line data={touristData} />
        </div>
      </section>

      <section className="ratings-reviews-section">
        <h2 className="reviews-title">⭐ Reviews and Ratings</h2>
        <div className="ratings-summary">
          <div className="rating-score">{avgRating.toFixed(1)}</div>
          <div className="rating-count">{totalReviews} reviews</div>
          <div className="rating-bars">
            {[5, 4, 3, 2, 1].map((star) => (
              <div className="bar" key={star}>
                <span>{star}★</span>
                <div className="track">
                  <div className="fill" style={{ width: `${barPct(ratingCounts[star])}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="review-cards">
          {reviews.map((r, idx) => (
            <div className="review-card" key={idx}>
              <div className="stars">{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
              <div className="review-user">{r.name}</div>
              <div className="review-date">{r.date}</div>
              <div className="review-title">{r.title}</div>
              <p className="review-text">{r.review} <a href="#">more</a></p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;

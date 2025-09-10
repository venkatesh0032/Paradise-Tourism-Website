// CabAddon.jsx
import React, { useState, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "./CabAddon.css";

const mockReviews = [
  {
    name: "Ravi",
    rating: 5,
    comment: "Great cab service – very punctual and the car was spotless!",
  },
  {
    name: "Anjali",
    rating: 4,
    comment: "Professional driver, easy booking process. Will ride again.",
  },
  {
    name: "Kumar",
    rating: 4,
    comment: "Smooth ride and reasonable pricing. Would love a little more leg‑room.",
  },
];

function CabAddon() {
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [distance, setDistance] = useState(null);
  const routingRef = useRef(null);

  /* ---------- initialise map ---------- */
  useEffect(() => {
    const map = L.map("cab-map").setView([20.5937, 78.9629], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    routingRef.current = L.Routing.control({
      waypoints: [],
      routeWhileDragging: false,
      addWaypoints: false,
      show: false,
    }).addTo(map);

    routingRef.current.on("routesfound", (e) => {
      const route = e.routes[0];
      setDistance((route.summary.totalDistance / 1000).toFixed(2));
    });

    return () => map.remove();
  }, []);

  /* ---------- geocode + show route ---------- */
  const showRoute = async () => {
    if (!fromLocation || !toLocation) return;

    const geocode = async (place) => {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${place}`
      );
      const data = await res.json();
      return data.length ? [parseFloat(data[0].lat), parseFloat(data[0].lon)] : null;
    };

    const fromCoords = await geocode(fromLocation);
    const toCoords = await geocode(toLocation);

    if (fromCoords && toCoords && routingRef.current) {
      routingRef.current.setWaypoints([
        L.latLng(...fromCoords),
        L.latLng(...toCoords),
      ]);
    }
  };

  const handleBooking = () => {
    if (!fromLocation || !toLocation || !date || !time) {
      alert("Please complete all booking details.");
      return;
    }
    alert(`Cab booked from ${fromLocation} to ${toLocation} on ${date} at ${time}`);
  };

  return (
    <div className="cab-container">
      <h2>🚕 Cab Add‑On Service</h2>

      {/* === Booking form === */}
      <div className="booking-form">
        <div className="form-group">
          <label>From (location):</label>
          <input
            type="text"
            value={fromLocation}
            onChange={(e) => setFromLocation(e.target.value)}
            placeholder="Enter your current location"
          />
        </div>

        <div className="form-group">
          <label>To (destination):</label>
          <input
            type="text"
            value={toLocation}
            onChange={(e) => setToLocation(e.target.value)}
            placeholder="Enter destination"
          />
        </div>

        <button className="show-route-btn" onClick={showRoute}>
          Show Route
        </button>

        <div id="cab-map" className="map"></div>

        {distance && <p className="distance-info">Distance: {distance} km</p>}

        {/* date & time row */}
        <div className="input-row">
          <div className="form-group small">
            <label>Date:</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          </div>

          <div className="form-group small">
            <label>Time:</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>

        <button className="book-btn" onClick={handleBooking}>
          Book Cab
        </button>
      </div>

      {/* === Promo Videos === */}
      <div className="youtube-section">
        <h3>Explore Our Cab & Car Services</h3>
        <div className="video-grid">
          {[
            { id: "nP-BpTP9W50", title: "Luxury Cab Service" },
            { id: "HTU1RhT_Fs4", title: "Professional Drivers in India" },
            { id: "tz6ok5G7zXE", title: "Car Travel Vlog" },
            { id: "VqD6r8iT7IU", title: "City Taxi Tour" },
          ].map((v) => (
            <div key={v.id} className="video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${v.id}`}
                title={v.title}
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>

      {/* === Reviews === */}
      <section className="reviews-section">
        <h3 className="review-heading">User Reviews</h3>
        <div className="review-grid">
          {mockReviews.map((rev, i) => (
            <div key={i} className="review-card">
              <div className="stars">
                {"★".repeat(rev.rating)}
                {"☆".repeat(5 - rev.rating)}
              </div>
              <p className="review-comment">“{rev.comment}”</p>
              <p className="review-author">– {rev.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CabAddon;

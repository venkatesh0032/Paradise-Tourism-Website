import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Dashboard.css";

const Dashboard = () => {
  const [locationName, setLocationName] = useState("");

  // Map click handler
  function LocationFinder() {
    useMapEvents({
      click: async (e) => {
        const { lat, lng } = e.latlng;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`
          );
          const data = await res.json();
          setLocationName(
            data?.address?.city ||
              data?.address?.state ||
              data?.address?.country ||
              "Unknown Location"
          );
        } catch (err) {
          setLocationName("Error fetching location");
        }
      },
    });
    return null;
  }

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Circle-icons-airplane.svg"
            alt="Logo"
            className="sidebar-logo"
          />
          <h2>Paradasi Tourism</h2>
        </div>
        <ul className="sidebar-menu">
          <li onClick={() => (window.location.href = "/bookings")}>Bookings</li>
          <li onClick={() => (window.location.href = "/destinations")}>
            Destinations
          </li>
          <li onClick={() => (window.location.href = "/cabaddon")}>
            Cab Addon
          </li>
          <li onClick={() => (window.location.href = "/payment")}>Payment</li>
          <li onClick={() => (window.location.href = "/logout")}>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Top Destinations */}
        <section className="dashboard-section">
          <h2>Top Destinations</h2>
          <div className="image-gallery">
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Maldives"
              />
              <h3>Maldives</h3>
              <button
                onClick={() => (window.location.href = "/bookings")}
                className="book-btn"
              >
                Book Now
              </button>
            </div>
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Switzerland"
              />
              <h3>Switzerland</h3>
              <button
                onClick={() => (window.location.href = "/bookings")}
                className="book-btn"
              >
                Book Now
              </button>
            </div>
            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
                alt="Bali"
              />
              <h3>Bali</h3>
              <button
                onClick={() => (window.location.href = "/bookings")}
                className="book-btn"
              >
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Travel Vlogs */}
        <section className="dashboard-section">
          <h2>Travel Vlogs</h2>
          <div className="video-gallery">
            <iframe
              src="https://www.youtube.com/embed/Scxs7L0vhZ4"
              title="Travel Vlog 1"
              allowFullScreen
            ></iframe>
            <iframe
              src="https://www.youtube.com/embed/aqz-KE-bpKQ"
              title="Travel Vlog 2"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Map */}
        <section className="dashboard-section">
          <h2>Explore the World</h2>
          <div className="map-container">
            <MapContainer
              center={[20, 0]}
              zoom={2}
              style={{ height: "400px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; OpenStreetMap contributors"
              />
              <LocationFinder />
            </MapContainer>
          </div>
          {locationName && (
            <p className="location-display">You clicked on: {locationName}</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

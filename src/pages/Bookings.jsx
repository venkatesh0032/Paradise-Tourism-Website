import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./BookingPage.css"; // external CSS

const dummyAccommodations = [
  {
    id: "1",
    name: "Ocean Breeze Resort",
    type: "Resort",
    location: "Bali",
    price: 5000,
    rating: 4.6,
    video: "https://www.youtube.com/embed/4zAEDLwl9HI",
  },
  {
    id: "2",
    name: "Mountain View Retreat",
    type: "Resort",
    location: "Manali",
    price: 4500,
    rating: 4.4,
    video: "https://www.youtube.com/embed/VlrsfV-9Mu8",
  },
  {
    id: "3",
    name: "Desert Sands Resort",
    type: "Resort",
    location: "Rajasthan",
    price: 3800,
    rating: 4.2,
    video: "https://www.youtube.com/embed/WoCXyfaA9Vg",
  },
  {
    id: "4",
    name: "Lush Green Escape",
    type: "Resort",
    location: "Kerala",
    price: 5200,
    rating: 4.7,
    video: "https://www.youtube.com/embed/FKss8CFqhDg",
  },
  {
    id: "5",
    name: "Island Paradise Resort",
    type: "Resort",
    location: "Andaman",
    price: 6000,
    rating: 4.9,
    video: "https://www.youtube.com/embed/SYYeKgf5F6s",
  },
  {
    id: "6",
    name: "Snow Peak Lodge",
    type: "Resort",
    location: "Kashmir",
    price: 5000,
    rating: 4.5,
    video: "https://www.youtube.com/embed/nyB2H6gHbG8",
  },
  {
    id: "7",
    name: "Sunset Cliff Resort",
    type: "Resort",
    location: "Thailand",
    price: 4800,
    rating: 4.3,
    video: "https://www.youtube.com/embed/8Wwzj1YhvZk",
  },
  {
    id: "8",
    name: "Sky High Hills",
    type: "Resort",
    location: "Nepal",
    price: 4100,
    rating: 4.5,
    video: "https://www.youtube.com/embed/vFjj7aVfY20",
  },
];

function Booking() {
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    rooms: 1,
    adults: 2,
    children: 0,
    days: 1,
  });

  // Filter resorts based on destination search
  const filtered = dummyAccommodations.filter((acc) =>
    acc.location.toLowerCase().includes(search.destination.toLowerCase())
  );

  const handleBooking = (acc) => {
    navigate("/confirm-booking", {
      state: { accommodation: acc, searchDetails: search },
    });
  };

  return (
    <div className="booking-container">
      {/* Search Form */}
      <div className="search-box">
        <h2>Where to?</h2>

        <input
          type="text"
          placeholder="Destination"
          value={search.destination}
          onChange={(e) =>
            setSearch({ ...search, destination: e.target.value })
          }
        />

        <label>Starting Date</label>
        <input
          type="date"
          value={search.checkIn}
          onChange={(e) => setSearch({ ...search, checkIn: e.target.value })}
        />

        <label>Ending Date</label>
        <input
          type="date"
          value={search.checkOut}
          onChange={(e) => setSearch({ ...search, checkOut: e.target.value })}
        />

        <label>Days</label>
        <input
          type="number"
          min="1"
          value={search.days}
          onChange={(e) =>
            setSearch({ ...search, days: Number(e.target.value) })
          }
        />

        <div className="room-info">
          <select
            value={search.rooms}
            onChange={(e) =>
              setSearch({ ...search, rooms: Number(e.target.value) })
            }
          >
            {[1, 2, 3].map((n) => (
              <option key={n} value={n}>
                {n} Room(s)
              </option>
            ))}
          </select>

          <select
            value={search.adults}
            onChange={(e) =>
              setSearch({ ...search, adults: Number(e.target.value) })
            }
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} Adult(s)
              </option>
            ))}
          </select>

          <select
            value={search.children}
            onChange={(e) =>
              setSearch({ ...search, children: Number(e.target.value) })
            }
          >
            {[0, 1, 2].map((n) => (
              <option key={n} value={n}>
                {n} Child(ren)
              </option>
            ))}
          </select>
        </div>

        <button className="search-btn">Search</button>
      </div>

      {/* Results */}
      <div className="results">
        {filtered.length > 0 ? (
          filtered.map((acc) => (
            <div className="card" key={acc.id}>
              <h3>{acc.name}</h3>
              <p>📍 {acc.location}</p>
              <p>⭐ {acc.rating} / 5</p>
              <p>₹{acc.price.toLocaleString()} / night</p>

              <iframe
                width="100%"
                height="200"
                src={acc.video}
                title={`Video of ${acc.name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <button className="book-btn" onClick={() => handleBooking(acc)}>
                Book Now
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">
            No resorts found for "{search.destination}"
          </p>
        )}
      </div>
    </div>
  );
}

export default Booking;

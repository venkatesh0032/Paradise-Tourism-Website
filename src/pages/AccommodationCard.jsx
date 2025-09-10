import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AccommodationCard.css';

const roomsData = [
  {
    id: 1,
    name: 'Luxury Beach Resort',
    description: 'A luxury resort with private beach access.',
    rating: 4.7,
    overview: 'Ocean view, King bed, Free breakfast',
    price: 350,
    duration: 3,
    images: [
      '/images/resort1a.jpg',
      '/images/resort1b.jpg',
      '/images/resort1c.jpg'
    ]
  },
  {
    id: 2,
    name: 'Mountain View Hotel',
    description: 'Hotel with stunning views of the mountains.',
    rating: 4.3,
    overview: 'Balcony, Queen bed, Wifi',
    price: 200,
    duration: 2,
    images: [
      '/images/hotel1a.jpg',
      '/images/hotel1b.jpg',
      '/images/hotel1c.jpg'
    ]
  }
];

const AccommodationCard = () => {
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % roomsData[0].images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBook = (room) => {
    setSelectedRoom(room);
  };

  const handleProceedToPayment = () => {
    navigate('/payment', { state: { bookingDetails: selectedRoom } });
  };

  return (
    <div className="accommodation-container">
      <h1>Available Accommodations</h1>
      <div className="rooms-grid">
        {roomsData.map((room, idx) => (
          <div className="room-card" key={room.id}>
            <img src={room.images[activeImageIndex]} alt="Room" className="room-img" />
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p><strong>Overview:</strong> {room.overview}</p>
            <p><strong>Rating:</strong> ⭐ {room.rating}</p>
            <p><strong>Duration:</strong> {room.duration} days</p>
            <p><strong>Price:</strong> ₹{room.price} per night</p>
            <button onClick={() => handleBook(room)}>Book Now</button>
          </div>
        ))}
      </div>

      {selectedRoom && (
        <div className="booking-details">
          <h2>Booking Details</h2>
          <p><strong>Hotel:</strong> {selectedRoom.name}</p>
          <p><strong>Price:</strong> ₹{selectedRoom.price}</p>
          <p><strong>Duration:</strong> {selectedRoom.duration} days</p>
          <p><strong>Rating:</strong> ⭐ {selectedRoom.rating}</p>
          <p><strong>Overview:</strong> {selectedRoom.overview}</p>
          <button onClick={handleProceedToPayment}>Proceed to Payment</button>
        </div>
      )}
    </div>
  );
};

export default AccommodationCard;

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ConfirmBooking() {
  const location = useLocation();
  const navigate = useNavigate();

  const { accommodation, searchDetails } = location.state || {};

  if (!accommodation || !searchDetails) {
    return <p>No booking selected.</p>;
  }

  const members = searchDetails.adults + searchDetails.children;
  const totalAmount = accommodation.price * searchDetails.days;

  const handleProceed = () => {
    navigate("/payment", {
      state: { accommodation, searchDetails, totalAmount },
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Confirm Your Booking</h2>
      <p>
        <strong>Hotel:</strong> {accommodation.name}
      </p>
      <p>
        <strong>Rating:</strong> {accommodation.rating} / 5
      </p>
      <p>
        <strong>Price per Night:</strong> ₹{accommodation.price}
      </p>
      <p>
        <strong>Days:</strong> {searchDetails.days}
      </p>
      <p>
        <strong>Total Amount:</strong> ₹{totalAmount}
      </p>
      <p>
        <strong>Check-in:</strong> {searchDetails.checkIn}
      </p>
      <p>
        <strong>Check-out:</strong> {searchDetails.checkOut}
      </p>
      <p>
        <strong>Members:</strong> {members}
      </p>
      <p>
        <strong>Booked By:</strong> Demo User
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={handleProceed}
      >
        Proceed to Payment
      </button>
    </div>
  );
}

export default ConfirmBooking;

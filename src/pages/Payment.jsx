import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

// ✅ Toast component for success messages
const Toast = ({ message, onClose }) => (
  <div className="toast">
    {message} <button onClick={onClose}>X</button>
  </div>
);

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { accommodation, searchDetails, totalAmount } = location.state || {};

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    accountNumber: "",
    ifsc: "",
    upiId: "",
    emiMonths: "3",
  });
  const [errors, setErrors] = useState({});
  const [formValid, setFormValid] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  if (!accommodation || !searchDetails) {
    return (
      <div className="payment-container">
        <div className="payment-box">
          <p>No booking details found. Please go back and select a booking.</p>
          <button
            className="go-booking-btn"
            onClick={() => navigate("/bookings")}
          >
            Go to Booking Page
          </button>
        </div>
      </div>
    );
  }

  // ✅ Validation logic
  const validateField = (name, value) => {
    let error = "";
    if (paymentMethod === "card") {
      if (name === "cardNumber" && !/^\d{16}$/.test(value)) {
        error = "Enter a valid 16-digit card number";
      }
      if (name === "expiry" && !value) {
        error = "Select expiry date";
      }
      if (name === "cvv" && !/^\d{3}$/.test(value)) {
        error = "Enter a valid 3-digit CVV";
      }
    }

    if (paymentMethod === "netbanking") {
      if (name === "accountNumber" && !/^\d{9,18}$/.test(value)) {
        error = "Enter a valid account number";
      }
      if (name === "ifsc" && !/^[A-Z]{4}0[A-Z0-9]{6}$/.test(value)) {
        error = "Enter a valid IFSC code";
      }
    }

    if (paymentMethod === "upi") {
      if (name === "upiId" && !/^[\w.-]{2,256}@[a-zA-Z]{2,64}$/.test(value)) {
        error = "Enter a valid UPI ID (example@upi)";
      }
    }

    return error;
  };

  // ✅ Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  // ✅ Form validation check
  const isFormValid = () => {
    let valid = true;
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        valid = false;
      }
    });
    setErrors(newErrors);
    return valid;
  };

  useEffect(() => {
    setFormValid(isFormValid());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, paymentMethod]);

  const handlePayment = () => {
    if (!isFormValid()) return;

    setToastMessage(
      `Payment of ₹${totalAmount} successful via ${paymentMethod.toUpperCase()}!`
    );

    // Redirect after 2 seconds
    setTimeout(() => navigate("/bookings"), 2000);
  };

  // ✅ Payment method components
  const CardPayment = () => (
    <div className="payment-method-box">
      <label>Card Number</label>
      <input
        type="text"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
        placeholder="1234567812345678"
        maxLength={16}
      />
      {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}

      <label>Expiry Date</label>
      <input
        type="month"
        name="expiry"
        value={formData.expiry}
        onChange={handleChange}
      />
      {errors.expiry && <p className="error">{errors.expiry}</p>}

      <label>CVV</label>
      <input
        type="password"
        name="cvv"
        value={formData.cvv}
        onChange={handleChange}
        placeholder="123"
        maxLength={3}
      />
      {errors.cvv && <p className="error">{errors.cvv}</p>}
    </div>
  );

  const NetBankingPayment = () => (
    <div className="payment-method-box">
      <label>Account Number</label>
      <input
        type="number"
        name="accountNumber"
        value={formData.accountNumber}
        onChange={handleChange}
        placeholder="Enter Account Number"
      />
      {errors.accountNumber && <p className="error">{errors.accountNumber}</p>}

      <label>IFSC Code</label>
      <input
        type="text"
        name="ifsc"
        value={formData.ifsc}
        onChange={handleChange}
        placeholder="Enter IFSC Code"
      />
      {errors.ifsc && <p className="error">{errors.ifsc}</p>}
    </div>
  );

  const UpiPayment = () => (
    <div className="payment-method-box">
      <label>UPI ID</label>
      <input
        type="text"
        name="upiId"
        value={formData.upiId}
        onChange={handleChange}
        placeholder="example@upi"
      />
      {errors.upiId && <p className="error">{errors.upiId}</p>}
    </div>
  );

  const EmiPayment = () => (
    <div className="payment-method-box">
      <label>Select EMI Duration</label>
      <select
        name="emiMonths"
        value={formData.emiMonths}
        onChange={handleChange}
      >
        <option value="3">3 Months</option>
        <option value="6">6 Months</option>
        <option value="9">9 Months</option>
        <option value="12">12 Months</option>
      </select>
      <p>
        Monthly Installment: ₹
        {(totalAmount / Number(formData.emiMonths)).toFixed(2)}
      </p>
    </div>
  );

  return (
    <div className="payment-container">
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage("")} />
      )}

      <div className="payment-box">
        <h2>Payment Page</h2>
        <p>
          <strong>Hotel:</strong> {accommodation.name}
        </p>
        <p>
          <strong>Total Amount to Pay:</strong> ₹{totalAmount}
        </p>

        <h3>Select Payment Method</h3>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="payment-methods"
        >
          <option value="card">Debit / Credit Card</option>
          <option value="netbanking">Net Banking</option>
          <option value="upi">UPI</option>
          <option value="emi">EMI</option>
        </select>

        {paymentMethod === "card" && <CardPayment />}
        {paymentMethod === "netbanking" && <NetBankingPayment />}
        {paymentMethod === "upi" && <UpiPayment />}
        {paymentMethod === "emi" && <EmiPayment />}

        <button
          className="pay-now"
          onClick={handlePayment}
          disabled={!formValid}
        >
          Pay ₹{totalAmount}
        </button>
      </div>
    </div>
  );
}

export default Payment;

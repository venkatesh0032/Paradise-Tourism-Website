// src/api/apiClient.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000', // your backend URL
  // You can add headers here if needed
});

// Example: Get accommodations list
export const getAccommodations = () => api.get('/accommodations');

// Example: Submit booking data
export const submitBooking = (bookingData) => api.post('/bookings', bookingData);

export default api;

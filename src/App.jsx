import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ✅ Pages
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import CabAddon from "./pages/CabAddon";
import Payment from "./pages/Payment";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Destinations from "./pages/Destinations";
import Logout from "./pages/Logout";
import Bookings from "./pages/Bookings";
import AccommodationCard from "./pages/AccommodationCard";
import Tour from "./pages/Tour";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import ConfirmBooking from "./pages/ConfirmBooking"; // ✅ New page

// ✅ Layout wrapper
const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      {/* ✅ Pages WITH Navbar/Footer */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <Contact />
          </Layout>
        }
      />
      <Route
        path="/gallery"
        element={
          <Layout>
            <Gallery />
          </Layout>
        }
      />
      <Route
        path="/tours"
        element={
          <Layout>
            <Tour />
          </Layout>
        }
      />
      <Route
        path="/blogs"
        element={
          <Layout>
            <Blog />
          </Layout>
        }
      />
      {/* ✅ Pages WITHOUT Navbar/Footer */}
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/cabaddon" element={<CabAddon />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/accommodation" element={<AccommodationCard />} />
      <Route path="/confirm-booking" element={<ConfirmBooking />} />{" "}
      {/* ✅ Added */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/destinations" element={<Destinations />} />
    </Routes>
  );
}

export default App;

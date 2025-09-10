import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo">🌍 Paradasi Tourism</h1>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/home" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/tours" onClick={() => setMenuOpen(false)}>Tours</Link></li>
          <li><Link to="/blogs" onClick={() => setMenuOpen(false)}>Blogs</Link></li>
          <li><Link to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </div>

        <div className="auth-buttons">
          <Link to="/login"><button className="auth-btn login">Login</button></Link>
          <Link to="/register"><button className="auth-btn register">Register</button></Link>
          <button className="add-btn">+ Add Listing</button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

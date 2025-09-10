import React from 'react';
import './Footer.css'; // External CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>LastPass</h4>
          <a href="#">Home Page</a>
          <a href="#">Download</a>
          <a href="#">Pricing</a>
          <a href="#">How It Works</a>
          <a href="#">Families</a>
          <a href="#">Premium vs Free</a>
          <a href="#">Compare LastPass</a>
        </div>

        <div className="footer-column">
          <h4>Features</h4>
          <a href="#">Autofill</a>
          <a href="#">Password Vault</a>
          <a href="#">Digital Wallet</a>
          <a href="#">Password Generator</a>
          <a href="#">Username Generator</a>
          <a href="#">Dark Web Monitoring</a>
        </div>

        <div className="footer-column">
          <h4>For Business</h4>
          <a href="#">Teams</a>
          <a href="#">Enterprise</a>
          <a href="#">Single Sign-On</a>
          <a href="#">Admin Login</a>
          <a href="#">Partners</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#">Support Center</a>
          <a href="#">Blog</a>
          <a href="#">My Account</a>
          <a href="#">Find a Partner</a>
        </div>

        <div className="footer-column">
          <h4>Trust</h4>
          <a href="#">Security</a>
          <a href="#">Privacy</a>
          <a href="#">Legal Center</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <select>
            <option>English</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Hindi</option>
          </select>
          <p>© 2025 LastPass US LP. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#">Privacy Notice</a>
          <a href="#">Terms of Service</a>
          <a href="#">Imprint</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Your Privacy Choices</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

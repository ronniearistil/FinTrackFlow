// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 FinTrackPro - All Rights Reserved</p>
    <p>Powered by FinTrackPro, A Seamless Project Forecasting, Budgeting, and Expense Management Hub.</p>
    <div className="footer-links">
      <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
        About Us
      </Link>
      <a
        href="https://www.linkedin.com/in/aristil-mba-pmp/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Connect on LinkedIn
      </a>
      <a href="mailto:contact@fintrackpro.com">Email Us</a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow us on Twitter
      </a>
    </div>
  </footer>
);

export default Footer;



import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 FinTrackPro - All Rights Reserved</p>
      <p>
        Powered by FinTrackPro, A Seamless Project Forecasting, Budgeting, and Expense Management Hub.
      </p>
      <div className="footer-links">
        <a 
          href="https://www.linkedin.com/in/aristil-mba-pmp/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
        <a 
          href="mailto:contact@fintrackpro.com"
          className="footer-link"
        >
          Email Us
        </a>
        <a 
          href="https://twitter.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          Follow us on Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;

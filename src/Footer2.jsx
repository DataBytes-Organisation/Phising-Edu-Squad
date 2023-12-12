// Footer2.js

import React from 'react';
import './Footer2.css';
import { Link } from 'react-router-dom';

const Footer2 = () => {
  
  return (
    <footer className= "footer">
      <div className="footerContainer">

        {/* First column */}
        <div className= "footerColumn">
          <h3>News</h3>
          <ul>
          <li><Link to="/Sub">Subscribe now</Link></li>
            <li><Link to="/">Recent News</Link></li>
            {/* Additional links for the first column can be added here */}
          </ul>
        </div>

        {/* Second column */}
        <div className="footerColumn">
          <h3>Corporate Information</h3>
          <ul>
            <li><Link to="/About">About us</Link></li>
            <li><Link to="/OurTeam">OurTeam</Link></li> {/* Example new item */}
             {/* Additional links for the second column can be added here */}
          </ul>
        </div>

        {/* Third column */}
        <div className="footerColumn">
          <h3>Support us</h3>
          <ul>
            <li><Link to="/PaypalDonation">Contribute now</Link></li>
                 {/* Additional links for the third column can be added here */}
          </ul>
        </div>

        {/* Fourth column */}
        <div className="footerColumn">
          <h3>Terms and Conditions</h3>
          <ul>
            <li><Link to="/Policy">Privacy Policy</Link></li>
            <li><Link to="/PolicyCookies">Policy Cookies</Link></li> {/* Example new item */}
            <li><Link to="/PrivacyPolicy">Privacy Policy</Link></li> {/* Example new item */}
            {/* Additional links for the fourth column can be added here */}
          </ul>
        </div>

      </div>

      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Dolfin Cyber News. All Rights Reserved.</p>
        {/* Add social media icons or additional information here */}
      </div>
    </footer>
  );
};

export default Footer2;

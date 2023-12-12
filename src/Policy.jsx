import React from 'react';
import './Policy.css';
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <div className="policy-container">
     <h1 className="policy-title" style={{ marginBottom: '-10px' }}>Policy</h1>
     <div className="policy-section">
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. This Privacy Policy explains how Dolfin Cybersecurity collects, uses, and protects your personal information. By using our website, you agree to the terms outlined <Link to="/PrivacyPolicy">here</Link>.
        </p>
        <h3>Contact Us</h3>
        <p>Questions or concerns? Contact us at <a href="mailto:contact@email.com">contact@email.com</a>.</p>
      </div>

      <div className="policy-section">
        <h2>Cookies Policy</h2>
        <p>
          We use cookies to enhance your experience on the Dolfin Cybersecurity website. By continuing to use our site, you agree to our use of cookies as described <Link to="/CookiesPolicy">here</Link>.
        </p>
        <h3>Contact Us</h3>
        <p>Questions or concerns about our use of cookies? Contact us at <a href="mailto:contact@email.com">contact@email.com</a>.</p>
      </div>
    </div>
  );
};

export default Policy;

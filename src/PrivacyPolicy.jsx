// PrivacyPolicy.jsx

import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>

      <h2>1. Introduction</h2>
      <p>
        Welcome to Dolfin Cybersecurity! This Privacy Policy explains how we collect, use, disclose, and protect your personal information. By using our website, you agree to the terms outlined in this policy.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        Personal Information: Name, email address, contact details.
      </p>
      <p>
        Log Data: Information about your device, IP address, browser type.
      </p>
      <p>
        Usage Data: Pages visited, time spent on pages, and other website statistics.
      </p>
      <p>
        Cookies: Refer to the Cookies Policy section.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        We use your information for the following purposes:
      </p>
      <ul>
        <li>Provide and maintain our services.</li>
        <li>Improve, personalize, and expand our services.</li>
        <li>Communicate with you.</li>
        <li>Protect against unauthorized access and security threats.</li>
      </ul>

      <h2>4. Sharing Your Information</h2>
      <p>
        We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as outlined in this policy.
      </p>

      <h2>5. Security Measures</h2>
      <p>
        We take reasonable steps to protect your personal information. However, no method of transmission over the internet or electronic storage is completely secure.
      </p>

      {/* Continue with the rest of your policy content */}
      
      <h2>14. Contact Us</h2>
      <p>If you have questions or concerns about our privacy practices, please contact us at <a href="mailto:contact@email.com">contact@email.com</a>.</p>
    </div>
  );
};

export default PrivacyPolicy;

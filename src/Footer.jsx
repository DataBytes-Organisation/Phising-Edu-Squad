import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Dolfin Cyber News. All Rights Reserved.</p>
        {/* Add social media icons or additional information here */}
      </div>
    </footer>
  );
};

export default Footer;

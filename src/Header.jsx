import React from 'react';
import logoImage from './logo.png';
import './Header.css';
import Header3 from './Header3';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

function Header() {
  const location = useLocation(); // Get the current location
  
  // Define an array of routes where Header3 should not be displayed
  const excludedRoutes = ['/Quiz', '/RecentScam']; // Add more routes as needed

  // Check if the current location is in the excludedRoutes array
  const renderHeader3 = !excludedRoutes.includes(location.pathname);


  return (
    <header style={{ backgroundColor: 'white', color: '#333' }}>
      <nav>
        <div className="logo" >
          <Link to="/Header">
            <img className="logoimage" src={logoImage} alt="Dolfin Logo" /> 
            <span style={{ color: '#0073e6' }}> Dolfin</span>
          </Link>
        </div>
        <ul>
          <li><Link to="/Home" style={{ color: '#0073e6' }}>Home</Link></li>
          <li><Link to="/RecentScam" style={{ color: '#0073e6' }}>Recent Phishing Activity</Link></li>
          <li><Link to="/Quiz" style={{ color: '#0073e6' }}>Games</Link></li>
        </ul>
      </nav>
      
      {renderHeader3 && <Header3 />} {/* Conditionally render Header3 */}
      
    </header>
  );
}

export default Header;

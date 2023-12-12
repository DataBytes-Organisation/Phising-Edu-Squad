import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './Header.css';
import './Home.css';
import './Footer.css';
import OurTeam from './OurTeam';
import Homepage from './Homepage';
import Header from './Header';
import Header3 from './Header3';
import Footer2 from './Footer2';
import Quiz from './Quiz';
import About from './About';
import Policy from './Policy';
import PrivacyPolicy from './PrivacyPolicy';
import PolicyCookies from './PolicyCookies';
import Sub from './Sub';
import Dashboard from './Dashboard';
import RecentScam from './RecentScam';
import PaypalDonation from './PaypalDonation';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <Header />
        
        
        <Routes>
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/OurTeam" element={<OurTeam />} />
          <Route path="/RecentSCam" element={<RecentScam />} />
          <Route path="/About" element={<About />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/PolicyCookies" element={<PolicyCookies />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Sub" element={<Sub />} />
          <Route path="/PaypalDonation" element={<PaypalDonation />} />
          {/* Define more routes for other components */}
        </Routes>
        
        <Homepage/>
        
        <Footer2 />
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

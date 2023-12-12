import React from 'react';
import team from './team.png';
import './OurTeam.css'; // Import the CSS file

const OurTeam = () => {
  return (
    <div className="our-team">
      <h3 style={{ textAlign: 'center' }}>Our Team</h3>
      <p>
        Meet our dedicated team of professionals who work tirelessly to bring you the latest cyber news.
      </p>
      {/* Add team member information here */}
      <div className="team-member">
        <img src={team} alt="Team Member 1" />
        <h4>Aidan John Wong</h4>
        <p>The leader</p>
      </div>
      <div className="team-member">
        <img src={team} alt="Team Member 1" />
        <h4>Aiden John Wiltshire</h4>
        <p>The leader</p>
      </div>
      <div className="team-member">
        <img src={team} alt="Team Member 2" />
        <h4>Imran Mughal</h4>
        <p>The Writer</p>
      </div>
      <div className="team-member">
        <img src={team} alt="Team Member 3" />
        <h4>Yeni Waliatin</h4>
        <p>The web creator</p>
      </div>
      {/* Add more team members as needed */}
    </div>
  );
};

export default OurTeam;

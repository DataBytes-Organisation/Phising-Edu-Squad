// OurTeam.js

import React from 'react';

const OurTeam = () => {
  return (
    <div className="our-team">
      <h3>Our Team</h3>
      <p>
        Meet our dedicated team of professionals who work tirelessly to bring you the latest cyber news.
      </p>
      {/* Add team member information here */}
      <div className="team-member">
        <img src="sample.JPEG" alt="Team Member 1" />
        <h4>John Doe</h4>
        <p>Editor-in-Chief</p>
      </div>
      <div className="team-member">
        <img src="sample.JPG" alt="Team Member 2" />
        <h4>Jane Smith</h4>
        <p>Lead Writer</p>
      </div>
      {/* Add more team members as needed */}
    </div>
  );
};

export default OurTeam;

import React from 'react';
import Header from './Header';
import Header3 from './Header3';
import Homepage from './Homepage';

const Dashboard = () => {
  return (
    <div>
      <Header /> {/* Display Header component */}
      <Header3 /> {/* Display Header3 component */}
      <Homepage />
      {/* Add other components and content for the dashboard */}
    </div>
  );
};

export default Dashboard;

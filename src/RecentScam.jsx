import React, { useState } from 'react';
import scamImage1 from './sample1.PNG'; // Import your images here
import scamImage2 from './sample2.PNG';
import scamImage3 from './sample3.png';
import './RecentScam.css';

const phishingActivities = [
  {
    title: "REMINDER: YOUR UNPAID TOLLS",
    imageUrl: scamImage1,
    details: ["First, this message was sent very early in the morning at 2:39 AM, a time when we typically sleep. If you examine the link closely, you'll notice that it ends with 'cc,' which is illegitimate. When you click on the link, it will prompt you to enter your bank or car details because they are attempting to steal your money. So, please exercise caution before opening any links."]
  },
  {
    title: "TWVerify",
    imageUrl: scamImage2,
    details: ["This is asking you to verify on TWVerify, and it claims that using TWVerify appears credible. However, please consider whether you have ever registered with TWVerify. If you have not, then do not click the link, as clicking it may result in your identity being stolen."]
  },
  {
    title: "QANTAS Gift",
    imageUrl: scamImage3,
    details: ["As you might be able to notice here, the text is not addressed the recipient via a first name, rather what looks like a first name variable. Secondly, the message is from “qangifts”, not actually Qantas gifts. Lastly, the link appears to be a form of link shortener, which is often used in scam emails to obscure malicious links."]
  },
  // Add more phishing activities as needed
];

const RecentScam = () => {
  const [currentActivity, setCurrentActivity] = useState(0);

  const handleNext = () => {
    setCurrentActivity((prev) => (prev + 1) % phishingActivities.length);
  };

  const handlePrev = () => {
    setCurrentActivity((prev) => (prev - 1 + phishingActivities.length) % phishingActivities.length);
  };

  const activity = phishingActivities[currentActivity];

 

  return (
    <div className="recent-scam-container">
      
      <div className="scam-image-wrapper">
        <h3>Recent Phishing Activities</h3>
        <img src={activity.imageUrl} alt="Scam Example" className="scam-image" />
      </div>
      <div className="scam-detail-wrapper">
        <h2>{activity.title}</h2>
        <p>{activity.description}</p>
        <ul>
          {activity.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
         </div>
  );
};

export default RecentScam;

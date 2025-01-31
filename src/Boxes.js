import React from 'react';
import './Boxes.css'; // Import the CSS file

const Boxes = () => {
  return (
    <div className="boxes-container">
        <a href="https://www.linkedin.com/in/arya-akhavein-8b8029193/" className="box">
        <img
          src="/images/LinkedIn.png" // Path to the PNG image in the public folder
          alt="Box 1"
          className="box-image"
        />
      </a>
      <a href="mailto:aka310@sfu.ca" className="box">
        <img
          src="/images/Email.png" // Path to the PNG image in the public folder
          alt="Box 2"
          className="box-image"
        />
      </a>
      <a href="https://github.com/Arnice123" className="box">
        <img
          src="/images/Github.png" // Path to the PNG image in the public folder
          alt="Box 3"
          className="box-image"
        />
      </a>
    </div>
  );
};

export default Boxes;
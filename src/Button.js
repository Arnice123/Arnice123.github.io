import React from 'react';
import './Button.css'; // Import the CSS file

const Button = () => {
  return (
    <div className="buttones-container">
        <a href="https://www.linkedin.com/in/arya-akhavein-8b8029193/" className="button">
        <img
          src="/images/LinkedIn.png" // Path to the PNG image in the public folder
          alt="LinkedIn Link"
          className="button-image"
        />
      </a>
      <a href="mailto:aka310@sfu.ca" className="button">
        <img
          src="/images/Email.png" // Path to the PNG image in the public folder
          alt="Email Link"
          className="button-image"
        />
      </a>
      <a href="https://github.com/Arnice123" className="button">
        <img
          src="/images/Github.png" // Path to the PNG image in the public folder
          alt="Github Link"
          className="button-image"
        />
      </a>
    </div>
  );
};

export default Button;
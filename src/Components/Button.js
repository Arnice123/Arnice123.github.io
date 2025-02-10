import React from 'react';
import './Button.css'; 

// The buttons on the home page
const Button = () => {
  return (
    <div className="buttones-container">
        <a href="https://www.linkedin.com/in/arya-akhavein-8b8029193/" className="button">
        <img
          src="/images/LinkedIn.png" 
          alt="LinkedIn Link"
          className="button-image"
        />
      </a>
      <a href="mailto:aka310@sfu.ca" className="button">
        <img
          src="/images/Email.png" 
          alt="Email Link"
          className="button-image"
        />
      </a>
      <a href="https://github.com/Arnice123" className="button">
        <img
          src="/images/Github.png" 
          alt="Github Link"
          className="button-image"
        />
      </a>
    </div>
  );
};

export default Button;
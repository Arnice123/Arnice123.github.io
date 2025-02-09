import React from 'react';
import '../App.css'
import '../Button.css';

const PreviousProject = () => {

  return (
    <div>
      <h1 className='title'>Previous Projects</h1>

      <a href="https://github.com/Arnice123" style={{margin: 20}} className="button">
        <img
          src="/images/Github.png" 
          alt="Github Link"
          className="button-image"
        />
      </a>

      
    </div>
  );
};

export default PreviousProject;
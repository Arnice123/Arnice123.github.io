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

      <p style={{margin: 20, color: "#FFFFFF"}}>
        My fighting game: {' '}
        <a style={{ color: 'pink' }} href="https://play.unity.com/en/games/7a22f993-50c4-4830-95f2-9634187cfcbd/2d-fighting-game" target="_blank" rel="noopener noreferrer">
          2D Fighting Game
        </a>
      </p>

      <p style={{margin: 20, color: "#FFFFFF"}}>
        My Machine Learning Snake: {' '}
        <a style={{ color: 'pink' }} href="https://github.com/Arnice123/Machine-Learning-Snake" target="_blank" rel="noopener noreferrer">
          2D Fighting Game
        </a>
      </p>

      <p style={{margin: 20, color: "#FFFFFF"}}>
        My Calculator: {' '}
        <a style={{ color: 'pink' }} href="https://github.com/Arnice123/Complex-Calulator" target="_blank" rel="noopener noreferrer">
          Calculator
        </a>
      </p>
    </div>
  );
};

export default PreviousProject;
import React from 'react';
import '../App.css'
import '../Button.css';

function ProjectLink({ title, link, name, image_path }) {
  return (
    <div style={{ margin: 20, color: '#FFFFFF' }}>
      <p>
        {title}:{' '}
        <a style={{ color: 'pink' }} href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </p>
      {/* Display the image on a new line */}
      {image_path && (
        <div style={{ marginTop: '10px' }}>
          <img src={image_path} alt={name} style={{ width: '700px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

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

      <ProjectLink
        title="My fighting game"
        link="https://play.unity.com/en/games/7a22f993-50c4-4830-95f2-9634187cfcbd/2d-fighting-game"
        name="2D Fighting Game"
        image_path="/images/Fighting-Game.png"
      />
      <ProjectLink
        title="My Machine Learning Snake"
        link="https://github.com/Arnice123/Machine-Learning-Snake"
        name="Machine Learning Snake"
        image_path="/images/Machine-Learning-Snake.png"
      />
      <ProjectLink
        title="My Calculator"
        link="https://github.com/Arnice123/Complex-Calulator"
        name="Calculator"
        image_path="/images/Calculator.png"
      />
    </div>
  );
};

export default PreviousProject;
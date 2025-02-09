import React from 'react';
import '../App.css'
import '../Button.css';

function ProjectLink({ title, link, name }) {
  return (
    <p style={{ margin: 20, color: '#FFFFFF' }}>
      {title}:{' '}
      <a style={{ color: 'pink' }} href={link} target="_blank" rel="noopener noreferrer">
        {name}
      </a>
    </p>
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
      />
      <ProjectLink
        title="My Machine Learning Snake"
        link="https://github.com/Arnice123/Machine-Learning-Snake"
        name="Machine Learning Snake"
      />
      <ProjectLink
        title="My Calculator"
        link="https://github.com/Arnice123/Complex-Calulator"
        name="Calculator"
      />
    </div>
  );
};

export default PreviousProject;
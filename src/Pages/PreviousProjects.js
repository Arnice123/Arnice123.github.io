import React from 'react';
import '../App.css'
import '../Button.css';

function ProjectLink({ title, link, name, description, image_path, alt }) {
  return (
    <div style={{ margin: 20, color: '#FFFFFF' }}>
      <p>
        {title}:{' '}
        <a style={{ color: 'pink' }} href={link} target="_blank" rel="noopener noreferrer">
          {name}
        </a> 
        <br /><br /> 
        {description}
      </p>
      {/* Display the image on a new line */}
      {image_path && (
        <div style={{ marginTop: '10px' }}>
          <img src={image_path} alt={alt} style={{ width: '700px', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}

const PreviousProject = () => {

  return (
    <div style={{marginBottom: '100px', fontSize:20, wordSpacing:1.25, lineHeight:1.5, fontFamily: 'Poppins, sans-serif'}}>
      <h1 className='title' >Previous Projects</h1>

      <a href="https://github.com/Arnice123" style={{margin: 20}} className="button">
        <img
          src="/images/Github.png" 
          alt="Github Icon"
          className="button-image"
        />
      </a>

      <ProjectLink
        title="My fighting game"
        link="https://play.unity.com/en/games/7a22f993-50c4-4830-95f2-9634187cfcbd/2d-fighting-game"
        name="2D Fighting Game"
        description="This is a game that allows for either 2 person combat, or one person against AI combat. It was developed over the course of around 7 months in Unity."
        image_path="/images/Fighting-Game.png"
        alt="Image of a scene from my fighting game"
      />
      <ProjectLink
        title="My Machine Learning Snake"
        link="https://github.com/Arnice123/Machine-Learning-Snake"
        name="Machine Learning Snake"
        description="This is a machine learning model that uses python and Deep-Q learning to beat the classic game Snake. It was developed over the course of a few days after a few weeks of learning python."
        image_path="/images/Machine-Learning-Snake.png"
        alt="Scene of the snake learning to improve"
      />
      <ProjectLink
        title="My Calculator"
        link="https://github.com/Arnice123/Complex-Calulator"
        name="Calculator"
        description="This is a calculator that was designed without using the main math funciton in C++, cmath, intended to do complex calculations such as derivatives and integrals, it is still being worked on and actively developed"
        image_path="/images/Calculator.png"
        alt="The calculator menu"
      />

      <hr></hr>

      <div  style={{margin: 20, color: '#FFFFFF'}}>
        I also have experience with minor projects that are not worth mentioning in/using: C, C#, C++, Python, JavaScript, HTML, CSS.<br />I have used Github, VS Code, Visual Studio and Unity for my previous projects as well.<br />
        
        I do have experience in RISC-V, but at an extremely weak level of knowledge as I only used it in one of my classes in a previous semseter.<br />

        I used C and C++ for my previous classes and projects so I have around 2-3 years worth of experience with those languages.<br />

        Python on the otherhand I have used less and only for two classes so I only have around a year of experience of active work with Python.<br />

        JS, HTML, CSS I bobbed in and out of using them over the past 6ish years so I have fairly decent level of understanding of those languages.<br />
      </div>
    </div>
  );
};

export default PreviousProject;
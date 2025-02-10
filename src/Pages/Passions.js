import React from 'react';
import '../App.css'
import Section from "../Section.js"

function NavBar({href, name})
{
  return (
    <a
      href={href}
      style={{
        color: '#FFFFFF',
        textDecoration: 'none',
        padding: '5px 10px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#555555')}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      {name}
    </a>
  );
}

const Passions = () => {

  return (
    <div
      style={{
        marginBottom: '100px',
        margin: '10px',
        fontSize: 20,
        wordSpacing: 1.25,
        lineHeight: 1.5,
        color: '#FFFFFF',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
      <h1 className="title">Passions</h1>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '20px',
          padding: '10px',
          backgroundColor: '#333333',
          borderRadius: '5px',
        }}
      >
        <NavBar 
          href='#dnd'
          name="Dungeons and Dragons"
        ></NavBar>
        <NavBar 
          href='#mtg'
          name="Magic the Gathering"
        ></NavBar>
        <NavBar 
          href='#games'
          name="Video Games"
        ></NavBar>
        <NavBar 
          href='#hiking'
          name="Hiking"
        ></NavBar>
      </div>

      {/* Sections */}
      <Section id="dnd" title="Dungeons and Dragons" />
      <Section id="mtg" title="Magic The Gathering" />
      <Section id="games" title="Video Games" />
      <Section id="hiking" title="Hiking" />
    </div>
  );
};

export default Passions;
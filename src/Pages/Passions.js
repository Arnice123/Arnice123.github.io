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
      <Section id="dnd" title="Dungeons and Dragons">
        I have been an active dnd player for the past 4 years, but I have been engaging with dnd content for over 7 years. 
        I play regularly with two groups of friends, from both high school and university. <br/><br/>
        <img
          src="/images/DND.jpg"
          alt="Me and my friends playing dungeons and dragons"
          style={{width:'300px'}}
        />

        <br/>
        I act as the dungeon master for my friends, coming up with the story as my friends act their way throughout. I spend around 6 hours a week total playing dungeons and dragons, and hopefully will continue to do so.
      </Section>

      <Section id="mtg" title="Magic the Gathering">
        I have played Magic the Gathering for 3 years, participating in game formats, I only own 4 different decks, all of which are the commander format. I tend to play this game during the long breaks during my school days to relax and have fun with friends.

      </Section>

      <Section id="games" title="Video Games" >
        I have been playing video games for many years, but I am faily active player of League of Legends, playing it with my friends for the past 2 years.
      </Section>

      <Section id="hiking" title="Hiking" >
        t
      </Section>
    </div>
  );
};

export default Passions;
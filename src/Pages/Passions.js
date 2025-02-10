import React from 'react';
import '../App.css'
import Section from "../Section.js"

function NavBar({href, name}) {
  return (
    <a
      href={href}
      className="hover:bg-gray-600"
      style={{
        color: '#FFFFFF',
        textDecoration: 'none',
        padding: '8px 15px',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
        display: 'block',
        marginBottom: '10px',
        width: '100%',
      }}
    >
      {name}
    </a>
  );
}

const Passions = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Main content */}
      <div
        style={{
          flex: 1,
          maxWidth: 'calc(100% - 250px)',
          fontSize: 20,
          wordSpacing: 1.25,
          lineHeight: 1.5,
          color: '#FFFFFF',
          fontFamily: 'Poppins, sans-serif',
          padding: '20px',
          paddingRight: '270px',

        }}
      >
        <h1 className="title">Passions</h1>

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
          I have been playing video games for many years, but I am faily active player of League of Legends, playing it with my friends for the past 2 years. Unfortuantly I am not very good at video games so I tend to lose most of my games.
        </Section>

        <Section id="hiking" title="Hiking" >
          I have been an avid hiker for my entire life, my dad loves hiking so I've done plenty with him, Lions, Cheif, Hanes Valley, and many more.
          <br/>
          Recently I have started hiking with friends too, and gone on hikes like Norvan Falls and The Needles.<br/><br/>

          <img
            src="/images/Needles.jpg"
            alt="Me and my friends at the peak of the first needle"
            style={{width:'300px'}}
          />
        </Section>

        <Section id="40k" title="Warhammer40k" >
          t
        </Section>
      </div>

      {/*Navigation Box*/}
      <div
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          width: '230px',
          backgroundColor: '#333333',
          fontFamily: 'Poppins, sans-serif',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        }}
      >
        <NavBar href='#dnd' name="Dungeons and Dragons" />
        <NavBar href='#mtg' name="Magic the Gathering" />
        <NavBar href='#games' name="Video Games" />
        <NavBar href='#hiking' name="Hiking" />
        <NavBar href='#40k' name="Warhammer40k" />
      </div>
    </div>
  );
};

export default Passions;
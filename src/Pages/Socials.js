import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Import icons
import SocialPreview from '../SocialPreview';
import '../App.css'

const Socials = () => {

  return (
    <div
      style={{
        margin: 20,
        fontFamily: 'Poppins, sans-serif', // Smooth font from Google Fonts
        textAlign: 'center',
      }}
    >
      <h1 className='title'>My Socials</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        
        

        
      </div>
    </div>
  );
};

export default Socials;
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaVoicemail, FaEnvelope } from 'react-icons/fa'; // Import icons
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
        
        {/* LinkedIn Preview */}
        <SocialPreview
          href="https://www.linkedin.com/in/arya-akhavein-8b8029193"
          icon={<FaLinkedin style={{ fontSize: '28px', marginRight: '15px' }} />}
          title="LinkedIn"
          description="Professional Network"
          color="#0077B5"
        />

        {/* GitHub Preview */}
        <SocialPreview
          href="https://github.com/Arnice123"
          icon={<FaGithub style={{ fontSize: '28px', marginRight: '15px' }} />}
          title="GitHub"
          description="Code & Projects"
          color="#333333"
        />

        {/* Email Preview */}
        <SocialPreview
          href="mailto:aka310@sfu.ca"
          icon={<FaEnvelope style={{ fontSize: '28px', marginRight: '15px' }} />}
          title="Email"
          description="Direct and Quick Contact"
          color="#333333"
        />

        
      </div>
    </div>
  );
};

export default Socials;
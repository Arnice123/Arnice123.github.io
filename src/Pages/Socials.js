import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaDiscord } from 'react-icons/fa';
import SocialPreview from '../Components/SocialPreview.js';
import '../App.css'

const Socials = () => {

  return (
    <div
      style={{
        margin: 20,
        fontFamily: 'Poppins, sans-serif',
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

        {/* Instagram Preview */}
        <SocialPreview
          href="https://www.instagram.com/arya._456/"
          icon={<FaInstagram style={{ fontSize: '28px', marginRight: '15px' }} />}
          title="Instagram"
          description="Showcases Personal Life"
          color="#E4405F"
        />
        
        {/* Discord Preview */}
        <SocialPreview
          href="http://discordapp.com/users/arnice123"
          icon={<FaDiscord style={{ fontSize: '28px', marginRight: '15px' }} />}
          title="Discord"
          description="Connect with communities"
          color="#7289DA"
        />
      </div>
    </div>
  );
};

export default Socials;
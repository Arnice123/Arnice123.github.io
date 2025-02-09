import React from 'react';

function SocialPreview({ href, icon, title, description, colour }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{        
        backgroundColor: colour,        
      }}
    >
      {icon}
      <div>
        <strong style={{fontSize: '16px'}}>{title}</strong>
        <p style={{margin: 0, fontSize:'14px', opacity: 0.8}}>{description}</p>
      </div>
    </a>
  );
}

export default SocialPreview;
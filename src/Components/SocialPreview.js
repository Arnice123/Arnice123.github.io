import React from 'react';

function SocialPreview({ href, icon, title, description, colour }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{        
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colour,
        color: '#FFFFFF',
        padding: '15px 25px',
        borderRadius: '10px',
        textDecoration: 'none',
        width: '200px',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',        
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
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
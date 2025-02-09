import React from 'react';
import '../App.css'

function Section({ title, children }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ borderBottom: '2px solid pink', paddingBottom: 5 }}>{title}</h2>
      {children}
    </div>
  );
}

const Experience = () => {

  return (
    <div style={{marginBottom: '100px',margin: '10px', fontSize:20, wordSpacing:1.25, lineHeight:1.5, color: '#FFFFFF'}}>
      <h1 className='title'>Experience</h1>
      
    </div>
  );
};

export default Experience;
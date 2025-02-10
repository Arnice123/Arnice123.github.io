import React from 'react';

function Section({ id, title, children }) {
  return (
    <div id={id} style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#FFFFFF', marginBottom: '10px' }}>{title}</h2>
      {children}
    </div>
  );
}

export default Section;
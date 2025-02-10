import React from 'react';

/* For seperating different areas of code */
function Section({ id, title, children }) {
  return (
    <div id={id} style={{ marginBottom: '40px' }}>
      <h2 style={{ color: '#FFFFFF', marginBottom: '10px' }}>{title}</h2>
      {children}
      <hr style={{color:"pink"}}></hr>
    </div>
  );
}

export default Section;
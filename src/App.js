import React, { useState } from 'react';
import ProfilePhoto from './ProfilePhoto';
import Boxes from './Boxes';

function App() {
  return (
    <div>
      <h1 style={{ color: '#000333', fontSize: '2.5rem', textAlign: 'center' }}>About Me</h1>
      <ProfilePhoto /> {}
      <Boxes></Boxes>
    </div>
  );
}

export default App;
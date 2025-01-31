import React, { useState } from 'react';
import ProfilePhoto from '../ProfilePhoto';
import Button from '../Button';

function Home() {
  return (
    <div>
      <h1 style={{ color: '#FFFFFF', fontSize: '2.5rem', textAlign: 'center' }}>About Me</h1>
      <ProfilePhoto /> {}
      <Button></Button>
    </div>
  );
}

export default Home;
import React from 'react';
import ProfilePhoto from '../Components/ProfilePhoto';
import Button from '../Components/Button';
import '../App.css'

function Home() {
  return (
    <div style={{
      margin: 20,
      fontFamily: 'Poppins, sans-serif',
      marginTop:'8%'
    }}>
      <h1 className='title'>About Me</h1>
      <ProfilePhoto /> {}
      <Button></Button>
    </div>
  );
}

export default Home;
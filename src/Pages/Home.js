import React from 'react';
import ProfilePhoto from '../Components/ProfilePhoto';
import Button from '../Components/Button';
import '../App.css'

/* Main page, displays a short about me play links to my main socials at a quick press*/
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
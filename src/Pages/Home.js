import React, { useState } from 'react';
import ProfilePhoto from '../ProfilePhoto';
import Button from '../Button';
import '../App.css'

function Home() {
  return (
    <div>
      <h1 className='title'>About Me</h1>
      <ProfilePhoto /> {}
      <Button></Button>
    </div>
  );
}

export default Home;
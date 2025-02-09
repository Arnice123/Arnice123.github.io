import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Socials = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className='title'>Not Home Page</h1>
      <p>Welcome to the Not Home page!</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default Socials;
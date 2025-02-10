import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

const Passions = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      margin: 20,
      fontFamily: 'Poppins, sans-serif', // Smooth font from Google Fonts
    }}>
      <h1  className='title'>Not Home Page</h1>
      <p>Welcome to the Not Home page!</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default Passions;
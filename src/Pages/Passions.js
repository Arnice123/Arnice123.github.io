import React from 'react';
import { useNavigate } from 'react-router-dom';

const Passions = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Not Home Page</h1>
      <p>Welcome to the Not Home page!</p>
      <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  );
};

export default Passions;
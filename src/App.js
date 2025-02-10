import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Experience from './Pages/Experience';
import Home from './Pages/Home'
import Passions from './Pages/Passions';
import PreviousProject from './Pages/PreviousProjects';
import Socials from './Pages/Socials';
import './index.css';

const NavButtons = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <ul>
        <li>
          <button 
            onClick={() => navigate('/')} 
            className="text-pink-500 hover:text-black transition-colors"
          >
            Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => navigate('/experience')} 
            className="text-pink-500 hover:text-black transition-colors"
          >
            Experience
          </button>
        </li>
        <li>
          <button 
            onClick={() => navigate('/passions')} 
            className="text-pink-500 hover:text-black transition-colors"
          >
            Passions
          </button>
        </li>
        <li>
          <button 
            onClick={() => navigate('/previousProject')} 
            className="text-pink-500 hover:text-black transition-colors"
          >
            Previous Projects
          </button>
        </li>
        <li>
          <button 
            onClick={() => navigate('/socials')} 
            className="text-pink-500 hover:text-black transition-colors"
          >
            Socials
          </button>
        </li>
      </ul>
    </nav>
  );
};


const App = () => {
  return (
    <Router>
      <NavButtons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/passions" element={<Passions />} />
        <Route path="/previousProject" element={<PreviousProject />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </Router>
  );
};

export default App;
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
          <button onClick={() => navigate('/')} style={{ color: 'pink' }}>Home</button>
        </li>
        <li>
          <button onClick={() => navigate('/experience')} style={{ color: 'pink' }}>Experience</button>
        </li>
        <li>
          <button onClick={() => navigate('/passions')} style={{ color: 'pink' }}>Passions</button>
        </li>
        <li>
          <button onClick={() => navigate('/previousProject')} style={{ color: 'pink' }}>Previous Projects</button>
        </li>
        <li>
          <button onClick={() => navigate('/socials')} style={{ color: 'pink' }}>Socials</button>
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
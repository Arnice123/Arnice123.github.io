import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './Pages/Experience';
import Home from './Pages/Home'
import Passions from './Pages/Passions';
import PreviousProject from './Pages/PreviousProjects';
import Socials from './Pages/Socials';
import NavButtons from './Components/NavButtons';
import './index.css';

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
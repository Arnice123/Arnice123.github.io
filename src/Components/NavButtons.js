import {useNavigate } from 'react-router-dom';
import './NavButton.css'

/* Used to create a bar at the top of the screen that allows the user to navigate */
const NavButtons = () => {
    const navigate = useNavigate();
  
    return (
      <nav>
        <ul style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: '#333333',
            padding: '10px',
            marginTop:0,
          }}>
          <li>
            <button 
              onClick={() => navigate('/')} 
              className="text-pink-500 hover:text-black transition-colors nav_but"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/experience')} 
              className="text-pink-500 hover:text-black transition-colors nav_but"
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/passions')} 
              className="text-pink-500 hover:text-black transition-colors nav_but"
            >
              Passions
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/previousProject')} 
              className="text-pink-500 hover:text-black transition-colors nav_but"
            >
              Previous Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/socials')} 
              className="text-pink-500 hover:text-black transition-colors nav_but"    
            >
              Socials
            </button>
          </li>
        </ul>
      </nav>
    );
  };

export default NavButtons;
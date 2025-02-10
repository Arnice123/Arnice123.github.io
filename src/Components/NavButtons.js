import {useNavigate } from 'react-router-dom';

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
              className="text-pink-500 hover:text-black transition-colors"
              style={{
                display: 'flex',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '15px',
                borderRadius: '5px',
              }}
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/experience')} 
              className="text-pink-500 hover:text-black transition-colors"
              style={{
                display: 'flex',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '15px',
                borderRadius: '5px',
              }}
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/passions')} 
              className="text-pink-500 hover:text-black transition-colors"
              style={{
                display: 'flex',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '15px',
                borderRadius: '5px',
              }}
            >
              Passions
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/previousProject')} 
              className="text-pink-500 hover:text-black transition-colors"
              style={{
                display: 'flex',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '15px',
                borderRadius: '5px',
              }}
            >
              Previous Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => navigate('/socials')} 
              className="text-pink-500 hover:text-black transition-colors"
              style={{
                display: 'flex',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '15px',
                borderRadius: '5px',
              }}
    
            >
              Socials
            </button>
          </li>
        </ul>
      </nav>
    );
  };

export default NavButtons;
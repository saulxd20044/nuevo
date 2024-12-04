import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <a
      href="/"
      onClick={handleLogoClick}
      className="logo"
      style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        textDecoration: 'none',
        fontSize: '36px',
        fontWeight: 'bold',
        zIndex: 2
      }}
    >
      RAPI MONEY
    </a>
  );
}

export default Logo;
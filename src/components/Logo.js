import React from 'react';
import './logo.css'
const Logo = () => {
    const redirectToHome = () => {
      // Rediriger l'utilisateur vers la page d'accueil
      window.location.href = '/';
    };
  
    return (
      <div className='logo' onClick={redirectToHome}>
        <img src='/logo-kasa.png' alt='logo kasa' />
      </div>
    );
  };
  
  export default Logo;

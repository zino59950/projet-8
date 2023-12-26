import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Bodyerror = () => {
  return (
    <div className='error'>
      <h1>404</h1>
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      {/* Ajoutez une classe spécifique au lien */}
      <p className='return'>
        <Link to="/" className="home-link">
          Retourner sur la page d’accueil
        </Link>
      </p>
    </div>
  );
};

export default Bodyerror;


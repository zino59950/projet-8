// Importe React depuis la bibliothèque React
import React from 'react';

// Importe le composant 'Link' de 'react-router-dom' pour créer des liens dans l'application
import { Link } from 'react-router-dom';

// Importe le fichier de style CSS pour le composant Error
import './Error.css';

// Définit le composant fonctionnel Bodyerror
const Bodyerror = () => {
  // Rendu du composant
  return (
    // Utilise la classe CSS 'error' pour styliser le composant
    <div className='error'>
      {/* Affiche le code d'erreur 404 */}
      <h1>404</h1>
      {/* Affiche un message indiquant que la page demandée n'existe pas */}
      <h3>Oups! La page que vous demandez n'existe pas.</h3>
      {/* Ajoutez une classe spécifique au paragraphe contenant le lien */}
      {/* Utilise le composant 'Link' pour créer un lien vers la page d'accueil */}
      <p className='return'>
        {/* Le lien redirige vers la page d'accueil */}
        <Link to="/" className="home-link">
          Retourner sur la page d’accueil
        </Link>
      </p>
    </div>
  );
};

// Exporte le composant Bodyerror pour pouvoir l'utiliser ailleurs dans l'application
export default Bodyerror;



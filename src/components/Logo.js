// Importe React depuis la bibliothèque React
import React from 'react';

// Importe le fichier de style CSS pour le composant Logo
import './logo.css';

// Définit le composant fonctionnel Logo
const Logo = () => {
  // Fonction pour rediriger l'utilisateur vers la page d'accueil
  const redirectToHome = () => {
    // Rediriger l'utilisateur vers la page d'accueil
    window.location.href = '/';
  };

  // Rendu du composant Logo
  return (
    <div className='logo' onClick={redirectToHome}>
      {/* Affiche l'image du logo avec la source '/logo-kasa.png' et le texte alternatif 'logo kasa' */}
      <img src='/logo-kasa.png' alt='logo kasa' />
    </div>
  );
};

// Exporte le composant Logo pour pouvoir l'utiliser ailleurs dans l'application
export default Logo;


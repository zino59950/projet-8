// Footer.js

// Importe React depuis la bibliothèque React
import React from "react";

// Importe le fichier de style CSS pour le composant Footer
import "./Footer.css";

// Importe l'image du logo du pied de page
import Logo from "./logo-footer.png";

// Définit le composant fonctionnel Footer
const Footer = () => {
  // Rendu du composant
  return (
    // Utilise la classe CSS 'Footer-content' pour styliser le contenu du pied de page
    <div className="Footer-content">
      {/* Affiche l'image du logo du pied de page avec la classe 'footer-logo' */}
      <img src={Logo} alt="logo kasa" className="footer-logo" />
      {/* Affiche le texte du pied de page */}
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

// Exporte le composant Footer pour pouvoir l'utiliser ailleurs dans l'application
export default Footer;


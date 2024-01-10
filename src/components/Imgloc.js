// Importe React depuis la bibliothèque React
import React from "react";

// Importe le fichier de style CSS pour le composant Imgloc
import "./Imgloc.css";

// Définit le composant fonctionnel Imgloc
const Imgloc = ({ cover }) => {
  // Rendu du composant
  return (
    // Utilise la classe CSS 'imgloc' et le style background-image pour afficher l'image du logement
    <div className="imgloc" style={{ backgroundImage: `url(${cover})` }}></div>
  );
};

// Exporte le composant Imgloc pour pouvoir l'utiliser ailleurs dans l'application
export default Imgloc;

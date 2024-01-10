// Importe React depuis la bibliothèque React
import React from "react";

// Importe le composant 'Link' de 'react-router-dom' pour créer des liens dans l'application
import { Link } from "react-router-dom";

// Importe le fichier de style CSS pour le composant Card
import "./Card.css";

// Importe les données de logements depuis le fichier logements.json
import logementsData from "../logements.json";

// Définit le composant fonctionnel Card
const Card = () => {
  // Rendu du composant
  return (
    // Utilise la classe CSS 'Card-content' pour styliser le conteneur de cartes
    <div className="Card-content">
      {/* Utilise la méthode map pour créer une carte pour chaque élément dans logementsData */}
      {logementsData.map((logement) => (
        /* Utilise le composant 'Link' pour créer un lien vers la page de détails du logement */
        /* La clé unique est définie comme l'ID du logement */
        <Link to={`/location/${logement.id}`} key={logement.id} className="Card">
          {/* Affiche l'image de couverture du logement */}
          <img src={logement.cover} alt={logement.title} />
          {/* Affiche le titre du logement */}
          <p>{logement.title}</p>
        </Link>
      ))}
    </div>
  );
};

// Exporte le composant Card pour pouvoir l'utiliser ailleurs dans l'application
export default Card;


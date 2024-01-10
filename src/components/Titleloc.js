// Importe React depuis la bibliothèque React
import React from 'react';

// Importe le fichier de style CSS pour le composant Titleloc
import './Titleloc.css';

// Définit le composant fonctionnel Titleloc
const Titleloc = ({ title, location, tags, host, rating }) => {
  // Destructuration des propriétés de l'objet host
  const { name: hostName, picture: hostPicture } = host;

  // Fonction pour générer les étoiles en fonction de la note
  const generateStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i}>&#9733;</span>);
      } else {
        stars.push(<span className='inactive' key={i}>&#9733;</span>);
      }
    }
    return stars;
  };

  // Rendu du composant Titleloc
  return (
    // Utilise la classe CSS 'title-loc' pour styliser le conteneur
    <div className="title-loc">
      {/* Conteneur pour les informations de titre, emplacement et balises */}
      <div className="title-info">
        {/* Affiche le titre du logement */}
        <h1>{title}</h1>
        {/* Affiche l'emplacement du logement */}
        <p>{location}</p>
        <br />
        {/* Affiche les balises du logement sous forme de liste */}
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      {/* Conteneur pour les informations de l'hôte et de la note */}
      <div className="host-rating-info">
        {/* Ajout de l'affichage du nom et de l'image de l'hôte */}
        <div className="host-info">
          <p>{hostName}</p>
          <img src={hostPicture} alt={`${hostName}'s profile`} />
        </div>

        {/* Ajout de l'affichage du rating sous forme d'étoiles */}
        <div className="rating-info">
          <p>{generateStars()}</p>
        </div>
      </div>
    </div>
  );
};

// Exporte le composant Titleloc pour pouvoir l'utiliser ailleurs dans l'application
export default Titleloc;


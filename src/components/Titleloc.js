// Titleloc.jsx

import React from 'react';
import './Titleloc.css';

const Titleloc = ({ title, location, tags, host, rating }) => {
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

  return (
    <div className="title-loc">
      <div className="title-info">
        <h1>{title}</h1>
        <p>{location}</p>
        <br />
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

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

export default Titleloc;

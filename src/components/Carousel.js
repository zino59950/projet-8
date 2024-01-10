// Importe React et useState depuis la bibliothèque React
import React, { useState } from 'react';

// Importe le fichier de style CSS pour le composant Carousel
import './Carousel.css';

// Importe FontAwesomeIcon et les icônes associées pour les flèches gauche et droite
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Définit le composant fonctionnel Carousel
const Carousel = ({ images }) => {
  // Utilise le hook useState pour gérer l'état du currentIndex
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    // Calcule le nouvel index en utilisant le modulo pour boucler à la première image après la dernière
    const newIndex = (currentIndex + 1) % images.length;
    // Met à jour l'état du currentIndex
    setCurrentIndex(newIndex);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    // Calcule le nouvel index en utilisant le modulo avec ajustement pour boucler à la dernière image après la première
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    // Met à jour l'état du currentIndex
    setCurrentIndex(newIndex);
  };

  // Rendu du composant Carousel
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {/* Bouton pour passer à la diapositive précédente */}
        <button className='previous' onClick={prevSlide}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {/* Mapping sur les images pour créer les diapositives */}
        {images.map((image, index) => (
          <div
            key={index}
            // Ajoute la classe 'active' à la diapositive actuelle
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            {/* Affiche l'image de la diapositive */}
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
        {/* Bouton pour passer à la diapositive suivante */}
        <button className='next' onClick={nextSlide}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      {/* Affiche la pagination indiquant le numéro de la diapositive actuelle */}
      <div className="carousel-pagination">
        {currentIndex + 1}/{images.length}
      </div>
    </div>
  );
};

// Exporte le composant Carousel pour pouvoir l'utiliser ailleurs dans l'application
export default Carousel;

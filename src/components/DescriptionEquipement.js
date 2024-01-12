// Importe React et le hook useState depuis la bibliothèque React
import React, { useState } from 'react';

// Importe le fichier de style CSS pour le composant DescriptionEquipement
import './DescriptionEquipement.css';

// Importe FontAwesomeIcon et les icônes associées pour les flèches haut et bas
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

// Définit le composant fonctionnel DescriptionEquipement
const DescriptionEquipement = ({ description, equipments }) => {
  // Utilisation du hook useState pour gérer l'état de la collapsible description
  const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);

  // Utilisation du hook useState pour gérer l'état de la collapsible équipement
  const [equipementCollapsed, setEquipementCollapsed] = useState(true);

  // Fonction pour basculer l'état de la collapsible description
  const toggleDescriptionCollapse = () => {
    setDescriptionCollapsed(!descriptionCollapsed);
  };

  // Fonction pour basculer l'état de la collapsible équipement
  const toggleEquipementCollapse = () => {
    setEquipementCollapsed(!equipementCollapsed);
  };

  // Rendu du composant DescriptionEquipement
  return (
    <div className='DescriptionEquipement'>
      {/* Collapsible pour la description */}
      <div className='collapsible-container'>
        {/* Bouton pour activer/désactiver la collapsible description */}
        <button className={`toggle-button ${descriptionCollapsed ? '' : 'open'}`} onClick={toggleDescriptionCollapse}>
          {/* Texte du bouton avec un espace pour le chevron */}
          {descriptionCollapsed ? 'Description' : 'Description'}
          
          {/* Icône du chevron avec une classe pour l'animation de rotation */}
          <FontAwesomeIcon
            icon={descriptionCollapsed ? faChevronUp : faChevronDown}
            className={`chevron-icon ${descriptionCollapsed ? '' : 'rotate'}`}
          />
        </button>
        
        {/* Contenu de la collapsible description */}
        {descriptionCollapsed ? null : (
          <div className='description-content'>
            {/* Affiche la description du logement */}
            <p>{description}</p>
          </div>
        )}
      </div>

      {/* Collapsible pour l'équipement */}
      <div className='collapsible-container'>
        {/* Bouton pour activer/désactiver la collapsible équipement */}
        <button className={`toggle-button ${equipementCollapsed ? '' : 'open'}`} onClick={toggleEquipementCollapse}>
          {/* Texte du bouton avec un espace pour le chevron */}
          {equipementCollapsed ? 'Équipements' : 'Équipements'}
          
          {/* Icône du chevron avec une classe pour l'animation de rotation */}
          <FontAwesomeIcon
            icon={equipementCollapsed ? faChevronUp : faChevronDown}
            className={`chevron-icon ${equipementCollapsed ? '' : 'rotate'}`}
          />
        </button>

        {/* Contenu de la collapsible équipement */}
        {equipementCollapsed ? null : (
          <div className='equipement-content'>
            {/* Liste des équipements du logement */}
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Exporte le composant DescriptionEquipement pour pouvoir l'utiliser ailleurs dans l'application
export default DescriptionEquipement;

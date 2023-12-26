import React, { useState } from 'react';
import './DescriptionEquipement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DescriptionEquipement = ({ description, equipments }) => {
  // Utilisation de useState pour gérer l'état de la collapsible description
  const [descriptionCollapsed, setDescriptionCollapsed] = useState(true);

  // Utilisation de useState pour gérer l'état de la collapsible équipement
  const [equipementCollapsed, setEquipementCollapsed] = useState(true);

  // Fonction pour basculer l'état de la collapsible description
  const toggleDescriptionCollapse = () => {
    setDescriptionCollapsed(!descriptionCollapsed);
  };

  // Fonction pour basculer l'état de la collapsible équipement
  const toggleEquipementCollapse = () => {
    setEquipementCollapsed(!equipementCollapsed);
  };

  return (
    <div className='DescriptionEquipement'>
      {/* Collapsible pour la description */}
      <div className='collapsible-container'>
        {/* Bouton pour activer/désactiver la collapsible description */}
        <button className={`toggle-button ${descriptionCollapsed ? '' : 'open'}`} onClick={toggleDescriptionCollapse}>
          {/* Texte du bouton avec un espace pour le chevron */}
          {descriptionCollapsed ? 'Description ' : 'Description '}
          
          {/* Icone du chevron avec une classe pour l'animation de rotation */}
          <FontAwesomeIcon
            icon={descriptionCollapsed ? faChevronUp : faChevronDown}
            className={`chevron-icon ${descriptionCollapsed ? '' : 'rotate'}`}
          />
        </button>
        
        {/* Contenu de la collapsible description */}
        {descriptionCollapsed ? null : (
          <div className='description-content'>
            <p>{description}</p>
          </div>
        )}
      </div>

      {/* Collapsible pour l'équipement */}
      <div className='collapsible-container'>
        {/* Bouton pour activer/désactiver la collapsible équipement */}
        <button className={`toggle-button ${equipementCollapsed ? '' : 'open'}`} onClick={toggleEquipementCollapse}>
          {/* Texte du bouton avec un espace pour le chevron */}
          {equipementCollapsed ? "Equipement" : "Equipement"}
          
          {/* Icone du chevron avec une classe pour l'animation de rotation */}
          <FontAwesomeIcon
            icon={equipementCollapsed ? faChevronUp : faChevronDown}
            className={`chevron-icon ${equipementCollapsed ? '' : 'rotate'}`}
          />
        </button>

        {/* Contenu de la collapsible équipement */}
        {equipementCollapsed ? null : (
          <div className='equipement-content'>
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

export default DescriptionEquipement;

// Importe React et useState depuis la bibliothèque React
import React, { useState } from "react";

// Importe le fichier de style CSS pour le composant Forms
import './Forms.css';

// Importe FontAwesomeIcon et les icônes associées pour les flèches haut et bas
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Définit le composant fonctionnel Forms
const Forms = () => {
  // Utilisation de useState pour gérer l'état de chaque collapsible
  const [isCollapsible1Open, setCollapsible1Open] = useState(false);
  const [isCollapsible2Open, setCollapsible2Open] = useState(false);
  const [isCollapsible3Open, setCollapsible3Open] = useState(false);
  const [isCollapsible4Open, setCollapsible4Open] = useState(false);

  // Fonction générique pour rendre l'icône du chevron en fonction de l'état de la collapsible
  const renderChevron = (isOpen) => {
    return (
      <FontAwesomeIcon
        icon={isOpen ? faChevronDown : faChevronUp}
        className={`chevron-icon ${isOpen ? 'rotate' : ''}`}
      />
    );
  };

  // Rendu du composant Forms
  return (
    <div>
      {/* Collapsible 1 */}
      <div className="collaps-content">
        <button
          className="collaps"
          onClick={() => setCollapsible1Open(!isCollapsible1Open)}
        >
          Fiabilité
          {renderChevron(isCollapsible1Open)}
        </button>
        {isCollapsible1Open && (
          <div className="collaps-description">
            {/* Contenu de la collapsible 1 */}
            Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </div>
        )}
      </div>

      {/* Collapsible 2 */}
      <div className="collaps-content">
        <button
          className="collaps"
          onClick={() => setCollapsible2Open(!isCollapsible2Open)}
        >
          Respect
          {renderChevron(isCollapsible2Open)}
        </button>
        {isCollapsible2Open && (
          <div className="collaps-description">
            {/* Contenu de la collapsible 2 */}
            La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </div>
        )}
      </div>

      {/* Collapsible 3 */}
      <div className="collaps-content">
        <button
          className="collaps"
          onClick={() => setCollapsible3Open(!isCollapsible3Open)}
        >
          Service
          {renderChevron(isCollapsible3Open)}
        </button>
        {isCollapsible3Open && (
          <div className="collaps-description">
            {/* Contenu de la collapsible 3 */}
            La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
          </div>
        )}
      </div>

      {/* Collapsible 4 */}
      <div className="collaps-content">
        <button
          className="collaps"
          onClick={() => setCollapsible4Open(!isCollapsible4Open)}
        >
          Sécurité
          {renderChevron(isCollapsible4Open)}
        </button>
        {isCollapsible4Open && (
          <div className="collaps-description">
            {/* Contenu de la collapsible 4 */}
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
            chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, 
            cela permet à nos équipes de vérifier que les standards sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
          </div>
        )}
      </div>
    </div>
  );
};

// Exporte le composant Forms pour pouvoir l'utiliser ailleurs dans l'application
export default Forms;

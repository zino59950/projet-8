// Importe React et le hook useParams depuis la bibliothèque React
import React from 'react';
import { useParams } from 'react-router-dom';

// Importe les données des logements depuis le fichier JSON
import logementsData from '../logements.json';

// Importe les composants nécessaires pour la page Location
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Titleloc from '../components/Titleloc';
import Logo from '../components/Logo';
import Carousel from '../components/Carousel';
import DescriptionEquipement from '../components/DescriptionEquipement';

// Définit le composant fonctionnel Location
const Location = () => {
  // Utilise le hook useParams pour extraire l'identifiant du logement depuis l'URL
  const { id } = useParams();// Utilise le hook useParams pour extraire l'identifiant du logement de l'URL.

  // Trouve le logement correspondant dans les données en utilisant l'identifiant
  const logement = logementsData.find((logement) => logement.id === id);

  // Vérifie si le logement n'est pas trouvé, affiche un message d'erreur
  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  // Rendu du composant Location
  return (
    <div>
      {/* Affiche le composant Logo */}
      <Logo />

      {/* Affiche le composant Navigation pour la barre de navigation */}
      <Navigation />

      {/* Affiche le composant Carousel avec les images du logement */}
      <Carousel images={logement.pictures} />

      {/* Affiche le composant Titleloc avec les informations du logement */}
      <Titleloc
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />

      {/* Affiche le composant DescriptionEquipement avec la description et les équipements du logement */}
      <DescriptionEquipement
        description={logement.description}
        equipments={logement.equipments}
      />

      {/* Affiche le composant Footer pour le pied de page */}
      <Footer />
    </div>
  );
};

// Exporte le composant Location pour pouvoir l'utiliser ailleurs dans l'application
export default Location;

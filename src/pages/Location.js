// Importe React et le hook useParams depuis la bibliothèque React
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../logements.json';
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!logementsData.find((logement) => logement.id === id)) {
      navigate('/error');
    }
  }, [])
  // Trouve le logement correspondant dans les données en utilisant l'identifiant
  const logement = logementsData.find((logement) => logement.id === id);

  // Vérifie si le logement n'est pas trouvé, affiche un message d'erreur
  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  // Rendu du composant Location
  return (
    <div>
      <Logo />
      <Navigation />
      <Carousel images={logement.pictures} />
      <Titleloc
        title={logement.title}
        location={logement.location}
        tags={logement.tags}
        host={logement.host}
        rating={logement.rating}
      />
      <DescriptionEquipement
        description={logement.description}
        equipments={logement.equipments}
      />
      <Footer />
    </div>
  );
};

// Exporte le composant Location pour pouvoir l'utiliser ailleurs dans l'application
export default Location;

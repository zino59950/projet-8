// Location.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../logements.json';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Titleloc from '../components/Titleloc';
import Logo from '../components/Logo';
import Carousel from '../components/Carousel';
import DescriptionEquipement from '../components/DescriptionEquipement';


const Location = () => {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement introuvable</div>;
  }

  return (
    <div>
      <Logo />
      <Navigation />
      <Carousel images={logement.pictures} /> {/* Utilisez la propriété pictures du logement */}
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

export default Location;


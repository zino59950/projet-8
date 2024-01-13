// Importe React depuis la bibliothèque React
import React from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";

// Définit le composant fonctionnel Home
const Home = () => {
  // Rendu du composant Home
  return (
    <div>
      <Logo />
      <Navigation />
      <Banner image="banner-1" title="Chez vous, partout et ailleurs." />
      <Card />
      <Footer />
    </div>
  );
};

// Exporte le composant Home pour pouvoir l'utiliser ailleurs dans l'application
export default Home;

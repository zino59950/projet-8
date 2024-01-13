// Importe React depuis la bibliothèque React
import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Forms from '../components/Forms';
const About = () => {
    // Rendu du composant About
    return (
        <div>
            <Logo />
            <Navigation />
            <Banner image="banner-2"/>
            <Forms />
            <Footer />
        </div>
    );
};

// Exporte le composant About pour pouvoir l'utiliser ailleurs dans l'application
export default About;

// Importe React depuis la bibliothèque React
import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Bodyerror from '../components/Bodyerror';
const Error404 = () => {
    // Rendu du composant Error404
    return (
        <div className='error'>
            <Logo />
            <Navigation />
            <Bodyerror />
            <Footer />
        </div>
    );
};

// Exporte le composant Error404 pour pouvoir l'utiliser ailleurs dans l'application
export default Error404;

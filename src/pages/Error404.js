// Importe React depuis la bibliothèque React
import React from 'react';

// Importe le composant Logo depuis le chemin spécifié
import Logo from '../components/Logo';

// Importe le composant Navigation depuis le chemin spécifié
import Navigation from '../components/Navigation';

// Importe le composant Footer depuis le chemin spécifié
import Footer from '../components/Footer';

// Importe le composant Bodyerror depuis le chemin spécifié
import Bodyerror from '../components/Bodyerror';

// Définit le composant fonctionnel Error404
const Error404 = () => {
    // Rendu du composant Error404
    return (
        // Utilise une div avec la classe CSS 'error' comme conteneur principal
        <div className='error'>
            {/* Affiche le composant Logo */}
            <Logo />
            {/* Affiche le composant Navigation */}
            <Navigation />
            {/* Affiche le composant Bodyerror */}
            <Bodyerror />
            {/* Affiche le composant Footer */}
            <Footer />
        </div>
    );
};

// Exporte le composant Error404 pour pouvoir l'utiliser ailleurs dans l'application
export default Error404;

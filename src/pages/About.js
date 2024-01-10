// Importe React depuis la bibliothèque React
import React from 'react';

// Importe le composant Navigation depuis le chemin spécifié
import Navigation from '../components/Navigation';

// Importe le composant Logo depuis le chemin spécifié
import Logo from '../components/Logo';

// Importe le composant Footer depuis le chemin spécifié
import Footer from '../components/Footer';

// Importe le composant Banner2 depuis le chemin spécifié
import Banner2 from '../components/Banner2';

// Importe le composant Forms depuis le chemin spécifié
import Forms from '../components/Forms';

// Définit le composant fonctionnel About
const About = () => {
    // Rendu du composant About
    return (
        // Utilise une div comme conteneur principal
        <div>
            {/* Affiche le composant Logo */}
            <Logo />
            {/* Affiche le composant Navigation */}
            <Navigation />
            {/* Affiche le composant Banner2 */}
            <Banner2 />
            {/* Affiche le composant Forms */}
            <Forms />
            {/* Affiche le composant Footer */}
            <Footer />
        </div>
    );
};

// Exporte le composant About pour pouvoir l'utiliser ailleurs dans l'application
export default About;

// Importe React depuis la bibliothèque React
import React from 'react';

// Importe le composant Navigation depuis le chemin spécifié
import Navigation from '../components/Navigation';

// Importe le composant Logo depuis le chemin spécifié
import Logo from '../components/Logo';

// Importe le composant Banner depuis le chemin spécifié
import Banner from '../components/Banner';

// Importe le composant Card depuis le chemin spécifié
import Card from '../components/Card';

// Importe le composant Footer depuis le chemin spécifié
import Footer from '../components/Footer';

// Définit le composant fonctionnel Home
const Home = () => {
    // Rendu du composant Home
    return (
        // Utilise une div comme conteneur principal
        <div>
            {/* Affiche le composant Logo */}
            <Logo />
            {/* Affiche le composant Navigation */}
            <Navigation />
            {/* Affiche le composant Banner */}
            <Banner />
            {/* Affiche le composant Card */}
            <Card />
            {/* Affiche le composant Footer */}
            <Footer />
        </div>
    );
};

// Exporte le composant Home pour pouvoir l'utiliser ailleurs dans l'application
export default Home;

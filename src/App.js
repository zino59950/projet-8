// Importe React depuis la bibliothèque React
import React from 'react';

// Importe BrowserRouter, Routes, et Route depuis 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importe les pages de l'application
import Home from './pages/Home';
import About from './pages/About';
import Error404 from './pages/Error404';
import Location from './pages/Location';

// Importe le composant Card depuis le chemin spécifié
import Card from './components/Card';

// Définit le composant fonctionnel App
const App = () => {
  // Rendu du composant App
  return (
    // Utilise le composant Router pour définir le système de navigation
    <Router>
      {/* Utilise le composant Routes pour définir les routes de l'application */}
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path='/' element={<Home />} />
        {/* Route pour la page "À propos" */}
        <Route path='about' element={<About />} />
        {/* Route pour la page de détails de l'emplacement avec un paramètre d'ID */}
        <Route path='location/:id' element={<Location />} />
        {/* Route pour la gestion des erreurs 404 */}
        <Route path='*' element={<Error404 />} />
        {/* Route pour le composant Card - affiche la liste de logements */}
        {/* Note : Cette route est actuellement dupliquée, vérifiez si vous souhaitez l'inclure ici */}
        <Route path='/' element={<Card />} />
      </Routes>
    </Router>
  );
};

// Exporte le composant App pour pouvoir l'utiliser ailleurs dans l'application
export default App;



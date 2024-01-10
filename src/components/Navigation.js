// Importe React depuis la bibliothèque React
import React from 'react';

// Importe le composant NavLink de 'react-router-dom' pour créer des liens de navigation
import { NavLink } from 'react-router-dom';

// Importe le fichier de style CSS pour le composant Navigation
import './Navigation.css';

// Définit le composant fonctionnel Navigation
const Navigation = () => {
    // Rendu du composant Navigation
    return (
        // Utilise la classe CSS 'navigation' pour styliser la barre de navigation
        <div className='navigation'>
            <ul>
                {/* Utilise le composant NavLink pour créer un lien vers la page d'accueil avec la classe CSS 'nav-link' */}
                <NavLink to='/' className='nav-link'>
                    {/* Affiche le lien "Accueil" comme un élément de liste (li) */}
                    <li>Accueil</li>
                </NavLink>

                {/* Utilise le composant NavLink pour créer un lien vers la page "À propos" avec la classe CSS 'nav-link' */}
                <NavLink to='/about' className='nav-link'>
                    {/* Affiche le lien "À propos" comme un élément de liste (li) */}
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

// Exporte le composant Navigation pour pouvoir l'utiliser ailleurs dans l'application
export default Navigation;




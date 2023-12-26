import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'; // Import du fichier CSS

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/' className='nav-link'>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to='/about' className='nav-link'>
                    <li>A propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;



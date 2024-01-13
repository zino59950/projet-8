import React from 'react';
import './Banner.css'; // Import du fichier CSS

const Banner = (props) => {
    return (
        <div className={`banner ${props.image}`}>
            { props.title }
        </div>
    );
};

export default Banner;


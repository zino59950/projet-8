// Card.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import logementsData from "../logements.json";

const Card = () => {
  return (
    <div className="Card-content">
      {logementsData.map((logement) => (
        <Link to={`/location/${logement.id}`} key={logement.id} className="Card">
          <img src={logement.cover} alt={logement.title} />
          <p>{logement.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default Card;

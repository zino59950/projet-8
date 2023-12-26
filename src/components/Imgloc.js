import React from "react";
import "./Imgloc.css";
const Imgloc = ({ cover }) => {
  return (
    <div className="imgloc" style={{ backgroundImage: `url(${cover})` }}></div>
  );
};

export default Imgloc;

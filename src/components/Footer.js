// Footer.js
import React from "react";
import "./Footer.css";
import Logo from "./logo-footer.png";
const Footer = () => {
  return (
    <div className="Footer-content">
      <img src={Logo} alt="logo kasa" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};

export default Footer;

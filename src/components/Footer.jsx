import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">


        <div className="footer-logo">
          <NavLink to="/" className="footer-logo-link">
            <img src="/Phantas-ai-logo.svg" alt="Logo Phantas AI" className="footer-logo-img" />
          </NavLink>
        </div>
   

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>Email: contacto@phantas-ai.com</p>
          <p>Tel: +57 300 000 0000</p>
          <p>Dirección: Bogotá, Colombia</p>
        </div>

      </div>


      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Phantas AI. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

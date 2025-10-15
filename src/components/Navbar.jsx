import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";


const Nav = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleRegister = () => navigate("/register");
  const handleLogin = () => navigate("/login");
  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <NavLink to="/" className="nav-logo-link">
            <img
              src="/Phantas-ai-logo.svg"
              alt="Logo"
              className="nav-logo-img"
            />
          </NavLink>
        </div>


        <div className="nav-menu">
          <ul className="nav-list">
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre la plataforma</a></li>
            <li><a href="#por-que" onClick={() => setMenuOpen(false)}>Beneficios</a></li>
            <li><a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a></li>
          </ul>
        </div>

        <div className="nav-actions">
          <Button
            text="Registrarse"
            onClick={handleRegister}
            className="nav-btn nav-btn-register"
          />
          <Button
            text="Iniciar sesión"
            onClick={handleLogin}
            className="nav-btn nav-btn-login"
          />
        </div>

        {/* HAMBURGUESA */}
        <div
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <div className="bar bar1"></div>
          <div className="bar bar2"></div>
          <div className="bar bar3"></div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <ul className="mobile-list">
          <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#por-que" onClick={() => setMenuOpen(false)}>Por qué Phantas</a></li>
          <li><a href="#planes" onClick={() => setMenuOpen(false)}>Planes</a></li>
        </ul>
        <div className="mobile-actions">
          <Button text="Registrarse" className="nav-btn nav-btn-register" />
          <Button text="Iniciar sesión" className="nav-btn nav-btn-login" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;

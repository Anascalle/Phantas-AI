import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();
    const handleRegister= () => navigate("/register");
 

  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title">
          Descubre tu voz literaria con mentores inmortales.
          </h1>
          <p className="hero-description">
          Una experiencia donde la inteligencia artificial revive a autores clásicos para guiarte en tu proceso creativo.
          </p>
          <div className="hero-buttons">
            <Button
              text="Explora tu primera mentoría gratuita"
              onClick={handleRegister}
              className="hero-btn hero-btn-primary"
            />
          </div>
        </div>


        <div className="hero-image">
          <img
            src="/hero-illustration.svg"
            alt="Ilustración creativa con IA"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

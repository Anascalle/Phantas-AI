import React from "react";
import Collage from "./Collage";

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Un espacio donde la tradición literaria se encuentra con la inteligencia artificial.</h2>
        <p>
        PHANTAS AI es una plataforma interactiva que ofrece mentorías virtuales inspiradas en autores literarios clásicos. A través de la inteligencia artificial, brinda acompañamiento personalizado para resolver dudas sobre estilo, estructura o narración, ayudando a escritores amateurs a fortalecer su talento y confianza creativa.
        </p>
      </div>
      <Collage />
    </section>
  );
};

export default AboutSection;

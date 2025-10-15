import React from "react";
import Card from "./Cards";


const WhyPhantas = () => {
  const reasons = [
    { icon: "/icons/creatividad.svg", title: "Mentores clásicos, respuestas modernas", text: "Aprende de Shakespeare, Cervantes y otros maestros con consejos adaptados a tu época." },
    { icon: "/icons/creatividad.svg", title: "Aprendizaje constante", text: "La IA evoluciona contigo, mejorando sus respuestas basándose en tu progreso." },
    { icon: "/icons/creatividad.svg",title: "Orientación personalizada", text: "Cada sesión se adapta a tu estilo, nivel y objetivos específicos de escritura." },
    { icon: "/icons/creatividad.svg",title: "Accesible y disponible 24/7", text:"Escribe cuando la inspiración llegue, sin horarios ni limitaciones."}
  ];

  return (
    <section className="why">
      <h2>¿Por qué escribir con Phantas AI?</h2>

      <div className="why-grid">
        {reasons.map((r, i) => (
          <Card
            key={i}
            icon={r.icon}
            title={r.title}
            text={r.text}
            className="reason-card"
          />
        ))}
      </div>
    </section>
  );
};

export default WhyPhantas;

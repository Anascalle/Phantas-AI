import React from "react";
import PlanCard from "./PlanCard";

const PlansSection = () => {
  const handleFreeClick = () => {
    console.log("Redirigir a registro gratuito");
  };

  const handlePremiumClick = () => {
    console.log("Redirigir a suscripción premium");
  };

  const plans = [
    {
      title: "Plan Gratis",
      subtitle: "Perfecto para comenzar",
      features: [
        "Acceso limitado a un número reducido de interacciones mensuales con los mentores virtuales.",
        "Orientación básica en temas generales de escritura (estructura, estilo, diálogos).",
        "Acceso a recursos introductorios (mini guías, tips literarios, ejemplos).",
      ],
      buttonText: "Comenzar gratis",
      onButtonClick: handleFreeClick,
    },
    {
      title: "Plan Premium",
      subtitle: "Para escritores serios",
      features: [
        "Interacciones ilimitadas con los mentores literarios virtuales.",
        "Respuestas más profundas y adaptadas al estilo personal del escritor.",
        "Análisis de textos con sugerencias personalizadas.",
        "Acceso a mentorías temáticas especiales (ej. creación de personajes, construcción de mundos, atmósferas narrativas).",
      ],
      price: "USD $5/mes",
      buttonText: "Hazte Premium",
      onButtonClick: handlePremiumClick,
    },
  ];

  return (
    <section className="plans">
      <h2 className="plans-title">Elige tu forma de aprender</h2>

      <div className="plans-grid">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            title={plan.title}
            subtitle={plan.subtitle}
            features={plan.features}
            price={plan.price}
            buttonText={plan.buttonText}
            onButtonClick={plan.onButtonClick}
          />
        ))}
      </div>
    </section>
  );
};

export default PlansSection;


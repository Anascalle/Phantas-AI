import React from "react";

const PlanCard = ({ title, subtitle, features, price, buttonText, onButtonClick }) => {
  return (
    <article className="plan-card">
      <h3 className="plan-title">{title}</h3>
      {subtitle && <p className="plan-subtitle">{subtitle}</p>}

      <ul className="plan-features">
        {features.map((item, index) => (
          <li key={index} className="plan-feature">
            {item}
          </li>
        ))}
      </ul>

      {price && <p className="plan-price">{price}</p>}

      <button
        className="plan-btn"
        type="button"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </article>
  );
};

export default PlanCard;

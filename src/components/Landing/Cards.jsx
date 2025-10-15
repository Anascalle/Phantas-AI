import React from "react";

const Card = ({ icon, title, text, className = "", onClick }) => {
  return (
    <article
      className={`card ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) onClick();
      }}
    >

      {icon && (
        <div className="card-icon">
          <img src={icon} alt={`${title} icon`} className="icon-img" />
        </div>
      )}


      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {text && <p className="card-text">{text}</p>}
      </div>


    </article>
  );
};

export default Card;


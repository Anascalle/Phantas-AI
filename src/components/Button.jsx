import React from "react";
const Button = ({ text, onClick, icon, type = "button", className = "" }) => {
  return (
    <button type={type} className={`btn ${className}`} onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>}
      <span className="btn-text">{text}</span>
    </button>
  );
};

export default Button;

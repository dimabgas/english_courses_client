import React from "react";
import "./style.css";

const InfoBlock = ({ title, subtitle }) => {
  return (
    <div className="info-block">
      <span className="info-block-subtitle">{subtitle}</span>
      <span className="info-block-title">{title}</span>
    </div>
  );
};

export default InfoBlock;

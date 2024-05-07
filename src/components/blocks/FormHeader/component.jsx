import React from "react";

import "./style.css";

const FormHeader = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="from-title">{title}</h2>
      <p className="from-subtitle">{subtitle}</p>
    </>
  );
};

export default FormHeader;

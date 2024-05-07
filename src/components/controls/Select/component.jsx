import React from "react";

import "./style.css";

const Select = ({ name, textLabel, values, onChange }) => {
  const renderItems = values.map((value) => (
    <option key={value} value={value}>
      {value}
    </option>
  ));

  return (
    <>
      <span className="select-textLabel">{textLabel}</span>
      <select name={name} className="select" onChange={onChange}>
        {renderItems}
      </select>
    </>
  );
};

export default Select;

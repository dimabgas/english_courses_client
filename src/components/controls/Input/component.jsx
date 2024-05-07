import React from "react";
import classnames from "classnames";

import "./style.css";

const Input = ({
  name,
  myRef,
  validationErrors,
  value,
  type,
  placeholder,
  onInputChange,
  ...props
}) => {
  const inputClassName = classnames("input", {
    "input-error": validationErrors,
  });
  const errorMessageClassName = classnames({
    "error-message": validationErrors,
  });

  const errorMessage = validationErrors ? (
    <>
      <span className="error-indicator"></span>
      <span className={errorMessageClassName}>{validationErrors}</span>
    </>
  ) : null;

  return (
    <div className="input-wrap">
      <input
        {...props}
        name={name}
        ref={myRef}
        className={inputClassName}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onInputChange}
      />
      {errorMessage}
    </div>
  );
};

export default Input;

Input.defaultProps = {
  type: "text",
};

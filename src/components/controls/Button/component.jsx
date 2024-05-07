import React from "react";
import classnames from "classnames";

import "./style.css";

const Button = ({ size, text, className, onClick, icon, styleType }) => {
  const cls = classnames(
    "btn",
    className,
    { [`btn-${styleType}`]: styleType },
    { [`btn-${size}`]: size }
  );

  return (
    <button onClick={onClick} className={cls}>
      {text} {icon}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  type: "submit",
  styleType: "primary",
};
